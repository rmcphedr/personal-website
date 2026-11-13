"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Ryan McPhedrain, home" onClick={() => setOpen(false)}>
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <polygon points="16,1 29,8.5 29,23.5 16,31 3,23.5 3,8.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <polygon points="16,10.5 21,13.25 21,18.75 16,21.5 11,18.75 11,13.25" fill="currentColor" />
          </svg>
          <span>RYAN MCPHEDRAIN<span className="brand-dot">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/")) ? "nav-link active" : "nav-link"}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="header-availability"><span className="status-dot" /> OPEN TO CONVERSATIONS <ArrowUpRight size={13} /></Link>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
          {links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={18} /></Link>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
