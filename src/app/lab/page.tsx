import type { Metadata } from "next";
import { ArrowUpRight, Network, BrainCircuit, ScanSearch } from "lucide-react";

export const metadata: Metadata = { title: "Lab", description: "A space for planned experiments in agent workflows, brain connectivity visualization, and AI lead qualification.", openGraph: { title: "Lab | Ryan McPhedrain", description: "Planned experiments at the edge of research and applied AI." } };

const experiments = [
  { number: "001", icon: Network, title: "Multi-agent workflow explorer", description: "An interactive way to trace how specialized agents pass context, make decisions, and coordinate a task.", type: "AGENTIC SYSTEMS" },
  { number: "002", icon: BrainCircuit, title: "Brain connectivity visualization", description: "A visual sandbox for exploring relationships between brain regions and network-level patterns.", type: "NEUROSCIENCE" },
  { number: "003", icon: ScanSearch, title: "AI lead qualification demo", description: "A small demonstration of structured lead data and AI-assisted qualification logic.", type: "APPLIED AI" },
];

export default function LabPage() {
  return <div className="page-wrap lab-page"><div className="shell"><div className="page-intro"><span className="eyebrow"><span className="section-index">03</span> THE LAB</span><div className="page-intro-grid"><h1>Ideas in<br/><em>motion.</em></h1><p>A space for prototypes and interactive experiments. These concepts are planned; demonstrations will appear here as they take shape.</p></div></div><div className="lab-note"><span className="status-dot"/><span>EXPERIMENT LOG / 00</span><p>Nothing live yet. This page maps the directions being explored.</p></div><div className="lab-grid">{experiments.map(({number, icon: Icon, title, description, type}) => <article className="lab-card" key={number}><div className="lab-card-visual"><span className="lab-card-grid"/><Icon size={72} strokeWidth={0.7}/><span className="lab-visual-number">EXP / {number}</span></div><div className="lab-card-body"><div className="lab-card-meta"><span>{type}</span><span>PLANNED</span></div><h2>{title}</h2><p>{description}</p><span className="lab-card-foot">EXPERIMENT IN PREPARATION <ArrowUpRight size={16}/></span></div></article>)}</div><div className="lab-endnote"><span>✳</span><p>The lab is intentionally unfinished. Check back as experiments become interactive.</p></div></div></div>;
}
