import BlobField from "@/components/BlobField";
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
      <HeroAnimator /><ScrollAnimator /><SiteNavigation home />
      <section data-hero-section className="hero-section">
        <p data-hero-subtitle className="hero-subtitle">AI Engineer &amp; App Builder</p>
        <h1 aria-label="Sreejith Madhavadas" className="font-display identity-name hero-name"><span data-hero-first>Sreejith</span><span data-hero-last>Madhavadas</span></h1>
        <img data-hero-photo src="/images/6068668461904237064_119.jpg" alt="Sreejith Madhavadas at his desk" width={1448} height={1086} className="hero-photo" fetchPriority="high" />
      </section>
      <section className="tagline-section">
        <div data-tagline-block className="tagline-copy"><p className="section-eyebrow">Experience / 3+ years</p><h2 className="tagline-heading">AI systems, useful apps, and the <span className="accent-word">workflows</span> between them.</h2><p className="current-role">Currently AI Integration Executive at MK Jewels.</p></div>
        <div className="blob-zone" aria-hidden="true"><BlobField /></div>
      </section>
      <section className="areas-section" aria-labelledby="areas-heading">
        <div className="services-intro"><p className="section-eyebrow">Areas of work</p><h2 id="areas-heading">What I build.</h2></div>
        <div className="services-list">{areas.map(([label, desc], index) => <div className="service-block" key={label}><div className="service-header"><span className="service-number" aria-hidden="true">0{index + 1}</span><h3>{label}</h3><p className="service-description">{desc}</p></div></div>)}</div>
      </section>
      <section className="work-transition" aria-labelledby="work-heading">
        <div className="work-title-row"><h2 id="work-heading">Work</h2><div className="work-folder" aria-hidden="true" /></div>
        <div className="work-transition-bottom"><div><p className="section-eyebrow">Featured / MK Jewels</p><h3>MK1 — Internal Operations Platform</h3><p>Web and native Android. One place for people, tasks, and connected operations.</p></div><a className="work-cta" href="/work#mk1">Read the case study <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="philosophy-section" aria-labelledby="philosophy-heading">
        <div className="philosophy-copy"><p className="section-eyebrow">The approach</p><h2 id="philosophy-heading">The useful part<br />comes first.</h2><p>A workflow, an agent, or an app. I start with the work it needs to help someone do.</p><a className="text-link" href="/about">A little about me <span aria-hidden="true">↗</span></a></div>
        <img src="/images/6332439334312677529_121.jpg" alt="Sreejith Madhavadas outdoors" width={853} height={1280} loading="lazy" className="philosophy-photo" />
      </section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
