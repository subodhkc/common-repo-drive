#!/usr/bin/env python3
"""Stage exact seven HAIEC reference PNGs from the conversation ZIP into Common Repo.

No URL-based substitutes, conversion, resizing or cross-file overwrite are allowed.
"""
from __future__ import annotations
import argparse
import hashlib
from pathlib import Path
from zipfile import ZipFile

EXPECTED = {
    "01-product-architecture-capability-engine.png": (2512232, "c7ee0402b9864dba5e7802884a0b56b9064356c36d6b7f7f9d6da3c7f4e61a1f"),
    "02-deterministic-capability-workflow-matrix.png": (2678192, "5ba2e51c08f3a4353b13db005bec4eedaafa4f1c8607c849b11b8ecfea6afd2a"),
    "03-unified-product-architecture-capability-map.png": (2724173, "8741976d24214b85d246d0143b8fd7bf786d8f64881ed522b0423f84c93a21ec"),
    "04-evidence-authority-outcome-flow.png": (2863380, "cd04c14ac6d2a5c2a1240d911001d3a29bc8207f0eb5411df84e35c7729f1021"),
    "05-delegated-action-integrity-evidence-pipeline.png": (267496, "e331117dac3f940131585ca0bf68304a5a518a5218a1d1f89dd30c58f905428f"),
    "06-architecture-infographic-v2.png": (442356, "de68bf84508fa346c9f97bebf742be7a007f47bbe3de80ca529ce8076296aef9"),
    "07-architecture-infographic-v3.png": (497046, "d5ce9b57698dd64ba98b795162f18fe0122fb62e5737bfb11f743da2a35f64a6"),
}

def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--archive", required=True, type=Path, help="Original conversation archive .zip")
    p.add_argument("--repo", required=True, type=Path, help="Local common-repo-drive clone")
    a = p.parse_args()
    dest = a.repo / "haiec-product-capability-architecture/design-references/hero-architecture-2026-10-19/originals"
    if not (a.repo / "haiec-product-capability-architecture" / "README.md").is_file():
        p.error("--repo must point at cloned common-repo-drive root")
    with ZipFile(a.archive) as z:
        checked = []
        for name, (length, sha) in EXPECTED.items():
            path = f"originals/{name}"
            if path not in z.namelist():
                p.error(f"Missing source: {path}")
            data = z.read(path)
            if len(data) != length or hashlib.sha256(data).hexdigest() != sha:
                p.error(f"Original bytes do not match manifest: {path}")
            target = dest / name
            if target.exists() and target.read_bytes() != data:
                p.error(f"Refusing overwrite of modified file: {target}")
            checked.append((target, data))
    dest.mkdir(parents=True, exist_ok=True)
    for path, data in checked:
        path.write_bytes(data)
        print(f"STAGED / SHA256 VERIFIED: {path.relative_to(a.repo)}")
    print("\\nNext: git add the originals directory; commit and push with your authorized Git identity. Then change the manifest status only after GitHub fetch of all seven exact PNGs is verified.")

if __name__ == "__main__":
    main()
