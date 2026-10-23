# Experience, text emphasis, compact portrait and closing redesign

Preview: http://127.0.0.1:3022/ (Home, current checkout).

Changes:
- Moved the traveling thread's starting point from the bottom of the extended Experience section into its first viewport. Thread progress now begins immediately; Experience heading, sculptures and connecting strokes have their own section-relative entrance.
- Each service now owns a scroll-driven heading entrance, delayed description entrance and small underline. Larger headings and descriptions, a quieter section title and smaller pearl prioritize reading. Reverse scrolling retraces the text entrance.
- Approach is a compact split layout: 720px tall at 1440x900, 660px at 390x844. The portrait fills its frame using cover with a top-aligned crop; no stretched image or full-length portrait.
- Replaced Home's slogan/contact panel with a plain 'Let's talk' heading and prominent email link. Warm dark colors and a gradient connect it directly to the existing footer video. Existing playback, pause, poster and reduced-motion handling remain intact. Other routes retain their existing ContactSection variant.

Verification:
- Inspected Home screenshots at 1440x900 and 390x844, default 100% zoom. Final crop screenshots also inspected at 1440x900 and 390x900.
- Runtime checks at 1440x900, 390x844, 768x900 and 375x844: thread is visible in Experience before Areas; no horizontal overflow or page errors; video playing and Pause animation button work; reduced motion restores fully visible, stationary service text.
- Fixed-delay desktop samples initially returned stale text frames. Settled reruns at 1440px and 390px explicitly waited for entrance/reading/reverse states and confirmed opacity 0.65 -> 1 -> 0.65. See settled.json. Visual captures also show the fully emphasized text.
- Production build passed compilation, type validation and static generation with .next-refinement-20261023-build. One subsequent CSS-only crop adjustment was browser-verified. Build-generated tsconfig include removed.
- git diff --check passed.

Earlier local work preserved; task-start files saved in before/. No stage, commit, push or deploy. Physical touch, other browser engines, screen-reader review and true 200% browser zoom were not tested. Visual acceptance remains the owner's judgment.
