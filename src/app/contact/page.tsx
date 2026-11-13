import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profileLinks } from "@/data/profile-links";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Ryan McPhedrain about AI engineering, data science, research, and consulting opportunities.",
  openGraph: {
    title: "Contact | Ryan McPhedrain",
    description: "Start a conversation about research-minded engineering and useful AI.",
  },
};

export default function ContactPage() {
  return <div className="page-wrap contact-page"><div className="shell">
    <div className="page-intro">
      <span className="eyebrow"><span className="section-index">04</span> CONTACT</span>
      <div className="page-intro-grid"><h1>Let’s make<br/><em>something useful.</em></h1><p>Interested in collaborating, hiring, or discussing an idea? I’m open to conversations at the intersection of research, data, and applied AI.</p></div>
    </div>
    <div className="contact-main">
      <div className="contact-card">
        <span className="eyebrow"><span className="status-dot"/> OPEN TO CONVERSATIONS</span>
        <h2>Start with the problem.<br/><em>We’ll find the path.</em></h2>
        <p>Whether you’re exploring an AI application, untangling a data challenge, or looking for an interdisciplinary collaborator, I’d be glad to hear what you’re working on.</p>
        <div className="contact-socials" aria-label="Social profiles">
          <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={19}/><span>Connect on LinkedIn</span><ArrowUpRight size={17}/></a>
          <a href={profileLinks.github} target="_blank" rel="noopener noreferrer"><Github size={19}/><span>View GitHub</span><ArrowUpRight size={17}/></a>
        </div>
        <div className="contact-placeholder contact-email"><span>DIRECT CONTACT</span><a href={`mailto:${profileLinks.email}`}>{profileLinks.email}<ArrowUpRight size={18}/></a><small>For consulting, roles, and research collaborations.</small></div>
      </div>
      <div className="contact-side">
        <span className="eyebrow">GOOD REASONS TO CONNECT</span>
        <div><span>01</span><h3>AI &amp; automation</h3><p>Tools, agents, and workflows designed around real needs.</p></div>
        <div><span>02</span><h3>Data &amp; research</h3><p>Analytical collaborations and complex technical questions.</p></div>
        <div><span>03</span><h3>Consulting &amp; roles</h3><p>Thoughtful opportunities to build and solve together.</p></div>
        <Link href="/projects" className="text-link">See selected work <ArrowUpRight size={17}/></Link>
      </div>
    </div>
  </div></div>;
}
