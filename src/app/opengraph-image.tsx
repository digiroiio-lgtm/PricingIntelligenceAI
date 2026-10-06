import { ImageResponse } from "next/og";

export const alt = "PricingIntelligenceAI — Canonical Guide & Directory for AI-Driven Pricing Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#020617",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 34, color: "#10B981", fontWeight: 700 }}>PricingIntelligenceAI.com</div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24, lineHeight: 1.1 }}>
          The Canonical Guide &amp; Directory for AI-Driven Pricing Intelligence
        </div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 32 }}>
          Dynamic pricing · Competitor tracking · AI revenue optimization
        </div>
      </div>
    ),
    size,
  );
}
