import React from "react";

const WIDTH = 500;
const HEIGHT = 180;

const SHOULDER_X = 170;
const SHOULDER_Y = 90;
const SHOULDER_WIDTH = 160;
const SHOULDER_HEIGHT = 14;
const SHOULDER_RADIUS = SHOULDER_HEIGHT / 2;

export default function ShoulderStudy() {
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: "#080812",
        overflow: "visible",
      }}
    >
      <defs>

        {/* ========================================================= */}
        {/* MAIN BODY GRADIENT                                        */}
        {/* ========================================================= */}

        <linearGradient
          id="glassBody"
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
        >
          <stop offset="0%" stopColor="#7efcff"/>
          <stop offset="18%" stopColor="#eaffff"/>
          <stop offset="38%" stopColor="#ffffff"/>
          <stop offset="62%" stopColor="#ffffff"/>
          <stop offset="84%" stopColor="#ffdfff"/>
          <stop offset="100%" stopColor="#d46bff"/>
        </linearGradient>

        {/* ========================================================= */}
        {/* INNER GLASS VOLUME                                        */}
        {/* ========================================================= */}

        <linearGradient
          id="glassVolume"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".45"/>
          <stop offset="18%" stopColor="#ffffff" stopOpacity=".18"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity=".03"/>
          <stop offset="80%" stopColor="#7350cc" stopOpacity=".08"/>
          <stop offset="100%" stopColor="#28143d" stopOpacity=".35"/>
        </linearGradient>

        {/* ========================================================= */}
        {/* TOP REFLECTION                                            */}
        {/* ========================================================= */}

        <linearGradient
          id="topReflection"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".90"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>

        {/* ========================================================= */}
        {/* LOWER SHADOW                                              */}
        {/* ========================================================= */}

        <linearGradient
          id="bottomShadow"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#7c63cf" stopOpacity="0"/>
          <stop offset="100%" stopColor="#201033" stopOpacity=".45"/>
        </linearGradient>

        {/* ========================================================= */}
        {/* LEFT END CAP                                              */}
        {/* ========================================================= */}

        <radialGradient id="leftCap">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="35%" stopColor="#dfffff"/>
          <stop offset="100%" stopColor="#7efcff"/>
        </radialGradient>

        {/* ========================================================= */}
        {/* RIGHT END CAP                                             */}
        {/* ========================================================= */}

        <radialGradient id="rightCap">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="35%" stopColor="#ffeaff"/>
          <stop offset="100%" stopColor="#d46bff"/>
        </radialGradient>

        {/* ========================================================= */}
        {/* WHITE CORE                                                */}
        {/* ========================================================= */}

        <linearGradient
          id="whiteCore"
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
        >
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#ffffff"/>
        </linearGradient>

        {/* ========================================================= */}
        {/* OUTER BLOOM                                               */}
        {/* ========================================================= */}

        <filter
          id="outerBloom"
          x="-150%"
          y="-400%"
          width="400%"
          height="900%"
        >
          <feGaussianBlur stdDeviation="12"/>
        </filter>

        {/* ========================================================= */}
        {/* MEDIUM BLOOM                                              */}
        {/* ========================================================= */}

        <filter
          id="mediumBloom"
          x="-100%"
          y="-300%"
          width="300%"
          height="700%"
        >
          <feGaussianBlur stdDeviation="6"/>
        </filter>

        {/* ========================================================= */}
        {/* SMALL BLOOM                                               */}
        {/* ========================================================= */}

        <filter
          id="smallBloom"
          x="-80%"
          y="-250%"
          width="260%"
          height="600%"
        >
          <feGaussianBlur stdDeviation="2"/>
        </filter>

        {/* ========================================================= */}
        {/* SPECULAR BLUR                                             */}
        {/* ========================================================= */}

        <filter
          id="specularBlur"
          x="-60%"
          y="-200%"
          width="220%"
          height="500%"
        >
          <feGaussianBlur stdDeviation="0.8"/>
        </filter>

        {/* ========================================================= */}
        {/* CAPSULE CLIP                                               */}
        {/* ========================================================= */}

        <clipPath id="shoulderClip">
          <rect
            x={SHOULDER_X}
            y={SHOULDER_Y}
            width={SHOULDER_WIDTH}
            height={SHOULDER_HEIGHT}
            rx={SHOULDER_RADIUS}
          />
        </clipPath>

        {/* ========================================================= */}
        {/* INNER MASK                                                 */}
        {/* ========================================================= */}

        <mask id="glassMask">
          <rect
            width={WIDTH}
            height={HEIGHT}
            fill="black"
          />

          <rect
            x={SHOULDER_X}
            y={SHOULDER_Y}
            width={SHOULDER_WIDTH}
            height={SHOULDER_HEIGHT}
            rx={SHOULDER_RADIUS}
            fill="white"
          />
        </mask>

      </defs>

      {/* ========================================================= */}
      {/* 1. DROP SHADOW                                             */}
      {/* ========================================================= */}

      <ellipse
        cx={SHOULDER_X + SHOULDER_WIDTH / 2}
        cy={SHOULDER_Y + SHOULDER_HEIGHT + 9}
        rx={78}
        ry={10}
        fill="#000"
        opacity={0.28}
        filter="url(#outerBloom)"
      />

      {/* ========================================================= */}
      {/* 2. OUTER CYAN BLOOM                                        */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={SHOULDER_WIDTH}
        height={SHOULDER_HEIGHT}
        rx={SHOULDER_RADIUS}
        fill="#82ffff"
        opacity={0.16}
        filter="url(#outerBloom)"
      />

      {/* ========================================================= */}
      {/* 3. OUTER MAGENTA BLOOM                                     */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={SHOULDER_WIDTH}
        height={SHOULDER_HEIGHT}
        rx={SHOULDER_RADIUS}
        fill="#df72ff"
        opacity={0.13}
        filter="url(#outerBloom)"
      />

      {/* ========================================================= */}
      {/* 4. MEDIUM BLOOM                                            */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={SHOULDER_WIDTH}
        height={SHOULDER_HEIGHT}
        rx={SHOULDER_RADIUS}
        fill="#ffffff"
        opacity={0.11}
        filter="url(#mediumBloom)"
      />

      {/* Localized End Glows */}
      <ellipse
        cx={SHOULDER_X+10}
        cy={SHOULDER_Y+6}
        rx={18}
        ry={9}
        fill="#8dffff"
        opacity={0.12}
        filter="url(#outerBloom)"
      />

      <ellipse
        cx={SHOULDER_X+SHOULDER_WIDTH-10}
        cy={SHOULDER_Y+6}
        rx={18}
        ry={9}
        fill="#e27cff"
        opacity={0.12}
        filter="url(#outerBloom)"
      />

      {/* ========================================================= */}
      {/* 5. GLASS BODY                                              */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={SHOULDER_WIDTH}
        height={SHOULDER_HEIGHT}
        rx={SHOULDER_RADIUS}
        fill="url(#glassBody)"
      />

      {/* ========================================================= */}
      {/* 6. INNER GLASS VOLUME                                      */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={SHOULDER_WIDTH}
        height={SHOULDER_HEIGHT}
        rx={SHOULDER_RADIUS}
        fill="url(#glassVolume)"
        opacity={0.95}
      />

      {/* Subtle lower shadow */}
      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y+7}
        width={SHOULDER_WIDTH}
        height={7}
        fill="#23133b"
        opacity=".10"
        clipPath="url(#shoulderClip)"
      />

      {/* ========================================================= */}
      {/* 7. BRIGHT INNER CORE                                       */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X+24}
        y={SHOULDER_Y+5}
        width={SHOULDER_WIDTH-48}
        height={1.8}
        rx={1}
        fill="white"
        opacity=".95"
        filter="url(#smallBloom)"
      />

      {/* ========================================================= */}
      {/* 8. SOFT CYAN INNER LIGHT                                   */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X + 8}
        y={SHOULDER_Y + 2}
        width={55}
        height={8}
        rx={4}
        fill="#9bffff"
        opacity={0.20}
        filter="url(#smallBloom)"
      />

      {/* ========================================================= */}
      {/* 9. SOFT MAGENTA INNER LIGHT                                */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X + SHOULDER_WIDTH - 63}
        y={SHOULDER_Y + 2}
        width={55}
        height={8}
        rx={4}
        fill="#ff93ff"
        opacity={0.20}
        filter="url(#smallBloom)"
      />

      {/* ========================================================= */}
      {/* 10. SUBTLE FRESNEL EDGE                                    */}
      {/* ========================================================= */}

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={SHOULDER_WIDTH}
        height={1.1}
        rx={1}
        fill="#ffffff"
        opacity={0.22}
      />

      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y + SHOULDER_HEIGHT - 1.1}
        width={SHOULDER_WIDTH}
        height={1.1}
        rx={1}
        fill="#6e4ebf"
        opacity={0.30}
      />

      {/* ========================================================= */}
      {/* PART 3 - GLASS REFLECTIONS & SPECULAR LIGHT               */}
      {/* ========================================================= */}

      {/* Primary top reflection */}
      <path
        d={`
          M ${SHOULDER_X + 8} ${SHOULDER_Y + 2.1}
          C ${SHOULDER_X + 40} ${SHOULDER_Y + 0.4},
            ${SHOULDER_X + 95} ${SHOULDER_Y + 0.4},
            ${SHOULDER_X + 152} ${SHOULDER_Y + 2.2}
        `}
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity=".82"
        filter="url(#specularBlur)"
      />

      {/* Secondary reflection */}
      <path
        d={`
          M ${SHOULDER_X + 18} ${SHOULDER_Y + 3.4}
          C ${SHOULDER_X + 55} ${SHOULDER_Y + 2.6},
            ${SHOULDER_X + 95} ${SHOULDER_Y + 2.8},
            ${SHOULDER_X + 140} ${SHOULDER_Y + 3.5}
        `}
        stroke="white"
        strokeWidth=".8"
        strokeLinecap="round"
        opacity=".42"
      />

      {/* Thin horizon reflection */}
      <path
        d={`
          M ${SHOULDER_X + 30} ${SHOULDER_Y + 5.2}
          H ${SHOULDER_X + SHOULDER_WIDTH - 30}
        `}
        stroke="#ffffff"
        strokeWidth=".5"
        opacity=".22"
      />

      {/* Bottom purple reflection */}
      <path
        d={`
          M ${SHOULDER_X + 14} ${SHOULDER_Y + SHOULDER_HEIGHT - 2}
          C ${SHOULDER_X + 70} ${SHOULDER_Y + SHOULDER_HEIGHT + .2},
            ${SHOULDER_X + 105} ${SHOULDER_Y + SHOULDER_HEIGHT + .2},
            ${SHOULDER_X + 146} ${SHOULDER_Y + SHOULDER_HEIGHT - 2}
        `}
        stroke="#8057dd"
        strokeWidth=".9"
        opacity=".38"
      />

      {/* ========================================================= */}
      {/* LEFT GLASS CAP                                             */}
      {/* ========================================================= */}

      <circle
        cx={SHOULDER_X + SHOULDER_RADIUS}
        cy={SHOULDER_Y + SHOULDER_RADIUS}
        r={5.8}
        fill="url(#leftCap)"
        filter="url(#smallBloom)"
      />

      <circle
        cx={SHOULDER_X + SHOULDER_RADIUS - 1}
        cy={SHOULDER_Y + SHOULDER_RADIUS - 1}
        r={1.2}
        fill="white"
        opacity=".95"
      />

      {/* ========================================================= */}
      {/* RIGHT GLASS CAP                                            */}
      {/* ========================================================= */}

      <circle
        cx={SHOULDER_X + SHOULDER_WIDTH - SHOULDER_RADIUS}
        cy={SHOULDER_Y + SHOULDER_RADIUS}
        r={5.8}
        fill="url(#rightCap)"
        filter="url(#smallBloom)"
      />

      <circle
        cx={SHOULDER_X + SHOULDER_WIDTH - SHOULDER_RADIUS - 1}
        cy={SHOULDER_Y + SHOULDER_RADIUS - 1}
        r={1.15}
        fill="white"
        opacity=".95"
      />

      {/* ========================================================= */}
      {/* GLASS STREAKS                                              */}
      {/* ========================================================= */}

      <g clipPath="url(#shoulderClip)">

        <rect
          x={SHOULDER_X + 16}
          y={SHOULDER_Y - 3}
          width={1.3}
          height={20}
          rx={1}
          fill="white"
          opacity=".09"
          transform={`rotate(-18 ${SHOULDER_X + 16} ${SHOULDER_Y})`}
        />

        <rect
          x={SHOULDER_X + 58}
          y={SHOULDER_Y - 3}
          width={1}
          height={20}
          rx={1}
          fill="white"
          opacity=".06"
          transform={`rotate(-14 ${SHOULDER_X + 58} ${SHOULDER_Y})`}
        />

        <rect
          x={SHOULDER_X + 102}
          y={SHOULDER_Y - 2}
          width={1}
          height={20}
          rx={1}
          fill="white"
          opacity=".06"
          transform={`rotate(-12 ${SHOULDER_X + 102} ${SHOULDER_Y})`}
        />

        <rect
          x={SHOULDER_X + 142}
          y={SHOULDER_Y - 2}
          width={1.2}
          height={20}
          rx={1}
          fill="white"
          opacity=".08"
          transform={`rotate(-18 ${SHOULDER_X + 142} ${SHOULDER_Y})`}
        />

      </g>

      {/* ========================================================= */}
      {/* MICRO GLINTS                                               */}
      {/* ========================================================= */}

      {[
        [192, 95],
        [228, 94],
        [265, 97],
        [303, 94]
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r=".75"
          fill="white"
          opacity=".65"
        />
      ))}

      {/* Tiny sparkle */}
      <path
        d={`
          M 248 90
          L 248 92
          M 247 91
          L 249 91
        `}
        stroke="white"
        strokeWidth=".5"
        opacity=".55"
      />

      {/* ========================================================= */}
      {/* PHASE 4 - OPTICAL DEPTH                                   */}
      {/* ========================================================= */}

      {/* 1. Curved inner caustic */}
      <ellipse
        cx={SHOULDER_X + SHOULDER_WIDTH / 2}
        cy={SHOULDER_Y + SHOULDER_HEIGHT / 2}
        rx={66}
        ry={2.2}
        fill="white"
        opacity={0.10}
        filter="url(#smallBloom)"
      />

      {/* 2. Bright top ribbon */}
      <path
        d={`
          M ${SHOULDER_X+14} ${SHOULDER_Y+2}
          C ${SHOULDER_X+70} ${SHOULDER_Y-0.5},
            ${SHOULDER_X+120} ${SHOULDER_Y-0.5},
            ${SHOULDER_X+146} ${SHOULDER_Y+2}
        `}
        stroke="white"
        strokeWidth="1.1"
        opacity=".85"
        filter="url(#specularBlur)"
        strokeLinecap="round"
      />

      {/* 3. Second ribbon */}
      <path
        d={`
          M ${SHOULDER_X+28} ${SHOULDER_Y+4}
          C ${SHOULDER_X+85} ${SHOULDER_Y+3},
            ${SHOULDER_X+115} ${SHOULDER_Y+3},
            ${SHOULDER_X+132} ${SHOULDER_Y+4}
        `}
        stroke="white"
        strokeWidth=".6"
        opacity=".32"
        strokeLinecap="round"
      />

      {/* 4. Cyan rim */}
      <rect
        x={SHOULDER_X}
        y={SHOULDER_Y}
        width={5}
        height={SHOULDER_HEIGHT}
        rx={5}
        fill="#9fffff"
        opacity=".18"
      />

      {/* 5. Purple rim */}
      <rect
        x={SHOULDER_X+SHOULDER_WIDTH-5}
        y={SHOULDER_Y}
        width={5}
        height={SHOULDER_HEIGHT}
        rx={5}
        fill="#ef9dff"
        opacity=".18"
      />

      {/* 6. Glass fog */}
      <rect
        x={SHOULDER_X+5}
        y={SHOULDER_Y+1}
        width={SHOULDER_WIDTH-10}
        height={SHOULDER_HEIGHT-2}
        rx={6}
        fill="white"
        opacity=".035"
      />

      {/* 7. Stronger center energy */}
      <rect
        x={SHOULDER_X+18}
        y={SHOULDER_Y+5}
        width={SHOULDER_WIDTH-36}
        height={2}
        rx={1}
        fill="white"
        opacity=".95"
        filter="url(#smallBloom)"
      />

      {/* 8. End-cap highlights */}
      <ellipse
        cx={SHOULDER_X+5}
        cy={SHOULDER_Y+3}
        rx={1.3}
        ry={0.8}
        fill="white"
        opacity=".95"
      />

      <ellipse
        cx={SHOULDER_X+SHOULDER_WIDTH-5}
        cy={SHOULDER_Y+3}
        rx={1.3}
        ry={0.8}
        fill="white"
        opacity=".95"
      />

    </svg>
  );
}