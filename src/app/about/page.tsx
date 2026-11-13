import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";
import { profileLinks } from "@/data/profile-links";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ryan McPhedrain’s journey from neuroscience research to applied AI engineering and independent consulting.",
  openGraph: {
    title: "About | Ryan McPhedrain",
    description: "From neuroscience research to useful AI systems.",
  },
};

export default function AboutPage() {
  return <>
    <div className="page-wrap about-page">
      <div className="shell">
        <div className="page-intro">
          <span className="eyebrow"><span className="section-index">02</span> ABOUT RYAN</span>
          <div className="page-intro-grid">
            <h1>Science as a<br/><em>way of seeing.</em></h1>
            <p>I’m a neuroscientist turned AI engineer, drawn to the space between complex research questions and practical systems that help people.</p>
          </div>
        </div>
        <div className="about-main">
          <div className="portrait-placeholder portrait-photo-frame">
            <Image src="/ryan-mcphedrain-portrait.jpg" alt="Portrait of Ryan McPhedrain" width={461} height={567} className="portrait-photo" sizes="(max-width: 620px) 100vw, 40vw" />
            <span className="portrait-label">RYAN MCPHEDRAIN / PROFILE</span>
          </div>
          <div className="about-story">
            <span className="eyebrow">A PATH THROUGH RESEARCH AND BUILDING</span>
            <h2>From understanding systems to <em>building them.</em></h2>
            <p>My training began in neuroscience. I earned a PhD at McGill University and the Montreal Neurological Institute, then continued as a postdoctoral researcher at Mila and McGill University.</p>
            <p>That work taught me how to reason through uncertainty, analyze complex neuroimaging data, and communicate findings across disciplines. It also made me deeply interested in the tools we use to turn information into insight.</p>
            <p>Today, I bring that research mindset to applied AI. I build applications, agentic workflows, automation systems, and data-driven tools—always with an eye on the people and decisions they support.</p>
            <p>As an independent consultant, I’m interested in collaborating on problems where careful analysis and pragmatic engineering can make a real difference.</p>
            <div className="about-resource-list">
              <span className="eyebrow">CONNECT / RESOURCES</span>
              <a className="resource-row resource-link" href={profileLinks.resume} download="Resume_RM_04-11-2026.pdf"><Download size={18}/><span>Download résumé</span><ArrowUpRight size={16}/></a>
              <a className="resource-row resource-link" href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/><span>LinkedIn</span><ArrowUpRight size={16}/></a>
              <a className="resource-row resource-link" href={profileLinks.github} target="_blank" rel="noopener noreferrer"><Github size={18}/><span>GitHub</span><ArrowUpRight size={16}/></a>
            </div>
          </div>
        </div>
        <section className="about-principles">
          <div className="principles-heading"><span className="eyebrow">HOW I WORK</span><h2>A few things I bring<br/>to the table<span className="accent-period">.</span></h2></div>
          <div className="principles-grid">
            <div><span>01 /</span><h3>Scientific rigor</h3><p>Frame the right question, examine the evidence, and stay willing to revise the answer.</p></div>
            <div><span>02 /</span><h3>Technical depth</h3><p>Move comfortably between data analysis, machine learning, application design, and implementation.</p></div>
            <div><span>03 /</span><h3>Practical focus</h3><p>Build for real workflows and meaningful decisions, with clarity at every step.</p></div>
          </div>
        </section>
      </div>
    </div>
    <ContactStrip/>
  </>;
}
