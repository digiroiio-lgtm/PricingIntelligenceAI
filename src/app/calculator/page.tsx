import type { Metadata } from "next";
import { RoiCalculator } from "@/components/roi-calculator";
import { JsonLd } from "@/components/json-ld";
import { abs } from "@/lib/site";

const title = "AI Dynamic Pricing ROI & Margin Lift Calculator";
const description =
  "Estimate gross profit lift, new gross margin, ROI and payback from AI dynamic pricing using a transparent constant-elasticity model. Runs client-side.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/calculator" },
  openGraph: { title, description, url: abs("/calculator"), type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
            { "@type": "ListItem", position: 2, name: "ROI Calculator", item: abs("/calculator") },
          ],
        }}
      />
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Model how a small realised price improvement, adjusted for price elasticity, translates into gross profit,
        margin points and payback. See{" "}
        <a className="text-emerald-400 underline" href="/what-is-pricing-intelligence-ai#price-elasticity-modeling">price elasticity modeling</a>{" "}
        for how elasticity is estimated.
      </p>
      <div className="mt-10">
        <RoiCalculator />
      </div>
    </div>
  );
}
