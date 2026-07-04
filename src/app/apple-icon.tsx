import { ImageResponse } from "next/og";

import { SITE_INITIALS } from "@/constants/navigation";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const AppleIcon = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 36,
        background: "#dbeafe",
        color: "#2563eb",
        fontSize: 72,
        fontWeight: 700,
        fontFamily: "ui-monospace, monospace",
        letterSpacing: "-0.02em",
      }}
    >
      {SITE_INITIALS}
    </div>,
    { ...size },
  );

export default AppleIcon;
