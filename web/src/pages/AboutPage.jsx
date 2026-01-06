import React, { useEffect, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { getCopy } from "../i18n/index.js";

const Section = ({ eyebrow, title, body }) => (
  <section className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
    <div className="text-xs font-semibold tracking-[0.12em] text-foreground/60">{eyebrow}</div>
    <h2 className="font-display mt-3 text-2xl font-semibold">{title}</h2>
    <p className="mt-2 text-sm text-foreground/70">{body}</p>
  </section>
);

export default function AboutPage({ lang = "en" }) {
  const copy = useMemo(() => getCopy(lang), [lang]);
  const basePath = `/${lang}`;
  const nav = [
    { label: copy.nav.home, href: basePath },
    { label: copy.nav.about, href: `${basePath}/about-us` },
    { label: copy.nav.blog, href: `${basePath}/blog` },
  ];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = copy.lang;
      document.documentElement.dir = copy.dir || "ltr";
    }
  }, [copy.lang, copy.dir]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-background to-background text-foreground">
      <SiteHeader
        logoSrc="/assets/indexohealth_logo_400.png"
        tagline={copy.nav.tag}
        ctaLabel={copy.cta.primary}
        ctaHref={`${basePath}/#pricing`}
        nav={nav}
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">{copy.about.eyebrow}</div>
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{copy.about.title}</h1>
            <p className="max-w-2xl text-base text-foreground/70">{copy.about.intro}</p>
            <Link to={`${basePath}/blog`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
              {copy.about.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
            <div className="text-xs font-semibold tracking-[0.12em] text-foreground/60">{copy.about.focusTitle}</div>
            <div className="mt-4 space-y-3 text-sm text-foreground/70">
              {copy.about.focus.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className="font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {copy.about.sections.map((section) => (
            <Section key={section.title} eyebrow={section.eyebrow} title={section.title} body={section.body} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
          <div className="text-sm font-semibold">{copy.footer.contactLabel}</div>
          <div className="mt-2 text-sm text-foreground/70">{copy.footer.contactEmail}</div>
        </div>
      </div>

      <SiteFooter copy={copy} lang={lang} />
    </div>
  );
}
