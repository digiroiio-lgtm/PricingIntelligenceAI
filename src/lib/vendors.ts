export type G2Category =
  | "Dynamic Pricing"
  | "Price Intelligence"
  | "Retail Pricing"
  | "CPQ & B2B Pricing";

export interface Vendor {
  name: string;
  url: string;
  categories: G2Category[];
  segment: string;
  focus: string;
  deployment: string;
}

export const VENDORS: Vendor[] = [
  {
    name: "Competera",
    url: "https://competera.net",
    categories: ["Retail Pricing", "Price Intelligence", "Dynamic Pricing"],
    segment: "Retail & e-commerce",
    focus: "AI price optimization and competitive price monitoring for retailers.",
    deployment: "SaaS",
  },
  {
    name: "Pricefx",
    url: "https://www.pricefx.com",
    categories: ["Dynamic Pricing", "CPQ & B2B Pricing"],
    segment: "Manufacturing, distribution, B2B",
    focus: "Cloud pricing management, price optimization and CPQ across B2B industries.",
    deployment: "SaaS",
  },
  {
    name: "Omnia Retail",
    url: "https://omniaretail.com",
    categories: ["Dynamic Pricing", "Retail Pricing"],
    segment: "Retail & e-commerce",
    focus: "Rule-based and data-driven dynamic repricing for online retailers and brands.",
    deployment: "SaaS",
  },
  {
    name: "PROS",
    url: "https://pros.com",
    categories: ["Dynamic Pricing", "CPQ & B2B Pricing"],
    segment: "Enterprise B2B, travel, distribution",
    focus: "AI-powered pricing, revenue management and guided selling at enterprise scale.",
    deployment: "SaaS",
  },
  {
    name: "Zilliant",
    url: "https://www.zilliant.com",
    categories: ["CPQ & B2B Pricing", "Dynamic Pricing"],
    segment: "B2B manufacturing & distribution",
    focus: "Price optimization, deal guidance and CPQ intelligence for B2B sellers.",
    deployment: "SaaS",
  },
  {
    name: "Revionics (Aptos)",
    url: "https://www.revionics.com",
    categories: ["Retail Pricing", "Dynamic Pricing"],
    segment: "Grocery, specialty & general retail",
    focus: "Demand-based pricing, promotion and markdown optimization for retailers.",
    deployment: "SaaS",
  },
  {
    name: "Wiser",
    url: "https://www.wiser.com",
    categories: ["Price Intelligence", "Retail Pricing"],
    segment: "Brands & retailers",
    focus: "Price intelligence, shelf and marketplace monitoring.",
    deployment: "SaaS",
  },
  {
    name: "Prisync",
    url: "https://prisync.com",
    categories: ["Price Intelligence", "Dynamic Pricing"],
    segment: "SMB e-commerce",
    focus: "Competitor price tracking with dynamic pricing rules.",
    deployment: "SaaS",
  },
  {
    name: "Vendavo",
    url: "https://www.vendavo.com",
    categories: ["CPQ & B2B Pricing", "Dynamic Pricing"],
    segment: "B2B manufacturing & distribution",
    focus: "Margin and pricing management for B2B, including deal and price optimization.",
    deployment: "SaaS",
  },
  {
    name: "Price2Spy",
    url: "https://www.price2spy.com",
    categories: ["Price Intelligence"],
    segment: "Retailers, brands, marketplaces",
    focus: "Price monitoring and repricing across competitor websites and marketplaces.",
    deployment: "SaaS",
  },
  {
    name: "Intelligence Node",
    url: "https://www.intelligencenode.com",
    categories: ["Price Intelligence", "Retail Pricing"],
    segment: "Retail & fashion",
    focus: "Retail competitive intelligence, product matching and pricing analytics.",
    deployment: "SaaS",
  },
  {
    name: "Minderest",
    url: "https://minderest.com",
    categories: ["Price Intelligence", "Retail Pricing"],
    segment: "Brands & retailers",
    focus: "Price monitoring, MAP compliance and market intelligence.",
    deployment: "SaaS",
  },
];

export const G2_CATEGORIES: G2Category[] = [
  "Dynamic Pricing",
  "Price Intelligence",
  "Retail Pricing",
  "CPQ & B2B Pricing",
];
