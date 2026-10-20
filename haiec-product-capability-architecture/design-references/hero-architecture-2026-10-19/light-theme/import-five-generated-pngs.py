#!/usr/bin/env python3
"""Stage five exact generated light-theme PNG references into a Common Repo clone.

This script MUST preserve original bytes. Hash checks are independent of the
editable SVG derivatives. It refuses to overwrite modified reference assets.
"""
from __future__ import annotations
import argparse, hashlib, json
from pathlib import Path
from zipfile import ZipFile

EXPECTED = {
  "01-homepage-unified-architecture-light.png": {
    "bytes": 1819684,
    "sha256": "12fda2506731e1ff993e97c12c35dddb4048ba2f3078765a9a83a32d1d4232bb"
  },
  "02-homepage-dai-evidence-relationships-light.png": {
    "bytes": 1740010,
    "sha256": "ab0486a592ffd8263aff66324be6c6e661a1fb3ff365360cbe3390d654d9981a"
  },
  "03-enterprise-evidence-outcome-flow-light.png": {
    "bytes": 1693800,
    "sha256": "5aaf2520f532f45484d1de2274225a1dfb86b001b664c85fbff13002f1ca3b7b"
  },
  "04-platform-workflow-matrix-light.png": {
    "bytes": 1998931,
    "sha256": "4527883b34cb9f89fd281b7a4fe69bdf3fa57ed73a985d2400927e7ae8a9fe9d"
  },
  "05-methodology-capability-engine-light.png": {
    "bytes": 1905922,
    "sha256": "f6e41b92a47f24b32da438c4d3a3e8ffec9c3d7209f90d008607afc6701f0295"
  }
}

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive",type=Path,required=True,
                        help="Downloaded HAIEC_Light_Theme_Architecture_Five_Images_2026-10-20.zip")
    parser.add_argument("--repo",type=Path,required=True,help="Local common-repo-drive root")
    args=parser.parse_args()
    base=args.repo / "haiec-product-capability-architecture/design-references/hero-architecture-2026-10-19/light-theme/generated-originals"
    if not (args.repo/"haiec-product-capability-architecture/README.md").exists():
        parser.error("--repo is not the common-repo-drive root")
    verified=[]
    with ZipFile(args.archive,"r") as archive:
        for name,v in EXPECTED.items():
            if name not in archive.namelist():
                parser.error(f"Missing required PNG: {name}")
            data=archive.read(name)
            if len(data)!=v["bytes"] or hashlib.sha256(data).hexdigest()!=v["sha256"]:
                parser.error(f"Byte count or SHA-256 mismatch: {name}")
            file=base/name
            if file.exists() and file.read_bytes()!=data:
                parser.error(f"Refusing overwrite of modified file: {file}")
            verified.append((file,data))
    base.mkdir(parents=True,exist_ok=True)
    for file,data in verified:
        file.write_bytes(data)
        print("VERIFIED & STAGED",file.relative_to(args.repo))
    print("All five original PNGs staged. Commit and push through your authorized Git workflow, then verify each remote hash before changing manifest status.")

if __name__=="__main__":
    main()
