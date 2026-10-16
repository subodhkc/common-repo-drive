# Original owner-supplied architecture images

**Asset status: PENDING_BINARY_UPLOAD.** The six PNG originals were received and SHA-256 verified, but are **not yet stored as binary objects in this GitHub repository**. The GitHub connector currently supports UTF-8 writes and blob-content strings but no direct mounted-file binary transfer; therefore a manifest and verified import script are committed, without inventing image URLs.

Download the source-image handoff ZIP from this conversation; extract its `source-images/` directory. Then run:

```sh
python scripts/import-source-images.py --source /path/to/extracted/source-images --repo /path/to/cloned/common-repo-drive
cd /path/to/cloned/common-repo-drive
git add haiec-product-capability-architecture/source-images/*.png
git commit -m "Preserve original HAIEC architecture images for Devin"
git push
```

Do not alter image bytes before first upload. The script checks exact SHA256 and sizes; `haiec-architecture-infographic-v2.png` and `haiec-architecture-infographic-v2(1).png` are intentional duplicate uploads, preserved under both user-supplied filenames. Five distinct visual designs exist.

Use the corrected diagrams under `diagrams/` for future website design; these originals are **historical references, not validated claims**. See `ARCHITECTURE-DIAGRAM-REVIEW.md`.

## Images supplied

| Original filename | Bytes | SHA-256 | Status |
|---|---:|---|---|
| `haiec-architecture-infographic-v2.png` | 449235 | `6bbd817c1405e94cb949daf4132a3c8214c12e27795c8b18a348ee61b2b2ba7b` | Pending binary import |
| `haiec-simplified-architecture-infographic.png` | 96014 | `1eb5dab2eddf023c2a98d51340efd60ce831a0910cda12cdc872f06be12f42f6` | Pending binary import |
| `haiec-combined-capability-architecture.png` | 213277 | `aa307bc3217e2ec0ff1f58908c045e96b1b38c2005202aed874273db9ccae12b` | Pending binary import |
| `haiec-architecture-diagram.png` | 269091 | `92826db03b89d09af6b4534c72108a2aa8c9edf6f999324d01b28eab745b65e9` | Pending binary import |
| `HAIEC_Architecture_and_Capability_Engine.png` | 4063188 | `71818293b7dd358806e6b893452f3540257dff4066a80af53e70e29945e197f0` | Pending binary import |
| `haiec-architecture-infographic-v2(1).png` | 449235 | `6bbd817c1405e94cb949daf4132a3c8214c12e27795c8b18a348ee61b2b2ba7b` | Pending binary import |
