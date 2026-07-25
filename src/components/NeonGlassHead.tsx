import { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

type NeonGlassHeadProps = {
  className?: string;
};

export function NeonGlassHead({ className }: NeonGlassHeadProps) {
  const headRef = useRef<SVGGElement>(null);
  const haloRef = useRef<SVGGElement>(null);
  const shellRef = useRef<SVGCircleElement>(null);
  const coreLightRef = useRef<SVGCircleElement>(null);
  const coreBloomRef = useRef<SVGCircleElement>(null);
  const coreOuterAuraRef = useRef<SVGCircleElement>(null);
  const coreHotRef = useRef<SVGCircleElement>(null);
  const rimShimmerRef = useRef<SVGGElement>(null);
  const fogParallaxRef = useRef<SVGEllipseElement>(null);
  const eyeGlowRef = useRef<SVGPathElement>(null);
  const eyeBandRef = useRef<SVGPathElement>(null);
  const reflectionARef = useRef<SVGGElement>(null);
  const reflectionBRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let frame = 0;
    let t = 0;

    const animate = () => {
      t += 0.013;

      const floatY = Math.sin(t * 0.58) * 0.55;
      const tinyRotation = Math.sin(t * 0.24) * 0.18;
      const shellScale = 1 + Math.sin(t * 0.75) * 0.0018;
      const haloOpacity = 0.3 + Math.sin(t * 0.68) * 0.026;
      const corePulse = 0.92 + Math.sin(t * 1.08) * 0.042 + Math.sin(t * 3.5) * 0.012;
      const reflectionDrift = Math.sin(t * 0.38) * 0.85;
      const rimDrift = Math.sin(t * 0.44) * 0.42;
      const fogX = Math.sin(t * 0.31) * 0.62;
      const fogY = Math.cos(t * 0.27) * 0.42;
      const eyeOpacity = 0.2 + Math.sin(t * 0.76) * 0.02;
      const bandOpacity = 0.72 + Math.sin(t * 0.66) * 0.032;

      headRef.current?.setAttribute(
        'transform',
        `translate(250 210) translate(0 ${floatY.toFixed(3)}) rotate(${tinyRotation.toFixed(3)}) translate(-250 -210)`,
      );
      shellRef.current?.setAttribute(
        'transform',
        `translate(250 210) scale(${shellScale.toFixed(4)}) translate(-250 -210)`,
      );
      haloRef.current?.setAttribute('opacity', haloOpacity.toFixed(3));
      coreLightRef.current?.setAttribute('opacity', corePulse.toFixed(3));
      coreBloomRef.current?.setAttribute('opacity', (0.74 + Math.sin(t * 0.95) * 0.04).toFixed(3));
      coreOuterAuraRef.current?.setAttribute('opacity', (0.52 + Math.sin(t * 0.8) * 0.035).toFixed(3));
      coreHotRef.current?.setAttribute('opacity', (0.96 + Math.sin(t * 2.4) * 0.022).toFixed(3));
      rimShimmerRef.current?.setAttribute('transform', `translate(${rimDrift.toFixed(3)} ${(-rimDrift * 0.28).toFixed(3)})`);
      fogParallaxRef.current?.setAttribute('transform', `translate(${fogX.toFixed(3)} ${fogY.toFixed(3)})`);
      eyeGlowRef.current?.setAttribute('opacity', eyeOpacity.toFixed(3));
      eyeBandRef.current?.setAttribute('opacity', bandOpacity.toFixed(3));

      [reflectionARef.current, reflectionBRef.current].forEach((layer, index) => {
        if (!layer) return;
        const offset = reflectionDrift * (index === 0 ? 1 : -0.35);
        const lift = Math.sin(t * 0.32 + index) * 0.14;
        layer.setAttribute('transform', `translate(${offset.toFixed(3)} ${lift.toFixed(3)})`);
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg className={cn('overflow-visible', className)} viewBox="0 0 500 500" role="img" aria-label="Neon glass head study">
      <defs>
        <clipPath id="headClip">
          <circle cx="250" cy="210" r="76" />
        </clipPath>

        <radialGradient id="backgroundAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff580" stopOpacity=".28" />
          <stop offset="25%" stopColor="#9d77ff" stopOpacity=".16" />
          <stop offset="58%" stopColor="#6ff2ff" stopOpacity=".08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="glassBody" cx="50%" cy="48%" r="68%">
          <stop offset="0%" stopColor="#fff26f" stopOpacity=".045" />
          <stop offset="22%" stopColor="#bfa5ff" stopOpacity=".09" />
          <stop offset="47%" stopColor="#5e48ac" stopOpacity=".18" />
          <stop offset="70%" stopColor="#2a1b55" stopOpacity=".34" />
          <stop offset="100%" stopColor="#060613" stopOpacity=".62" />
        </radialGradient>

        <radialGradient id="topCoolGlass" cx="25%" cy="17%" r="72%">
          <stop offset="0%" stopColor="#e8ffff" stopOpacity=".4" />
          <stop offset="19%" stopColor="#8df7ff" stopOpacity=".24" />
          <stop offset="44%" stopColor="#8f83ff" stopOpacity=".095" />
          <stop offset="76%" stopColor="#d969ff" stopOpacity=".045" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="upperPurple" cx="58%" cy="8%" r="58%">
          <stop offset="0%" stopColor="#d86bff" stopOpacity=".36" />
          <stop offset="30%" stopColor="#a86dff" stopOpacity=".16" />
          <stop offset="68%" stopColor="#473071" stopOpacity=".07" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="lowerWarm" cx="80%" cy="78%" r="50%">
          <stop offset="0%" stopColor="#ffc49a" stopOpacity=".26" />
          <stop offset="34%" stopColor="#ff8fd1" stopOpacity=".09" />
          <stop offset="70%" stopColor="#8f69ff" stopOpacity=".04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="lowerVioletDepth" cx="48%" cy="80%" r="58%">
          <stop offset="0%" stopColor="#6041af" stopOpacity=".24" />
          <stop offset="45%" stopColor="#2e205d" stopOpacity=".18" />
          <stop offset="100%" stopColor="#080717" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="coreOuterAura" cx="50%" cy="50%" r="56%">
          <stop offset="0%" stopColor="#fff9a8" stopOpacity=".34" />
          <stop offset="24%" stopColor="#fff05f" stopOpacity=".22" />
          <stop offset="52%" stopColor="#ffe85c" stopOpacity=".11" />
          <stop offset="78%" stopColor="#b57cff" stopOpacity=".055" />
          <stop offset="100%" stopColor="#fff05f" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="coreBloom" cx="50%" cy="50%" r="52%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".72" />
          <stop offset="18%" stopColor="#fffdf0" stopOpacity=".68" />
          <stop offset="42%" stopColor="#fff376" stopOpacity=".48" />
          <stop offset="70%" stopColor="#fff05f" stopOpacity=".18" />
          <stop offset="100%" stopColor="#fff05f" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="coreHot" cx="48%" cy="45%" r="54%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="38%" stopColor="#fffffb" stopOpacity="1" />
          <stop offset="64%" stopColor="#fffbd7" stopOpacity=".92" />
          <stop offset="100%" stopColor="#fff05f" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="rimCyan" x1="13%" y1="16%" x2="62%" y2="64%">
          <stop offset="0%" stopColor="#f6ffff" stopOpacity="1" />
          <stop offset="24%" stopColor="#a7fdff" stopOpacity=".9" />
          <stop offset="58%" stopColor="#aabfff" stopOpacity=".38" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="rimViolet" x1="72%" y1="6%" x2="35%" y2="98%">
          <stop offset="0%" stopColor="#e27cff" stopOpacity=".96" />
          <stop offset="36%" stopColor="#b284ff" stopOpacity=".62" />
          <stop offset="70%" stopColor="#8ff7ff" stopOpacity=".24" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="rimPeach" x1="94%" y1="56%" x2="48%" y2="100%">
          <stop offset="0%" stopColor="#ffe8c9" stopOpacity=".9" />
          <stop offset="42%" stopColor="#ffa6dc" stopOpacity=".42" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="rimBottomPurple" x1="22%" y1="100%" x2="78%" y2="100%">
          <stop offset="0%" stopColor="#9df5ff" stopOpacity=".16" />
          <stop offset="48%" stopColor="#b98aff" stopOpacity=".55" />
          <stop offset="100%" stopColor="#ff9fe5" stopOpacity=".14" />
        </linearGradient>

        <linearGradient id="eyeLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="8%" stopColor="#eef8ff" stopOpacity=".86" />
          <stop offset="24%" stopColor="#c8c4ff" stopOpacity=".78" />
          <stop offset="43%" stopColor="#eeedff" stopOpacity=".72" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity=".14" />
          <stop offset="58%" stopColor="#f7f0ff" stopOpacity=".7" />
          <stop offset="77%" stopColor="#c8c8ff" stopOpacity=".76" />
          <stop offset="92%" stopColor="#eefcff" stopOpacity=".86" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="topGlint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="30%" stopColor="#e8ffff" stopOpacity=".18" />
          <stop offset="62%" stopColor="#ffffff" stopOpacity=".22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="shoulderCore" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#97f8ff"/>
          <stop offset="14%" stopColor="#ecffff"/>
          <stop offset="50%" stopColor="#ffffff"/>
          <stop offset="82%" stopColor="#ffe7ff"/>
          <stop offset="100%" stopColor="#d76fff"/>
        </linearGradient>

        <linearGradient id="shoulderShell" x1="12%" y1="8%" x2="88%" y2="92%">
          <stop offset="0%" stopColor="#f6ffff" stopOpacity=".5" />
          <stop offset="22%" stopColor="#a7fdff" stopOpacity=".4" />
          <stop offset="52%" stopColor="#aabfff" stopOpacity=".2" />
          <stop offset="78%" stopColor="#b284ff" stopOpacity=".27" />
          <stop offset="100%" stopColor="#e27cff" stopOpacity=".42" />
        </linearGradient>

        <linearGradient id="shoulderGlassFill" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".18" />
          <stop offset="18%" stopColor="#dffcff" stopOpacity=".12" />
          <stop offset="42%" stopColor="#9eefff" stopOpacity=".06" />
          <stop offset="68%" stopColor="#5b49a8" stopOpacity=".03" />
          <stop offset="100%" stopColor="#2a1d4f" stopOpacity=".11" />
        </linearGradient>

        <linearGradient id="shoulderGlint" x1="13%" y1="0%" x2="87%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="19%" stopColor="#f6ffff" stopOpacity=".34" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity=".18" />
          <stop offset="77%" stopColor="#fff7ff" stopOpacity=".3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <filter id="bigBlur" x="-160%" y="-160%" width="420%" height="420%">
          <feGaussianBlur stdDeviation="29" />
        </filter>

        <filter id="rimBlur" x="-90%" y="-90%" width="280%" height="280%">
          <feGaussianBlur stdDeviation="3.4" result="soft" />
          <feMerge>
            <feMergeNode in="soft" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="rimBloom" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="7.5" result="wide" />
          <feMerge>
            <feMergeNode in="wide" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="eyeGlowFilter" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" result="wide" />
          <feGaussianBlur stdDeviation="2.2" in="SourceGraphic" result="near" />
          <feMerge>
            <feMergeNode in="wide" />
            <feMergeNode in="near" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="coreBloomFilter" x="-190%" y="-190%" width="480%" height="480%">
          <feGaussianBlur stdDeviation="10" result="soft" />
          <feGaussianBlur stdDeviation="24" in="SourceGraphic" result="wide" />
          <feColorMatrix
            in="wide"
            type="matrix"
            values="1.55 0 0 0 0 0 1.38 0 0 0 0 0 .72 0 0 0 0 0 .66 0"
            result="warmWide"
          />
          <feMerge>
            <feMergeNode in="warmWide" />
            <feMergeNode in="soft" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="coreHotFilter" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="3.2" result="smallBloom" />
          <feMerge>
            <feMergeNode in="smallBloom" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="fogNoise" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="4" seed="11" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 .035" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation=".5" />
        </filter>

      </defs>


      <g id="shoulderBar" opacity=".96">
        <path d="M176 300 C208 302 232 303 250 303 C268 303 292 302 324 300" fill="none" stroke="#6ff2ff" strokeWidth="15" strokeLinecap="round" opacity=".055" filter="url(#bigBlur)" />
        <path d="M176 300 C208 302 232 303 250 303 C268 303 292 302 324 300" fill="none" stroke="#d969ff" strokeWidth="14" strokeLinecap="round" opacity=".05" filter="url(#bigBlur)" />
        <path d="M176 300 C208 302 232 303 250 303 C268 303 292 302 324 300" fill="none" stroke="url(#shoulderShell)" strokeWidth="11.5" strokeLinecap="round" opacity=".82" filter="url(#rimBloom)" />
        <path d="M176 300 C208 302 232 303 250 303 C268 303 292 302 324 300" fill="none" stroke="url(#shoulderGlassFill)" strokeWidth="9.5" strokeLinecap="round" opacity=".32" />
        <path d="M176 300 C208 302 232 303 250 303 C268 303 292 302 324 300" fill="none" stroke="url(#shoulderCore)" strokeWidth="4.2" strokeLinecap="round" opacity=".80" filter="url(#rimBlur)" />
        <path d="M176 300 C208 302 232 303 250 303 C268 303 292 302 324 300" fill="none" stroke="#ffffff" strokeWidth=".8" strokeLinecap="round" opacity=".48" />
        <path d="M181 297 C209 299 231 300 250 300 C269 300 291 299 319 297" fill="none" stroke="url(#shoulderGlint)" strokeWidth="1.8" strokeLinecap="round" opacity=".58" filter="url(#rimBlur)" />
        <path d="M184 298 C210 299 232 300 250 300 C268 300 290 299 316 298" fill="none" stroke="#ffffff" strokeWidth=".6" strokeLinecap="round" opacity=".18" filter="url(#rimBlur)" />
        <path d="M184 306 C210 307 231 308 250 308 C269 308 290 307 316 306" fill="none" stroke="#c5b4ff" strokeWidth="1.45" strokeLinecap="round" opacity=".08" filter="url(#rimBlur)" />
        <path d="M176 300 C179 300.3 182 300.6 186 301" fill="none" stroke="#f6ffff" strokeWidth="2" strokeLinecap="round" opacity=".46" filter="url(#rimBlur)" />
        <path d="M314 301 C318 300.6 321 300.3 324 300" fill="none" stroke="#fff7ff" strokeWidth="2" strokeLinecap="round" opacity=".42" filter="url(#rimBlur)" />
      </g>
      <g ref={headRef} className="head">
        <g ref={haloRef} className="haloLayer">
          <circle cx="250" cy="210" r="118" fill="url(#backgroundAura)" opacity=".34" filter="url(#bigBlur)" />
          <ellipse cx="251" cy="286" rx="92" ry="15" fill="#b85fff" opacity=".18" filter="url(#bigBlur)" />
        </g>

        <g id="headOptics">
          <g clipPath="url(#headClip)">
            <circle cx="250" cy="210" r="76" fill="url(#glassBody)" />
            <ellipse cx="224" cy="172" rx="56" ry="51" fill="url(#topCoolGlass)" opacity=".68" />
            <ellipse cx="267" cy="151" rx="53" ry="41" fill="url(#upperPurple)" opacity=".7" />
            <ellipse cx="250" cy="252" rx="61" ry="35" fill="url(#lowerVioletDepth)" opacity=".72" />
            <ellipse cx="284" cy="251" rx="45" ry="30" fill="url(#lowerWarm)" opacity=".56" />
            <ellipse ref={fogParallaxRef} cx="250" cy="216" rx="64" ry="45" fill="#8e78e8" opacity=".055" />
            <circle cx="250" cy="210" r="72" fill="#ffffff" opacity=".095" filter="url(#fogNoise)" />
          </g>

          <g ref={rimShimmerRef} className="rimLayer">
            <circle cx="250" cy="210" r="75.6" fill="none" stroke="#dff7ff" strokeWidth="1.25" opacity=".13" filter="url(#rimBlur)" />
            <path d="M178 203 C181 154 216 119 263 125" fill="none" stroke="url(#rimCyan)" strokeWidth="9.4" strokeLinecap="round" opacity=".64" filter="url(#rimBloom)" />
            <path d="M181 205 C184 158 218 123 265 129" fill="none" stroke="#f3ffff" strokeWidth="2.8" strokeLinecap="round" opacity=".52" filter="url(#rimBlur)" />
            <path d="M258 126 C298 127 324 161 326 205" fill="none" stroke="url(#rimViolet)" strokeWidth="9.6" strokeLinecap="round" opacity=".56" filter="url(#rimBloom)" />
            <path d="M263 128 C303 134 324 169 324 210" fill="none" stroke="#e5b1ff" strokeWidth="2.55" strokeLinecap="round" opacity=".36" filter="url(#rimBlur)" />
            <path d="M319 215 C317 235 306 251 292 263" fill="none" stroke="url(#rimPeach)" strokeWidth="8.6" strokeLinecap="round" opacity=".48" filter="url(#rimBloom)" />
            <path d="M198 249 C221 279 278 282 305 246" fill="none" stroke="url(#rimBottomPurple)" strokeWidth="7.8" strokeLinecap="round" opacity=".42" filter="url(#rimBloom)" />
            <path d="M191 238 C218 274 279 278 310 239" fill="none" stroke="#d1c4ff" strokeWidth="2.2" strokeLinecap="round" opacity=".24" filter="url(#rimBlur)" />
            <path d="M183 221 C181 236 187 250 198 263" fill="none" stroke="#bff9ff" strokeWidth="3.5" strokeLinecap="round" opacity=".18" filter="url(#rimBlur)" />
          </g>

          <circle ref={shellRef} cx="250" cy="210" r="76" fill="none" stroke="#ffffff" strokeWidth=".18" opacity=".05" />

          <g id="coreGroup" clipPath="url(#headClip)">
            <circle ref={coreOuterAuraRef} cx="250" cy="210" r="50" fill="url(#coreOuterAura)" opacity=".52" filter="url(#coreBloomFilter)" />
            <circle ref={coreBloomRef} cx="250" cy="210" r="34" fill="url(#coreBloom)" opacity=".74" filter="url(#coreBloomFilter)" />
            <circle ref={coreLightRef} cx="250" cy="210" r="22" fill="url(#coreBloom)" opacity=".92" filter="url(#coreBloomFilter)" />
            <circle ref={coreHotRef} cx="250" cy="210" r="14.5" fill="url(#coreHot)" opacity=".96" filter="url(#coreHotFilter)" />
            <ellipse cx="250" cy="198" rx="30" ry="11" fill="#fff9a8" opacity=".13" filter="url(#coreBloomFilter)" />
          </g>

          <g ref={reflectionARef} id="eyeReflection" className="reflectionLayer" clipPath="url(#headClip)">
            <path ref={eyeGlowRef} d="M190 203 C210 185 231 184 243 194 M257 194 C269 184 290 185 310 203" fill="none" stroke="#aeb9ff" strokeWidth="18" strokeLinecap="round" opacity=".22" filter="url(#eyeGlowFilter)" />
            <path ref={eyeBandRef} d="M195 202 C213 190 231 188 243 196 M257 196 C269 188 287 190 305 202" fill="none" stroke="url(#eyeLine)" strokeWidth="8.2" strokeLinecap="round" opacity=".78" filter="url(#eyeGlowFilter)" />
            <path d="M199 202 C216 192 231 190 241 197 M259 197 C269 190 284 192 301 202" fill="none" stroke="#f7fbff" strokeWidth="3" strokeLinecap="round" opacity=".42" filter="url(#rimBlur)" />
            <path d="M194 203 C200 196 205 194 211 193 M289 193 C295 194 300 196 306 203" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity=".24" filter="url(#eyeGlowFilter)" />
          </g>

          <g ref={reflectionBRef} className="reflectionLayer" clipPath="url(#headClip)">
            <path d="M211 169 C234 160 265 160 289 170" fill="none" stroke="url(#topGlint)" strokeWidth="4" strokeLinecap="round" opacity=".2" filter="url(#rimBlur)" />
            <path d="M214 246 C236 253 266 253 287 246" fill="none" stroke="#c5b4ff" strokeWidth="2.4" strokeLinecap="round" opacity=".1" filter="url(#rimBlur)" />
            <ellipse cx="199" cy="197" rx="4" ry="32" fill="#dfffff" opacity=".075" transform="rotate(-25 199 197)" filter="url(#rimBlur)" />
            <ellipse cx="318" cy="206" rx="4" ry="34" fill="#dfffff" opacity=".065" transform="rotate(18 318 206)" filter="url(#rimBlur)" />
            <circle cx="225" cy="181" r="1.8" fill="#ffffff" opacity=".26" />
            <circle cx="236" cy="184" r=".75" fill="#ffffff" opacity=".16" />
            <circle cx="276" cy="183" r="1" fill="#fff7ff" opacity=".16" />
            <circle cx="294" cy="204" r=".85" fill="#f4ffff" opacity=".12" />
          </g>
        </g>
      </g>
    </svg>
  );
}





