import React from 'react';
import { ART as GBA_ART } from '../lib/art.js';

/* GeoBukAA — brand art: turtles, campfire, custom bottom-nav glyphs.
   Turtle/campfire markup comes from assets/art.js → window.GBA_ART
   (body = currentColor, eyes = var(--eye)). */

const ART = GBA_ART;

/* Turtle illustration. variant 0=flex 1=sit 2=hunched 3=upright 4=escape.
   color sets the body; eye sets the eye/inverse detail. */
function Turtle({ variant = 0, color = 'var(--coral-500)', eye = 'var(--sky-500)', size, height, style = {} }) {
  const t = ART.turtles[variant] || ART.turtles[0] || { svg: '', w: 1, h: 1 };
  return (
    <div
      style={{ color, '--eye': eye, lineHeight: 0, display: 'inline-flex',
        height: height, width: size, ...style }}
      ref={el => { if (el) { const s = el.querySelector('svg'); if (s) { s.style.height = '100%'; s.style.width = size ? '100%' : 'auto'; s.style.display = 'block'; } } }}
      dangerouslySetInnerHTML={{ __html: t.svg }}
    />
  );
}

/* Campfire flame outline (home hero) */
function Campfire({ color = 'var(--sky-500)', height = 130, style = {} }) {
  return (
    <div
      style={{ color, lineHeight: 0, height, display: 'inline-flex', ...style }}
      ref={el => { if (el) { const s = el.querySelector('svg'); if (s) { s.style.height = '100%'; s.style.width = 'auto'; s.style.display = 'block'; } } }}
      dangerouslySetInnerHTML={{ __html: ART.campfire }}
    />
  );
}

