# Pacing, portrait and palette refinement - 2026-10-23

Preview: http://127.0.0.1:3022/ (current checkout).

Changes:
- Experience has a sticky composition over 180svh on tall desktop screens; Areas has 40svh service rows with a sticky introduction; Work has a longer reveal and 150svh minimum height. Mobile uses shorter corresponding spans. Short viewports and reduced motion disable sticky holds.
- At 1440x900, the three sections increased from 3,070px combined to approximately 4,818px (57%). Normal scroll input remains unchanged.
- Approach uses warm charcoal (#302a26); contact uses muted sand (#ddc3aa) with a brown arrow. Rules are scoped to Home.
- Approach portrait uses its native 853:1280 ratio, with responsive width and no cropping or stretching.

Verification:
- Live reference inspected at https://juanmora.co/; reference.png records the extended service composition.
- Chrome screenshots inspected on Home at 1440x900 and 390x844, default 100% zoom, covering all five changed sections.
- Runtime checks passed at 1440x900, 390x844, 1024x768, 768x900, 375x844 and 844x390: reverse-scroll progress matches, reduced motion fully reveals Work, no horizontal overflow, no page errors. Actual portrait aspect ratios match its source within pixel rounding. See results.json and verify.cjs.
- npm run build passed with PORTFOLIO_BUILD_DIR=.next-pacing-20261023-build. Its generated tsconfig include was removed afterward.
- git diff --check passed.

Not verified: physical touch, other browser engines, screen reader, true 200% zoom. No commit, push or deployment. Earlier local changes were preserved; task-start snapshots are in before/.
