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

      {/* Main Tube */}
      <path
        d="
          M176 92
          C208 93 232 94 250 94
          C268 94 292 93 324 92
        "
        fill="none"
        stroke="url(#shoulderGradient)"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Glass Volume */}
      <path
        d="
          M176 92
          C208 93 232 94 250 94
          C268 94 292 93 324 92
        "
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5.5"
        strokeLinecap="round"
        opacity=".10"
      />

      {/* Lower Shadow */}
      <path
        d="
          M176 93
          C208 94 232 95 250 95
          C268 95 292 94 324 93
        "
        fill="none"
        stroke="#533F87"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity=".28"
      />

      {/* Top Glass Reflection */}
      <path
        d="
          M181 90
          C209 91 232 92 250 92
          C268 92 291 91 319 90
        "
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity=".30"
      />
    </svg>
  );
}
