# Wheel distance and footer video trim - 2026-10-23

- Lenis wheelMultiplier is now 0.45, reducing mouse wheel/trackpad-wheel travel by 55%. Existing smoothing, native touch behavior and reduced-motion bypass remain in place.
- Footer asset Character_bobbing_head_web.mp4 trimmed from 8.000s to 7.000s, retaining source time 0-7 seconds. Re-encoded H.264/yuv420p, 1920x1080 at 24 fps, with faststart. 168 frames decode successfully without errors.
- Original served video and LenisProvider source saved in before/. Original music-source video and poster remain unchanged.
- Browser on http://127.0.0.1:3022/ at 1440x900: wheel input 8000 produced 3599px of travel; reverse input -2000 returned to 2701px (approximately 900px back). No page errors. See scroll.json. The one-second keyboard snapshot was intermediate and is not evidence of final keyboard scroll position.
- Playback checks recorded separately in playback.json.
- No changes to the current animation design, no commits or deployment. Physical mouse and trackpad hardware were not tested; browser automation generated the wheel events.

- Production build passed (.next-scroll-video-20261023-build); generated tsconfig include removed. git diff --check passed.
