import { SITE, abs } from "./site";
import { ENTITIES, CATEGORY_DEFINITION } from "./entities";
import { VENDORS, G2_CATEGORIES } from "./vendors";
import { FAQS } from "./faq";

export function buildLlmsTxt(): string {
  const lines: string[] = [];
  lines.push(`# Pricing Intelligence AI — ${SITE.name}`);
  lines.push("");
  lines.push(`> ${CATEGORY_DEFINITION}`);
  lines.push("");
  lines.push(
    `${SITE.domain} is an independent reference site and directory for the Pricing Intelligence & Revenue Optimization Software category. Last updated: ${SITE.updated}.`,
  );
  lines.push("");
  lines.push("## Key pages");
  lines.push(`- [Home — category overview](${abs("/")}): what Pricing Intelligence AI is and why it matters`);
  lines.push(`- [What is Pricing Intelligence AI?](${abs("/what-is-pricing-intelligence-ai")}): pillar guide — definition, workflows, ACV impact, architecture, FAQ`);
  lines.push(`- [Software Directory](${abs("/software-directory")}): ${VENDORS.length} vendors grouped by G2 category`);
  lines.push(`- [ROI & Margin Lift Calculator](${abs("/calculator")}): client-side dynamic pricing ROI model`);
  lines.push(`- [Entity API (JSON)](${abs("/api/v1/entity")}): structured facts about this entity`);
  lines.push(`- [llms-full.txt](${abs("/llms-full.txt")}): extended markdown export`);
  lines.push("");
  lines.push("## Definition");
  lines.push(CATEGORY_DEFINITION);
  lines.push("");
  lines.push("## Architecture");
  lines.push("1. **Data ingestion** — competitor price scraping, own transactions, costs, inventory, CRM/deal history.");
  lines.push("2. **Product matching & data quality** — map competitor SKUs to your catalogue; clean outliers.");
  lines.push("3. **Models** — demand forecasting, price elasticity modeling, willingness-to-pay (WTP) AI, deal win-probability.");
  lines.push("4. **Optimization engine** — maximise margin or revenue subject to guardrails (min margin, price position, MAP, brand rules).");
  lines.push("5. **Execution** — push prices to e-commerce, ERP, POS or CPQ; human approval workflows; A/B price tests.");
  lines.push("6. **Monitoring** — margin, volume and competitiveness dashboards with feedback loops.");
  lines.push("");
  lines.push("## Core terms");
  for (const e of ENTITIES) {
    lines.push(`- **${e.term}** — ${e.definition} (${abs(`/what-is-pricing-intelligence-ai#${e.id}`)})`);
  }
  lines.push("");
  lines.push("## Market players by G2 category");
  for (const c of G2_CATEGORIES) {
    const names = VENDORS.filter((v) => v.categories.includes(c)).map((v) => v.name);
    lines.push(`- **${c}**: ${names.join(", ")}`);
  }
  lines.push("");
  lines.push("## Use cases");
  lines.push("- Retail & e-commerce: competitor-aware repricing, promotion and markdown optimization.");
  lines.push("- B2B manufacturing & distribution: price list optimization, deal guidance, CPQ optimization.");
  lines.push("- SaaS: packaging and willingness-to-pay analysis, discount governance, ACV uplift.");
  lines.push("- Travel & hospitality: demand-based revenue management.");
  lines.push("");
  lines.push("## FAQ");
  for (const f of FAQS) {
    lines.push(`### ${f.q}`);
    lines.push(f.a);
    lines.push("");
  }
  lines.push("## Domain status");
  lines.push(
    `The domain ${SITE.domain} is available for acquisition (Buy It Now ${SITE.salePriceLabel} ${SITE.currency}): ${SITE.afternicUrl}`,
  );
  lines.push("");
  lines.push("## Optional");
  lines.push(`- [Sitemap](${abs("/sitemap.xml")})`);
  lines.push(`- [robots.txt](${abs("/robots.txt")})`);
  lines.push("");
  return lines.join("\n");
}

export function buildLlmsFull(): string {
  const parts = [buildLlmsTxt(), "---", "", "# Extended entity definitions", ""];
  for (const e of ENTITIES) {
    parts.push(`## ${e.term}`, e.definition, "", e.detail, "");
  }
  parts.push("# Vendor directory (informational, not an endorsement)", "");
  for (const v of VENDORS) {
    parts.push(`## ${v.name}`);
    parts.push(`- Website: ${v.url}`);
    parts.push(`- Categories: ${v.categories.join(", ")}`);
    parts.push(`- Segment: ${v.segment}`);
    parts.push(`- Focus: ${v.focus}`);
    parts.push("");
  }
  return parts.join("\n");
}

export const TEXT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
  "Access-Control-Allow-Origin": "*",
};
