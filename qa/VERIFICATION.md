# Latest verification - 2026-10-20

Current preview: http://localhost:3011. The four visual corrections are implemented. Final build passes; all 15 route/viewport measurements fit, and the tested panels equal viewport height.

See [the full revision report](revision-2026-10-20/VERIFICATION.md) for changes, files, screenshots, interaction results, and limits. Evidence is under qa/revision-2026-10-20/.

---

# Historical verification

# Portfolio finalization and verification — 2026-10-19

## Result
Implemented the owner's final content and layout instructions. Finished local portfolio with exactly one MK1 case study. Local production preview: http://localhost:3005. No staging, commits, deployment, publishing, or uploads. This folder is not a Git repository; no Git status/diff baseline is claimed. Authored-file backups are in qa/baseline-2026-10-19 (TypeScript files have .txt suffixes to keep backups out of compilation).

## Content sources and privacy
- Owner's attached finalization request: C:/Users/user/.codex/attachments/10900eb9-a8b4-48cc-b180-3a8bd9a255ee/Pasted text.txt.
- Supporting resume, read locally: C:/Users/user/Downloads/M_SREEJITH.pdf. Owner corrections take precedence, including display name, 3+ years, employment dates, email, and profile links.
- Concise approved source: content/APPROVED_CONTENT.md. app/work/projects.ts points to this document through approvalSource.
- Exactly one project: MK1 — Internal Operations Platform, MK Jewels. No public product link or fabricated media. Workflow figure explicitly labels a conceptual capability map rather than a screenshot or technical architecture.
- 100+ employees applies to the internal employee operations application. No Autonova metrics transferred. SaaS productization is described separately from the internal deployment, with future industry expansion stated as a direction.
- No phone number, downloadable resume, booking service, contact form, other resume project case studies, invented stack, architecture, SaaS customers, or quantified impact added. No internal application access attempted.

## Implementation and files
Changed existing authored files:
- app/page.tsx: current identity and employer, 3+ years, four distinct areas of work, MK1 transition, split portrait composition, shared contact component. Main content is server rendered; animation components are progressive enhancements.
- app/work/projects.ts: approved one-project content schema, capabilities, contribution, workflow/assistant/access/SaaS sections, approvalSource.
- app/work/page.tsx: complete seven-part case study, typographic cover, capability grid, labeled conceptual workflow figure, restricted-access note, metadata.
- app/about/page.tsx: supplied editorial biography, four correctly dated experience entries, curated toolkit, education, workshop highlight, metadata.
- app/layout.tsx: identity metadata, sharing defaults, skip link, native cursor; removed the loading overlay from the rendered layout. Existing unused cursor/loader source files retained.
- app/globals.css: consolidated layered overrides into shared gutters, content widths, section spacing, responsive media and page layouts, visible focus, touch targets, reduced-motion styles. Restored normal scrollbars.
- components/SiteNavigation.tsx and components/SiteFooter.tsx: identity update. Existing footer lazy-loading and playback state machine preserved.
- tsconfig.json: Next added isolated build type directories; strict remains true.
New source/assets:
- components/ContactSection.tsx: email visually primary, GitHub/LinkedIn secondary, professional opportunities/collaboration copy.
- content/APPROVED_CONTENT.md.
- app/icon.svg, app/opengraph-image.jpg, app/opengraph-image.alt.txt. Sharing graphic composed in HTML/CSS from approved identity and existing portrait, captured locally. No original media overwritten.
- QA records, before-state backups, screenshots, and qa/fault-proxy.cjs (local-only test helper; never part of public routes).

## Media preservation and composition
- Landscape portrait: 1448 × 1086. Hero maintains the established backdrop/focal point; About uses its natural landscape proportions in the orange frame.
- Vertical portrait below Home Work: 853 × 1280. Now a two-column copy/portrait composition on desktop/tablet, stacked on mobile. Natural proportions, head intact, text outside the photograph; no letterboxing or shallow full-width crop.
- Existing footer character video and meaningful poster retained. Media layout remains stable.
- SHA256 comparison passed for all 8 original files across assests/ and public/. Evidence: qa/media-hashes-before.json and qa/media-preservation.json.

## Responsive browser verification
Chrome production preview, final visible layout build .next-final-qa-v2 at localhost:3005. All three routes inspected in full-page captures at all five requested viewport sizes. Final build v3 changes only Work/About Open Graph image metadata; no layout/behavior source changed after the responsive matrix.

| Viewport | Home | Work | About | Document client/scroll width |
| --- | --- | --- | --- | --- |
| 1440 × 900 | checked | checked | checked | 1425 / 1425 |
| 1024 × 768 | checked | checked | checked | 1009 / 1009 |
| 768 × 900 | checked | checked | checked | 753 / 753 |
| 390 × 844 | checked | checked | checked | 375 / 375 |
| 375 × 844 | checked | checked | checked | 360 / 360 |

The 15px difference from innerWidth is the normal vertical scrollbar. No horizontal overflow or measured off-edge main-content elements in the final matrix. Evidence: qa/responsive-measurements.json. A rotated folder overflow at 375px was corrected and rechecked. Typography, media proportions, page transitions and grid-to-stack behavior were visually reviewed. Lazy portrait loading verified by bringing the actual image into view before capture.

Saved full pages: qa/final-{home,work,about}-{1440,1024,768,390,375}.jpg. QA review sheets divide those captures into consecutive vertical slices. Full-page captures can place fixed UI at the capture scroll position; viewport captures are the stronger focus/overlap evidence. qa/representative-work.jpg is a crop of the desktop portfolio case-study cover, not a screenshot of MK1 itself.

