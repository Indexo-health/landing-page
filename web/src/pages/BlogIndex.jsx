import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { getCopy } from "../i18n/index.js";

export default function BlogIndex({ lang = "en" }) {
  const copy = useMemo(() => getCopy(lang), [lang]);
  const basePath = `/${lang}`;
  const nav = [
    { label: copy.nav.home, href: basePath },
    { label: copy.nav.about, href: `${basePath}/about-us` },
    { label: copy.nav.blog, href: `${basePath}/blog` },
  ];
  const posts = copy.blog.posts || [];
  const featured = posts[0];

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
            <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">{copy.nav.blog}</div>
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{copy.blog.title}</h1>
            <p className="max-w-2xl text-base text-foreground/70">{copy.blog.intro}</p>
          </div>
          {featured ? (
            <div className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
              <div className="text-xs font-semibold tracking-[0.12em] text-foreground/60">{copy.blog.featured}</div>
              <div className="mt-3 text-lg font-semibold">{featured.title}</div>
              <div className="mt-2 text-sm text-foreground/70">{featured.excerpt}</div>
              <Link
                to={`${basePath}/blog/${featured.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                {copy.blog.readNow} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`${basePath}/blog/${post.slug}`}
              className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40"
            >
              <div className="text-xs font-semibold tracking-[0.12em] text-foreground/60">{post.tag}</div>
              <div className="mt-3 text-lg font-semibold">{post.title}</div>
              <div className="mt-2 text-sm text-foreground/70">{post.excerpt}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                {copy.blog.read} <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter copy={copy} lang={lang} />
    </div>
  );
}
