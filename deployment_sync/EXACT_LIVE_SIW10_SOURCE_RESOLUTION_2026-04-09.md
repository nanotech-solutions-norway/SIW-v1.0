# Exact live `/siw_10/` source resolution — 2026-04-09

## Resolved source
The exact editable source for the live `/siw_10/` path is in:

- Repository: `nanotech-solutions-norway/SolarEX-2.0`
- Active production branch context: `main`
- Static subdirectory path: `siw_10/`

## Concrete files backing `/siw_10/`
- `siw_10/index.html`
- `siw_10/styles.css`
- `siw_10/app.js`

## What current `main` contains
`main` currently serves **SIW v2.0**, not v2.1.

Evidence:
- `siw_10/index.html` on `main` contains the title `SIW v2.0 — Surface Intelligence Workspace`
- the page includes the `workspace-app`, `globalSearchInput`, and `evidenceDrawer` identifiers previously observed in the published source
- historical PRs in `SolarEX-2.0` show that SIW v2.0 was intentionally promoted into `main`

## Historical routing ambiguity resolved
There were older indications that live may have been associated with `develop`. However, the exact live-editable source is now resolved at the file level inside `SolarEX-2.0/siw_10/`, and `main` already contains the v2.0 implementation.

## Cross-repo implication
`SIW-v1.0` does not currently contain the live `siw_10` runtime files. It only contains deployment-sync notes around versioning. Therefore the remaining work is not source discovery anymore.

## Remaining deployment gap
The remaining task is a **cross-repo port**:
1. identify the actual v2.1 code artifact to be deployed,
2. port it into `SolarEX-2.0/siw_10/`,
3. validate live publish result after merge/deploy.

## Operational conclusion
The blocker is no longer "where is the live source?".
The blocker is now "where is the actual v2.1 code to port into the resolved live source path?".
