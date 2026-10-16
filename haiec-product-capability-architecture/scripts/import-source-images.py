#!/usr/bin/env python3
"""Verify exact owner-supplied PNG files before a binary handoff to GitHub."""
from __future__ import annotations
import argparse
import hashlib
import shutil
from pathlib import Path

FILES = {
  "haiec-architecture-infographic-v2.png": {
    "bytes": 449235,
    "sha256": "6bbd817c1405e94cb949daf4132a3c8214c12e27795c8b18a348ee61b2b2ba7b"
  },
  "haiec-simplified-architecture-infographic.png": {
    "bytes": 96014,
    "sha256": "1eb5dab2eddf023c2a98d51340efd60ce831a0910cda12cdc872f06be12f42f6"
  },
  "haiec-combined-capability-architecture.png": {
    "bytes": 213277,
    "sha256": "aa307bc3217e2ec0ff1f58908c045e96b1b38c2005202aed874273db9ccae12b"
  },
  "haiec-architecture-diagram.png": {
    "bytes": 269091,
    "sha256": "92826db03b89d09af6b4534c72108a2aa8c9edf6f999324d01b28eab745b65e9"
  },
  "HAIEC_Architecture_and_Capability_Engine.png": {
    "bytes": 4063188,
    "sha256": "71818293b7dd358806e6b893452f3540257dff4066a80af53e70e29945e197f0"
  },
  "haiec-architecture-infographic-v2(1).png": {
    "bytes": 449235,
    "sha256": "6bbd817c1405e94cb949daf4132a3c8214c12e27795c8b18a348ee61b2b2ba7b"
  }
}

def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, required=True, help="Directory with six original PNG files")
    parser.add_argument("--repo", type=Path, required=True, help="Local clone root of common-repo-drive")
    args = parser.parse_args()
    target = args.repo / "haiec-product-capability-architecture/source-images"
    if not (args.repo / "haiec-product-capability-architecture/README.md").is_file():
        raise SystemExit("Wrong repository root: handoff README not present")
    verified = []
    for name, expected in FILES.items():
        file = args.source / name
        if not file.is_file():
            raise SystemExit(f"Missing original: {file}")
        payload = file.read_bytes()
        actual = hashlib.sha256(payload).hexdigest()
        if len(payload) != expected["bytes"] or actual != expected["sha256"]:
            raise SystemExit(f"Integrity mismatch for {name}")
        verified.append((name,payload))
    target.mkdir(parents=True,exist_ok=True)
    for name,payload in verified:
        dst = target / name
        if dst.exists() and dst.read_bytes() != payload:
            raise SystemExit(f"Refusing to overwrite modified asset: {dst}")
        dst.write_bytes(payload)
        print(f"Verified and staged: {dst}")
    print("All six exact binary files staged; commit and push, then update status manifest.")
if __name__ == "__main__":
    main()
