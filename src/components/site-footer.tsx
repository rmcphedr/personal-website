import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <div><Link href="/" className="footer-name">RYAN MCPHEDRAIN<span>.</span></Link><p>Research-minded engineering for useful AI.</p></div>
    <div className="footer-links"><Link href="/projects">Projects <ArrowUpRight size={14} /></Link><Link href="/about">About <ArrowUpRight size={14} /></Link><Link href="/lab">Lab <ArrowUpRight size={14} /></Link><Link href="/contact">Contact <ArrowUpRight size={14} /></Link></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} RYAN MCPHEDRAIN</span><span>BUILT WITH CURIOSITY &amp; INTENTION</span><a href="#top">BACK TO TOP ↑</a></div>
  </div></footer>;
}
