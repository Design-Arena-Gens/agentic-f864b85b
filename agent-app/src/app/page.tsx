"use client";

import { useMemo, useState } from "react";
import {
  buildCampaign,
  buildLeadList,
  buildOptimizationChecklist,
  type ProductProfile,
  type Tone,
} from "@/lib/playbook";

const initialHighlights = [
  "360° surround sound",
  "12-hour backup battery",
  "Water-resistant build",
];

export default function Home() {
  const [tone, setTone] = useState<Tone>("friendly");
  const [featureDraft, setFeatureDraft] = useState(initialHighlights.join("\n"));
  const [product, setProduct] = useState<ProductProfile>({
    name: "Premium Bluetooth Speaker",
    category: "consumer electronics",
    condition: "like-new",
    price: 4999,
    location: "Mumbai",
    highlights: initialHighlights,
    targetAudience: "music lovers in metro cities",
    painPoint: "bulky speakers that need too many cables",
    usp: "delivers studio-level audio in a compact form",
    platformNotes: "Cash on delivery + easy pickup around Bandra",
  });

  const campaign = useMemo(
    () =>
      buildCampaign(
        { ...product, highlights: featureDraft.split("\n").map((item) => item.trim()).filter(Boolean) },
        tone,
      ),
    [product, featureDraft, tone],
  );

  const leads = useMemo(
    () =>
      buildLeadList({
        ...product,
        highlights: featureDraft.split("\n").map((item) => item.trim()).filter(Boolean),
      }),
    [product, featureDraft],
  );

  const checklist = useMemo(
    () =>
      buildOptimizationChecklist({
        ...product,
        highlights: featureDraft.split("\n").map((item) => item.trim()).filter(Boolean),
      }),
    [product, featureDraft],
  );

  const updateProduct = (key: keyof typeof product, value: string | number) => {
    setProduct((prev) => ({
      ...prev,
      [key]:
        key === "price"
          ? Number(
              `${value}`.replace(/[^0-9]/g, ""),
            ) || 0
          : value,
    }));
  };

  const featuresList = featureDraft.split("\n").map((item) => item.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16">
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 via-slate-900 to-slate-950 p-10 shadow-2xl shadow-blue-500/20">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-200">
              Marketplace Growth Copilot
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Facebook Marketplace Agent for Hyperlocal Sales Lift
            </h1>
            <p className="max-w-3xl text-base text-slate-300">
              Feed the agent your product snapshot and instantly receive persuasive ad hooks, high-intent lead
              scripts, and tactical playbooks designed to turn casual browsers into committed buyers.
            </p>
          </div>
          <div className="grid gap-6 rounded-2xl border border-white/5 bg-black/20 p-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-widest text-slate-400">
                Product Basics
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-xs text-slate-400">Product name</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.name}
                    onChange={(event) => updateProduct("name", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Category</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.category}
                    onChange={(event) => updateProduct("category", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Condition</span>
                  <select
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.condition}
                    onChange={(event) => updateProduct("condition", event.target.value)}
                  >
                    <option value="new">Brand New</option>
                    <option value="like-new">Like New</option>
                    <option value="refurbished">Refurbished</option>
                    <option value="used">Pre-owned</option>
                  </select>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Price (₹)</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.price.toString()}
                    onChange={(event) => updateProduct("price", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Location</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.location}
                    onChange={(event) => updateProduct("location", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Target Audience</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.targetAudience}
                    onChange={(event) => updateProduct("targetAudience", event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-semibold uppercase tracking-widest text-slate-400">
                Conversion Drivers
              </label>
              <div className="grid gap-4">
                <div>
                  <span className="text-xs text-slate-400">Primary buyer pain point</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.painPoint}
                    onChange={(event) => updateProduct("painPoint", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Unique selling promise</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.usp}
                    onChange={(event) => updateProduct("usp", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Marketplace operations note</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={product.platformNotes}
                    onChange={(event) => updateProduct("platformNotes", event.target.value)}
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Highlight stack (one per line)</span>
                  <textarea
                    className="mt-1 h-32 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    value={featureDraft}
                    onChange={(event) => setFeatureDraft(event.target.value)}
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    {featuresList.length} highlights powering your copy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 border-t border-white/5 pt-6">
            <span className="text-sm font-semibold text-slate-400">Ad tone</span>
            <div className="flex gap-2">
              {(["friendly", "urgent", "luxury"] as Tone[]).map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setTone(variant)}
                  className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                    tone === variant
                      ? "bg-blue-500 text-white shadow shadow-blue-500/40"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-500">Copy refreshes instantly with each edit.</span>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Marketplace Listing Copy</h2>
              <p className="text-sm text-slate-300">
                Optimized description and hooks tuned for Facebook Marketplace engagement and quick replies.
              </p>
            </header>
            <article className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-200 shadow-inner shadow-blue-500/10">
              <p className="whitespace-pre-line">{campaign.adCopy}</p>
            </article>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Ad Hooks</h3>
              <ul className="space-y-2">
                {campaign.hooks.map((hook) => (
                  <li
                    key={hook}
                    className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100"
                  >
                    {hook}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 p-6">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">High-Intent Lead Personas</h2>
              <p className="text-sm text-slate-300">
                Ready-to-send conversation starters tailored for likely buyers with channel preferences.
              </p>
            </header>
            <div className="space-y-4">
              {leads.map((lead) => (
                <div
                  key={lead.name}
                  className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200"
                >
                  <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-widest text-slate-400">
                    <span>{lead.preferredChannel}</span>
                    <span>{lead.persona.split(" ")[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                  <p className="text-xs text-slate-400">{lead.persona}</p>
                  <p className="text-sm text-slate-300">Motivation: {lead.motivation}</p>
                  <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-slate-100">
                    {lead.opener}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Playbook Moves</h2>
              <p className="text-sm text-slate-300">
                Tactical recommendations tuned to your listing to accelerate discovery and build trust with
                buyers.
              </p>
            </header>
            <ul className="space-y-4">
              {campaign.suggestions.map((tip) => (
                <li key={tip} className="flex gap-3 rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                  <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-blue-500/20 text-xs text-blue-200">
                    ●
                  </span>
                  <p className="text-sm leading-6 text-slate-200">{tip}</p>
                </li>
              ))}
            </ul>
            <div className="space-y-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                Campaign Funnel Ideas
              </h3>
              <ul className="space-y-2 text-sm text-blue-50">
                {campaign.funnelIdeas.map((idea) => (
                  <li key={idea} className="flex gap-2">
                    <span className="text-blue-200">▹</span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <header className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Optimization Checklist</h2>
              <p className="text-xs text-slate-400">
                Quick tweaks you can execute right now for higher conversion confidence.
              </p>
            </header>
            <ol className="space-y-3 text-sm text-slate-200">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 p-3">
                  <span className="font-semibold text-blue-200">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
