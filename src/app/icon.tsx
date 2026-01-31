import { ImageResponse } from "next/og";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

function getLogoDataUrl(): string | null {
  const publicDir = join(process.cwd(), "public");
  const paths = ["icon.png", "favicon.png", "kawhe-logo-svg-export.svg"];
  for (const p of paths) {
    const fullPath = join(publicDir, p);
    if (existsSync(fullPath)) {
      const buffer = readFileSync(fullPath);
      const mime = p.endsWith(".svg") ? "image/svg+xml" : "image/png";
      const base64 = buffer.toString("base64");
      return `data:${mime};base64,${base64}`;
    }
  }
  return null;
}

export default function Icon() {
  const logoSrc = getLogoDataUrl();

  if (logoSrc) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1F3B2C",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={28}
            height={28}
            style={{ objectFit: "contain" }}
          />
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F3B2C",
          borderRadius: 6,
          fontSize: 18,
          fontWeight: 700,
          color: "#F3EFE7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
