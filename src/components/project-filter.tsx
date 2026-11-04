"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categories, projects, type Category } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.categories.includes(active as Category));

  return <><div className="filter-bar" role="group" aria-label="Filter projects by category">
    <div className="filter-buttons">{categories.map((category) => <button key={category} type="button" className={active === category ? "filter-button selected" : "filter-button"} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}</div>
    <span className="filter-count">SHOWING {String(visible.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
  </div><motion.div layout className="project-grid"><AnimatePresence mode="popLayout">{visible.map((project) => <motion.div key={project.slug} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}><ProjectCard project={project} number={projects.indexOf(project) + 1} /></motion.div>)}</AnimatePresence></motion.div></>;
}
