"use client";

import { useId, useMemo, useState } from "react";
import { calcRoi } from "@/lib/roi";
import { Card, CardContent } from "@/components/ui/card";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-slate-200">
        <span>{label}</span>
        <span className="text-emerald-400">
          {suffix === "$" ? usd(value) : `${value}${suffix ?? ""}`}
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-emerald-500"
      />
      {hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
    </div>
  );
}

export function RoiCalculator() {
  const [revenue, setRevenue] = useState(50_000_000);
  const [gm, setGm] = useState(35);
  const [lift, setLift] = useState(2);
  const [elasticity, setElasticity] = useState(1.2);
  const [cost, setCost] = useState(250_000);

  const r = useMemo(
    () => calcRoi({ annualRevenue: revenue, grossMarginPct: gm, priceLiftPct: lift, elasticity, annualCost: cost }),
    [revenue, gm, lift, elasticity, cost],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardContent className="space-y-6">
          <Field label="Annual revenue" value={revenue} onChange={setRevenue} min={1_000_000} max={1_000_000_000} step={1_000_000} suffix="$" />
          <Field label="Current gross margin" value={gm} onChange={setGm} min={5} max={90} step={1} suffix="%" />
          <Field label="Average price improvement from AI" value={lift} onChange={setLift} min={0} max={10} step={0.1} suffix="%" hint="Realised price change across the repriced portfolio." />
          <Field label="Price elasticity (magnitude)" value={elasticity} onChange={setElasticity} min={0} max={4} step={0.1} hint="1.2 means volume falls 1.2% for each 1% price increase." />
          <Field label="Annual software + implementation cost" value={cost} onChange={setCost} min={0} max={5_000_000} step={25_000} suffix="$" />
        </CardContent>
      </Card>

      <Card aria-live="polite">
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Gross profit lift / yr</dt>
              <dd className="mt-1 text-2xl font-bold text-emerald-400">{usd(r.marginLiftAbs)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">New gross margin</dt>
              <dd className="mt-1 text-2xl font-bold text-white">
                {r.newGrossMarginPct.toFixed(1)}%{" "}
                <span className="text-sm text-emerald-400">
                  ({r.marginPointsGained >= 0 ? "+" : ""}
                  {r.marginPointsGained.toFixed(2)} pts)
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Net benefit after cost</dt>
              <dd className="mt-1 text-2xl font-bold text-white">{usd(r.netBenefit)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">ROI</dt>
              <dd className="mt-1 text-2xl font-bold text-white">{r.roiPct === null ? "n/a" : `${Math.round(r.roiPct)}%`}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs uppercase tracking-wide text-slate-400">Payback period</dt>
              <dd className="mt-1 text-2xl font-bold text-white">
                {r.paybackMonths === null ? "n/a" : `${r.paybackMonths.toFixed(1)} months`}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-slate-400">
            Illustrative estimate using a constant-elasticity model with unit COGS held constant. Not a forecast or
            guarantee; actual results depend on data quality, market conditions and execution. Calculations run entirely
            in your browser.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
