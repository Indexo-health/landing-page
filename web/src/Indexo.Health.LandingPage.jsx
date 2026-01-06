import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Moon,
  HeartPulse,
  Waves,
  Activity,
  FileText,
  Sparkles,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { getCopy } from "./i18n/index.js";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand/30 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground/80 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={cx("space-y-3", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <div className={cx("inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em]", align === "center" ? "justify-center" : "justify-start")}>
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="text-foreground/70">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={cx("font-display text-3xl font-semibold tracking-tight sm:text-4xl", align === "center" ? "mx-auto" : "")}>{title}</h2>
      {subtitle ? <p className="text-base text-foreground/70 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function FauxDeviceCard({ device }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-white/80">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10">
            <Moon className="h-4 w-4" />
          </span>
          <span>{device.brief}</span>
        </div>
        <Pill>{device.check}</Pill>
      </div>

      <div className="mt-4 rounded-2xl bg-black/20 p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-200">
            <Shield className="h-5 w-5" />
          </span>
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white">{device.lastNight}</div>
            <div className="text-xs text-white/75">{device.lastNightDesc}</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-white/10 p-3">
            <div className="flex items-center gap-2 text-[11px] text-white/80">
              <HeartPulse className="h-4 w-4" /> {device.hr}
            </div>
            <div className="mt-1 text-lg font-semibold text-white">58</div>
            <div className="text-[10px] text-white/60">{device.hrHint}</div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="flex items-center gap-2 text-[11px] text-white/80">
              <Waves className="h-4 w-4" /> {device.rr}
            </div>
            <div className="mt-1 text-lg font-semibold text-white">14</div>
            <div className="text-[10px] text-white/60">{device.rrHint}</div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="flex items-center gap-2 text-[11px] text-white/80">
              <Activity className="h-4 w-4" /> {device.spo2}
            </div>
            <div className="mt-1 text-lg font-semibold text-white">96</div>
            <div className="text-[10px] text-white/60">{device.spo2Hint}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-white/70">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> {device.insights}
        </span>
        <span className="inline-flex items-center gap-2">
          <FileText className="h-4 w-4" /> {device.pdf}
        </span>
      </div>
    </div>
  );
}

function PlaceholderRoomVisual({ assets, heroScene, device }) {
  if (assets && assets.heroBedroom) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 shadow-2xl">
        <img src={assets.heroBedroom} alt="Bedroom scene" className="h-[420px] w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="text-sm font-medium">{heroScene.scene}</div>
            <span className="text-xs text-white/80">{heroScene.hint}</span>
          </div>
        </div>
      </div>
    );
  }

  // Simple “warm bedroom” illustration (no external images)
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 shadow-2xl backdrop-blur">
      <div className="absolute inset-0 opacity-60">
        <svg viewBox="0 0 800 520" className="h-full w-full">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,0.10)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.01)" />
            </linearGradient>
          </defs>
          {/* Wall */}
          <rect x="0" y="0" width="800" height="520" fill="url(#g1)" />
          {/* Floor */}
          <rect x="0" y="340" width="800" height="180" fill="url(#g2)" />
          {/* Bed */}
          <rect x="120" y="240" width="520" height="130" rx="26" fill="rgba(255,255,255,0.14)" />
          <rect x="150" y="270" width="460" height="70" rx="22" fill="rgba(0,0,0,0.18)" />
          {/* Pad hint under mattress */}
          <rect x="170" y="320" width="420" height="14" rx="8" fill="rgba(255,255,255,0.18)" />
          <rect x="170" y="320" width="220" height="14" rx="8" fill="rgba(16,185,129,0.35)" />
          {/* Nightstand */}
          <rect x="645" y="250" width="95" height="120" rx="18" fill="rgba(255,255,255,0.12)" />
          {/* Ring */}
          <circle cx="692" cy="278" r="18" fill="rgba(255,255,255,0.18)" />
          <circle cx="692" cy="278" r="10" fill="rgba(0,0,0,0.18)" />
          {/* Phone */}
          <rect x="630" y="305" width="130" height="210" rx="26" fill="rgba(0,0,0,0.30)" />
          <rect x="642" y="325" width="106" height="168" rx="16" fill="rgba(255,255,255,0.08)" />
          <rect x="654" y="338" width="82" height="40" rx="12" fill="rgba(16,185,129,0.22)" />
          <rect x="654" y="385" width="82" height="18" rx="9" fill="rgba(255,255,255,0.12)" />
          <rect x="654" y="408" width="82" height="18" rx="9" fill="rgba(255,255,255,0.12)" />
        </svg>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">{heroScene.scene}</div>
          <span className="text-xs text-foreground/70">{heroScene.hint}</span>
        </div>
        <div className="mt-4">
          <FauxDeviceCard device={device} />
        </div>
      </div>
    </div>
  );
}

