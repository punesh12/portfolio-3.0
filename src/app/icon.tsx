import { ImageResponse } from "next/og";

import { SITE_INITIALS } from "@/constants/navigation";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

const Icon = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        background: "#dbeafe",
        color: "#2563eb",
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "ui-monospace, monospace",
        letterSpacing: "-0.02em",
      }}
    >
      {SITE_INITIALS}
    </div>,
    { ...size },
  );

export default Icon;
