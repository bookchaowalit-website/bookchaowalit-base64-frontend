import { ImageResponse } from "next/og";

// Generated at build time so social cards never point at a missing file.
// Text stays ASCII: the built-in ImageResponse font has no Thai glyphs.
export const alt = "Exposure / 64 — Base64 bench";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {"bg":"#12110e","ink":"#f3ecdc","muted":"#b4aa98","accent":"#e9a23b"};
const KICKER = "EXPOSURE / 64";
const TITLE = "Base64 bench";
const SUBTITLE = "Encode and decode in the browser. UTF-8 safe, no upload.";
const CHIPS: readonly string[] = ["Encode","Decode","URL-safe","Local only"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: colors.bg,
          color: colors.ink,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: colors.accent }}>{KICKER}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{TITLE}</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: colors.muted }}>{SUBTITLE}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {CHIPS.map((chip) => (
            <div
              key={chip}
              style={{ display: "flex", padding: "10px 18px", borderRadius: 8, border: `2px solid ${colors.accent}`, fontSize: 22 }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
