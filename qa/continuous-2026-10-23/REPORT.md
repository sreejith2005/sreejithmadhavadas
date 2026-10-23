# Continuous Home scroll sequence - 2026-10-23

Preview: http://127.0.0.1:3022/ (current checkout, isolated dev build).

Implemented one GSAP timeline over Experience, Areas of Work and Home Work. A shared ivory canvas, copper path and moving pearl join the sculpture entrance, staggered service movement and wide MK1 screen reveal. Scroll is native/Lenis-owned with no additional pinning. Reverse scroll retraces the timeline. The circular MK1 crop is removed; the genuine workflow-builder image is shown in full.

Scope: app/page.tsx, app/reference-sections.css, components/ReferenceMotion.tsx, components/WorkInvitation.tsx. Work page content and its existing cover motion remain unchanged. Hero, Approach, About, navigation, footer and contact source remain unchanged. No stage, commit, push or deployment.

Reference inspected live in isolated Chrome: https://juanmora.co/. Reference screenshots and inspection script are in this directory. This adapts its shared warm canvas, sculptural forms and flowing transitions; the copper thread is an original connection between these three sections.

Validation:
- Final application production build passed compilation, type validation and static generation using .next-continuous-20261023-build. Build-only tsconfig include removed afterward. Subsequent change: CSS reduced-motion safety fallback only.
- Inspected Chrome screenshots at 1440x900 and 390x900 at default 100% zoom, plus the final desktop Areas-to-Work transition (transition-final.png).
- Browser behavior measurements at 1440x900, 1024x768, 768x900, 390x844, 375x844 and 844x390 are recorded in results.json: forward/reverse positions, viewport overflow, console errors, live reduced motion and link focus.
- JavaScript-disabled content and image rendering checked at 390x844.
- One screenshot batch timed out; individual capture succeeded. Initial rapid sampling occasionally ran before animation frames settled; final script waits for the journey animation to initialize and allows animation frames to settle.
- Reduced motion uses static fully revealed content with both matchMedia cleanup and CSS safeguards. Keyboard focus also reveals the screen immediately.
- Fixed-delay sampling occasionally returned stale frames (including 768px reverse and 390px final positions); these raw results are retained rather than reported as universal passes. A targeted 768px rerun waits for calculated timeline progress before sampling; see settled-768.json. Initial 390px screenshot inspection shows the complete reveal.
- git diff --check passed.

Not verified: physical touch, other browser engines, screen reader, true 200% browser zoom. These screenshots and measurements do not substitute for owner visual acceptance.
