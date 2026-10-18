/**
 * HAIEC E5.2 provider-neutral pre-dispatch mediation reference.
 * REFERENCE / NON-PRODUCTION: no HTTP route, network interceptor, policy engine,
 * durable queue, target adapter, signed permit, deployment or real approval.
 *
 * Only a trusted, server-owned policy/governance port can authorize this path.
 * A caller/LLM-provided decision is never a trusted authorization source.
 * The host application MUST supply an unbypassable real execution point and
 * a shared durable atomic claim implementation before enabling customer effects.
 */

export interface ActionAttempt {
  organizationId: string;
  aiSystemId: string;
  attemptId: string;
  actorPrincipalId: string;
  operation: string;
  targetId: string;
  actionDigest: string;     // Canonical hash of the ENTIRE decision-relevant action.
  policyDigest: string;     // Frozen active approved policy identity.
  requestedAt: string;
}

export interface DecisionBinding {
  organizationId: string;
  aiSystemId: string;
  attemptId: string;
  operation: string;
  targetId: string;
  actionDigest: string;
  policyDigest: string;
}

export type TrustedDecision =
  | { kind: 'ALLOW'; binding: DecisionBinding; decisionId: string; expiresAt: string }
  | { kind: 'DENY'; reason: string }
  | { kind: 'REQUIRES_HUMAN'; requestKey: string; requestDigest: string }
  | { kind: 'INDETERMINATE'; reason: string };

export interface AuthorizedExecutionPort {
  /** Trusted adapter or already-authorized application code, not arbitrary LLM tool. */
  dispatch(attempt: ActionAttempt, decision: Extract<TrustedDecision, { kind: 'ALLOW' }>): Promise<{ outcomeRef: string | null }>;
}

export interface AtomicDispatchClaimPort {
  /** Must be durable + atomic ACROSS workers in a real integration. No best-effort substitute. */
  claim(organizationId: string, aiSystemId: string, attemptId: string, actionDigest: string): Promise<boolean>;
}

export interface TrustedAuthorizationPort {
  /** Consult existing HAIEC operating-envelope/human-decision owners and current effective authorization. */
  decide(attempt: ActionAttempt): Promise<TrustedDecision>;
}

export type MediationOutcome =
  | { state: 'DISPATCH_ATTEMPTED'; attemptId: string; outcomeRef: string | null; targetEffect: 'NOT_VERIFIED' }
  | { state: 'DENIED'; reason: string }
  | { state: 'HELD_NOT_EXECUTED'; requestKey: string; requestDigest: string }
  | { state: 'NOT_AUTHORIZED'; reason: string }
  | { state: 'NOT_DISPATCHED'; reason: string }
  | { state: 'DISPATCH_UNKNOWN'; reason: 'TARGET_ERROR_AFTER_CLAIM' };

const required = (s: string): boolean => typeof s === 'string' && s.trim().length > 0;
const validAttempt = (a: ActionAttempt): boolean =>
  required(a.organizationId) && required(a.aiSystemId) && required(a.attemptId) &&
  required(a.actorPrincipalId) && required(a.operation) && required(a.targetId) &&
  required(a.actionDigest) && required(a.policyDigest) &&
  Number.isFinite(Date.parse(a.requestedAt));

const exactMatch = (a: ActionAttempt, b: DecisionBinding): boolean =>
  a.organizationId === b.organizationId && a.aiSystemId === b.aiSystemId &&
  a.attemptId === b.attemptId && a.operation === b.operation &&
  a.targetId === b.targetId && a.actionDigest === b.actionDigest &&
  a.policyDigest === b.policyDigest;

/** A skeleton guard, not a HAIEC production API or independently attested effect. */
export async function mediateAction(
  attempt: ActionAttempt,
  ports: {
    authorization: TrustedAuthorizationPort;
    dispatchClaim: AtomicDispatchClaimPort;
    execution: AuthorizedExecutionPort;
    now: () => Date;
  },
): Promise<MediationOutcome> {
  if (!validAttempt(attempt)) return { state: 'NOT_AUTHORIZED', reason: 'INVALID_ATTEMPT' };
  let decision: TrustedDecision;
  try {
    decision = await ports.authorization.decide(attempt);
  } catch {
    return { state: 'NOT_AUTHORIZED', reason: 'AUTHORIZATION_UNAVAILABLE' };
  }
  if (decision.kind === 'DENY') return { state: 'DENIED', reason: decision.reason };
  if (decision.kind === 'REQUIRES_HUMAN') {
    return { state: 'HELD_NOT_EXECUTED', requestKey: decision.requestKey, requestDigest: decision.requestDigest };
  }
  if (decision.kind === 'INDETERMINATE') return { state: 'NOT_AUTHORIZED', reason: decision.reason };

  const expires = Date.parse(decision.expiresAt);
  if (!exactMatch(attempt, decision.binding) || !required(decision.decisionId) ||
      !Number.isFinite(expires) || expires <= ports.now().getTime()) {
    return { state: 'NOT_AUTHORIZED', reason: 'DECISION_BINDING_OR_EXPIRY_MISMATCH' };
  }

  // A trusted authorization decision alone is NOT permission for a duplicate dispatch.
  let claimed = false;
  try {
    claimed = await ports.dispatchClaim.claim(
      attempt.organizationId, attempt.aiSystemId, attempt.attemptId, attempt.actionDigest,
    );
  } catch {
    return { state: 'NOT_DISPATCHED', reason: 'DURABLE_DISPATCH_CLAIM_UNAVAILABLE' };
  }
  if (!claimed) return { state: 'NOT_DISPATCHED', reason: 'DUPLICATE_OR_UNCLAIMABLE_ATTEMPT' };

  try {
    const result = await ports.execution.dispatch(attempt, decision);
    // OutcomeRef is only an adapter assertion. Not trusted target effect evidence.
    return { state: 'DISPATCH_ATTEMPTED', attemptId: attempt.attemptId,
      outcomeRef: result.outcomeRef, targetEffect: 'NOT_VERIFIED' };
  } catch {
    // Do not retry or release the claim blindly: a side effect may have happened.
    return { state: 'DISPATCH_UNKNOWN', reason: 'TARGET_ERROR_AFTER_CLAIM' };
  }
}
