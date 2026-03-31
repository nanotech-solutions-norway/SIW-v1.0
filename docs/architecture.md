# SIW Architecture

## Strategic pattern

- Wix = public shell, CMS, SEO, forms, navigation
- GitHub = governed SIW codebase
- SIW frontend = embedded decision-support layer
- External backend/API = future-only when secure persistence or protected logic is required

## Recommended frontend stack

- React
- TypeScript
- Vite
- Structured JSON data contracts
- Relative build output suitable for static hosting and embed scenarios

## MVP modules

1. Persistent Workspace / Action Card
2. Outcome Selector / Orient
3. Explain layer
4. Fit engine
5. Evidence Drawer / Prove
6. Precision CTA routing / Act

## State model

Shared state should preserve:
- industry
- asset
- mechanism
- substrate
- environment
- constraints
- candidate products
- proof selections
- CTA intent

## Build principle

The initial repository should optimize for:
- explainable recommendation logic
- modular UI composition
- structured data binding
- easy future migration away from Wix if required
- clean embed into Wix in MVP phase
