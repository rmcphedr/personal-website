import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactStrip() {
  return <section className="contact-strip"><div className="shell contact-strip-inner"><div><span className="eyebrow"><span className="status-dot"/> OPEN TO NEW CONVERSATIONS</span><h2>Have a complex problem<br/><em>worth solving?</em></h2><p>Let’s explore how research thinking and practical AI can move it forward.</p></div><Link href="/contact" className="round-arrow" aria-label="Go to contact page"><ArrowUpRight size={32}/></Link></div></section>;
}
