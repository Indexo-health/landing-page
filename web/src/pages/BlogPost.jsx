import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { getCopy } from "../i18n/index.js";

export default function BlogPost({ lang = "en" }) {
  const { slug } = useParams();
  const copy = useMemo(() => getCopy(lang), [lang]);
  const basePath = `/${lang}`;
  const nav = [
    { label: copy.nav.home, href: basePath },
    { label: copy.nav.about, href: `${basePath}/about-us` },
    { label: copy.nav.blog, href: `${basePath}/blog` },
  ];
  const post = (copy.blog.posts || []).find((item) => item.slug === slug);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = copy.lang;
      document.documentElement.dir = copy.dir || "ltr";
    }
  }, [copy.lang, copy.dir]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-surface via-background to-background text-foreground">
        <SiteHeader
          logoSrc="/assets/indexohealth_logo_400.png"
          tagline={copy.nav.tag}
          ctaLabel={copy.cta.primary}
          ctaHref={`${basePath}/#pricing`}
          nav={nav}
        />
        <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Link to={`${basePath}/blog`} className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-brand">
            <ArrowLeft className="h-4 w-4" />
            {copy.blog.backToBlog}
          </Link>
          <div className="mt-8 text-xl font-semibold">{copy.blog.notFound}</div>
        </div>
        <SiteFooter copy={copy} lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-background to-background text-foreground">
      <SiteHeader
        logoSrc="/assets/indexohealth_logo_400.png"
        tagline={copy.nav.tag}
        ctaLabel={copy.cta.primary}
        ctaHref={`${basePath}/#pricing`}
        nav={nav}
      />
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to={`${basePath}/blog`} className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-brand">
          <ArrowLeft className="h-4 w-4" />
          {copy.blog.backToBlog}
        </Link>
        <h1 className="font-display mt-6 text-3xl font-semibold sm:text-4xl">{post.title}</h1>
        <div className="mt-4 space-y-4 text-base text-foreground/70">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <SiteFooter copy={copy} lang={lang} />
    </div>
  );
}
