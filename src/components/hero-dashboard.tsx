const BARS = [38, 52, 44, 61, 58, 72, 66, 81, 77, 92];
const ROWS = [
  { sku: "SKU-4821", own: "$48.90", comp: "$47.50", rec: "$49.20", delta: "+0.6%" },
  { sku: "SKU-1073", own: "$129.00", comp: "$134.99", rec: "$132.50", delta: "+2.7%" },
  { sku: "SKU-3390", own: "$22.40", comp: "$21.99", rec: "$22.10", delta: "-1.3%" },
];

export function HeroDashboard() {
  return (
    <figure
      className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl shadow-emerald-500/5"
      aria-label="Illustrative mock dashboard showing dynamic pricing and margin metrics"
    >
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" />
          Margin Intelligence · illustrative demo data
        </span>
        <span>Live</span>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          ["Gross margin", "34.8%", "+2.1 pts"],
          ["Price index", "98.4", "vs. market"],
          ["Auto-approved", "87%", "of changes"],
        ].map(([k, v, s]) => (
          <div key={k} className="rounded-lg bg-slate-800/70 p-3">
            <dt className="text-[11px] uppercase tracking-wide text-slate-400">{k}</dt>
            <dd className="mt-1 text-xl font-bold text-white animate-price-tick">{v}</dd>
            <dd className="text-xs text-emerald-400">{s}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex h-28 items-end gap-2 rounded-lg bg-slate-800/50 p-3" aria-hidden="true">
        {BARS.map((h, i) => (
          <div
            key={i}
            className="flex-1 origin-bottom animate-bar-grow rounded-t bg-gradient-to-t from-emerald-600 to-emerald-400"
            style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>

      <svg viewBox="0 0 300 40" className="mt-3 h-10 w-full" role="img" aria-label="Margin trend line rising">
        <polyline
          points="0,34 40,30 80,32 120,22 160,24 200,14 240,16 300,5"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
          className="animate-line-draw"
        />
      </svg>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <caption className="sr-only">Sample price recommendations</caption>
          <thead className="text-slate-400">
            <tr>
              <th scope="col" className="py-1 pr-2 font-medium">Item</th>
              <th scope="col" className="py-1 pr-2 font-medium">Own</th>
              <th scope="col" className="py-1 pr-2 font-medium">Competitor</th>
              <th scope="col" className="py-1 pr-2 font-medium">AI price</th>
              <th scope="col" className="py-1 font-medium">Δ</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.sku} className="border-t border-slate-800">
                <td className="py-1.5 pr-2">{r.sku}</td>
                <td className="py-1.5 pr-2">{r.own}</td>
                <td className="py-1.5 pr-2">{r.comp}</td>
                <td className="py-1.5 pr-2 font-semibold text-emerald-400">{r.rec}</td>
                <td className="py-1.5">{r.delta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
