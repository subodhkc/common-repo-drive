#!/usr/bin/env python3
"""Offline deterministic consistency checks for the product capability handoff.

This validates handoff structure and source anchors. It does NOT inspect
GitHub live code or qualify runtime implementation/customer assurance.
"""
from __future__ import annotations
import csv
import hashlib
import json
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
REPOS = {
    "HAIEC": "haiec-website",
    "LogSense": "Enterprise-AI-Forensic-Log-Analyzer-",
    "Manufacturing": "manufacturing-ai-assurance-haiec",
}
STATUSES = {
    "IMPLEMENTED", "PREVIEW", "PARTIAL", "SPECIALIZED",
    "HELD", "INTEGRATION_REQUIRED", "DEMO_FIXTURE",
    "PROPOSED", "NOT_IMPLEMENTED",
}
def fail(message: str) -> None:
    raise SystemExit(f"FAIL: {message}")
def main() -> None:
    with (BASE / "CAPABILITY-MATRIX.csv").open(newline="", encoding="utf-8") as f:
        csv_rows = list(csv.DictReader(f))
    data = json.loads((BASE / "CAPABILITY-MATRIX.json").read_text(encoding="utf-8"))
    docs = (BASE / "HAIEC-PRODUCT-CAPABILITY-WORKFLOW-MATRIX.md").read_text(encoding="utf-8")
    if len(csv_rows) != data["rowCount"] or len(csv_rows) != len(data["entries"]):
        fail("matrix rowCount disagreement")
    keys = [row["id"] for row in csv_rows]
    if len(keys) != len(set(keys)):
        fail("duplicate capability IDs")
    for csv_row, json_row in zip(csv_rows, data["entries"]):
        cid = csv_row["id"]
        for key,value in csv_row.items():
            if json_row.get(key) != value:
                fail(f"CSV/JSON disagreement: {cid}.{key}")
        if csv_row["repository"] not in REPOS:
            fail(f"unknown repo: {cid}")
        if csv_row["source_status"] not in STATUSES:
            fail(f"unknown status: {cid}")
        anchor = csv_row["source_anchor"]
        if anchor.startswith("/") or ".." in Path(anchor).parts or not anchor:
            fail(f"invalid source anchor: {cid}")
        commit = data["sourceRevisions"].get(csv_row["repository"])
        if not commit or len(commit) != 40:
            fail(f"missing commit source revision: {cid}")
        expected_url = (
            "https://github.com/subodhkc/"
            + REPOS[csv_row["repository"]]
            + ("/tree/" if anchor.endswith("/") else "/blob/")
            + commit + "/" + anchor
        )
        if json_row["source_url"] != expected_url:
            fail(f"source URL mismatch: {cid}")
        if f"| {cid} |" not in docs:
            fail(f"missing documentation row: {cid}")
        if not csv_row["truth_boundary"]:
            fail(f"missing limitation: {cid}")
    original_manifest = json.loads((BASE / "source-images/MANIFEST.json").read_text(encoding="utf-8"))
    files = original_manifest["files"]
    if len(files) != 6:
        fail("original image file count must equal six")
    unique = {f["sha256"] for f in files}
    if len(unique) != 5:
        fail("expected five unique image hashes")
    absent = []
    for file in files:
        target = BASE / "source-images" / file["name"]
        if not target.exists():
            absent.append(file["name"])
            continue
        raw = target.read_bytes()
        if len(raw) != file["bytes"] or hashlib.sha256(raw).hexdigest() != file["sha256"]:
            fail(f"image altered: {target}")
    print(f"PASS: {len(csv_rows)} source-anchored capability rows, JSON and Markdown consistent")
    print("IMAGE_STATUS: " + (
        f"PENDING_BINARY_UPLOAD ({len(absent)}/6 not yet committed)"
        if absent else "ALL_SIX_ORIGINALS_VERIFIED_LOCALLY"
    ))
if __name__ == "__main__":
    main()
