import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { index: string; eyebrow: string; title: string; description?: string; href?: string; linkLabel?: string };

export function SectionHeading({ index, eyebrow, title, description, href, linkLabel }: Props) {
  return <div className="section-heading"><div className="section-heading-main"><span className="eyebrow"><span className="section-index">{index}</span> {eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>{href && <Link href={href} className="text-link">{linkLabel} <ArrowUpRight size={17} /></Link>}</div>;
}
