import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { ContactStrip } from "@/components/contact-strip";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { title: `${project.title} | Ryan McPhedrain`, description: project.summary } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return <><div className="detail-page"><div className="shell"><Link href="/projects" className="back-link"><ArrowLeft size={16}/> ALL PROJECTS</Link><div className="detail-header"><div><span className="eyebrow">{project.eyebrow}</span><h1>{project.title}<span className="accent-period">.</span></h1><p>{project.summary}</p></div><span className="detail-number">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></div><ProjectVisual motif={project.motif} large/><div className="detail-meta"><div><span className="eyebrow">DISCIPLINES</span><div className="tag-list">{project.categories.map((category) => <span className="tag" key={category}>{category}</span>)}</div></div><div><span className="eyebrow">TECHNOLOGIES</span><div className="tag-list">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></div></div><div className="detail-content"><aside><span className="eyebrow">PROJECT OVERVIEW</span><span className="detail-rail"/></aside><div className="detail-sections"><section><span className="detail-section-number">01 / THE PROBLEM</span><h2>Where it begins</h2><p>{project.problem}</p></section><section><span className="detail-section-number">02 / THE APPROACH</span><h2>Thinking it through</h2><p>{project.approach}</p></section><section><span className="detail-section-number">03 / THE SOLUTION</span><h2>From idea to system</h2><p>{project.solution}</p></section><section><span className="detail-section-number">04 / TECHNICAL ARCHITECTURE</span><h2>How the pieces connect</h2><ol className="architecture-list">{project.architecture.map((part, i) => <li key={part}><span>{String(i + 1).padStart(2, "0")}</span>{part}</li>)}</ol></section><section><span className="detail-section-number">05 / OUTCOMES</span><h2>What we can say</h2><p>{project.outcome}</p></section><section><span className="detail-section-number">06 / DEMONSTRATION</span><h2>A closer look</h2><div className="demo-placeholder"><span className="demo-cross">✳</span><span>PROJECT SCREENSHOTS / DEMO</span><small>VISUAL MATERIAL TO BE ADDED</small></div></section></div></div><Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT / {String(((index + 1) % projects.length) + 1).padStart(2, "0")}</span><span>{next.title}<ArrowUpRight size={30}/></span></Link></div></div><ContactStrip/></>;
}
