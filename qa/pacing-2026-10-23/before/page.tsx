import ExperienceScene from "@/components/ExperienceScene";
import WorkInvitation from "@/components/WorkInvitation";
import ReferenceMotion from "@/components/ReferenceMotion";
import "./reference-sections.css";
import HeroAnimator from "@/components/HeroAnimator";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteNavigation from "@/components/SiteNavigation";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";

const areas = [
  ["AI Automations", "Connected tools, APIs, and workflows that handle routine business processes."],
  ["Agentic AI", "Agents that use tools and coordinate steps, with LLM orchestration and prompt design."],
  ["Cinematic AI Creatives", "AI-generated cinematic visuals and creative content, from concept to visual direction."],
  ["App Development", "Practical web and native Android apps for everyday operations and connected work."],
];
export default function Home() {
  return (
    <main id="main-content">
      <HeroAnimator /><ScrollAnimator /><ReferenceMotion /><SiteNavigation home />
      <section data-hero-section className="hero-section">
        <p data-hero-subtitle className="hero-subtitle">AI Engineer &amp; App Builder</p>
        <h1 aria-label="Sreejith Madhavadas" className="font-display identity-name hero-name"><span data-hero-first>Sreejith</span><span data-hero-last>Madhavadas</span></h1>
        <img data-hero-photo src="/images/6068668461904237064_119.jpg" alt="Sreejith Madhavadas at his desk" width={1448} height={1086} className="hero-photo" fetchPriority="high" />
      </section>
      <div className="home-journey">
      <svg className="journey-thread" aria-hidden="true"><defs><radialGradient id="journey-pearl" cx="30%" cy="25%"><stop stopColor="#fff9eb"/><stop offset=".55" stopColor="#d9996d"/><stop offset="1" stopColor="#8e3c22"/></radialGradient></defs><path className="journey-track"/><path className="journey-ink" pathLength="1"/><circle className="journey-pearl" r="17" fill="url(#journey-pearl)"/></svg>
      <ExperienceScene />
      <section className="areas-section" aria-labelledby="areas-heading">
        <div className="services-intro"><p className="section-eyebrow">Areas of work</p><h2 id="areas-heading">What I<br />build.</h2></div>
        <div className="services-list">{areas.map(([label, desc], index) => <div className="service-block" key={label}><div className="service-header"><span className="service-number" aria-hidden="true">0{index + 1}</span><h3>{label}</h3><p className="service-description">{desc}</p></div></div>)}</div>
      </section>
      <WorkInvitation />
      </div>
      <section data-scene className="philosophy-section" aria-labelledby="philosophy-heading">
        <div data-arrival className="philosophy-copy"><p className="section-eyebrow">The approach</p><h2 id="philosophy-heading">The useful part<br />comes first.</h2><p>A workflow, an agent, or an app. I start with the work it needs to help someone do.</p><a className="text-link" href="/about">A little about me <span aria-hidden="true">↗</span></a></div>
        <img src="/images/6332439334312677529_121.jpg" alt="Sreejith Madhavadas outdoors" width={853} height={1280} loading="lazy" className="philosophy-photo" />
      </section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