/* ── Custom bottom-nav glyphs (extracted from the Figma component) ── */
const NAV_GLYPHS = {
  home: { vb: '0 0 15.749 14', d: 'M 15.745 6.986 C 15.745 7.479 15.334 7.864 14.87 7.864 L 13.995 7.864 L 14.014 12.245 C 14.014 12.318 14.008 12.392 14 12.466 L 14 12.906 C 14 13.511 13.511 14 12.906 14 L 12.469 14 C 12.439 14 12.409 14 12.379 13.997 C 12.34 14 12.302 14 12.264 14 L 11.375 14 L 10.719 14 C 10.114 14 9.625 13.511 9.625 12.906 L 9.625 12.25 L 9.625 10.5 C 9.625 10.016 9.234 9.625 8.75 9.625 L 7 9.625 C 6.516 9.625 6.125 10.016 6.125 10.5 L 6.125 12.25 L 6.125 12.906 C 6.125 13.511 5.636 14 5.031 14 L 4.375 14 L 3.503 14 C 3.462 14 3.421 13.997 3.38 13.995 C 3.347 13.997 3.314 14 3.281 14 L 2.844 14 C 2.239 14 1.75 13.511 1.75 12.906 L 1.75 9.844 C 1.75 9.819 1.75 9.792 1.753 9.767 L 1.753 7.864 L 0.875 7.864 C 0.383 7.864 0 7.481 0 6.986 C 0 6.74 0.082 6.521 0.273 6.33 L 7.284 0.219 C 7.476 0.027 7.695 0 7.886 0 C 8.077 0 8.296 0.055 8.46 0.191 L 15.444 6.33 C 15.662 6.521 15.772 6.74 15.745 6.986 Z' },
  stats: { vb: '0 0 15.75 15.75', d: 'M 5.625 1.688 C 5.625 0.756 6.381 0 7.313 0 L 8.438 0 C 9.369 0 10.125 0.756 10.125 1.688 L 10.125 14.063 C 10.125 14.994 9.369 15.75 8.438 15.75 L 7.313 15.75 C 6.381 15.75 5.625 14.994 5.625 14.063 L 5.625 1.688 Z M 0 8.438 C 0 7.506 0.756 6.75 1.688 6.75 L 2.813 6.75 C 3.744 6.75 4.5 7.506 4.5 8.438 L 4.5 14.063 C 4.5 14.994 3.744 15.75 2.813 15.75 L 1.688 15.75 C 0.756 15.75 0 14.994 0 14.063 L 0 8.438 Z M 12.938 2.25 L 14.063 2.25 C 14.994 2.25 15.75 3.006 15.75 3.938 L 15.75 14.063 C 15.75 14.994 14.994 15.75 14.063 15.75 L 12.938 15.75 C 12.006 15.75 11.25 14.994 11.25 14.063 L 11.25 3.938 C 11.25 3.006 12.006 2.25 12.938 2.25 Z' },
  stretch: { vb: '0 0 22.5 15.75', d: 'M 3.375 1.125 C 3.375 0.503 3.878 0 4.5 0 L 5.625 0 C 6.247 0 6.75 0.503 6.75 1.125 L 6.75 6.75 L 6.75 9 L 6.75 14.625 C 6.75 15.247 6.247 15.75 5.625 15.75 L 4.5 15.75 C 3.878 15.75 3.375 15.247 3.375 14.625 L 3.375 12.375 L 2.25 12.375 C 1.628 12.375 1.125 11.872 1.125 11.25 L 1.125 9 C 0.503 9 0 8.497 0 7.875 C 0 7.253 0.503 6.75 1.125 6.75 L 1.125 4.5 C 1.125 3.878 1.628 3.375 2.25 3.375 L 3.375 3.375 L 3.375 1.125 Z M 19.125 1.125 L 19.125 3.375 L 20.25 3.375 C 20.872 3.375 21.375 3.878 21.375 4.5 L 21.375 6.75 C 21.997 6.75 22.5 7.253 22.5 7.875 C 22.5 8.497 21.997 9 21.375 9 L 21.375 11.25 C 21.375 11.872 20.872 12.375 20.25 12.375 L 19.125 12.375 L 19.125 14.625 C 19.125 15.247 18.622 15.75 18 15.75 L 16.875 15.75 C 16.253 15.75 15.75 15.247 15.75 14.625 L 15.75 9 L 15.75 6.75 L 15.75 1.125 C 15.75 0.503 16.253 0 16.875 0 L 18 0 C 18.622 0 19.125 0.503 19.125 1.125 Z M 14.625 6.75 L 14.625 9 L 7.875 9 L 7.875 6.75 L 14.625 6.75 Z' },
  shop: { vb: '0 0 19.128 18', d: 'M 18.69 3.649 L 16.676 0.461 C 16.496 0.176 16.176 0 15.835 0 L 3.292 0 C 2.951 0 2.631 0.176 2.451 0.461 L 0.433 3.649 C -0.607 5.295 0.314 7.583 2.258 7.847 C 2.399 7.864 2.543 7.875 2.683 7.875 C 3.601 7.875 4.417 7.474 4.976 6.855 C 5.535 7.474 6.35 7.875 7.268 7.875 C 8.185 7.875 9.001 7.474 9.56 6.855 C 10.119 7.474 10.935 7.875 11.852 7.875 C 12.773 7.875 13.585 7.474 14.144 6.855 C 14.707 7.474 15.519 7.875 16.437 7.875 C 16.581 7.875 16.721 7.864 16.862 7.847 C 18.813 7.587 19.738 5.298 18.694 3.649 L 18.69 3.649 Z M 17.006 8.961 L 17.003 8.961 C 16.816 8.986 16.626 9 16.433 9 C 15.997 9 15.579 8.933 15.189 8.814 L 15.189 13.5 L 3.939 13.5 L 3.939 8.81 C 3.545 8.933 3.123 9 2.687 9 C 2.494 9 2.3 8.986 2.114 8.961 L 2.11 8.961 C 1.966 8.94 1.826 8.916 1.689 8.88 L 1.689 13.5 L 1.689 15.75 C 1.689 16.991 2.698 18 3.939 18 L 15.189 18 C 16.43 18 17.439 16.991 17.439 15.75 L 17.439 13.5 L 17.439 8.88 C 17.298 8.916 17.157 8.944 17.006 8.961 Z' },
};
function NavGlyph({ name, size = 24, color = 'currentColor' }) {
  const g = NAV_GLYPHS[name] || NAV_GLYPHS.home;
  return (
    <svg width={size} height={size} viewBox={g.vb} fill="none" style={{ display: 'block' }}>
      <path d={g.d} fill={color} />
    </svg>
  );
}

/* ── GeoBukAA wordmark: little turtle + 거북아 ── */
function Wordmark({ color = 'var(--coral-500)', size = 1 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 * size, color }}>
      <Turtle variant={0} color={color} eye={color} height={20 * size} />
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30 * size, lineHeight: 1, letterSpacing: '-1px', whiteSpace: 'nowrap' }}>거북아</span>
    </div>
  );
}

export { Turtle, Campfire, NavGlyph, Wordmark };
