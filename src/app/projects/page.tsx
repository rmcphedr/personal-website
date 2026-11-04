import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = { title: "Projects", description: "Explore Ryan McPhedrain’s work in agentic AI, automation, data science, research, and applications.", openGraph: { title: "Projects | Ryan McPhedrain", description: "Research-minded AI engineering and data projects." } };

export default function ProjectsPage() {
  return <div className="page-wrap"><div className="shell"><div className="page-intro"><span className="eyebrow"><span className="section-index">01</span> THE WORK</span><div className="page-intro-grid"><h1>Selected<br/><em>projects.</em></h1><p>A collection of experiments, research, and applied systems. Each one starts with a question and moves toward a useful answer.</p></div></div><ProjectFilter/></div></div>;
}
