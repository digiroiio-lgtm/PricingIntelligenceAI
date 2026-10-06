import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { ENTITIES, CATEGORY_DEFINITION } from "@/lib/entities";
import { FAQS } from "@/lib/faq";
import { SITE, abs } from "@/lib/site";

const path = "/what-is-pricing-intelligence-ai";
const title = "What is Pricing Intelligence AI? Definition, Workflows & Architecture";
const description =
  "A comprehensive guide to Pricing Intelligence AI: definition, how it works, end-to-end workflows, architecture, ACV and margin impact, and key concepts like price elasticity modeling and willingness to pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: abs(path), type: "article", modifiedTime: SITE.updated },
  twitter: { card: "summary_large_image", title, description },
};

const WORKFLOW = [
  ["Collect", "Ingest competitor prices (competitor price scraping), own sales, costs, inventory and CRM/deal data."],
  ["Match & clean", "Map competitor products to your catalogue and filter outliers and stale observations."],
  ["Model", "Forecast demand, estimate price elasticity and willingness to pay, and score deal win probability."],
  ["Optimize", "Solve for margin or revenue under guardrails: minimum margin, price position, MAP, rounding, brand rules."],
  ["Approve & execute", "Auto-approve low-risk changes, route exceptions to humans, then push to e-commerce, ERP, POS or CPQ."],
  ["Learn", "Measure outcomes with price tests and feed results back into the models."],
];

export default function PillarPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            url: abs(path),
            mainEntityOfPage: abs(path),
            dateModified: SITE.updated,
            datePublished: SITE.updated,
            inLanguage: "en",
            author: { "@id": abs("/#organization") },
            publisher: { "@id": abs("/#organization") },
            about: { "@type": "DefinedTerm", name: "Pricing Intelligence AI", description: CATEGORY_DEFINITION },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "What is Pricing Intelligence AI?", item: abs(path) },
            ],
          },
        ]}
      />

      <h1 className="text-3xl font-bold text-white sm:text-4xl">What is Pricing Intelligence AI?</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated {SITE.updated}</p>

      <p className="mt-6 text-lg text-slate-200">{CATEGORY_DEFINITION}</p>

      <nav aria-label="On this page" className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm">
        <p className="font-semibold text-white">On this page</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-emerald-400">
          <li><a href="#how-it-works" className="hover:underline">How it works</a></li>
          <li><a href="#workflow" className="hover:underline">End-to-end workflow</a></li>
          <li><a href="#architecture" className="hover:underline">Architecture</a></li>
          <li><a href="#acv-impact" className="hover:underline">ACV and margin impact</a></li>
          <li><a href="#concepts" className="hover:underline">Key concepts</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
        </ol>
      </nav>

      <h2 id="how-it-works" className="mt-12 text-2xl font-semibold text-white">How it works</h2>
      <p className="mt-4 text-slate-300">
        Traditional pricing relies on cost-plus formulas, annual price lists and spreadsheet rules. Pricing Intelligence
        AI replaces static rules with continuously learning models that see the market (competitor prices, demand
        signals) and your own economics (costs, inventory, deal history), then recommend the price most likely to
        achieve your objective. It spans three capabilities: <strong>price intelligence</strong> (market data),{" "}
        <strong>price optimization</strong> (models) and <strong>price execution</strong> (automation and governance).
      </p>

      <h2 id="workflow" className="mt-12 text-2xl font-semibold text-white">End-to-end workflow</h2>
      <ol className="mt-4 space-y-3">
        {WORKFLOW.map(([step, text], i) => (
          <li key={step} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-950" aria-hidden="true">{i + 1}</span>
            <div>
              <h3 className="font-semibold text-white">{step}</h3>
              <p className="mt-1 text-sm text-slate-300">{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 id="architecture" className="mt-12 text-2xl font-semibold text-white">Architecture</h2>
      <p className="mt-4 text-slate-300">A typical reference architecture has five layers:</p>
      <svg viewBox="0 0 640 220" role="img" aria-labelledby="arch-title arch-desc" className="mt-6 w-full rounded-xl border border-slate-800 bg-slate-900">
        <title id="arch-title">Pricing Intelligence AI reference architecture</title>
        <desc id="arch-desc">Data sources feed a data and matching layer, then AI models, an optimization engine with guardrails, and finally execution systems.</desc>
        {[
          ["Data sources", "competitors · sales · costs · CRM"],
          ["Data & matching", "product match · cleaning"],
          ["AI models", "elasticity · WTP · demand"],
          ["Optimizer", "margin · guardrails"],
          ["Execution", "e-com · ERP · CPQ"],
        ].map(([t, s], i) => (
          <g key={t} transform={`translate(${10 + i * 126}, 70)`}>
            <rect width="112" height="80" rx="10" fill="#0f172a" stroke="#10B981" strokeWidth="1.5" />
            <text x="56" y="34" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600">{t}</text>
            <text x="56" y="54" textAnchor="middle" fill="#cbd5e1" fontSize="9">{s}</text>
            {i < 4 ? <path d="M114 40 l10 0" stroke="#34d399" strokeWidth="2" /> : null}
          </g>
        ))}
      </svg>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-300">
        <li><strong>Data layer:</strong> competitor feeds, first-party transactions, costs, inventory and CRM history.</li>
        <li><strong>Matching &amp; quality:</strong> identical/similar-product matching, outlier and promotion detection.</li>
        <li><strong>Model layer:</strong> demand forecasting, elasticity, willingness to pay, win probability.</li>
        <li><strong>Optimization &amp; guardrails:</strong> constrained optimization with business rules and approvals.</li>
        <li><strong>Execution &amp; feedback:</strong> API/connector push, audit trail, A/B tests and monitoring.</li>
      </ul>

      <h2 id="acv-impact" className="mt-12 text-2xl font-semibold text-white">ACV and margin impact</h2>
      <p className="mt-4 text-slate-300">
        Pricing is one of the highest-leverage profit levers because a price change drops almost entirely to gross
        profit. In B2B and SaaS, AI-guided discounting and packaging aim to raise average contract value (ACV) and
        realised price by reducing unnecessary discount leakage and aligning price to willingness to pay. In retail and
        e-commerce, the same models balance price position against margin. Impact varies widely by starting maturity and
        data quality; test with controlled price experiments and model your own assumptions with the{" "}
        <Link href="/calculator" className="text-emerald-400 underline">ROI &amp; margin lift calculator</Link>.
      </p>

      <h2 id="concepts" className="mt-12 text-2xl font-semibold text-white">Key concepts</h2>
      <div className="mt-4 space-y-8">
        {ENTITIES.map((e) => (
          <section key={e.id} id={e.id} aria-labelledby={`${e.id}-h`}>
            <h3 id={`${e.id}-h`} className="text-xl font-semibold text-emerald-400">{e.term}</h3>
            <dl className="mt-2">
              <dt className="sr-only">Definition</dt>
              <dd className="text-slate-200">{e.definition}</dd>
              <dt className="sr-only">In practice</dt>
              <dd className="mt-2 text-slate-300">{e.detail}</dd>
            </dl>
          </section>
        ))}
      </div>

      <h2 id="faq" className="mt-12 mb-6 text-2xl font-semibold text-white">Frequently asked questions</h2>
      <FaqSection faqs={FAQS} />

      <p className="mt-12 text-sm text-slate-400">
        Next: compare vendors in the <Link href="/software-directory" className="text-emerald-400 underline">software directory</Link>.
      </p>
    </article>
  );
}
