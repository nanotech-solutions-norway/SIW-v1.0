# SIW v2.1 deployment rollout checklist — 2026-04-09

## Objective
Promote the published SIW page from the verified live/publication-source state `SIW v2.0` to the governed artifact state `SIW v2.1`, then continue with production hardening.

## Gate 1 — Identify actual publication source
- [ ] Confirm where the published `/siw_10/` page source is hosted
- [ ] Confirm whether the source is GitHub-served, custom-hosted, or injected from another platform
- [ ] Confirm whether the actual source is under version control

## Gate 2 — Version synchronization
- [ ] Update the actual published source from `SIW v2.0` to `SIW v2.1`
- [ ] Preserve the same page path `/siw_10/`
- [ ] Keep the MIW-derived shell structure intact

## Gate 3 — Build/source verification
- [ ] Verify the live page title reflects `SIW v2.1`
- [ ] Verify the live meta description reflects `SIW v2.1`
- [ ] Verify the visible brand label reflects `SIW v2.1`
- [ ] Verify the hero kicker reflects `SIW v2.1`

## Gate 4 — Traceability controls
- [ ] Add a visible build stamp or environment marker
- [ ] Record publication source → branch/source mapping
- [ ] Reconcile the final live source back into GitHub governance

## Gate 5 — Phase 1 production hardening
- [ ] Evidence drawer accessibility/dialog behavior
- [ ] Search combobox/listbox accessibility
- [ ] Keyboard and focus management
- [ ] State persistence and restore behavior
- [ ] Boundary conditions and proof traceability
- [ ] Instrumentation aligned to Orient → Explain → Fit → Prove → Act

## Exit criterion
The live page is visibly on `SIW v2.1`, mapped to a known controlled source, and ready for continued Phase 1 MIW-aligned hardening.
