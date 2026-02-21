import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #1a2614 0%, #2d3d24 50%, #4A5D3F 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "#c8a84b", display: "flex" }} />
        <div style={{ position: "absolute", top: "40px", right: "60px", fontSize: "80px", opacity: 0.08, display: "flex" }}>★★★</div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{ background: "#c8a84b", color: "#1a2614", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", padding: "6px 14px", borderRadius: "4px", display: "flex" }}>
            501(c)(3) NONPROFIT
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", display: "flex" }}>
            Clermont, Florida · NYC
          </div>
        </div>

        <div style={{ fontSize: "62px", fontWeight: 800, color: "#ffffff", lineHeight: 1.05, marginBottom: "20px", display: "flex", flexDirection: "column" }}>
          <span style={{ display: "flex" }}>Warrior Outreach</span>
          <span style={{ color: "#c8a84b", display: "flex" }}>Project</span>
        </div>

        <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.75)", marginBottom: "40px", maxWidth: "700px", lineHeight: 1.4, display: "flex" }}>
          Veteran housing · Victory Pointe fitness corridor · Military Working Dog Honor Plaza · Bring every man home.
        </div>

        <div style={{ display: "flex", gap: "40px" }}>
          {[
            ["20–30 Veterans", "Residential Cohort"],
            ["~$900K", "Project Goal"],
            ["~1 Mile", "Corridor Length"],
          ].map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", display: "flex" }}>{value}</span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginTop: "2px", display: "flex" }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", bottom: "28px", right: "60px", fontSize: "16px", color: "rgba(255,255,255,0.35)", display: "flex" }}>
          twop.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