## Navigation, keyboard, and links
- Direct /, /work, /about: rendered. Work and About refresh passed.
- Home/Work/About links, /work#mk1 case-study link, and Back/Forward between Work and About passed.
- About Contact navigated to /#contact. Contact anchor received focus; Tab moved to Email me. Blue focus outline observed; email target clear of desktop nav. Email links inspected, not sent.
- Primary email target: mailto:sreejithmadhavadas@gmail.com. Secondary profile destinations match the owner's exact URLs. Email target measured at least 52px high; profile links 44px; nav links at least 44px. Normal body cursor measured as auto; custom cursor is no longer mounted.
- Final HTTP link/anchor/metadata audit passed on all three routes. One h1 each, one case-study article on Work, no obsolete role/4+ years/coming-soon wording or phone links. Local media, favicon and sharing image return HTTP 200.
- GitHub supplied profile URL returned HTTP 200 without a redirect. LinkedIn returned HTTP 999 to automated retrieval; profile-page contents not verified. Exact href verified in rendered pages. See qa/profile-link-checks.json.

## Footer behavior
Observed in normal browser:
- At hero before approaching footer, video src absent: lazy loading retained.
- Onscreen playback observed through paused=false, data-playing=true, and advancing currentTime. Manual Pause restores poster (video opacity=0, paused=true, label Play animation). Manual Play resumes.
- Scrolling the same loaded video offscreen pauses it and restores poster; src remains attached.

Controlled browser fault checks through qa/fault-proxy.cjs, proxying the unchanged production app:
- Autoplay rejection: injected play() rejection, exactly one recorded attempt, poster visible, video paused, unavailable control removed. Leaving and re-entering did not retry (attempt count stayed 1).
- Media failure: local proxy returned 404 for MP4 requests. Video hidden/paused, poster loaded at natural width 1920, motion control removed.
- Reduced motion simulation: matchMedia reports reduced motion in the application realm and equivalent CSS motion suppression is injected. DOM evidence records injected preference true. No video src attachment, video opacity 0, paused true, no motion button.
- Visibility-event simulation: a test-only button toggles document.hidden and dispatches visibilitychange. Playing -> paused/poster when hidden -> playing on foreground event. This is a controlled event-path test, not a real background-tab test.
- All application scripts removed by proxy: Work rendered all case-study text, native navigation reached About and Home, Contact anchor worked, main visible, scripts count 0, video src absent/poster available. This verifies application-JavaScript absence; it is not a browser-wide JavaScript setting test.
- These injections exist only in the local QA proxy, not in app or components. See qa/fallback-measurements.json and fallback viewport screenshots.

## Build and configured checks
- Final command: $env:PORTFOLIO_BUILD_DIR='.next-final-qa-v3'; npm run build.
- Passed compilation, TypeScript validation, collection, static generation (8/8), optimization and trace collection; exit code 0.
- Static routes: /, /about, /work, /icon.svg, /opengraph-image.jpg, and generated not-found route.
- npm run lint attempted; next lint opens initial ESLint configuration because none exists. No lint pass claimed; no configuration or dependency added. No configured test script exists.
- Original package.json and package-lock.json unchanged. No dependencies installed.
- First attempted dynamic ImageResponse social route hit a Windows/Next prerender error. Replaced with the verified static sharing JPG; final build passes. Historical attempted source saved only as a .txt QA record.
- Browser console inspection during normal preview and fallback work returned no captured warnings/errors. Expected failed media requests are injected by the proxy. Not a claim that every browser error channel was exhaustively monitored.
- After final metadata-only correction, HTTP checks passed on all routes and image/favicon/media endpoints: qa/final-http-checks.json. The browser connection ended during the external-profile check, so this last metadata correction was verified over HTTP, not another browser render.

## Honest limitations
- True 200% browser zoom unverified. Browser security policy rejected access to Chrome settings; narrow viewport tests are not zoom tests. No settings workaround attempted.
- Actual browser/OS reduced-motion preference switching and a real background-tab transition unverified. Controlled simulations above passed. Creating a second managed tab did not produce an observable hidden=true state, so that attempt was not counted as a pass.
- Browser-wide JavaScript disable setting unverified; application-script suppression was verified.
- LinkedIn profile content blocked from automated retrieval. No live email, internal MK1 access, screen-reader session, physical touch-device, or physical safe-area test performed.
- No production origin supplied. metadataBase uses an explicitly local http://localhost:3000 fallback; set PORTFOLIO_SITE_URL to the authorized real origin when deploying. No canonical production domain invented. Social crawler rendering on a deployed origin remains unverified.

## Reproduce local preview
Keep builds isolated from any running dev server. Current final production server uses .next-final-qa-v3 on port 3005. The pre-existing dev server was left alone. Earlier task-owned preview and fault-proxy processes were stopped.

```powershell
$env:PORTFOLIO_BUILD_DIR='.next-final-qa-v3'
npm run build
npm run start -- -p 3005
```

For controlled fault checks, start the production preview on 3005 and then run `node qa/fault-proxy.cjs`. Local proxy ports: 3006 application scripts removed; 3007 autoplay rejection; 3008 media failure; 3009 simulated reduced motion; 3010 simulated visibility events. Stop proxies after testing.

No avoidable content/layout implementation issues remain identified in the inspected local portfolio. The verification limits above remain explicit; this is not a deployed-site or flawless-behavior guarantee.
