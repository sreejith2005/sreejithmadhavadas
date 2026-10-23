import ReferenceMotion from "@/components/ReferenceMotion";
import "../reference-sections.css";
import ScrollAnimator from "@/components/ScrollAnimator";
import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import ProjectMedia from "@/components/ProjectMedia";
import { projects } from "./projects";
export const metadata: Metadata = {
  title: "Work — Sreejith Madhavadas",
  description: "MK1: the web and native Android operations platform I built for MK Jewels, bringing employee operations, tasks, connected workflows, and in-app AI assistance together.",
  openGraph: {
    title: "MK1 — Work by Sreejith Madhavadas",
    description: "The internal web and native Android operations platform I built for MK Jewels. People, tasks, connected workflows, and in-app AI assistance.",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Sreejith Madhavadas — AI Engineer & App Builder" }],
  },
};
export default function WorkPage() {
  return (
    <main id="main-content" className="work-page">
      <SiteNavigation /><ScrollAnimator /><ReferenceMotion />
      <header className="work-editorial-intro"><p className="section-eyebrow">Selected work / 01</p><h1>One platform.<br /><span>Connected work.</span></h1><div className="editorial-intro-bottom"><p>Built for the everyday operations<br />of MK Jewels.</p><a href="#mk1">Discover MK1 <span aria-hidden="true">&#8595;</span></a></div></header>
      <div className="work-editorial-layout">
      <aside className="work-index"><p className="section-eyebrow">In this project</p><nav aria-label="Case study sections"><a href="#mk1">01 / MK1</a><a href="#overview-heading">Context</a><a href="#contribution-heading">My contribution</a><a href="#capabilities-heading">Capabilities</a><a href="#deployment-heading">Deployment</a></nav><p>Internal product<br />Access restricted</p></aside>
      {projects.map(project => <article id={project.id} className="case-study editorial-case" key={project.id} tabIndex={-1}>
        <header className="editorial-cover">
          <div className="editorial-project-meta"><div><p className="section-eyebrow">MK Jewels</p><h2>MK1</h2><p>Internal Operations<br />Platform</p></div><div><h3>The context</h3><p>People, tasks, and connected operations across the company’s stores.</p></div><div><h3>Platforms</h3><p className="project-tags"><span>Web</span><span>Native Android</span></p><h3 className="meta-status">Status</h3><p>In internal use</p></div><div><h3>My role</h3><p>{project.role}</p><a href="#contribution-heading">Behind the build <span aria-hidden="true">&#8601;</span></a></div></div>
          <ProjectMedia media={project.media} />
        </header>
        <div className="case-body">
          <section className="case-section" aria-labelledby="overview-heading"><div className="case-section-label"><span>01</span><h3 id="overview-heading">Overview &amp; context</h3></div><div className="case-copy"><p className="case-lead">{project.description}</p><p>Employees across stores need individual accounts, different levels of access, and a shared place to coordinate work. MK1 brings those operational needs into one platform.</p></div></section>
          <section className="case-section" aria-labelledby="contribution-heading"><div className="case-section-label"><span>02</span><h3 id="contribution-heading">My contribution</h3></div><div className="case-copy"><p>{project.contribution}</p></div></section>
          <section className="case-capabilities" aria-labelledby="capabilities-heading"><div className="case-section-label"><span>03</span><h3 id="capabilities-heading">What the platform handles</h3></div><div className="capability-grid">{project.capabilities.map((capability, index) => <div className="capability" key={capability.title}><p className="capability-number" aria-hidden="true">/ 0{index + 1}</p><h4>{capability.title}</h4><p>{capability.description}</p></div>)}</div></section>
          <section className="case-section" aria-labelledby="workflow-heading"><div className="case-section-label"><span>04</span><h3 id="workflow-heading">FMS &amp; connected workflows</h3></div><div className="case-copy"><p>{project.workflow}</p><p><a className="text-link" href="#mk1">Inspect the actual FMS screen <span aria-hidden="true">&#8593;</span></a></p><figure className="workflow-diagram"><figcaption>Conceptual capability map</figcaption><div className="workflow-path"><span>Forms</span><span aria-hidden="true">→</span><span>FMS workflows</span><span aria-hidden="true">→</span><span>Tasks</span></div><p>A view of connected capabilities; not a production screen or technical architecture.</p></figure></div></section>
          <section className="case-section" aria-labelledby="assistant-heading"><div className="case-section-label"><span>05</span><h3 id="assistant-heading">In-app AI assistance</h3></div><div className="case-copy"><p>{project.assistant}</p></div></section>
          <section className="case-section" aria-labelledby="deployment-heading"><div className="case-section-label"><span>06</span><h3 id="deployment-heading">Internal deployment &amp; access</h3></div><div className="case-copy"><p>{project.deployment}</p><p className="access-note"><span aria-hidden="true">↳ </span>Internal platform — access restricted to MK Jewels employees.</p></div></section>
          <section className="case-section case-evolution" aria-labelledby="evolution-heading"><div className="case-section-label"><span>07</span><h3 id="evolution-heading">Evolution toward SaaS</h3></div><div className="case-copy"><p className="section-eyebrow">Productization in progress</p><p>{project.evolution}</p></div></section>
        </div>
      </article>)}
      </div>
      <ContactSection /><SiteFooter />
    </main>
  );
}
