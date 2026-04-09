# SIW v2.1 deployment synchronization manifest — 2026-04-09 13:10 CEST

## Purpose
This branch is a governed synchronization branch created to move the provided SIW v2.1 source artifact and deployment-control notes into GitHub review.

## Included artifacts
- `deployment_sync/SIW_v2_1_source_code.html` — source artifact snapshot updated from SIW v2.0 to SIW v2.1
- `deployment_sync/SIW_v2_1_version_note.txt` — version-adjustment note
- `deployment_sync/DEPLOYMENT_SYNC_MANIFEST.md` — this control file

## Verified
- The source artifact reflects the MIW-derived SIW workspace shell pattern.
- The provided artifact version label has been uplifted to SIW v2.1.

## Not yet verified
- That `/siw_10/` is currently serving this exact artifact
- The actual live deployment source and publication mapping
- Whether a different hidden build path or host is active

## Required next checks
1. Confirm the actual publication source for `https://www.solarex.no/siw_10/`
2. Add a visible build stamp / environment marker to the live UI
3. Reconcile live render, branch source, and deployed artifact
4. Complete accessibility and state-persistence hardening before advancing to later MIW phases

## Control note
This branch improves traceability and reviewability. It does not itself prove live synchronization.
