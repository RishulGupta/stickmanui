import React from "react";

export default function ShoulderStudy() {
  return (
    <svg
      width="500"
      height="180"
      viewBox="0 0 500 180"
      style={{
        background: "#0d0b18",
      }}
    >
      <defs>
        <filter id="shoulderGlow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow Layer */}
      <path
        d="
          M176 92
          C208 93 232 94 250 94
          C268 94 292 93 324 92
        "
        fill="none"
        stroke="#ffffff"
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.18"
        filter="url(#shoulderGlow)"
      />

      {/* Geometry */}
      <path
        d="
          M176 92
          C208 93 232 94 250 94
          C268 94 292 93 324 92
        "
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
