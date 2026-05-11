import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Savage Executive";
  const subtitle =
    searchParams.get("subtitle") ??
    "Lead with Clarity. Build with Strategy. Multiply What Matters.";
  const type = searchParams.get("type") ?? "default"; // "default" | "blog" | "scorecard"

  const categoryColor =
    type === "blog" ? "#c9a227" : type === "scorecard" ? "#c9a227" : "#c9a227";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200",
          height: "630",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "60px 70px",
          fontFamily: "system-ui, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background subtle gradient */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at bottom right, rgba(201,162,39,0.08), transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #c9a227, #d4b545, #c9a227)",
            display: "flex",
          }}
        />

        {/* Top section: branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "linear-gradient(90deg, #c9a227, #d4b545)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.2em",
              color: "#c9a227",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {type === "blog"
              ? "The Briefing"
              : type === "scorecard"
                ? "Self-Assessment"
                : "Savage Executive"}
          </span>
        </div>

        {/* Middle: title + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: 1,
            justifyContent: "center",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 60 ? "42px" : title.length > 40 ? "48px" : "56px",
              color: "white",
              fontWeight: 500,
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: "700px",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom: author bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(201,162,39,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: "#c9a227",
                fontWeight: 600,
              }}
            >
              SS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span
                style={{ fontSize: "16px", color: "white", fontWeight: 500 }}
              >
                Steve Smith
              </span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                Fractional COO/CFO
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 400,
            }}
          >
            savageexecutive.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
