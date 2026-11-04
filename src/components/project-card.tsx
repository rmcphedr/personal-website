import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, number }: { project: Project; number?: number }) {
  return <Link href={`/projects/${project.slug}`} className="project-card">
    <ProjectVisual motif={project.motif} />
    <div className="project-card-body"><div className="project-card-top"><span className="eyebrow">{number ? String(number).padStart(2, "0") + " / " : ""}{project.categories[0].toUpperCase()}</span><ArrowUpRight size={20} /></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 3).map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></div>
  </Link>;
}
