import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "28px",
          background: "#0f172a",
          color: "#f8fafc",
          fontSize: 64,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        YS
      </div>
    ),
    { ...size }
  );
}