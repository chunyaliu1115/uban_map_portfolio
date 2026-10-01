import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import noteRoundaboutCover from "@/assets/note-roundabout-cover.jpg.asset.json";
import noteCanclaux from "@/assets/note-roundabout-canclaux.jpg.asset.json";
import note116e from "@/assets/note-roundabout-116e.jpg.asset.json";
import noteCousteau from "@/assets/note-roundabout-cousteau.jpg.asset.json";
import noteVannes from "@/assets/note-roundabout-vannes.jpg.asset.json";
import noteCarre from "@/assets/note-roundabout-carre.jpg.asset.json";
import noteArmor from "@/assets/note-roundabout-armor.jpg.asset.json";
import noteTrafficVideo from "@/assets/note-roundabout-traffic.mov.asset.json";
import noteCastleTowers from "@/assets/note-castle-towers.jpg.asset.json";
import noteCastleMiroir from "@/assets/note-castle-miroir.jpg.asset.json";
import noteCastleMuseum from "@/assets/note-castle-museum.jpg.asset.json";
import noteCastleMap from "@/assets/note-castle-map.jpg.asset.json";
import noteCastleClip1 from "@/assets/note-castle-clip1.mp4.asset.json";
import noteCastleClip2 from "@/assets/note-castle-clip2.mp4.asset.json";
import noteCastleClip3 from "@/assets/note-castle-clip3.mp4.asset.json";
import noteTaiwanTainan from "@/assets/note-taiwan-tainan-street.jpeg.asset.json";
import noteTaiwanNtu from "@/assets/note-taiwan-ntu.jpeg.asset.json";
import noteTaiwanSteelRoofs from "@/assets/note-taiwan-steel-roofs.jpeg.asset.json";
import noteTaiwanTaichung from "@/assets/note-taiwan-taichung-v2.jpeg.asset.json";
import noteTaiwanKaohsiung from "@/assets/note-taiwan-kaohsiung.jpeg.asset.json";
import noteTaiwanZhanghua from "@/assets/note-taiwan-zhanghua-street.jpeg.asset.json";
import projectTransit from "@/assets/project-transit-intermodal.jpg";
import projectTransitPdf from "@/assets/Carte_Nantes_Mobilite-2.pdf.asset.json";
import projectFibreMap from "@/assets/project-fibre-map-v4.jpeg.asset.json";
import projectFibrePdf from "@/assets/Analyse_Fibre_Nantes-3.pdf.asset.json";
import projectSeniorsMap from "@/assets/project-seniors-map-v2.jpg.asset.json";
import projectSeniorsPdf from "@/assets/Nantes_Accessibilite_Seniors-v2.pdf.asset.json";
import projectChildcareMap from "@/assets/project-creche-nantes-2032-v2.jpeg.asset.json";
import projectChildcarePdf from "@/assets/Creche_Nantes_2032-2.pdf.asset.json";
import projectTainanBusMap from "@/assets/project-tainan-bus-gap.jpeg.asset.json";
import projectTainanBusPdf from "@/assets/Tainan_Bus_Gap.pdf.asset.json";
import projectTainanMap from "@/assets/project-tainan-2036.jpeg.asset.json";
import projectTainanPdf from "@/assets/Population_change_Tainan2036.pdf.asset.json";

