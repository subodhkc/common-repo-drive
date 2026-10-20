# Exact seven original PNG handoff

The new design HTML/SVG files and editorial reconciliation are **committed**. The seven original PNG files are **preserved in a downloadable full-resolution conversation ZIP** but cannot be inserted into Common Repo via the current text-only file-transfer interface.

Run this using a local Common Repo clone and the downloaded ZIP:

```bash
python haiec-product-capability-architecture/design-references/hero-architecture-2026-10-19/import-seven-originals.py \
  --archive /path/to/HAIEC_Architecture_References_Originals_and_Gallery.zip \
  --repo /path/to/common-repo-drive
cd /path/to/common-repo-drive
git add haiec-product-capability-architecture/design-references/hero-architecture-2026-10-19/originals/*.png
git commit -m "assets(haiec): preserve seven original owner architecture references"
git push
```

Import script verifies exact bytes and SHA-256 of all seven files, refuses overwrite of mismatched existing files, stages original PNGs without conversion and leaves committing to an authorized repo actor. After a successful push, verify exact binary remote reads and update `ORIGINAL-IMAGE-MANIFEST.md` and `README.md` to show `GITHUB_VERIFIED`. Preserve the older six-image asset archive in `haiec-product-capability-architecture/source-images/` separately; do not confuse the two sets or overwrite the different historical hashes.

**Status until then:** ORIGINAL_RASTERS_IN_REPO = NOT_COMPLETE. SVG and interactive HTML design references = CREATED.
