import { projects } from "@/app/work/projects";

export default function WorkInvitation() {
  const project = projects[0];
  return <section className="work-invitation" aria-labelledby="work-heading">
    <p className="invitation-intro">A closer look at what I build.</p>
    <h2 id="work-heading" className="invitation-word">Work<span aria-hidden="true">&#8599;</span></h2>
    <a className="work-screen" href="/work#mk1" aria-label="Explore MK1, internal operations platform at MK Jewels">
      <div className="work-screen-reveal"><img src={project.media.src} alt="MK1 workflow builder interface" width={project.media.width} height={project.media.height} loading="lazy" /></div>
      <span className="screen-caption"><span>MK1 / Inside the platform</span><span aria-hidden="true">&#8599;</span></span>
    </a>
    <div className="invitation-bottom"><div><p className="section-eyebrow">01 / MK Jewels</p><h3>Internal Operations Platform</h3><p>Web + native Android &middot; Access restricted</p></div><a className="invitation-link" href="/work#mk1">Explore the case study <span aria-hidden="true">&#8599;</span></a></div>
  </section>;
}