function AppPreviewCard({ src, label }) {
  if (!src) return null;
  return (
    <div className="rounded-3xl border border-foreground/10 bg-white/80 p-4 shadow-sm">
      <div className="text-xs text-foreground/70">{label}</div>
      <div className="mt-3 overflow-hidden rounded-2xl border border-foreground/10 bg-white">
        <img src={src} alt="App screenshot" className="h-72 w-full object-cover" />
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-white/80 p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs text-foreground/70">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <div className="font-display mt-2 text-3xl font-semibold tracking-tight">{value}</div>
      {hint ? <div className="mt-1 text-xs text-foreground/60">{hint}</div> : null}
    </div>
  );
}

function FeatureLine({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-foreground/10 bg-white/80 p-4 shadow-sm">
      <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-foreground/70">{desc}</div>
      </div>
    </div>
  );
}

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full rounded-2xl border border-foreground/10 bg-white/80 p-4 text-left shadow-sm transition hover:bg-brand/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="text-sm font-semibold">{q}</div>
          {open ? <div className="text-sm text-foreground/70">{a}</div> : null}
        </div>
        <div className="mt-0.5 text-foreground/60">
          <HelpCircle className={cx("h-5 w-5", open ? "opacity-100" : "opacity-70")} />
        </div>
      </div>
    </button>
  );
}

