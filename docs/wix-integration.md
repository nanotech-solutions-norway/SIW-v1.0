# Wix Integration Pattern

## Role split

### Keep native in Wix
- home page shell
- solution pages
- product pages
- SEO content
- standard forms
- CMS collections
- navigation and routing

### Embed from SIW app
- outcome selector
- persistent workspace
- fit module
- evidence drawer
- comparison tray
- guided capability map
- precision CTA logic

## Recommended embed model

### MVP
Use an embedded SIW application hosted as a static frontend. Preferred integration patterns:
1. iframe embed for fastest separation of concerns
2. custom embed block where Wix placement controls remain native

### Context passing
Pass scenario context through:
- query parameters
- postMessage between Wix shell and SIW iframe when needed
- browser storage for session continuity

## Forms and CTA routing

Recommended pattern:
- SIW builds structured scenario payload
- payload is passed into Wix destination page or form URL
- Wix/Velo reads query parameters and pre-fills form state

## SEO rule

SEO authority remains with Wix pages, not the embedded app.
The embedded app should support decision flow and interaction, while crawlable content remains in native Wix content zones.
