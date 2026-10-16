#!/usr/bin/env python3
"""Build a deterministic source census; does not claim semantic product completeness."""
from __future__ import annotations
import argparse
import csv
import json
import subprocess
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
def git_sha(path: Path) -> str:
    p = subprocess.run(["git", "-C", str(path), "rev-parse", "HEAD"],
                       capture_output=True, text=True, check=False)
    return p.stdout.strip() if p.returncode == 0 else "UNVERIFIED_LOCAL_SNAPSHOT"

def list_files(repo: Path) -> list[str]:
    # Only versioned files: avoid untracked secrets, cache, build outputs.
    p = subprocess.run(["git", "-C", str(repo), "ls-files", "-z"],
                       capture_output=True, check=True)
    return sorted(f.decode("utf-8") for f in p.stdout.split(b"\0") if f)

def sources(files: list[str], repo_name: str) -> dict:
    dirs = {
        "HAIEC": {
            "apiRoutes": lambda s: s.startswith("app/api/") and s.split("/")[-1] in ("route.ts", "route.tsx", "route.js"),
            "uiPages": lambda s: s.startswith("app/") and s.split("/")[-1] in ("page.tsx", "page.ts", "page.jsx"),
            "coreServices": lambda s: s.startswith("lib/") and s.endswith((".ts", ".tsx")),
            "mcpRegistry": lambda s: s == "lib/mcp/tool-registry.ts",
            "capabilityGuide": lambda s: s == "lib/mcp/capability-guide.ts",
            "evidenceProducerRegistry": lambda s: s == "lib/engine-registry/producer-registry.ts",
            "developerReadiness": lambda s: s == "lib/developer-integration-source-status.ts",
            "controlTests": lambda s: s.startswith("lib/control-test/"),
        },
        "LogSense": {
            "services": lambda s: s.startswith("src/logsense/") and s.endswith(".py"),
            "mcp": lambda s: s == "src/logsense/integrations/mcp.py",
            "canonicalFacade": lambda s: s == "src/logsense/integrations/service.py",
        },
        "Manufacturing": {
            "dashboard": lambda s: s.startswith("dashboard/"),
            "adapter": lambda s: s.startswith("packages/haiec-adapter/"),
            "sourceRecords": lambda s: s.startswith("data/source-native/"),
            "contracts": lambda s: s.startswith("contracts/"),
        }
    }[repo_name]
    return {name: [f for f in files if pred(f)] for name,pred in dirs.items()}

def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--haiec", type=Path, required=True)
    parser.add_argument("--logsense", type=Path, required=True)
    parser.add_argument("--manufacturing", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    repos = {"HAIEC": args.haiec, "LogSense": args.logsense, "Manufacturing": args.manufacturing}
    with (BASE / "CAPABILITY-MATRIX.csv").open(newline="", encoding="utf-8") as f:
        matrix = list(csv.DictReader(f))
    report = {
        "schemaVersion": "haiec-source-census/1.0",
        "basis": "Tracked files and source existence only. Neither route reachability nor product readiness.",
        "matrixRows": len(matrix),
        "repositories": {},
        "matrixAnchorVerification": []
    }
    for name, root in repos.items():
        if not root.is_dir():
            raise SystemExit(f"Repository path missing: {root}")
        tracked = list_files(root)
        groups = sources(tracked, name)
        report["repositories"][name] = {
            "revision": git_sha(root), "trackedFileCount": len(tracked),
            "candidateGroups": {k: {"count": len(v), "paths": v} for k,v in groups.items()},
        }
        for row in matrix:
            if row["repository"] == name:
                source = row["source_anchor"].rstrip("/")
                found = source in tracked or any(f.startswith(source+"/") for f in tracked)
                report["matrixAnchorVerification"].append({"id": row["id"], "path": source, "existsAsTrackedPath": found})
    report["unresolvedAnchorIds"] = [x["id"] for x in report["matrixAnchorVerification"] if not x["existsAsTrackedPath"]]
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, sort_keys=True, indent=2)+"\n", encoding="utf-8")
    print(f"Source census written: {args.output}")
    print(f"Matrix anchors checked: {len(report['matrixAnchorVerification'])}")
    print(f"Missing anchors: {len(report['unresolvedAnchorIds'])}")
    print("CAUTION: do not mark capability matrix complete until tool, service, evidence, and UX owner review.")

if __name__ == "__main__":
    main()
