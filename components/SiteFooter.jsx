import React from "react";

export default function SiteFooter({ copy, lang }) {
  const basePath = `/${lang}`;
  const map = {
    About: `${basePath}/about-us`,
    Blog: `${basePath}/blog`,
    "Getting started": "https://docs.indexo.health/getting-started",
    FAQ: "https://docs.indexo.health/faq",
    "Terms of Service": "https://docs.indexo.health/terms-of-service",
    "Privacy Policy": "https://docs.indexo.health/privacy-policy",
    "关于我们": `${basePath}/about-us`,
    "博客": `${basePath}/blog`,
    "上手指南": "https://docs.indexo.health/getting-started",
    "服务条款": "https://docs.indexo.health/terms-of-service",
    "隐私政策": "https://docs.indexo.health/privacy-policy"
  };

  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div className="space-y-4">
          <div className="text-sm font-semibold">Indexo Health</div>
          <div className="text-sm text-foreground/70">{copy.footer.tagline}</div>
          <div className="text-sm text-foreground/70">
            {copy.footer.contactLabel}:{" "}
            <a href={`mailto:${copy.footer.contactEmail}`} className="font-semibold text-foreground hover:text-brand">
              {copy.footer.contactEmail}
            </a>
          </div>
          <div className="text-xs text-foreground/60">{copy.footer.disclaimer}</div>
          <div className="text-xs font-semibold text-foreground/60">{copy.footer.languageLabel}</div>
          <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
            {copy.footer.languages.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.footer.columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <div className="text-sm font-semibold">{col.title}</div>
              <div className="grid gap-2 text-sm text-foreground/70">
                {col.links.map((label) => (
                  <a key={label} href={map[label] || "#"} className="hover:text-brand">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
