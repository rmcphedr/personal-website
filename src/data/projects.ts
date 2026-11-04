export const categories = ["All", "Agentic AI", "Automation", "Data Science", "Research", "Applications"] as const;
export type Category = Exclude<(typeof categories)[number], "All">;

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  categories: Category[];
  technologies: string[];
  motif: "network" | "seed" | "brain" | "orbit" | "system";
  problem: string;
  approach: string;
  solution: string;
  architecture: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "ai-business-development-engine",
    title: "AI Business Development Engine",
    eyebrow: "01 / INTELLIGENT PIPELINES",
    summary: "An automated system for discovering, enriching, qualifying, and organizing business development leads with structured data pipelines and AI agents.",
    categories: ["Agentic AI", "Automation"],
    technologies: ["Python", "FastAPI", "PostgreSQL", "LLMs", "Apify"],
    motif: "network",
    problem: "Business development research involves collecting fragmented information, assessing fit, and keeping records organized across many sources.",
    approach: "Combine structured discovery and enrichment with agent-assisted qualification, while keeping the data flow observable and reviewable.",
    solution: "A lead pipeline concept that brings discovery, enrichment, qualification, and organization into one workflow.",
    architecture: ["Source discovery and extraction", "Structured enrichment pipeline", "AI-assisted qualification", "PostgreSQL-backed lead records", "FastAPI service layer"],
    outcome: "Designed to make lead research and triage more systematic. Quantified outcomes are not available for publication.",
  },
  {
    slug: "seedline",
    title: "Seedline",
    eyebrow: "02 / FUNDING DISCOVERY",
    summary: "An AI-powered platform designed to help women entrepreneurs discover, evaluate, and organize funding opportunities.",
    categories: ["Applications", "Agentic AI"],
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Windmill", "LLMs"],
    motif: "seed",
    problem: "Finding relevant funding opportunities can mean searching across scattered programs and comparing requirements by hand.",
    approach: "Organize opportunity data and use AI-assisted evaluation to make discovery and comparison easier to navigate.",
    solution: "A platform concept for discovering, evaluating, and organizing funding opportunities in one place.",
    architecture: ["Next.js application interface", "FastAPI service layer", "PostgreSQL opportunity data", "Windmill workflow automation", "LLM-assisted evaluation"],
    outcome: "Focused on a clearer funding discovery workflow. Usage and impact metrics have not been provided.",
  },
  {
    slug: "psychedelic-brain-connectivity-research",
    title: "Psychedelic Brain Connectivity Research",
    eyebrow: "03 / COMPUTATIONAL NEUROSCIENCE",
    summary: "Computational neuroscience research into functional brain connectivity, hemispheric asymmetry, and network changes associated with psychedelics.",
    categories: ["Research", "Data Science"],
    technologies: ["Python", "fMRI", "Machine Learning", "Statistical Analysis"],
    motif: "brain",
    problem: "Complex neuroimaging data needs careful analysis to characterize patterns of functional connectivity and network organization.",
    approach: "Apply computational and statistical methods to fMRI data, with attention to hemispheric asymmetry and connectivity patterns.",
    solution: "A research program investigating how brain network relationships change in the context of psychedelics.",
    architecture: ["fMRI data processing", "Connectivity analysis", "Statistical modeling", "Machine learning exploration", "Research visualization"],
    outcome: "Research themes and methods are shown here; specific findings and publication claims are intentionally omitted pending source material.",
  },
  {
    slug: "brand-ambassador-recruitment-platform",
    title: "Brand Ambassador Recruitment Platform",
    eyebrow: "04 / DATA-DRIVEN MATCHING",
    summary: "A data-driven platform for discovering, qualifying, and matching brand ambassadors with staffing agencies.",
    categories: ["Automation", "Applications"],
    technologies: ["Python", "PostgreSQL", "Automation", "AI"],
    motif: "orbit",
    problem: "Recruitment teams need to find potential ambassadors and evaluate relevant fit across a large, changing pool of people.",
    approach: "Structure discovery and qualification data, then support matching through repeatable automation and AI-assisted analysis.",
    solution: "A platform concept that connects ambassador discovery, qualification, and staffing matches.",
    architecture: ["Candidate discovery", "Structured profiles", "Qualification workflow", "Matching logic", "PostgreSQL data store"],
    outcome: "Built around a more organized recruitment process. Placement or performance metrics have not been provided.",
  },
  {
    slug: "personal-ai-agent-life-os",
    title: "Personal AI Agent / Life OS",
    eyebrow: "05 / PERSONAL SYSTEMS",
    summary: "An experimental personal productivity system integrating AI agents, memory, task management, and external tools.",
    categories: ["Agentic AI", "Applications"],
    technologies: ["Python", "LLMs", "Agent Orchestration", "APIs"],
    motif: "system",
    problem: "Personal information and tasks live across disconnected tools, making it hard to maintain context and act consistently.",
    approach: "Explore agent orchestration, memory, task management, and tool connections as parts of a cohesive personal workflow.",
    solution: "An experimental Life OS concept for coordinating tasks, context, and external services.",
    architecture: ["Agent orchestration", "Memory layer", "Task management", "External API connections", "Python application logic"],
    outcome: "An ongoing experimental direction; no productivity claims or completion status are asserted.",
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
