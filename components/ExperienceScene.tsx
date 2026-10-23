/** Original vector sculpture; no reference artwork or product UI is reproduced. */
export default function ExperienceScene() {
  return <section id="experience" className="experience-scene" aria-labelledby="experience-heading">
    <div className="experience-stage">
    <div className="experience-statement">
      <p className="section-eyebrow">Experience</p>
      <h2 id="experience-heading"><span>3+ years</span><span>connecting <em>AI,</em></span><span><em className="experience-pill">apps</em> &amp; the</span><span>workflows between.</span></h2>
      <p className="experience-role">Currently AI Integration Executive at MK Jewels.</p>
    </div>
    <div className="experience-sculpture" aria-hidden="true">
      <svg viewBox="0 0 1440 520" fill="none">
        <defs>
          <radialGradient id="scene-pearl" cx=".3" cy=".22" r=".85"><stop stopColor="#fffaf0"/><stop offset=".43" stopColor="#edc4a9"/><stop offset=".7" stopColor="#bd7657"/><stop offset="1" stopColor="#52382e"/></radialGradient>
          <linearGradient id="scene-metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4b3934"/><stop offset=".2" stopColor="#d69571"/><stop offset=".43" stopColor="#fff4df"/><stop offset=".59" stopColor="#edc4a9"/><stop offset=".82" stopColor="#887a71"/><stop offset="1" stopColor="#413d3c"/></linearGradient>
          <radialGradient id="scene-core" cx=".35" cy=".25" r=".8"><stop stopColor="#ffedd8"/><stop offset=".5" stopColor="#ee9b6e"/><stop offset=".85" stopColor="#ad5535"/><stop offset="1" stopColor="#773b2b"/></radialGradient>
          <filter id="scene-shadow"><feGaussianBlur stdDeviation="16"/></filter>
        </defs>
        <ellipse cx="720" cy="465" rx="480" ry="22" fill="#67432e" opacity=".13" filter="url(#scene-shadow)"/>
        <g className="sculpture-object sculpture-left"><circle cx="92" cy="240" r="240" fill="url(#scene-pearl)"/><circle cx="92" cy="240" r="238" stroke="#fff8e6" strokeOpacity=".3" strokeWidth="2"/></g>
        <path className="scene-connection scene-connection-back" d="M1010 -70 C1030 80 1220 90 1200 210 C1170 400 1000 430 870 310 S570 80 430 220 S240 430 120 340" stroke="#bb6c47" strokeWidth="7" pathLength="1"/>
        <g className="sculpture-object sculpture-link"><rect x="350" y="140" width="360" height="160" rx="80" transform="rotate(-28 530 220)" fill="url(#scene-metal)"/><rect x="352" y="142" width="356" height="156" rx="78" transform="rotate(-28 530 220)" stroke="#fff4df" strokeOpacity=".35" strokeWidth="2"/></g>
        <g className="sculpture-object sculpture-center"><circle cx="790" cy="330" r="175" fill="url(#scene-core)"/><path d="M730 330 H850 M790 270 V390" stroke="#ffe9d0" strokeWidth="17" strokeLinecap="round" opacity=".8"/></g>
        <g className="sculpture-object sculpture-right"><rect x="1090" y="68" width="290" height="290" rx="85" transform="rotate(16 1235 213)" fill="url(#scene-pearl)"/><path d="M1185 185 L1220 230 L1290 160" stroke="#fff3df" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" opacity=".85"/></g>
        <path className="scene-connection scene-connection-front" d="M1010 -70 C1030 80 1060 300 900 402 C720 515 560 395 540 288" stroke="#fff8e9" strokeWidth="9" pathLength="1"/>
        <circle cx="540" cy="288" r="13" fill="#b4411f"/><circle cx="1010" cy="15" r="10" fill="#b4411f"/>
      </svg>
    </div>
    <p className="experience-footnote">AI systems. Useful apps. Connected work.</p>
    </div>
  </section>;
}
