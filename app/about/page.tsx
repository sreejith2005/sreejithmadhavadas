import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "About — Sreejith Madhavadas",
  description: "AI engineer and app builder with 3+ years of experience. Currently at MK Jewels; previously Co-Founder & CTO at Autonova.",
  openGraph: {
    title: "About — Sreejith Madhavadas",
    description: "I tend to build the missing piece. AI engineer and app builder with 3+ years of experience, currently at MK Jewels.",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Sreejith Madhavadas — AI Engineer & App Builder" }],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <SiteNavigation />
      <header className="page-intro about-intro">
        <p className="section-eyebrow">About / Sreejith Madhavadas</p>
        <h1>I tend to build<br />the missing piece.</h1>
        <p>AI Engineer &amp; App Builder · 3+ years</p>
      </header>
      <figure className="about-portrait">
        <img src="/images/6068668461904237064_119.jpg" alt="Sreejith Madhavadas at his desk" width={1448} height={1086} className="hero-photo" />
        <figcaption>Somewhere between the problem and the product.</figcaption>
      </figure>
      <section className="about-note" aria-labelledby="biography-heading">
        <p className="section-eyebrow">The short version</p>
        <h2 id="biography-heading">“We’ll manage it in a spreadsheet” has a way of becoming a product brief.</h2>
        <p>I build the missing piece: an app, an agent, or the workflow connecting them. At MK Jewels, that became MK1. Before that, I co-founded Autonova.</p>
      </section>
      <ExperienceTimeline />
      <section className="about-facts" aria-label="Toolkit and education">
        <div><p className="section-eyebrow">The toolkit</p><p>Python, APIs, n8n, PostgreSQL.<br />AI orchestration, web &amp; Android.<br />From solution design to deployment.</p></div>
        <div><p className="section-eyebrow">The foundations</p><p>B.Tech (Hons.), CSE in AI &amp; ML<br />Vidyalankar Institute of Technology, Mumbai University<br />2026 · CGPA 8.8/10</p></div>
        <details><summary>And sometimes, the classroom. <span aria-hidden="true">+</span></summary><p>I conducted a two-day Agentic AI workshop at VIT for 80+ students and professionals.</p></details>
      </section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
