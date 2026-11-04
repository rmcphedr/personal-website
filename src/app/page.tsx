import Link from "next/link";
import { ArrowDown, ArrowUpRight, BrainCircuit, Bot, ChartNoAxesCombined } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ContactStrip } from "@/components/contact-strip";
import { HeroVisual } from "@/components/hero-visual";
import { featuredProjects } from "@/data/projects";

const expertise = [
  { number: "01", icon: Bot, title: "Applied AI & Agentic Systems", text: "Designing practical AI applications, autonomous workflows, and systems that connect models to real tasks." },
  { number: "02", icon: ChartNoAxesCombined, title: "Data Science & Machine Learning", text: "Finding structure in complex data through statistical analysis, thoughtful modeling, and clear interpretation." },
  { number: "03", icon: BrainCircuit, title: "Computational Neuroscience", text: "A research foundation in brain networks, neuroimaging, and interdisciplinary scientific problem solving." },
];

export default function Home() {
  return <>
    <section className="home-hero"><div className="shell hero-layout"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-line"/> NEUROSCIENCE / ARTIFICIAL INTELLIGENCE / ENGINEERING</div><h1>Ryan<br/><span>McPhedrain<span className="accent-period">.</span></span></h1><p className="hero-role">Neuroscientist <span>·</span> AI Engineer <span>·</span> Independent Consultant</p><p className="hero-intro">I build intelligent systems that transform complex data into useful tools, automate workflows, and solve real-world problems.</p><div className="hero-actions"><Link href="/projects" className="button button-primary">Explore Projects <ArrowUpRight size={18}/></Link><Link href="/contact" className="button button-outline">Get in Touch <ArrowUpRight size={18}/></Link></div><a className="scroll-cue" href="#featured"><ArrowDown size={15}/> SCROLL TO EXPLORE</a></div><HeroVisual/></div><div className="hero-bottom-line shell"><span>RESEARCH-LED. REAL-WORLD FOCUSED.</span><span>INDEPENDENT PRACTICE / APPLIED AI</span></div></section>

    <section className="section section-featured" id="featured"><div className="shell"><SectionHeading index="01" eyebrow="SELECTED WORK" title="Projects at the intersection" description="From scientific inquiry to applied systems—work shaped by curiosity, rigor, and a drive to make complex things useful." href="/projects" linkLabel="View all projects"/><div className="featured-grid">{featuredProjects.map((project, index) => <ProjectCard project={project} number={index + 1} key={project.slug}/>)}</div></div></section>

    <section className="section expertise-section"><div className="shell"><SectionHeading index="02" eyebrow="AREAS OF EXPERTISE" title="Different disciplines. One approach." description="I bring a scientist’s method to engineering: define the problem, test assumptions, and build what matters."/><div className="expertise-list">{expertise.map(({number,icon: Icon,title,text}) => <div className="expertise-row" key={number}><span className="expertise-number">{number} /</span><div className="expertise-icon"><Icon size={28} strokeWidth={1.4}/></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="expertise-arrow" size={20}/></div>)}</div></div></section>

    <section className="section about-preview"><div className="shell about-preview-grid"><div className="about-preview-art"><div className="about-art-grid"/><div className="about-art-ring ring-a"/><div className="about-art-ring ring-b"/><div className="about-art-ring ring-c"/><span className="about-art-label">OBSERVE<br/>CONNECT<br/>CREATE<span>_</span></span><span className="about-art-index">FIG. 002 / CONTINUOUS EXPLORATION</span></div><div className="about-preview-copy"><span className="eyebrow"><span className="section-index">03</span> THE PERSON BEHIND THE WORK</span><h2>Curiosity is<br/><em>the through line.</em></h2><p>My path started in neuroscience research, where I learned to work with complex data and ask careful questions. Today, I apply that same mindset to building AI systems and tools that meet real needs.</p><p>From the lab to applied engineering, I’m interested in the space where deep analysis becomes something people can actually use.</p><Link href="/about" className="text-link">More about my path <ArrowUpRight size={17}/></Link></div></div></section>
    <ContactStrip/>
  </>;
}
