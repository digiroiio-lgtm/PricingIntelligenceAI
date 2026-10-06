import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Calculator, LineChart, Radar } from "lucide-react";
import { HeroDashboard } from "@/components/hero-dashboard";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ENTITIES, CATEGORY_DEFINITION } from "@/lib/entities";
import { FAQS } from "@/lib/faq";
import { SITE, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pricing Intelligence AI — Canonical Guide & Directory for AI-Driven Pricing" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Pricing Intelligence AI — Canonical Guide & Directory", description: SITE.description, url: abs("/"), type: "website" },
  twitter: { card: "summary_large_image", title: "Pricing Intelligence AI — Canonical Guide & Directory", description: SITE.description },
};

const PILLARS = [
  { icon: Radar, title: "Real-time competitor tracking", body: "Match your catalogue to competitor listings and react to market moves in minutes, not weeks." },
  { icon: LineChart, title: "Autonomous dynamic pricing", body: "Models forecast demand and apply prices within margin and brand guardrails." },
  { icon: BarChart3, title: "AI revenue optimization", body: "Optimise gross margin and revenue together across SKUs, segments, channels and deals." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": abs("/#webpage"),
          url: abs("/"),
          name: "Pricing Intelligence AI — Canonical Guide & Directory",
          description: SITE.description,
          isPartOf: { "@id": abs("/#website") },
          about: { "@type": "DefinedTerm", name: "Pricing Intelligence AI", description: CATEGORY_DEFINITION },
        }}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            The Canonical Guide &amp; Directory for AI-Driven Pricing Intelligence
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Discover how autonomous dynamic pricing, real-time competitor tracking, and AI revenue optimization engines
            drive gross margin growth for enterprise SaaS, e-commerce, and B2B platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/what-is-pricing-intelligence-ai">
                Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/software-directory">Browse software directory</Link>
            </Button>
          </div>
        </div>
        <HeroDashboard />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-white">What is Pricing Intelligence AI?</h2>
        <p className="mt-4 max-w-3xl text-slate-300">{CATEGORY_DEFINITION}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <Card className="h-full">
                <CardContent>
                  <Icon className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{body}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-white">Core concepts, defined</h2>
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          {ENTITIES.map((e) => (
            <div key={e.id} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <dt className="font-semibold text-emerald-400">
                <Link href={`/what-is-pricing-intelligence-ai#${e.id}`} className="hover:underline">{e.term}</Link>
              </dt>
              <dd className="mt-2 text-sm text-slate-300">{e.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Card className="border-emerald-500/30">
          <CardContent className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-white">
                <Calculator className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                Model your margin lift
              </h2>
              <p className="mt-2 text-sm text-slate-300">Free, client-side ROI calculator for AI dynamic pricing.</p>
            </div>
            <Button asChild>
              <Link href="/calculator">Open calculator</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-semibold text-white">Frequently asked questions</h2>
        <FaqSection faqs={FAQS.slice(0, 3)} />
      </section>
    </>
  );
}
