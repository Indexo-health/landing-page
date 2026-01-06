import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SiteHeader({ logoSrc, tagline, ctaLabel, ctaHref, nav }) {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={nav[0].href} className="inline-flex items-center gap-3">
          <div className="inline-flex items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 bg-white/80 px-3 py-2 shadow-sm">
            {logoSrc ? (
              <img src={logoSrc} alt="Indexo Health logo" className="h-12 w-auto object-contain" />
            ) : null}
          </div>
          <div className="text-sm text-foreground/70">{tagline}</div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-foreground/70 md:flex">
          {nav.map((item) => (
            <Link key={item.label} to={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand/90"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
