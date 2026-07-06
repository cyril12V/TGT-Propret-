import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0D2244 0%, #152d5a 60%, #0D2244 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 24px",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: 999,
            color: "#C9A84C",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Île-de-France · Depuis 2018
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            color: "white",
            fontWeight: 300,
            letterSpacing: -2,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          Entretien &amp;
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            color: "#C9A84C",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: -2,
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Nettoyage
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            color: "white",
            fontWeight: 300,
            letterSpacing: -1,
            marginTop: 8,
          }}
        >
          d&apos;Excellence
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 60,
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          TGT Propreté · Bondy 93140
        </div>
      </div>
    ),
    { ...size },
  );
}
