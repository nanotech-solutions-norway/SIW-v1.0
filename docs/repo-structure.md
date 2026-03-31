# SIW Repository Structure

## Recommended production tree

```text
src/
  components/
    WorkspaceSummary.tsx
  modules/
    orient/
      OutcomeSelector.tsx
    explain/
    fit/
    prove/
    act/
  data/
    taxonomy.ts
  state/
    siwState.ts
  types/
    siw.ts
  lib/
    embed/
  App.tsx
  main.tsx
  styles.css
docs/
  architecture.md
  wix-integration.md
  repo-structure.md
```

## Build sequence

1. Shared type contracts
2. Structured taxonomy and rule inputs
3. Workspace state derivation logic
4. Orient module
5. Persistent workspace and evidence drawer
6. Precision CTA routing and Wix prefill integration
7. Fit, prove, and comparison expansion
