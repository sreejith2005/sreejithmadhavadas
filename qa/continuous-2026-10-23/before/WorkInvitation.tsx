import { projects } from "@/app/work/projects";

export default function WorkInvitation() {
  const project = projects[0];
  return <section className="work-invitation" aria-labelledby="work-heading">
    <p className="invitation-intro">A closer look at what I build.</p>
    <h2 id="work-heading" className="invitation-word">Work<span aria-hidden="true">↗</span></h2>
    <a className="work-aperture" href="/work" aria-label="Explore MK1 — internal operations platform at MK Jewels">
      <div className="aperture-motion"><div className="aperture-surface">
        <img src={project.media.src} alt="" width={project.media.width} height={project.media.height} loading="lazy" />
        <span className="aperture-identity">MK1<span>Inside the platform <span aria-hidden="true">↗</span></span></span>
      </div></div>
    </a>
    <div className="invitation-bottom"><div><p className="section-eyebrow">01 / MK Jewels</p><h3>Internal Operations Platform</h3><p>Web + native Android · Access restricted</p></div><a className="invitation-link" href="/work#mk1">Explore the case study <span aria-hidden="true">↗</span></a></div>
  </section>;
}