export default function LandingPageNightlyHealthCheck({ lang = "en" }) {
  const [faqOpen, setFaqOpen] = useState(0);
  const assets = {
    logo: "/assets/indexohealth_logo_400.png",
    heroBedroom: "/assets/heroBedroom.jpg",
    appScreenshot: "/assets/appScreenshot.PNG",
    ringCloseup: "/assets/ringCloseup.png",
    ringOnFinger: "/assets/SpO2_ring_on_finger.JPG",
    padUnderMattress: "/assets/padUnderMattress_1.jpg",
    padUnderMattressAlt: "/assets/padUnderMattress_2.jpg",
    padRingCombo: "/assets/Mat+SpO2Ring.JPG",
  };
  const copy = useMemo(() => getCopy(lang), [lang]);
  const basePath = `/${lang}`;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = copy.lang;
      document.documentElement.dir = copy.dir || "ltr";
    }
  }, [copy.lang, copy.dir]);

  const problemStats = copy.problem.stats.map((s, idx) => ({
    icon: [Activity, FileText, Shield][idx],
    label: s.label,
    value: s.value,
    hint: s.hint,
  }));
  const valueFeatureIcons = [Shield, Sparkles, Activity];
  const modelStepIcons = [Moon, Activity, FileText];
  const nav = [
    { label: copy.nav.home, href: basePath },
    { label: copy.nav.about, href: `${basePath}/about-us` },
    { label: copy.nav.blog, href: `${basePath}/blog` },
  ];

  const motionIn = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-surface via-background to-background text-foreground">
      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-brand/15 via-brand-2/10 to-transparent" />

      <SiteHeader
        logoSrc={assets.logo}
        tagline={copy.nav.tag}
        ctaLabel={copy.cta.primary}
        ctaHref={`${basePath}/#pricing`}
        nav={nav}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...motionIn} className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>{copy.hero.pill1}</Pill>
                <Pill>{copy.hero.pill2}</Pill>
                <Pill>{copy.hero.pill3}</Pill>
              </div>

              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                {copy.hero.headline}
              </h1>

              <p className="max-w-xl text-base text-foreground/70 sm:text-lg">{copy.hero.sub}</p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow hover:bg-brand/90"
                >
                  {copy.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand/30 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-brand/10"
                >
                  {copy.hero.ctaSecondary}
                  <ArrowRight className="h-4 w-4 opacity-70" />
                </a>
              </div>

              <div className="rounded-3xl border border-brand/20 bg-white/70 p-5 shadow-sm">
                <div className="text-base font-semibold">{copy.hero.slogan}</div>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Moon className="h-4 w-4" />
                    </span>
                    {copy.trust.a}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Shield className="h-4 w-4" />
                    </span>
                    {copy.trust.b}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <FileText className="h-4 w-4" />
                    </span>
                    {copy.trust.c}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...motionIn} transition={{ ...motionIn.transition, delay: 0.05 }} className="space-y-4">
              <PlaceholderRoomVisual assets={assets} heroScene={copy.heroScene} device={copy.device} />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-foreground/10 bg-white/80 p-4">
                  <div className="text-xs text-foreground/70">{copy.hero.side.systemLabel}</div>
                  <div className="mt-2 text-sm font-semibold">
                    {copy.hero.side.systemValue}
                  </div>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-white/80 p-4">
                  <div className="text-xs text-foreground/70">{copy.hero.side.careLabel}</div>
                  <div className="mt-2 text-sm font-semibold">
                    {copy.hero.side.careValue}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section id="problem" className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div {...motionIn} className="space-y-6">
              <SectionTitle eyebrow={copy.problem.eyebrow} title={copy.problem.title} subtitle={copy.problem.sub} />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {problemStats.map((s, idx) => (
                  <motion.div key={idx} {...motionIn} transition={{ ...motionIn.transition, delay: 0.03 * idx }}>
                    <Stat {...s} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...motionIn} className="grid gap-3">
              {copy.problem.scenarios.map((q, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/60 p-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground/5">
                    {React.createElement([Waves, Moon, HeartPulse][idx], { className: "h-5 w-5 text-foreground/70" })}
                  </span>
                  <div className="text-sm font-semibold">“{q}”</div>
                </div>
              ))}

            </motion.div>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section id="solution" className="py-14 sm:py-20">
        <Container>
          <div className="space-y-8">
            <motion.div {...motionIn}>
              <SectionTitle eyebrow={copy.solution.eyebrow} title={copy.solution.title} subtitle={copy.solution.sub} />
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Pad */}
              <motion.div {...motionIn} className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/60 p-6">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-foreground/5 blur-2xl" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">{copy.solution.pad.title}</div>
                    <div className="mt-1 text-xs text-foreground/70">{copy.solution.pad.subtitle}</div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-foreground/5 px-3 py-2 text-xs text-foreground/70">
                    <Shield className="h-4 w-4" /> {copy.solution.pad.footer}
                  </span>
                </div>
                {assets.padUnderMattress ? (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-foreground/10 shadow-sm">
                    <img
                      src={assets.padUnderMattress}
                      alt="Pad under mattress"
                      className="h-52 w-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="mt-5 grid gap-3">
                  {copy.solution.pad.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-foreground/10 bg-background/70 p-4">
                  <div className="text-xs text-foreground/70">{copy.solution.pad.see.label}</div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-foreground/[0.04] p-3">
                      <div className="text-[11px] text-foreground/70">{copy.solution.pad.see.items[0].label}</div>
                      <div className="text-lg font-semibold">{copy.solution.pad.see.items[0].value}</div>
                    </div>
                    <div className="rounded-xl bg-foreground/[0.04] p-3">
                      <div className="text-[11px] text-foreground/70">{copy.solution.pad.see.items[1].label}</div>
                      <div className="text-lg font-semibold">{copy.solution.pad.see.items[1].value}</div>
                    </div>
                    <div className="rounded-xl bg-foreground/[0.04] p-3">
                      <div className="text-[11px] text-foreground/70">{copy.solution.pad.see.items[2].label}</div>
                      <div className="text-lg font-semibold">{copy.solution.pad.see.items[2].value}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ring */}
              <motion.div {...motionIn} className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/60 p-6">
                <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-foreground/5 blur-2xl" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">{copy.solution.ring.title}</div>
                    <div className="mt-1 text-xs text-foreground/70">{copy.solution.ring.subtitle}</div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-foreground/5 px-3 py-2 text-xs text-foreground/70">
                    <Activity className="h-4 w-4" /> {copy.solution.ring.footer}
                  </span>
                </div>
                {assets.ringCloseup ? (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-foreground/10 shadow-sm">
                    <img
                      src={assets.ringCloseup}
                      alt="Ring closeup"
                      className="h-52 w-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="mt-5 grid gap-3">
                  {copy.solution.ring.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-foreground/10 bg-background/70 p-4">
                  <div className="text-xs text-foreground/70">{copy.solution.ring.see.label}</div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-foreground/[0.04] p-3">
                      <div className="text-[11px] text-foreground/70">{copy.solution.ring.see.items[0].label}</div>
                      <div className="text-lg font-semibold">{copy.solution.ring.see.items[0].value}</div>
                    </div>
                    <div className="rounded-xl bg-foreground/[0.04] p-3">
                      <div className="text-[11px] text-foreground/70">{copy.solution.ring.see.items[1].label}</div>
                      <div className="text-lg font-semibold">{copy.solution.ring.see.items[1].value}</div>
                    </div>
                    <div className="rounded-xl bg-foreground/[0.04] p-3">
                      <div className="text-[11px] text-foreground/70">{copy.solution.ring.see.items[2].label}</div>
                      <div className="text-lg font-semibold">{copy.solution.ring.see.items[2].value}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div {...motionIn} className="rounded-3xl border border-foreground/10 bg-white/70 p-6 shadow-sm">
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-3xl border border-foreground/10 bg-background/70 p-5">
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Shield className="h-4 w-4" />
                    {copy.solution.compare[0].label}
                  </div>
                  <div className="mt-3 text-lg font-semibold">
                    {copy.solution.compare[0].title}
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">
                    {copy.solution.compare[0].desc}
                  </div>
                </div>
                <div className="rounded-3xl border border-foreground/10 bg-background/70 p-5">
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Activity className="h-4 w-4" />
                    {copy.solution.compare[1].label}
                  </div>
                  <div className="mt-3 text-lg font-semibold">
                    {copy.solution.compare[1].title}
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">
                    {copy.solution.compare[1].desc}
                  </div>
                </div>
                <div className="rounded-3xl border border-foreground/10 bg-background/70 p-5">
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Sparkles className="h-4 w-4" />
                    {copy.solution.compare[2].label}
                  </div>
                  <div className="mt-3 text-lg font-semibold">
                    {copy.solution.compare[2].title}
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">
                    {copy.solution.compare[2].desc}
                  </div>
                </div>
              </div>

              {(assets.padRingCombo || assets.padUnderMattressAlt || assets.ringOnFinger) ? (
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {assets.padRingCombo ? (
                    <div className="overflow-hidden rounded-2xl border border-foreground/10">
                      <img src={assets.padRingCombo} alt="Pad and ring" className="h-48 w-full object-cover" />
                    </div>
                  ) : null}
                  {assets.padUnderMattressAlt ? (
                    <div className="overflow-hidden rounded-2xl border border-foreground/10">
                      <img src={assets.padUnderMattressAlt} alt="Pad under mattress" className="h-48 w-full object-cover" />
                    </div>
                  ) : null}
                  {assets.ringOnFinger ? (
                    <div className="overflow-hidden rounded-2xl border border-foreground/10">
                      <img src={assets.ringOnFinger} alt="Ring on finger" className="h-48 w-full object-cover" />
                    </div>
                  ) : null}
                </div>
              ) : null}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Value */}
      <section id="value" className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div {...motionIn}>
              <SectionTitle eyebrow={copy.value.eyebrow} title={copy.value.title} subtitle={copy.value.sub} />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {copy.value.grid.map((item, i) => (
                  <div key={i} className="rounded-3xl border border-foreground/10 bg-white/80 p-5 shadow-sm">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="mt-2 text-sm text-foreground/70">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {copy.value.features.map((f, i) => (
                  <FeatureLine key={i} icon={valueFeatureIcons[i] || Shield} title={f.title} desc={f.desc} />
                ))}
              </div>
            </motion.div>

            <motion.div {...motionIn} className="space-y-4">
              <div className="rounded-3xl border border-foreground/10 bg-white/80 p-4 shadow-sm">
                <div className="text-xs text-foreground/70">{copy.value.evidence}</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    assets.appScreenshot,
                    assets.padRingCombo,
                    assets.ringOnFinger,
                    assets.padUnderMattressAlt,
                  ].filter(Boolean).map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-2xl border border-foreground/10 bg-white">
                      <img src={src} alt="Evidence" className="h-40 w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <AppPreviewCard src={assets.appScreenshot} label={copy.preview.cardLabel} />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* AI Preview */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <motion.div {...motionIn}>
              <SectionTitle eyebrow={copy.preview.eyebrow} title={copy.preview.title} subtitle={copy.preview.sub} />
              <div className="mt-6 space-y-4">
                {copy.preview.chats.map((c, i) => (
                  <div key={i} className="rounded-3xl border border-foreground/10 bg-white/80 p-5 shadow-sm">
                    <div className="text-xs text-foreground/60">{copy.preview.youAsk}</div>
                    <div className="mt-2 text-sm font-semibold">{c.q}</div>
                    <div className="mt-4 text-xs text-foreground/60">{copy.preview.weRespond}</div>
                    <div className="mt-2 text-sm text-foreground/70">{c.a}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...motionIn} className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
              <div className="text-sm font-semibold">{copy.preview.certaintyTitle}</div>
              <div className="mt-4 grid gap-3">
                {copy.preview.certaintyItems.map((item, idx) => {
                  const Icon = [Shield, Sparkles, FileText][idx] || Shield;
                  return (
                    <div key={item.label} className="rounded-2xl border border-foreground/10 bg-white p-4">
                      <div className="flex items-center gap-2 text-xs text-foreground/70">
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm font-semibold">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Care model & pricing */}
      <section id="pricing" className="py-14 sm:py-20">
        <Container>
          <div className="space-y-8">
            <motion.div {...motionIn}>
              <SectionTitle eyebrow={copy.model.eyebrow} title={copy.model.title} subtitle={copy.model.sub} />
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {copy.model.steps.map((s, idx) => (
                <motion.div key={idx} {...motionIn} transition={{ ...motionIn.transition, delay: idx * 0.03 }}>
                  <div className="h-full rounded-3xl border border-foreground/10 bg-background/60 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5">
                      {React.createElement(modelStepIcons[idx] || Activity, { className: "h-6 w-6 text-foreground/70" })}
                    </div>
                    <div className="mt-4 text-sm font-semibold">{idx + 1}. {s.title}</div>
                    <div className="mt-2 text-sm text-foreground/70">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...motionIn} className="grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">{copy.model.pricingTitle}</div>
                    <div className="mt-2 text-sm text-foreground/70">{copy.model.pricingDesc}</div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-foreground/5 px-3 py-2 text-xs text-foreground/70">
                    <Shield className="h-4 w-4" /> {copy.model.pricingBadge}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {copy.model.includes.map((item) => (
                    <div key={item} className="rounded-2xl bg-background/60 p-4">
                      <div className="text-xs text-foreground/70">{copy.model.includesLabel}</div>
                      <div className="mt-1 text-sm font-semibold">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 rounded-3xl border border-foreground/10 bg-background/60 p-6">
                <div className="text-sm font-semibold">{copy.model.nextStepTitle}</div>
                <div className="mt-2 text-sm text-foreground/70">{copy.model.nextStepBody}</div>
                <div className="mt-5 space-y-3">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow hover:opacity-90"
                    onClick={(e) => e.preventDefault()}
                  >
                    {copy.model.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="text-xs text-foreground/60">{copy.model.prototypeNote}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Trust & FAQ */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div {...motionIn}>
              <SectionTitle eyebrow={copy.proof.eyebrow} title={copy.proof.title} subtitle={copy.proof.sub} />

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BadgeCheck className="h-5 w-5 text-foreground/70" />
                    {copy.proof.placeholdersTitle}
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/70">
                    {copy.proof.placeholders.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
                  <div className="text-sm font-semibold">{copy.proof.implementedTitle}</div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-foreground/70">
                    {copy.proof.implemented.map((t, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...motionIn} className="space-y-4">
              {copy.faq.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  q={f.q}
                  a={f.a}
                  open={faqOpen === idx}
                  onToggle={() => setFaqOpen((v) => (v === idx ? -1 : idx))}
                />
              ))}

              <div className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-sm">
                <div className="text-sm font-semibold">{copy.proof.nextBrandTitle}</div>
                <div className="mt-2 text-sm text-foreground/70">{copy.proof.nextBrandBody}</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <SiteFooter copy={copy} lang={lang} />
    </div>
  );
}