import { dictionaries, LANGS, projectKeys, inboxCopy, type Lang } from "@/lib/i18n";
import { CommentBoard } from "@/components/CommentBoard";
import ogCover from "@/assets/og-cover.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "C-Y. Esther LIU 劉君雅 — Spatial Data Analyst & Urban Planner (中 / EN / FR)",
      },
      {
        property: "og:title",
        content: "C-Y. Esther LIU 劉君雅 — Spatial Data Analyst & Urban Planner (中 / EN / FR)",
      },
      {
        name: "description",
        content: "Spatial data, GIS and urban-planning portfolio by C-Y. Esther Liu, with projects and urban notes in Chinese, English and French.",
      },
      {
        property: "og:description",
        content: "GIS, spatial analysis and urban-planning stories by C-Y. Esther Liu.",
      },
      { property: "og:image", content: `https://chunyaliu.com${ogCover.url}` },
      { name: "twitter:image", content: `https://chunyaliu.com${ogCover.url}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projectVisuals: Record<
  (typeof projectKeys)[number],
  { image: string; tint: string; hoverTint: string }
> = {
  fibre: { image: projectFibreMap.url, tint: "bg-teal-soft/40", hoverTint: "group-hover:bg-teal-soft/70" },
  transit: { image: projectTransit, tint: "bg-rose/40", hoverTint: "group-hover:bg-rose/70" },
  seniors: { image: projectSeniorsMap.url, tint: "bg-ochre/40", hoverTint: "group-hover:bg-ochre/70" },
  childcare: { image: projectChildcareMap.url, tint: "bg-rose/35", hoverTint: "group-hover:bg-rose/60" },
  tainanBus: { image: projectTainanBusMap.url, tint: "bg-ochre/30", hoverTint: "group-hover:bg-ochre/55" },
  tainan: { image: projectTainanMap.url, tint: "bg-teal-soft/40", hoverTint: "group-hover:bg-teal-soft/70" },
};

const STORAGE_KEY = "cg-lang";

type ProjectRegion = "all" | "france" | "taiwan";

const roundaboutImages = [
  noteCanclaux.url,
  note116e.url,
  noteCousteau.url,
  noteVannes.url,
  noteCarre.url,
  noteArmor.url,
];

const noteImages = [noteRoundaboutCover.url, noteCastleMiroir.url, noteTaiwanZhanghua.url];
const noteThreadKeys = ["note-0", "note-1", "note-taiwan-postwar"];

const taiwanMedia = [
  noteTaiwanTainan.url,
  noteTaiwanNtu.url,
  noteTaiwanSteelRoofs.url,
  noteTaiwanTaichung.url,
  noteTaiwanKaohsiung.url,
];

const castleMedia = [
  noteCastleTowers.url,
  noteCastleClip1.url,
  noteCastleClip3.url,
  noteCastleClip2.url,
  noteCastleMuseum.url,
];

const castleMapPoints = [
  { x: 42, y: 30, query: "Château des ducs de Bretagne Nantes" },
  { x: 30, y: 45, query: "Musée d'histoire de Nantes" },
  { x: 40, y: 83, query: "Miroir d'eau Nantes" },
  { x: 73, y: 38, query: "Duchesse Anne Château tram Nantes" },
];

const roundaboutLocations = [
  { x: 30, y: 46, query: "Place Canclaux Nantes" },
  { x: 44, y: 43, query: "Place du 116ème Régiment d'Infanterie Nantes" },
  { x: 72, y: 30, query: "Place du Commandant Cousteau, 44300 Nantes, France" },
  { x: 37, y: 26, query: "Rond-Point de Vannes Nantes" },
  { x: 33, y: 74, query: "Rond Point Carré Rezé" },
  { x: 9, y: 52, query: "Rond Point d'Armor Nantes" },
];

function getGoogleMapsUrl(query: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [showFibre, setShowFibre] = useState(false);
  const [showTransit, setShowTransit] = useState(false);
  const [showSeniors, setShowSeniors] = useState(false);
  const [showChildcare, setShowChildcare] = useState(false);
  const [showTainanBus, setShowTainanBus] = useState(false);
  const [showTainan, setShowTainan] = useState(false);
  const [projectRegion, setProjectRegion] = useState<ProjectRegion>("all");
  const [workMenuOpen, setWorkMenuOpen] = useState(false);
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [activeLocation, setActiveLocation] = useState(0);

  useEffect(() => {
    if (!showFibre && !showTransit && !showSeniors && !showChildcare && !showTainanBus && !showTainan && activeNote === null)
      return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowFibre(false);
        setShowTransit(false);
        setShowSeniors(false);
        setShowChildcare(false);
        setShowTainanBus(false);
        setShowTainan(false);
        setActiveNote(null);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showFibre, showTransit, showSeniors, showChildcare, showTainanBus, showTainan, activeNote]);

  // Close the nav work-dropdown on outside click
  useEffect(() => {
    if (!workMenuOpen) return;
    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest("[data-work-menu]")) setWorkMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [workMenuOpen]);

  // English is the default; only a stored choice overrides it
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in dictionaries) setLang(stored);
  }, []);

  const t = dictionaries[lang];
  const visibleKeys = projectKeys.filter(
    (k) => projectRegion === "all" || t.work.projects[k].region === projectRegion,
  );
  const roundaboutNote = t.notes.items[0];
  const roundaboutSections = roundaboutNote?.sections ?? [];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [t]);

  function changeLang(next: Lang) {
    setLang(next);
    localStorage.setItem(STORAGE_KEY, next);
  }



  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased">
      {/* faint survey grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1c2622 1px, transparent 1px), linear-gradient(to bottom, #1c2622 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/70 backdrop-blur-md">
        <div className="mx-auto grid min-h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 px-4 py-3 sm:flex sm:justify-between sm:px-6 sm:py-0">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 sm:flex sm:justify-between">
            <div className="flex min-w-0 items-baseline gap-2">
              <span className="font-serif text-sm font-semibold italic tracking-tight sm:text-lg">
                C-Y. Esther LIU
              </span>
              <span className="hidden font-mono text-[11px] tracking-[0.15em] text-muted-ink lg:inline">
                {t.nav.tagline}
              </span>
            </div>
            <nav className="col-span-2 row-start-2 flex min-w-0 items-center justify-between gap-3 font-mono text-[10px] tracking-[0.1em] sm:row-auto sm:justify-start sm:gap-7 sm:text-[11px] sm:tracking-[0.12em]">
              <div data-work-menu className="relative">
                <button
                  type="button"
                  onClick={() => setWorkMenuOpen((v) => !v)}
                  className="flex items-center gap-1 text-muted-ink transition-colors hover:text-ink"
                >
                  {t.nav.work}
                  <svg
                    className={`h-2 w-2 transition-transform ${workMenuOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 8 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M1 2.5L4 5.5L7 2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {workMenuOpen && (
                  <div className="absolute left-0 top-full z-40 mt-2 min-w-[120px] rounded-lg border border-line bg-paper/95 py-1 shadow-[0_8px_24px_-12px_rgba(28,38,34,0.25)] backdrop-blur-md">
                    {(["all", "france", "taiwan"] as ProjectRegion[]).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          setProjectRegion(r);
                          setWorkMenuOpen(false);
                          document
                            .getElementById("work")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className={`block w-full px-4 py-1.5 text-left font-mono text-[10px] tracking-[0.12em] transition-colors ${
                          projectRegion === r
                            ? "bg-teal-soft/50 text-teal"
                            : "text-muted-ink hover:bg-mist hover:text-ink"
                        }`}
                      >
                        {t.work.filter[r]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a href="#notes" className="text-muted-ink transition-colors hover:text-ink">
                {t.nav.notes}
              </a>
              <a href="#about" className="text-muted-ink transition-colors hover:text-ink">
                {t.nav.profile}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink px-3 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {t.nav.contact}
              </a>
            </nav>
            <div className="flex shrink-0 items-center justify-end">
              <div
                role="group"
                aria-label="Language / Langue / 語言"
                className="flex items-center overflow-hidden rounded-full border border-line bg-paper/60"
              >
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => changeLang(l.code)}
                    aria-pressed={lang === l.code}
                    className={`px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] transition-colors ${
                      lang === l.code
                        ? "bg-ink text-paper"
                        : "text-muted-ink hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 md:pt-24">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="cg-rise font-mono text-[11px] tracking-[0.25em] text-teal">
                {t.hero.eyebrow}
              </p>
              <h1
                className="cg-rise mt-5 font-serif text-3xl leading-[1.08] tracking-tight text-balance sm:text-4xl md:mt-6 md:text-5xl"
              >
                {t.hero.titleA}
                {lang === "zh" ? <br /> : null}
                <span className={`text-teal ${lang === "zh" ? "" : "italic"}`}>{t.hero.titleEm}</span>
                {t.hero.titleB}
              </h1>
              <p className="cg-rise mt-5 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-muted-ink sm:mt-7">
                {t.hero.body}
              </p>
              <div className="cg-rise mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#work"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-teal sm:min-h-0 sm:justify-start"
                >
                  {t.hero.ctaWork}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-mist/60 sm:min-h-0 sm:justify-start"
                >
                  {t.hero.ctaContact}
                </a>
              </div>
              <dl className="cg-rise mt-10 grid max-w-md grid-cols-3 gap-3 sm:mt-12 sm:gap-6">
                {t.hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-serif text-2xl font-semibold sm:text-3xl">{s.value}</dt>
                    <dd className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted-ink sm:text-[10px] sm:tracking-[0.1em]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div id="notes" className="scroll-mt-28 md:col-span-5 md:pl-10">
              <div className="cg-fadein relative">
                <div className="rounded-2xl bg-teal-soft/50 p-2 ring-1 ring-black/5 backdrop-blur-md sm:p-2.5">
                  <div className="rounded-xl bg-paper p-3.5 sm:p-4 md:p-5">
                    <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                      <span className="font-mono text-[10px] tracking-[0.22em] text-teal">
                        {t.notes.eyebrow}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-muted-ink">
                        {t.notes.title}
                      </span>
                    </div>
                    <ul className="divide-y divide-line/70">
                      {t.notes.items.map((n, i) => (
                        <li key={n.title}>
                          <button
                            type="button"
                            onClick={() => setActiveNote(i)}
                            className="group flex w-full items-center gap-3.5 py-3.5 text-left"
                          >
                            <img
                              src={noteImages[i]}
                              alt={n.title}
                              width={1280}
                              height={960}
                              loading="lazy"
                              className="size-14 shrink-0 rounded-lg object-cover ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.03] sm:size-16"
                            />
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-muted-ink">
                                <span>{n.date}</span>
                                {n.category.split(" · ").map((tag) => (
                                  <Fragment key={tag}>
                                    <span className="size-1 rounded-full bg-teal" />
                                    <span className="text-teal">{tag}</span>
                                  </Fragment>
                                ))}
                              </span>
                              <span className="mt-1 block line-clamp-2 font-serif text-[15px] font-semibold leading-tight tracking-tight transition-colors group-hover:text-teal sm:truncate">
                                {n.title}
                              </span>
                              <span className="mt-0.5 line-clamp-1 block text-[12px] text-muted-ink">
                                {n.excerpt}
                              </span>
                            </span>
                            <span className="shrink-0 font-mono text-[10px] text-teal opacity-0 transition-opacity group-hover:opacity-100">
                              →
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <svg
                  className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 text-teal/40"
                  viewBox="0 0 160 160"
                  fill="none"
                  aria-hidden="true"
                >
                  <g stroke="currentColor" strokeWidth="1.2">
                    <path
                      d="M10 120 C 50 90, 110 95, 150 70"
                      strokeDasharray="160"
                      strokeDashoffset="160"
                      style={{
                        animation:
                          "cg-draw 1.4s cubic-bezier(0.32,0.72,0,1) 0.3s both",
                      }}
                    />
                    <path
                      d="M10 100 C 50 70, 110 75, 150 50"
                      strokeDasharray="160"
                      strokeDashoffset="160"
                      style={{
                        animation:
                          "cg-draw 1.4s cubic-bezier(0.32,0.72,0,1) 0.5s both",
                      }}
                    />
                    <path
                      d="M10 80 C 50 50, 110 55, 150 30"
                      strokeDasharray="160"
                      strokeDashoffset="160"
                      style={{
                        animation:
                          "cg-draw 1.4s cubic-bezier(0.32,0.72,0,1) 0.7s both",
                      }}
                    />
                  </g>
                  <circle
                    cx="118"
                    cy="52"
                    r="4"
                    fill="currentColor"
                    className="cg-fadein"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-line pb-5 sm:mb-10">
            <div className="min-w-0">
              <p className="font-mono text-[11px] tracking-[0.25em] text-teal">
                {t.work.eyebrow}
              </p>
              <h2 className="mt-3 text-justify font-serif text-3xl tracking-tight sm:text-left sm:text-4xl">
                {t.work.heading}
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] tracking-[0.1em] text-muted-ink md:block">
              {String(visibleKeys.length).padStart(2, "0")} {t.work.count.split(" ").slice(1).join(" ")}
            </span>
          </div>

          <div className="mb-7 flex flex-wrap justify-center gap-4">
            {(["all", "france", "taiwan"] as ProjectRegion[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setProjectRegion(r)}
                className={`font-mono text-[11px] tracking-[0.15em] transition-colors ${
                  projectRegion === r
                    ? "text-teal underline decoration-teal/40 underline-offset-4"
                    : "text-muted-ink hover:text-ink"
                }`}
              >
                {t.work.filter[r]}
              </button>
            ))}
          </div>

          {visibleKeys.length === 0 ? (
            <p className="py-12 text-center font-mono text-[12px] tracking-[0.1em] text-muted-ink">
              {t.work.filter.empty}
            </p>
          ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleKeys.map((key) => {
              const v = projectVisuals[key];
              const p = t.work.projects[key];
              const isFibre = key === "fibre";
              const isTransit = key === "transit";
              const isSeniors = key === "seniors";
              const isChildcare = key === "childcare";
              const isTainanBus = key === "tainanBus";
              const isTainan = key === "tainan";
              const isInteractive = isFibre || isTransit || isSeniors || isChildcare || isTainanBus || isTainan;
              const openProject = () => {
                if (isFibre) setShowFibre(true);
                if (isTransit) setShowTransit(true);
                if (isSeniors) setShowSeniors(true);
                if (isChildcare) setShowChildcare(true);
                if (isTainanBus) setShowTainanBus(true);
                if (isTainan) setShowTainan(true);
              };
              return (
                <article
                  key={key}
                  className={`group ${isInteractive ? "cursor-pointer" : ""}`}
                  onClick={isInteractive ? openProject : undefined}
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                  onKeyDown={
                    isInteractive
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openProject();
                          }
                        }
                      : undefined
                  }
                >
                  <div
                    className={`rounded-2xl ${v.tint} ${v.hoverTint} p-2.5 ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_40px_-24px_rgba(28,38,34,0.4)]`}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={v.image}
                        alt={`${p.title} — ${p.tag}`}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </div>
                   <div className="px-1 pt-3">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink">
                      <span className="min-w-0 truncate">{p.year}</span>
                      <span className="hidden shrink-0 -translate-x-1 text-teal opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:inline">
                        {t.work.view}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-serif text-lg leading-tight tracking-tight sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-justify text-sm text-muted-ink sm:text-left">
                      {p.blurb}
                    </p>
                  </div>
                </article>
              );
             })}
           </div>
          )}
         </section>

        {/* FIBRE PROJECT MODAL */}
        {showFibre && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowFibre(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.work.featuredProject.title}
          >
            <div
                className="cg-rise max-h-[calc(100dvh-1rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setShowFibre(false)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.work.close}
                </button>
              </div>
              <div className="relative">
                <img
                  src={projectFibreMap.url}
                  alt={t.work.featuredProject.title}
                  className="aspect-[16/10] w-full object-cover sm:aspect-auto"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex">
                  <span className="min-w-0 truncate">{t.work.featuredProject.year}</span>
                  <span className="size-1 rounded-full bg-teal" />
                  <span className="min-w-0 text-teal">{t.work.featuredProject.tag}</span>
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.work.featuredProject.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {t.work.featuredProject.sections.map((s) => (
                    <div key={s.heading}>
                      <p className="font-mono text-[10px] tracking-[0.15em] text-teal">
                        {s.heading}
                      </p>
                      <p className="mt-1.5 whitespace-pre-line text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={projectFibrePdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
                >
                  {t.work.featuredProject.downloadPdf}
                </a>
                <CommentBoard threadKey="project-fibre" lang={lang} />
              </div>
            </div>
          </div>
        )}

        {/* TRANSIT INTERMODALITY PROJECT MODAL */}
        {showTransit && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowTransit(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.work.transitProject.title}
          >
            <div
                className="cg-rise max-h-[calc(100dvh-1rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setShowTransit(false)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.work.close}
                </button>
              </div>
              <div className="relative">
                <img
                  src={projectTransit}
                  alt={t.work.transitProject.title}
                  width={1440}
                  height={1017}
                  className="aspect-[16/10] w-full object-cover sm:aspect-auto"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex">
                  <span className="min-w-0 truncate">{t.work.transitProject.year}</span>
                  <span className="size-1 rounded-full bg-teal" />
                  <span className="min-w-0 text-teal">{t.work.transitProject.tag}</span>
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.work.transitProject.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {t.work.transitProject.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="font-mono text-[10px] tracking-[0.15em] text-teal">
                        {section.heading}
                      </p>
                      <p className="mt-1.5 text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={projectTransitPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
                >
                  {t.work.transitProject.downloadPdf}
                </a>
                <CommentBoard threadKey="project-transit" lang={lang} />
              </div>
            </div>
          </div>
        )}

        {/* SENIORS ACCESSIBILITY PROJECT MODAL */}
        {showSeniors && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowSeniors(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.work.seniorsProject.title}
          >
            <div
              className="cg-rise max-h-[calc(100dvh-1rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setShowSeniors(false)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.work.close}
                </button>
              </div>
              <div className="relative bg-paper">
                <img
                  src={projectSeniorsMap.url}
                  alt={t.work.seniorsProject.title}
                  className="w-full object-contain"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex">
                  <span className="min-w-0 truncate">{t.work.seniorsProject.year}</span>
                  <span className="size-1 rounded-full bg-teal" />
                  <span className="min-w-0 text-teal">{t.work.seniorsProject.tag}</span>
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.work.seniorsProject.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {t.work.seniorsProject.sections.map((s) => (
                    <div key={s.heading}>
                      <p className="font-mono text-[10px] tracking-[0.15em] text-teal">
                        {s.heading}
                      </p>
                      <p className="mt-1.5 whitespace-pre-line text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={projectSeniorsPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
                >
                  {t.work.seniorsProject.downloadPdf}
                </a>
                <CommentBoard threadKey="project-seniors" lang={lang} />
              </div>
            </div>
          </div>
        )}

        {/* CHILDCARE SUPPLY AND DEMAND PROJECT MODAL */}
        {showChildcare && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowChildcare(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.work.childcareProject.title}
          >
            <div
              className="cg-rise max-h-[calc(100dvh-1rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setShowChildcare(false)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.work.close}
                </button>
              </div>
              <div className="relative bg-paper">
                <img
                  src={projectChildcareMap.url}
                  alt={t.work.childcareProject.title}
                  className="w-full object-contain"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex">
                  <span className="min-w-0 truncate">{t.work.childcareProject.year}</span>
                  <span className="size-1 rounded-full bg-teal" />
                  <span className="min-w-0 text-teal">{t.work.childcareProject.tag}</span>
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.work.childcareProject.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {t.work.childcareProject.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="font-mono text-[10px] tracking-[0.15em] text-teal">{section.heading}</p>
                      <p className="mt-1.5 text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">{section.body}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={projectChildcarePdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
                >
                  {t.work.childcareProject.downloadPdf}
                </a>
                <CommentBoard threadKey="project-childcare-2032" lang={lang} />
              </div>
            </div>
          </div>
        )}


        {/* TAINAN BUS SERVICE GAP PROJECT MODAL */}
        {showTainanBus && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowTainanBus(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.work.tainanBusProject.title}
          >
            <div
              className="cg-rise max-h-[calc(100dvh-1rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setShowTainanBus(false)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.work.close}
                </button>
              </div>
              <div className="relative bg-paper">
                <img src={projectTainanBusMap.url} alt={t.work.tainanBusProject.title} className="w-full object-contain" />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex">
                  <span className="min-w-0 truncate">{t.work.tainanBusProject.year}</span>
                  <span className="size-1 rounded-full bg-teal" />
                  <span className="min-w-0 text-teal">{t.work.tainanBusProject.tag}</span>
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.work.tainanBusProject.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {t.work.tainanBusProject.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="font-mono text-[10px] tracking-[0.15em] text-teal">{section.heading}</p>
                      <p className="mt-1.5 whitespace-pre-line text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">{section.body}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={projectTainanBusPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
                >
                  {t.work.tainanBusProject.downloadPdf}
                </a>
                <CommentBoard threadKey="project-tainan-bus-gap" lang={lang} />
              </div>
            </div>
          </div>
        )}

        {/* TAINAN POPULATION CHANGE PROJECT MODAL */}
        {showTainan && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setShowTainan(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.work.tainanProject.title}
          >
            <div
              className="cg-rise max-h-[calc(100dvh-1rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setShowTainan(false)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.work.close}
                </button>
              </div>
              <div className="relative bg-paper">
                <img
                  src={projectTainanMap.url}
                  alt={t.work.tainanProject.title}
                  className="w-full object-contain"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex">
                  <span className="min-w-0 truncate">{t.work.tainanProject.year}</span>
                  <span className="size-1 rounded-full bg-teal" />
                  <span className="min-w-0 text-teal">{t.work.tainanProject.tag}</span>
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.work.tainanProject.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {t.work.tainanProject.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="font-mono text-[10px] tracking-[0.15em] text-teal">{section.heading}</p>
                      <p className="mt-1.5 whitespace-pre-line text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={projectTainanPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:decoration-teal"
                >
                  {t.work.tainanProject.downloadPdf}
                </a>
                <CommentBoard threadKey="project-tainan-2036" lang={lang} />
              </div>
            </div>
          </div>
        )}


        {/* NOTE MODAL */}
        {activeNote !== null && t.notes.items[activeNote] && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setActiveNote(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t.notes.items[activeNote].title}
          >
            <div
                className={`cg-rise max-h-[calc(100dvh-1rem)] w-full overflow-y-auto rounded-2xl bg-paper ring-1 ring-black/10 shadow-[0_32px_80px_-32px_rgba(28,38,34,0.5)] sm:max-h-[90vh] sm:rounded-3xl ${activeNote === 0 || activeNote === 1 || activeNote === 2 ? "max-w-4xl" : "max-w-2xl"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none sticky top-3 z-20 -mb-11 flex justify-end pr-3 sm:top-4 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setActiveNote(null)}
                  className="pointer-events-auto rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-ink ring-1 ring-black/10 backdrop-blur transition-colors hover:bg-paper"
                >
                  {t.notes.close}
                </button>
              </div>
              <div className="relative">
                <img
                  src={noteImages[activeNote]}
                  alt={t.notes.items[activeNote].title}
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-ink sm:flex sm:flex-wrap">
                  <span className="min-w-0 truncate">{t.notes.items[activeNote].date}</span>
                  {t.notes.items[activeNote].category.split(" · ").map((tag) => (
                    <Fragment key={tag}>
                      <span className="size-1 rounded-full bg-teal" />
                      <span className="min-w-0 text-teal">{tag}</span>
                    </Fragment>
                  ))}
                </div>
                <h3 className="mt-3 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl md:text-3xl">
                  {t.notes.items[activeNote].title}
                </h3>
                <div className="mt-6 space-y-4">
                  {t.notes.items[activeNote].body.map((p, pIndex) => {
                    const taiwanMediaIndex = [0, 1, -1, 2, 3, 4][pIndex] ?? -1;
                    const mediaIndex = activeNote === 2 ? taiwanMediaIndex : pIndex;
                    const media = mediaIndex >= 0 ? t.notes.items[activeNote]?.media?.[mediaIndex] : undefined;
                    const mediaSrc = activeNote === 1
                      ? castleMedia[mediaIndex]
                      : activeNote === 2
                        ? taiwanMedia[mediaIndex]
                        : undefined;
                    return (
                      <div key={p.slice(0, 24)} className="space-y-6">
                         <p className="text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">{p}</p>
                        {media && mediaSrc ? (
                          <figure className={`mx-auto overflow-hidden rounded-xl bg-teal-soft/40 p-2 ring-1 ring-line ${activeNote === 2 ? "max-w-3xl" : "max-w-sm"}`}>
                            <div className="relative overflow-hidden rounded-lg bg-ink">
                              {media.kind === "video" ? (
                                <video
                                  src={mediaSrc}
                                  className={`${activeNote === 2 ? "aspect-video" : "aspect-[3/4]"} w-full object-cover`}
                                  aria-label={media.alt}
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  controls
                                />
                              ) : (
                                <img
                                  src={mediaSrc}
                                  alt={media.alt}
                                  loading="lazy"
                                  className={`${activeNote === 2 ? "aspect-video" : "aspect-[3/4]"} w-full object-cover`}
                                />
                              )}
                            </div>
                            {media.caption ? (
                              <figcaption className="px-1 pb-1 pt-3 text-justify text-[12px] leading-relaxed text-muted-ink sm:text-left">
                                {media.caption}
                              </figcaption>
                            ) : null}
                          </figure>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
                {t.notes.items[activeNote].sections ? (
                  <div className="mt-10 space-y-12 border-t border-line pt-10">
                    {t.notes.items[activeNote].sections?.map((section, sectionIndex) => (
                      <section
                        key={section.place}
                        id={`roundabout-section-${sectionIndex}`}
                        className="grid items-center gap-6 md:grid-cols-12 md:gap-8"
                      >
                        <div className={`md:col-span-5 ${sectionIndex % 2 ? "" : "md:order-2"}`}>
                          <p className="font-mono text-[10px] tracking-[0.15em] text-teal">
                            0{sectionIndex + 1} · {section.place}
                          </p>
                          <h4 className="mt-2 text-justify font-serif text-xl leading-tight tracking-tight sm:text-left sm:text-2xl">
                            {section.heading}
                          </h4>
                          <p className="mt-3 text-justify text-[14px] leading-relaxed text-muted-ink sm:text-left">
                            {section.body}
                          </p>
                        </div>
                        <div className={`md:col-span-7 ${sectionIndex % 2 ? "" : "md:order-1"}`}>
                          <div className="relative overflow-hidden rounded-xl bg-teal-soft/40 p-2 ring-1 ring-line">
                            <div className="relative overflow-hidden rounded-lg bg-ink">
                              <img
                                src={roundaboutImages[sectionIndex]}
                                alt={section.imageAlt}
                                loading="lazy"
                                className="aspect-[16/10] w-full object-cover saturate-[0.72] contrast-[0.92] sepia-[0.12]"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-teal/10 mix-blend-color" />
                            </div>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                ) : null}
                {t.notes.items[activeNote].videoCaption && activeNote === 0 ? (
                  <figure className="mt-10 border-t border-line pt-10">
                    <div className="relative overflow-hidden rounded-xl bg-teal-soft/40 p-2 ring-1 ring-line">
                      <div className="relative overflow-hidden rounded-lg bg-ink">
                        <video
                          src={noteTrafficVideo.url}
                          className="aspect-video w-full object-cover"
                          aria-label={t.notes.items[activeNote].videoCaption}
                          controls
                          loop
                          playsInline
                          preload="metadata"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-3 text-justify text-[13px] leading-relaxed text-muted-ink sm:text-left">
                      {t.notes.items[activeNote].videoCaption}
                    </figcaption>
                  </figure>
                ) : null}
                {t.notes.items[activeNote].closing ? (
                  <blockquote className="mt-10 border-l-2 border-teal pl-5 text-justify font-serif text-xl leading-relaxed text-ink sm:text-left">
                    {t.notes.items[activeNote].closing}
                  </blockquote>
                ) : null}
                {t.notes.items[activeNote].source ? (
                  <p className="mt-8 border-t border-line pt-4 font-mono text-[9px] tracking-[0.12em] text-muted-ink">
                    {t.notes.items[activeNote].source}
                  </p>
                ) : null}
                {activeNote === 1 && t.notes.items[activeNote].mapPoints ? (
                  <section className="mt-10 border-t border-line pt-8" aria-labelledby="castle-map-title">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-teal">CARTOGRAPHIE · 04 POINTS</p>
                    <h4 id="castle-map-title" className="mt-1 text-justify font-serif text-xl tracking-tight sm:text-left sm:text-2xl">
                      {t.notes.mapHeading}
                    </h4>
                    <div className="relative mt-5 overflow-hidden rounded-xl ring-1 ring-line">
                      <img
                        src={noteCastleMap.url}
                        alt={t.notes.items[activeNote].mapAlt ?? t.notes.mapHeading}
                        loading="lazy"
                        className="w-full object-cover"
                      />
                      {t.notes.items[activeNote].mapPoints?.map((label, mIndex) => {
                        const point = castleMapPoints[mIndex];
                        if (!point) return null;
                        return (
                          <span
                            key={label}
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                          >
                            <span className="flex size-5 items-center justify-center rounded-full bg-teal/55 font-mono text-[9px] text-paper ring-1 ring-paper/50 backdrop-blur-[1px]">
                              {mIndex + 1}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                    <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                      {t.notes.items[activeNote].mapPoints?.map((label, mIndex) => {
                        const point = castleMapPoints[mIndex];
                        return (
                          <li key={label} className="flex items-center gap-3">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal font-mono text-[9px] text-paper">
                              {mIndex + 1}
                            </span>
                            <a
                              href={getGoogleMapsUrl(point?.query ?? label)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex min-h-11 min-w-0 flex-1 items-center text-[13px] leading-tight text-muted-ink underline decoration-line underline-offset-4 transition-colors hover:text-teal sm:min-h-0"
                              aria-label={`${label} — ${t.notes.viewOnMap}`}
                            >
                              {label}
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </section>
                ) : null}
                {activeNote === 0 && roundaboutSections.length > 0 ? (
                  <section className="mt-10 border-t border-line pt-8" aria-labelledby="photo-map-title">
                    <div className="mb-5 grid grid-cols-[minmax(0,1fr)] gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] tracking-[0.18em] text-teal">CARTOGRAPHIE · 06 POINTS</p>
                        <h4 id="photo-map-title" className="mt-1 text-justify font-serif text-xl tracking-tight sm:text-left sm:text-2xl">
                          {t.notes.mapHeading}
                        </h4>
                      </div>
                      <p className="min-w-0 font-mono text-[9px] tracking-[0.08em] text-muted-ink sm:max-w-[30ch] sm:text-right">
                        {t.notes.mapHint}
                      </p>
                    </div>
                    <div className="grid overflow-hidden rounded-xl border border-line bg-mist/50 md:grid-cols-[1.6fr_1fr]">
                      <div className="relative min-h-60 overflow-hidden border-b border-line bg-teal-soft/30 sm:min-h-72 md:border-b-0 md:border-r">
                        <svg className="absolute inset-0 size-full text-teal/25" viewBox="0 0 640 360" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M-20 132 C84 92 142 178 238 136 S400 38 470 82 S568 190 680 118" fill="none" stroke="currentColor" strokeWidth="18" opacity=".2" />
                          <path d="M-20 132 C84 92 142 178 238 136 S400 38 470 82 S568 190 680 118" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                          <path d="M80 330 C140 252 198 240 274 250 S414 318 518 268 S598 180 680 196" fill="none" stroke="currentColor" strokeWidth="2" />
                          <path d="M112 24 L176 354 M288 -20 L310 380 M462 -20 L426 380 M-20 214 L680 244" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5" />
                          <circle cx="282" cy="160" r="92" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
                          <circle cx="282" cy="160" r="54" fill="none" stroke="currentColor" strokeWidth="1" opacity=".55" />
                        </svg>
                         <span className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.18em] text-muted-ink">NANTES MÉTROPOLE</span>
                         <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.12em] text-muted-ink">LOIRE</span>
                         <span className="absolute right-[16%] top-[14%] font-mono text-[8px] tracking-[0.12em] text-muted-ink">ERDRE</span>
                         <span className="absolute left-[38%] top-[38%] font-mono text-[8px] tracking-[0.12em] text-muted-ink">CENTRE-VILLE</span>
                         <span className="absolute bottom-[10%] left-[40%] font-mono text-[8px] tracking-[0.12em] text-muted-ink">REZÉ</span>
                         <span className="absolute left-[2%] top-[30%] font-mono text-[8px] tracking-[0.12em] text-muted-ink">SAINT-HERBLAIN</span>
                         <span className="absolute bottom-[38%] right-[4%] font-mono text-[8px] tracking-[0.12em] text-muted-ink">PÉRIPH. N844</span>
                        {roundaboutLocations.map((location, locationIndex) => {
                          const section = roundaboutSections[locationIndex];
                          if (!section) return null;
                          const selected = activeLocation === locationIndex;
                          return (
                            <button
                              key={location.query}
                              type="button"
                              aria-label={`${locationIndex + 1}. ${section.place}`}
                              aria-pressed={selected}
                              onClick={() => setActiveLocation(locationIndex)}
                              className={`absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border font-mono text-[10px] shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${selected ? "z-10 scale-110 border-ink bg-ink text-paper" : "border-teal bg-paper text-teal hover:scale-110 hover:bg-teal hover:text-paper"}`}
                              style={{ left: `${location.x}%`, top: `${location.y}%` }}
                            >
                              {locationIndex + 1}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex min-h-0 flex-col bg-paper p-4 sm:min-h-72">
                        <img
                          src={roundaboutImages[activeLocation] ?? roundaboutImages[0] ?? ""}
                          alt={roundaboutSections[activeLocation]?.imageAlt ?? ""}
                          className="aspect-[16/10] w-full rounded-lg object-cover saturate-[0.72] contrast-[0.92] sepia-[0.12]"
                        />
                        <p className="mt-4 font-mono text-[9px] tracking-[0.14em] text-teal">
                          0{activeLocation + 1} · PHOTO LOCATION
                        </p>
                        <p className="mt-1 font-serif text-lg leading-tight">
                          {roundaboutSections[activeLocation]?.place}
                        </p>
                        <div className="mt-auto grid gap-2 pt-4 sm:flex sm:items-center sm:justify-between sm:gap-3">
                          <button
                            type="button"
                            onClick={() => document.getElementById(`roundabout-section-${activeLocation}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                            className="min-h-9 font-mono text-[9px] tracking-[0.1em] text-teal underline decoration-line underline-offset-4 hover:text-ink sm:min-h-0"
                          >
                            {t.notes.read}
                          </button>
                          <a
                            href={getGoogleMapsUrl(roundaboutLocations[activeLocation]?.query ?? "Nantes, France")}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${t.notes.viewOnMap} — ${roundaboutSections[activeLocation]?.place ?? "Nantes"}`}
                            className="inline-flex min-h-11 items-center font-mono text-[9px] tracking-[0.08em] text-muted-ink underline decoration-line underline-offset-4 hover:text-teal sm:min-h-9"
                          >
                            {t.notes.viewOnMap}
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
                <CommentBoard threadKey={noteThreadKeys[activeNote] ?? `note-${activeNote}`} lang={lang} />
              </div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-2xl bg-teal-soft/30 p-5 ring-1 ring-black/5 backdrop-blur-md sm:p-8 md:rounded-3xl md:p-12">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-10">
              {/* A — eyebrow / name / role */}
              <div className="order-1 md:col-span-5 md:col-start-1 md:row-start-1">
                <p className="font-mono text-[11px] tracking-[0.25em] text-teal">
                  {t.about.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
                  {t.about.name}
                </h2>
                <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-teal">
                  {t.about.role}
                </p>
              </div>
              {/* D — bio: mobile right after role, desktop full-width below the grid */}
              <p className="order-2 text-justify text-[15px] leading-relaxed text-muted-ink sm:text-left md:order-none md:col-span-12 md:col-start-1 md:row-start-3">
                {t.about.body}
              </p>
              {/* B — based: mobile after bio, desktop left column under the header */}
              <div className="order-3 whitespace-pre-line font-mono text-[11px] tracking-[0.1em] text-muted-ink md:order-none md:col-span-5 md:col-start-1 md:row-start-2">
                {t.about.based}
              </div>
              {/* C — languages: mobile last, desktop right column */}
              <div className="order-4 md:order-none md:col-span-7 md:col-start-7 md:row-start-1 md:row-span-2">
                <div className="rounded-xl bg-paper/50 p-4 ring-1 ring-line/60 backdrop-blur-sm">
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted-ink">
                    {t.about.languages}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {t.about.langRows.map((l) => (
                      <li
                        key={l.name}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2"
                      >
                         <span className="min-w-0 font-serif text-base">{l.name}</span>
                         <span className="shrink-0 font-mono text-[10px] tracking-[0.1em] text-muted-ink">
                          {l.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* EXPERIENCE + EDUCATION */}
            <div className="mt-12 grid gap-10 border-t border-line/70 pt-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] tracking-[0.25em] text-teal">
                  {t.about.experience}
                </p>
                <ol className="mt-6 space-y-7">
                  {t.about.jobs.map((job, i) => (
                    <li key={job.title} className="relative border-l border-line pl-6">
                      <span
                        className={`absolute -left-[5px] top-1.5 size-2 rounded-full ${
                          i === 0 ? "bg-teal" : i === 1 ? "bg-teal/60" : "bg-teal/40"
                        }`}
                      ></span>
                      <div className="grid grid-cols-[minmax(0,1fr)] gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-2">
                        <h3 className="min-w-0 font-serif text-lg leading-tight tracking-tight sm:text-xl">{job.title}</h3>
                        <span className="shrink-0 font-mono text-[10px] tracking-[0.1em] text-muted-ink">
                          {job.period}
                        </span>
                      </div>
                      <p className="mt-2 text-justify text-sm leading-relaxed text-muted-ink sm:text-left">
                        {job.blurb}
                      </p>
                      {job.link && (
                        <a
                          href={job.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-3 inline-flex items-center gap-2"
                        >
                          <span className="font-mono text-[10px] tracking-[0.12em] text-teal underline-offset-2 group-hover:underline">
                            {job.link.label}
                          </span>
                        </a>
                      )}
                      {job.links && (
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                          {job.links.map((l) => (
                            <a
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2"
                            >
                              <span className="font-mono text-[10px] tracking-[0.12em] text-teal underline-offset-2 group-hover:underline">
                                {l.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="md:col-span-5">
                <p className="font-mono text-[11px] tracking-[0.25em] text-teal">
                  {t.about.education}
                </p>
                <ul className="mt-6 space-y-4">
                  {t.about.degrees.map((d) => (
                    <li key={d.degree} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                      <p className="min-w-0 text-sm">
                        <span className="font-serif text-base">{d.degree}</span>
                        <span className="block text-muted-ink">{d.school}</span>
                      </p>
                      <span className="shrink-0 font-mono text-[10px] text-muted-ink">
                        {d.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SKILLS */}
            <div className="mt-10 border-t border-line/70 pt-8">
              <p className="font-mono text-[11px] tracking-[0.25em] text-teal">
                {t.about.skills}
              </p>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                {t.about.skillGroups.map((g) => (
                  <div key={g.label}>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-muted-ink">
                      {g.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-paper/70 px-3 py-1 font-mono text-[11px] ring-1 ring-line"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PUBLICATIONS */}
            <div className="mt-10 border-t border-line/70 pt-8">
              <p className="font-mono text-[11px] tracking-[0.25em] text-teal">
                {t.about.publicationsHeading}
              </p>
              <ul className="mt-5 space-y-4">
                {t.about.publications.map((p) => (
                  <li key={p.url} className="font-serif text-[15px] leading-relaxed text-ink/90">
                    {p.citation}{" "}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] tracking-[0.05em] text-teal underline-offset-4 hover:underline break-all"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="relative z-10 mt-8 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-[0.25em] text-teal-soft/80">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
              {t.contact.heading}
            </h2>
            <p className="mt-5 max-w-[42ch] text-pretty text-[15px] leading-relaxed text-paper/60">
              {t.contact.body}
            </p>
            <div className="mt-8 space-y-2 break-words font-mono text-[12px] tracking-[0.08em] text-paper/70">
              <p>{t.contact.email}</p>
              <p>{t.contact.location}</p>
              <p className="text-paper/40">{t.contact.response}</p>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 font-mono text-[10px] tracking-[0.12em] text-paper/40 sm:flex-row">
            <span>{t.contact.copyright}</span>
            <span>{t.contact.disciplines}</span>
            <Link
              to="/auth"
              className="text-paper/30 transition-colors hover:text-teal-soft/80"
            >
              {inboxCopy[lang].signIn}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
