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

        <linearGradient
          id="shoulderGradient"
          x1="176"
          y1="94"
          x2="324"
          y2="94"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#A7FFFF" />
          <stop offset="18%" stopColor="#F8FFFF" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="82%" stopColor="#FFE9FF" />
          <stop offset="100%" stopColor="#E76BFF" />
        </linearGradient>
      </defs>

      {/* Left Cyan Bloom */}
      <path
        d="
          M176 92
          C208 93 232 94 250 94
          C268 94 292 93 324 92
        "
        fill="none"
        stroke="#7FF8FF"
        strokeWidth="24"
        strokeLinecap="round"
        opacity=".16"
        filter="url(#shoulderGlow)"
      />

      {/* Right Purple Bloom */}
      <path
        d="
          M176 92
          C208 93 232 94 250 94
          C268 94 292 93 324 92
        "
        fill="none"
        stroke="#E06CFF"
        strokeWidth="24"
        strokeLinecap="round"
        opacity=".16"
        filter="url(#shoulderGlow)"
      />

      {/* Glass Body */}
      <path
        d="
          M176 88
          C208 89 232 90 250 90
          C268 90 292 89 324 88
          L324 96
          C292 97 268 98 250 98
          C232 98 208 97 176 96
          Z
        "
        fill="url(#shoulderGradient)"
      />

      {/* Top Glass Highlight */}
      <path
        d="
          M181 90
          C209 91 232 92 250 92
          C268 92 291 91 319 90
        "
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1"
        opacity=".35"
      />

      {/* Lower Shadow */}
      <path
        d="
          M181 96
          C209 97 232 98 250 98
          C268 98 291 97 319 96
        "
        fill="none"
        stroke="#5D468F"
        strokeWidth="1"
        opacity=".35"
      />
    </svg>
  );
}
