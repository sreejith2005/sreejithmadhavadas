"use client";

import { useEffect, useRef, useState } from "react";

const experience = [
  { id: "mk-jewels", company: "MK Jewels", role: "AI Integration Executive", dates: "June 2026–Present", headline: "Bring the work together.", detail: "Built MK1 for web and native Android: employee operations, tasks, connected workflows, and in-app AI assistance." },
  { id: "autonova", company: "Autonova", role: "Co-Founder & CTO", dates: "February 2025–June 2026", headline: "Build it. Ship it. Help it stick.", detail: "Automation and client work, from understanding the problem and designing the solution to implementation and helping people use it." },
  { id: "barc", company: "BARC", role: "Project Trainee", dates: "December 2024–January 2025", headline: "Make the pieces talk.", detail: "Python backend APIs, LiveKit, PostgreSQL, testing, and deployment across Linux and Windows." },
  { id: "codsoft", company: "CODSOFT", role: "AI Intern", dates: "November–December 2024", headline: "Start with the interaction.", detail: "Recommendation systems and interactive AI applications, including a chatbot and algorithmic decision-making." },
];

export default function ExperienceTimeline() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const steps = root.current?.querySelectorAll<HTMLElement>("[data-career-step]");
    if (!steps || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      const entry = entries.filter(item => item.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (entry) setActive(Number((entry.target as HTMLElement).dataset.careerStep));
    }, { rootMargin: "-35% 0px -60% 0px", threshold: 0 });
    steps.forEach(step => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={root} className="career-timeline" aria-labelledby="experience-heading">
      <div className="career-index">
        <p className="section-eyebrow">A few chapters / <span aria-hidden="true">0{active + 1} of 04</span></p>
        <h2 id="experience-heading">Learning<br />by building.</h2>
        <nav aria-label="Experience chapters">
          {experience.map((item, index) => <a key={item.id} href={`#career-${item.id}`} aria-current={active === index ? "step" : undefined} onClick={() => setActive(index)}><span aria-hidden="true">0{index + 1}</span>{item.company}</a>)}
        </nav>
      </div>
      <div className="career-chapters">
        {experience.map((item, index) => (
          <article key={item.id} id={`career-${item.id}`} data-career-step={index} data-active={active === index} className="career-step">
            <p className="experience-dates">{item.dates}</p>
            <h3>{item.headline}</h3>
            <p className="career-role">{item.role} · {item.company}</p>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
