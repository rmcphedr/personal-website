import type { Project } from "@/data/projects";

export function ProjectVisual({ motif, large = false }: { motif: Project["motif"]; large?: boolean }) {
  return <div className={`project-visual visual-${motif}${large ? " visual-large" : ""}`} aria-hidden="true">
    <div className="visual-grid" />
    {motif === "network" && <div className="network-art"><span className="network-line line-a"/><span className="network-line line-b"/><span className="network-line line-c"/><span className="network-node node-a"/><span className="network-node node-b"/><span className="network-node node-c"/><span className="network-node node-d"/><span className="network-node node-e"/></div>}
    {motif === "seed" && <div className="seed-art"><span className="seed-orbit orbit-one"/><span className="seed-orbit orbit-two"/><span className="seed-orbit orbit-three"/><span className="seed-core"/><span className="seed-tick tick-one"/><span className="seed-tick tick-two"/></div>}
    {motif === "brain" && <div className="brain-art"><span className="brain-half half-left"/><span className="brain-half half-right"/><span className="brain-wave wave-one"/><span className="brain-wave wave-two"/><span className="brain-wave wave-three"/></div>}
    {motif === "orbit" && <div className="orbit-art"><span className="orbit-ring ring-one"/><span className="orbit-ring ring-two"/><span className="orbit-ring ring-three"/><span className="orbit-point point-one"/><span className="orbit-point point-two"/><span className="orbit-point point-three"/></div>}
    {motif === "system" && <div className="system-art"><span className="system-block block-one"/><span className="system-block block-two"/><span className="system-block block-three"/><span className="system-block block-four"/><span className="system-core"/></div>}
    <span className="visual-caption">RM / {motif.toUpperCase()} SYSTEM</span><span className="visual-cross">+</span>
  </div>;
}
