export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What is Pricing Intelligence AI?",
    a: "Pricing Intelligence AI is software that combines competitor, market and customer data with machine-learning models such as demand forecasting, price elasticity and willingness-to-pay estimation to recommend or automatically execute prices that maximise gross margin and revenue within business guardrails.",
  },
  {
    q: "How does AI calculate price elasticity?",
    a: "AI estimates price elasticity by fitting models to historical sales, price, promotion, seasonality and competitor-price data to measure how quantity demanded changes as price changes. Techniques include regression with controls, gradient-boosted trees and Bayesian hierarchical models, estimated per product, segment and channel, then validated with price tests.",
  },
  {
    q: "What is the difference between price intelligence and dynamic pricing?",
    a: "Price intelligence is the collection and analysis of market and competitor price data. Dynamic pricing is the act of changing prices in response to that and other signals. Pricing Intelligence AI covers both: insight and the automated recommendation or execution of price changes.",
  },
  {
    q: "What margin lift can AI pricing deliver?",
    a: "Results vary widely by industry, data quality and starting maturity, so there is no universal figure. A one percent realised price improvement often has a disproportionately larger effect on operating profit than equivalent volume or cost changes. Use the ROI calculator to model your own assumptions.",
  },
  {
    q: "Is competitor price scraping legal?",
    a: "Collecting publicly displayed prices is common practice, but legality depends on jurisdiction, the site's terms of service and how data is accessed. Vendors typically operate compliance processes. Consult counsel for your specific use case.",
  },
];
