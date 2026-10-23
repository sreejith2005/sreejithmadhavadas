export default function ContactSection({ cinematic = false }: { cinematic?: boolean }) {
  if (cinematic) return (
    <section id="contact" data-scene tabIndex={-1} className="contact-finale" aria-labelledby="contact-heading">
      <div className="finale-top"><p className="section-eyebrow">Contact</p><p>Roles, collaborations &amp; interesting problems.</p></div>
      <h2 id="contact-heading" data-arrival>Let&rsquo;s talk<span aria-hidden="true">.</span></h2>
      <div className="finale-bottom">
        <a className="finale-email" href="mailto:sreejithmadhavadas@gmail.com"><span>sreejithmadhavadas@gmail.com</span><span aria-hidden="true">&#8599;</span></a>
        <div className="profile-links"><a href="https://github.com/sreejith2005">GitHub &#8599;</a><a href="https://www.linkedin.com/in/sreejith-madhavadas/">LinkedIn &#8599;</a></div>
      </div>
    </section>
  );
  return (
    <section id="contact" data-scene tabIndex={-1} className="cta-section" aria-labelledby="contact-heading">
      <div className="cta-grid">
        <p className="section-eyebrow">The next good thing / Opportunities &amp; collaboration</p>
        <div data-arrival className="contact-heading-row">
          <h2 id="contact-heading">Good ideas.<br />Meet your builder.</h2>
          <span className="contact-arrow" aria-hidden="true">↙</span>
        </div>
        <div className="contact-bottom-row">
          <div className="contact-links">
            <a className="email-link" href="mailto:sreejithmadhavadas@gmail.com">Let’s make it a thing. <span aria-hidden="true">↗</span></a>
            <p className="contact-address">sreejithmadhavadas@gmail.com</p>
          </div>
          <div className="contact-secondary"><p>A role, a collaboration, or a problem worth a closer look.</p><div className="profile-links"><a href="https://github.com/sreejith2005">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/sreejith-madhavadas/">LinkedIn <span aria-hidden="true">↗</span></a></div></div>
        </div>
      </div>
    </section>
  );
}
