// Run: tsc --target ES2022 --module commonjs --strict --skipLibCheck --outDir dist action-mediation.ts && node action-mediation.test.cjs
// All cases are synthetic. No HAIEC production API, customer decision or target is called.
const assert = require('node:assert/strict');
const {mediateAction} = require('./dist/action-mediation.js');
const input = Object.freeze({organizationId:'org-test',aiSystemId:'system-A',attemptId:'attempt-1',actorPrincipalId:'actor-A',operation:'create_mock_order',targetId:'mock-db-A',actionDigest:'sha256:actionA',policyDigest:'sha256:approvedPolicy',requestedAt:'2026-10-18T00:00:00Z'});
const expiresAt = '2026-11-01T00:00:00Z';
const allowed = {kind:'ALLOW',decisionId:'decision-A',binding:{organizationId:input.organizationId,aiSystemId:input.aiSystemId,attemptId:input.attemptId,operation:input.operation,targetId:input.targetId,actionDigest:input.actionDigest,policyDigest:input.policyDigest},expiresAt};
function make(decision = allowed) {
  const state={executed:0, claimed:0, authorizations:0, fail: false};
  const ports={authorization:{decide:async()=>{state.authorizations++;return decision}},dispatchClaim:{claim:async()=>{state.claimed++;return true}},execution:{dispatch:async()=>{state.executed++;if(state.fail)throw Error('unknown target');return{outcomeRef:'fixture:event-1'}}},now:()=>new Date('2026-10-18T12:00:00Z')};
  return {state,ports};
}
(async()=>{
  let tests=0; const test=async(name,fn)=>{await fn();console.log('PASS '+name);tests++};
  await test('bound allowed call reaches adapter once but never claims verified target effect',async()=>{let x=make();let r=await mediateAction(input,x.ports);assert.equal(r.state,'DISPATCH_ATTEMPTED');assert.equal(r.targetEffect,'NOT_VERIFIED');assert.equal(x.state.executed,1)});
  await test('DENY never executes or claims',async()=>{let x=make({kind:'DENY',reason:'POLICY_DENIED'});let r=await mediateAction(input,x.ports);assert.equal(r.state,'DENIED');assert.equal(x.state.executed,0);assert.equal(x.state.claimed,0)});
  await test('HOLD never executes or claims',async()=>{let x=make({kind:'REQUIRES_HUMAN',requestKey:'approval-1',requestDigest:'sha256:request'});let r=await mediateAction(input,x.ports);assert.equal(r.state,'HELD_NOT_EXECUTED');assert.equal(x.state.executed,0);assert.equal(x.state.claimed,0)});
  await test('INDETERMINATE fail-closed',async()=>{let x=make({kind:'INDETERMINATE',reason:'MISSING_AUTHORITY'});let r=await mediateAction(input,x.ports);assert.equal(r.state,'NOT_AUTHORIZED');assert.equal(x.state.executed,0)});
  await test('mismatched system rejected',async()=>{let x=make({...allowed,binding:{...allowed.binding,aiSystemId:'system-B'}});assert.equal((await mediateAction(input,x.ports)).state,'NOT_AUTHORIZED');assert.equal(x.state.executed,0)});
  await test('changed action fingerprint rejected',async()=>{let x=make({...allowed,binding:{...allowed.binding,actionDigest:'sha256:other'}});assert.equal((await mediateAction(input,x.ports)).state,'NOT_AUTHORIZED');assert.equal(x.state.executed,0)});
  await test('expired permit rejected',async()=>{let x=make({...allowed,expiresAt:'2026-10-17T00:00:00Z'});assert.equal((await mediateAction(input,x.ports)).state,'NOT_AUTHORIZED');assert.equal(x.state.executed,0)});
  await test('atomic claim refusal prevents duplicate target call',async()=>{let x=make();x.ports.dispatchClaim.claim=async()=>false;assert.equal((await mediateAction(input,x.ports)).state,'NOT_DISPATCHED');assert.equal(x.state.executed,0)});
  await test('missing atomic claim store denies execution',async()=>{let x=make();x.ports.dispatchClaim.claim=async()=>{throw Error('store offline')};assert.equal((await mediateAction(input,x.ports)).state,'NOT_DISPATCHED');assert.equal(x.state.executed,0)});
  await test('throwing target remains unknown and must not be blindly replayed',async()=>{let x=make();x.state.fail=true;assert.equal((await mediateAction(input,x.ports)).state,'DISPATCH_UNKNOWN');assert.equal(x.state.executed,1)});
  await test('invalid attempt fails before authorization and dispatch',async()=>{let x=make();assert.equal((await mediateAction({...input,targetId:''},x.ports)).state,'NOT_AUTHORIZED');assert.equal(x.state.executed,0);assert.equal(x.state.authorizations,0)});
  await test('authorization unavailable fails closed',async()=>{let x=make();x.ports.authorization.decide=async()=>{throw Error('offline')};assert.equal((await mediateAction(input,x.ports)).state,'NOT_AUTHORIZED');assert.equal(x.state.executed,0)});
  console.log(String(tests)+'/'+String(tests)+' passed');
})().catch(e=>{console.error(e);process.exitCode=1});
