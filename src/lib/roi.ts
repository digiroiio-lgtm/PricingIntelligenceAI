export interface RoiInputs {
  annualRevenue: number;
  grossMarginPct: number;
  priceLiftPct: number;
  elasticity: number; // positive magnitude, e.g. 1.5 means -1.5% volume per +1% price
  annualCost: number;
}

export interface RoiResult {
  newRevenue: number;
  newGrossProfit: number;
  baseGrossProfit: number;
  marginLiftAbs: number;
  newGrossMarginPct: number;
  marginPointsGained: number;
  netBenefit: number;
  roiPct: number | null;
  paybackMonths: number | null;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, Number.isFinite(v) ? v : lo));

/**
 * Simple constant-elasticity model. Volume change = -elasticity * price change.
 * COGS per unit is held constant, so gross profit = revenue_new - COGS_base * volumeFactor.
 */
export function calcRoi(raw: RoiInputs): RoiResult {
  const revenue = clamp(raw.annualRevenue, 0, 1e12);
  const gm = clamp(raw.grossMarginPct, 1, 99) / 100;
  const lift = clamp(raw.priceLiftPct, 0, 50) / 100;
  const e = clamp(raw.elasticity, 0, 10);
  const cost = clamp(raw.annualCost, 0, 1e12);

  const baseGP = revenue * gm;
  const cogs = revenue - baseGP;
  const volumeFactor = Math.max(0, 1 + -e * lift);
  const newRevenue = revenue * (1 + lift) * volumeFactor;
  const newGP = newRevenue - cogs * volumeFactor;
  const liftAbs = newGP - baseGP;
  const newGM = newRevenue > 0 ? (newGP / newRevenue) * 100 : 0;
  const net = liftAbs - cost;

  return {
    newRevenue,
    newGrossProfit: newGP,
    baseGrossProfit: baseGP,
    marginLiftAbs: liftAbs,
    newGrossMarginPct: newGM,
    marginPointsGained: newGM - gm * 100,
    netBenefit: net,
    roiPct: cost > 0 ? (net / cost) * 100 : null,
    paybackMonths: cost > 0 && liftAbs > 0 ? (cost / liftAbs) * 12 : null,
  };
}
