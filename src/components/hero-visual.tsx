"use client";

import { motion } from "motion/react";

const nodes = [
  { x: 12, y: 36, s: 5 }, { x: 31, y: 20, s: 4 }, { x: 47, y: 44, s: 8 },
  { x: 68, y: 16, s: 5 }, { x: 83, y: 38, s: 4 }, { x: 76, y: 70, s: 6 },
  { x: 50, y: 78, s: 5 }, { x: 23, y: 70, s: 4 }, { x: 34, y: 52, s: 3 },
];
const edges = [[0,1],[0,7],[1,2],[1,3],[2,3],[2,4],[2,5],[2,6],[2,8],[3,4],[4,5],[5,6],[6,7],[7,8],[8,2]];

export function HeroVisual() {
  return <div className="hero-visual" aria-hidden="true"><div className="hero-visual-grid"/><div className="hero-visual-circle circle-one"/><div className="hero-visual-circle circle-two"/>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hero-network">
      {edges.map(([from,to], i) => <motion.line key={i} x1={nodes[from].x} y1={nodes[from].y} x2={nodes[to].x} y2={nodes[to].y} stroke="currentColor" strokeWidth="0.12" initial={{ opacity: 0 }} animate={{ opacity: 0.33 }} transition={{ delay: i * 0.04, duration: 0.6 }}/>) }
      {nodes.map((node,i) => <motion.circle key={i} cx={node.x} cy={node.y} r={node.s / 10} fill="currentColor" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: i === 2 ? 1 : 0.7, scale: 1 }} transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}/>) }
    </svg>
    <div className="hero-visual-center"><span className="visual-center-cross">✳</span><span>RESEARCH → SYSTEMS</span></div>
    <span className="hero-coordinate coordinate-top">FIG. 001 / CONNECTED THINKING</span><span className="hero-coordinate coordinate-bottom">DATA / SYSTEMS / HUMAN CONTEXT</span><span className="hero-coordinate coordinate-side">NEUROSCIENCE × ARTIFICIAL INTELLIGENCE</span>
  </div>;
}
