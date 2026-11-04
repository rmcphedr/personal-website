import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const title = "Ryan McPhedrain — Neuroscientist & AI Engineer";
const description = "Ryan McPhedrain builds intelligent systems that turn complex data into useful tools. Explore applied AI, data science, neuroscience research, and consulting projects.";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: { default: title, template: "%s | Ryan McPhedrain" },
  description,
  openGraph: { title, description, type: "website", images: process.env.NEXT_PUBLIC_SITE_URL ? ["/og-image.svg"] : undefined },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;
}
