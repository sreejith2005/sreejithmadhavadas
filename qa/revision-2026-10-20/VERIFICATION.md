# Visual corrections - 2026-10-20

## Result
Implemented all four requested corrections. Current production preview: http://localhost:3011, using .next-revision-20261020-verified. The dev server remains at localhost:3000; localhost:3005 is the older iteration. No staging, commits, deployment, publishing or uploads.

## Changes and files
- app/globals.css: all seven primary Home panels are exactly 100svh. Home/About portraits, Work screenshot cover, shared Contact and video footer use the same viewport height. Removed old minimum heights and the extra bottom strip. Clearance for mobile navigation is inside each frame; desktop/tablet headers clear fixed navigation.
- app/page.tsx: shorter, distinct work-area descriptions fit the mobile panel. Other content and identity retained.
- app/work/projects.ts and app/work/page.tsx: use the real owner-supplied FMS screenshot as the case-study cover, clearly labeled as actual application evidence. Exactly one MK1 project remains; contribution, capabilities, access and SaaS facts preserved.
- components/ProjectMedia.tsx (new): image opens centered on its workflow canvas; native horizontal scrolling and keyboard arrows support smaller screens. A full-size link points to the original PNG. The screenshot fills the viewer height at tablet/mobile widths, preserving image proportions.
- app/about/page.tsx and components/ExperienceTimeline.tsx (new): short introduction, scroll-aware career chapters, compact toolkit/education, optional native workshop disclosure. All four roles and dates remain available. Native anchors and all chapter content remain usable without application JavaScript. Current-chapter highlighting is progressive enhancement; no opacity hiding.
- components/ContactSection.tsx: a full orange viewport, “Good ideas. Meet your builder.”, and primary email action “Let’s make it a thing.” Address visible; profile links secondary.
- content/APPROVED_CONTENT.md: updated screenshot provenance and revision instructions. This remains the project's approvalSource.
- tsconfig.json: Next automatically appended isolated output type paths; strict remains true. No dependencies or lint configuration added.

Before-state source copies have .txt suffixes to keep them out of compilation. Earlier reports/screenshots are historical.

## Supplied screenshots and preservation
Inspected all three new PNGs locally. Used public/images/Screenshot 2026-10-20 000040.png, the FMS builder (1917 x 1078). The task/chat images include employee names and operational performance figures; neither is referenced by the rendered portfolio. Their original files remain unchanged as supplied. No internal application was accessed.

SHA256 preservation passed for all 11 media files present at the start of this revision: media-before.json and media-preservation.json. Existing portraits, video, poster and assests/ originals were retained. No new architecture, assistant access guarantee or outcome metric was inferred from screenshots.

## Final browser checks
Chrome production preview, .next-revision-20261020-verified on localhost:3011.

| Viewport | Home | Work | About | Tested panel height |
| --- | --- | --- | --- | --- |
| 1440x900 | passed | passed | passed | 900px |
| 1024x768 | passed | passed | passed | 768px |
| 768x900 | passed | passed | passed | 900px |
| 390x844 | passed | passed | passed | 844px |
| 375x844 | passed | passed | passed | 844px |

All 15 final measurements have document scrollWidth equal to clientWidth. All tested media/contact panels, and all seven Home panels, have bounding height equal to innerHeight. No measured vertical panel spill. At 375px, all four service descriptions fit their rows and portrait copy fits its allocated area.

Evidence: responsive-final.json; contact-{size}.jpg, work-{size}.jpg and about-portrait-{size}.jpg at all five sizes; additional timeline, disclosure, areas and footer captures. An initial full-page capture timed out, so focused viewport captures were saved. This is verification of the changed compositions, not an exhaustive full-page accessibility certification.

Observed defects corrected and rechecked:
- BARC selection initially highlighted the preceding chapter. A narrower observation region now selects 03 BARC correctly on mobile and desktop.
- Tablet Work/Contact headers approached navigation. Final top padding clears the fixed nav.
- Small-screen screenshot initially showed the sidebar. Final centering opens on the workflow canvas, with native panning working.
- Caption arrows/separators corrected; platform/status text has a visible mobile separator.

## Interaction and fallback
- BARC link reaches #career-barc and highlights 03 BARC on desktop/mobile. Native workshop disclosure opens and shows approved facts.
- Keyboard ArrowRight moves the centered screenshot viewport. Full-size link targets the real local PNG.
- About Contact reaches /#contact. Tab reaches the new email link with a visible black focus outline, clear of mobile navigation (focus bottom about 579px, nav top about 770px at 375x844). No email sent.
- Footer measured 844px on mobile. Manual Pause restores poster; Play resumes (paused=false, data-playing=true). Existing lazy-loading/playback state machine unchanged.
- Local application-script suppression: About renders four chapters, native BARC anchor and workshop disclosure work, native Work navigation shows one case study and its image, and Contact reaches Home. Script count zero. This is application-script absence, not a browser-wide JavaScript setting test. Proxy stopped after testing.
- Final normal browser console capture returned no warnings/errors.

## Build
PORTFOLIO_BUILD_DIR=.next-revision-20261020-verified; npm run build passed compilation, TypeScript validation, static generation (8/8), optimization and trace collection, exit code 0. Run npm run start -- -p 3011 with the same build-directory variable for this preview.

Existing next lint still needs initial ESLint configuration; no lint pass claimed. No configured test script. No package additions.

## Limits
True 200% browser zoom, physical touch/safe-area behavior, screen-reader use, and actual OS/browser reduced-motion switching remain unverified. Existing reduced-motion CSS disables animations/transitions; text stays rendered without JavaScript.

Actual background-tab, rejected-autoplay and media-failure paths were not rerun for this visual revision; the prior report contains qualified evidence for unchanged playback logic. No deployed origin or social-crawler result claimed. Existing local metadata-origin behavior unchanged.
