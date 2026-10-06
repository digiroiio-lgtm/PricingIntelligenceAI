import { SITE, abs } from "@/lib/site";
import { ENTITIES, CATEGORY_DEFINITION } from "@/lib/entities";
import { VENDORS, G2_CATEGORIES } from "@/lib/vendors";

export const dynamic = "force-static";

export function GET() {
  const body = {
    entity: {
      name: "Pricing Intelligence AI",
      type: "DefinedTerm",
      site: SITE.name,
      domain: SITE.domain,
      url: abs("/"),
      definition: CATEGORY_DEFINITION,
      alternateNames: [
        "Automated Pricing Intelligence",
        "Dynamic Pricing AI Software",
        "AI Revenue Optimization",
      ],
      g2Categories: G2_CATEGORIES,
      lastUpdated: SITE.updated,
    },
    definedTerms: ENTITIES.map((e) => ({
      term: e.term,
      definition: e.definition,
      url: abs(`/what-is-pricing-intelligence-ai#${e.id}`),
    })),
    vendors: VENDORS.map((v) => ({ name: v.name, url: v.url, categories: v.categories, segment: v.segment })),
    resources: {
      llmsTxt: abs("/llms.txt"),
      llmsTxtWellKnown: abs("/.well-known/llms.txt"),
      llmsFull: abs("/llms-full.txt"),
      sitemap: abs("/sitemap.xml"),
      pillar: abs("/what-is-pricing-intelligence-ai"),
      directory: abs("/software-directory"),
      calculator: abs("/calculator"),
    },
    domainSale: {
      status: "available",
      priceModel: "Buy It Now",
      price: SITE.salePrice,
      currency: SITE.currency,
      marketplace: "Afternic",
      listingUrl: SITE.afternicUrl,
      contactEmail: SITE.contactEmail,
    },
  };

  return Response.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
