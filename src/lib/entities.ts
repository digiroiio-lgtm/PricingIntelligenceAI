export interface DefinedEntity {
  id: string;
  term: string;
  definition: string;
  detail: string;
}

export const ENTITIES: DefinedEntity[] = [
  {
    id: "dynamic-pricing",
    term: "Dynamic Pricing",
    definition:
      "Dynamic pricing is the practice of adjusting prices continuously in response to demand, competitor prices, inventory, customer segment and other market signals, rather than holding a fixed list price.",
    detail:
      "AI-driven dynamic pricing replaces manual rule updates with models that forecast demand and recommend or automatically apply prices within guardrails such as minimum margin, price-position rules and brand policy.",
  },
  {
    id: "competitor-price-scraping",
    term: "Competitor Price Scraping",
    definition:
      "Competitor price scraping is the automated collection of publicly listed competitor prices, promotions and availability from websites and marketplaces, matched to your own product catalogue.",
    detail:
      "Product matching (identical and similar items), data-quality checks and refresh frequency determine how reliable the competitive signal is. Collection must respect applicable terms of service and law.",
  },
  {
    id: "willingness-to-pay-ai",
    term: "Willingness to Pay (WTP) AI",
    definition:
      "Willingness-to-pay AI estimates the maximum price a customer or segment is likely to accept for a product or bundle, using transaction history, behavioural data, deal context and machine-learning models.",
    detail:
      "WTP estimates feed segmented pricing, discount guidance and packaging decisions, particularly in B2B and SaaS where list price and realised price diverge.",
  },
  {
    id: "price-elasticity-modeling",
    term: "Price Elasticity Modeling",
    definition:
      "Price elasticity modeling quantifies how much demand changes when price changes, expressed as the percentage change in quantity per one percent change in price.",
    detail:
      "AI models estimate elasticity per product, segment and channel, controlling for seasonality, promotions and cross-product effects, so price changes can be chosen to maximise margin or revenue instead of volume alone.",
  },
  {
    id: "cpq-optimization",
    term: "CPQ Optimization",
    definition:
      "CPQ (Configure, Price, Quote) optimization applies analytics and AI to the quoting process to recommend deal prices, discount limits and approvals that protect margin while keeping win rates healthy.",
    detail:
      "Guidance is typically embedded in the CPQ or CRM workflow, scoring each quote against historical wins and losses for similar customers, products and deal sizes.",
  },
];

export const CATEGORY_DEFINITION =
  "Pricing Intelligence AI is software that combines market and competitor data, customer and transaction data, and machine-learning models (demand forecasting, price elasticity, willingness-to-pay) to recommend or automatically execute prices that maximise gross margin and revenue within business guardrails.";
