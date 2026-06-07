/* GeoBukAA — inline SVG icon set (self-contained, no icon font).
   Usage: <Icon name="play" size={20} color="var(--coral-500)" />
   Each entry returns inner SVG markup for a 0 0 24 24 viewBox. */

const S2 = (d, p = {}) => ({ d, ...p });           // stroke path
const F2 = (d) => ({ d, fill: true });             // fill path

const ICONS = {
  // ── ui ──
  bars: { fill: true, el: <g><rect x="3" y="6" width="18" height="2.4" rx="1.2"/><rect x="3" y="10.8" width="18" height="2.4" rx="1.2"/><rect x="3" y="15.6" width="18" height="2.4" rx="1.2"/></g> },
  xmark: { stroke: true, el: <g><path d="M6 6l12 12M18 6L6 18" strokeWidth="2.6" strokeLinecap="round"/></g> },
  play: { fill: true, el: <path d="M7 4.5v15l13-7.5z"/> },
  check: { stroke: true, el: <path d="M4.5 12.5l4.5 4.5L19.5 6.5" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/> },
  'chevron-right': { stroke: true, el: <path d="M9 5l7 7-7 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> },
  'chevron-left': { stroke: true, el: <path d="M15 5l-7 7 7 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> },
  'chevron-down': { stroke: true, el: <path d="M5 9l7 7 7-7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> },
  'chevron-up': { stroke: true, el: <path d="M5 15l7-7 7 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> },

  // ── home / stats ──
  chair: { fill: true, el: <path d="M6 3.5h12c1.1 0 2 .9 2 2v6.5h-2.2v-1.8c0-.6-.5-1-1-1H7.2c-.6 0-1 .5-1 1V12H4V5.5c0-1.1.9-2 2-2zm-2 10h16v3.2c0 .6-.5 1-1 1h-1v3.3h-2.2v-3.3H8.4v3.3H6.2v-3.3h-1c-.6 0-1-.5-1-1V13.5z"/> },
  bell: { fill: true, el: <path d="M12 2.5a1.4 1.4 0 0 1 1.4 1.4v.6a6 6 0 0 1 4.6 5.8v3.2l1.6 2.4c.4.7-.1 1.6-.9 1.6H5.7c-.8 0-1.3-.9-.9-1.6L6.4 17v-3.3a6 6 0 0 1 4.6-5.8v-.6A1.4 1.4 0 0 1 12 2.5zm0 19.5a2.6 2.6 0 0 1-2.5-1.9h5A2.6 2.6 0 0 1 12 22z"/> },

  // ── stretch categories ──
  dumbbell: { fill: true, el: <path d="M3.5 9h1.8v6H3.5a1.3 1.3 0 0 1-1.3-1.3v-3.4A1.3 1.3 0 0 1 3.5 9zm3.3-1.5h2.4v9H6.8a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1zM10 10.7h4v2.6h-4zm4.8-3.2h2.4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.4v-9zM18.7 9h1.8a1.3 1.3 0 0 1 1.3 1.3v3.4a1.3 1.3 0 0 1-1.3 1.3h-1.8V9z"/> },
  fire: { fill: true, el: <path d="M12 2c.6 3-1.7 4.2-3 6-1.5 2-2.5 4-2.5 6.2A5.5 5.5 0 0 0 12 20a5.5 5.5 0 0 0 5.5-5.8c0-2-1-3.4-1.7-4.2-.3 1-.9 1.7-1.8 2 .8-2.2.2-5.5-2-8zm-.3 11.5c.4 1.3-.7 1.7-.7 2.7a1.6 1.6 0 0 0 3.2.1c0-1.4-1-1.9-1.4-3.2-.4.5-.8.3-1.1.4z"/> },
  brain: { fill: true, el: <path d="M9 3.2A3.1 3.1 0 0 0 6 6a2.8 2.8 0 0 0-1.6 4.6A3 3 0 0 0 5 15.8a3 3 0 0 0 3 3.3 2.4 2.4 0 0 0 2.4-2V4.8A1.6 1.6 0 0 0 9 3.2zm6 0a1.6 1.6 0 0 0-1.4 1.6v12.3a2.4 2.4 0 0 0 2.4 2 3 3 0 0 0 3-3.3 3 3 0 0 0 .6-5.2A2.8 2.8 0 0 0 18 6a3.1 3.1 0 0 0-3-2.8z"/> },
  bone: { fill: true, el: <path d="M7.5 6.2a2.3 2.3 0 0 0-2.2 3.3 2.3 2.3 0 1 0 3.1 3.1l3.3-3.3 2.5 2.5-3.3 3.3a2.3 2.3 0 1 0 3.1 3.1 2.3 2.3 0 1 0 3.3-3.3 2.3 2.3 0 1 0-3.1-3.1l-2.5-2.5a2.3 2.3 0 0 0-3.1-3.1 2.3 2.3 0 0 0-1 .8z" transform="rotate(0 12 12)"/> },
  'child-reaching': { fill: true, el: <g><circle cx="12" cy="4.2" r="2.2"/><path d="M5.5 8.5c0-.7.6-1.2 1.3-1.1L12 8l5.2-.6c.7-.1 1.3.4 1.3 1.1 0 .6-.4 1-1 1.1l-3.3.5 1.8 9.1c.1.8-.5 1.4-1.2 1.4-.6 0-1-.4-1.2-1L12 14.5l-1.4 5.6c-.2.6-.6 1-1.2 1-.7 0-1.3-.6-1.2-1.4l1.8-9.1-3.3-.5c-.6-.1-1-.5-1-1.1z"/></g> },
  dna: { stroke: true, el: <g strokeWidth="1.8" strokeLinecap="round"><path d="M7 3c0 5 10 7 10 12s-10 4-10 9"/><path d="M17 3c0 5-10 7-10 12s10 4 10 9"/><path d="M8 6h8M8.8 9.5h6.4M8.8 14.5h6.4M8 18h8"/></g> },

  // ── badges ──
  crown: { fill: true, el: <path d="M3 7.5l3.5 3 4-5.5 4 5.5 3.5-3-1 10.5H4L3 7.5zM5.5 19.5h13v1.5h-13z"/> },
  sun: { fill: true, el: <g><circle cx="12" cy="12" r="4.2"/><g strokeWidth="2" strokeLinecap="round" stroke="currentColor"><path d="M12 2.5v2.3M12 19.2v2.3M21.5 12h-2.3M4.8 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3"/></g></g> },
  droplet: { fill: true, el: <path d="M12 2.5c3.5 4.2 6 7.3 6 10.3a6 6 0 0 1-12 0c0-3 2.5-6.1 6-10.3z"/> },
  medal: { fill: true, el: <g><path d="M8 2.5h3l-2 5.5H6L8 2.5zm5 0h3l2 5.5h-3L13 2.5z"/><circle cx="12" cy="15" r="6"/><circle cx="12" cy="15" r="3" fill="#fff"/></g> },
  heart: { fill: true, el: <path d="M12 20.5l-1.4-1.3C5.8 14.9 3 12.3 3 9.1A4.6 4.6 0 0 1 7.6 4.5c1.5 0 3 .7 4.4 2.3 1.3-1.6 2.9-2.3 4.4-2.3A4.6 4.6 0 0 1 21 9.1c0 3.2-2.8 5.8-7.6 10.1L12 20.5z"/> },

  // ── shop: deco ──
  hat: { fill: true, el: <path d="M8 3.5h8v9H8v-9zM4 12.5h16v2c0 1-1 1.6-2.4 1.9-1.7.4-3.5.6-5.6.6s-3.9-.2-5.6-.6C4.9 16.1 4 15.5 4 14.5v-2z"/> },
  shield: { fill: true, el: <g><path d="M12 2.5l8 3v6c0 5-3.5 8.4-8 10-4.5-1.6-8-5-8-10v-6l8-3z"/><path d="M12 7.5l3.2 2.3-1.2 3.8h-4L8.8 9.8 12 7.5z" fill="#fff" opacity="0.55"/></g> },
  shoe: { fill: true, el: <path d="M3 9c.8-.3 1.6-.2 2.3.3l1.2.9c.6.4 1.3.5 2 .2l1.3-.5c.7-.3 1.5-.1 2 .5l1.3 1.5c.5.6 1.3.9 2.1.9h3.2c1.4 0 2.6.9 3 2.2l.2.7c.2.8-.4 1.6-1.2 1.6H4.4c-.8 0-1.4-.6-1.4-1.4V9z"/> },
  glasses: { stroke: true, el: <g strokeWidth="1.8"><circle cx="6.5" cy="13" r="3.5" fill="none"/><circle cx="17.5" cy="13" r="3.5" fill="none"/><path d="M10 12.5c.7-.6 3.3-.6 4 0M3 11l1.5-3.5M21 11l-1.5-3.5" strokeLinecap="round"/></g> },

  // ── shop: helpers ──
  flask: { fill: true, el: <path d="M9.5 2.5h5v1.5h-1v4.2l4.4 8.3c.9 1.6-.3 3.5-2.1 3.5H8.2c-1.8 0-3-1.9-2.1-3.5L10.5 8.2V4H9.5V2.5zm1.2 9.5h2.6l1.5 2.8c-1.2.6-2.7.5-3.8 0L10.7 12z"/> },
  box: { stroke: true, el: <g strokeWidth="1.9" fill="none" strokeLinejoin="round"><path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2L12 3z"/><path d="M4 7.2l8 4 8-4M12 11.2V21"/></g> },
  ticket: { fill: true, el: <path d="M4 6.5h16c.6 0 1 .4 1 1v2.2a2 2 0 0 0 0 4v2.8c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-2.8a2 2 0 0 0 0-4V7.5c0-.6.4-1 1-1zm9 1.5h-2v2h2V8zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/> },
  'wand-sparkles': { fill: true, el: <g><path d="M4.5 18l9-9 1.9 1.9-9 9-2.5.6.6-2.5z"/><path d="M15 4l.7 1.8 1.8.7-1.8.7L15 9l-.7-1.8L12.5 6.5l1.8-.7L15 4zM19.5 9.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3z"/></g> },

  // ── alarm modes ──
  moon: { fill: true, el: <path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.3 8.3 0 1 0 20 14.5z"/> },
  bed: { fill: true, el: <path d="M3 6.5a1 1 0 0 1 2 0V11h14V9.5a2.5 2.5 0 0 0-2.5-2.5h-6A2.5 2.5 0 0 0 8 9.5V11H5m-2-4.5V19a1 1 0 0 0 2 0v-2h14v2a1 1 0 0 0 2 0v-5.5a2.5 2.5 0 0 0-2.5-2.5H3"/> },
  'shoe-prints': { fill: true, el: <path d="M7.5 3c1.3 0 2.3 1 2.3 2.3 0 .8-.2 1.7-.5 2.6-.3.9-1.1 1.4-2 1.4-1.2 0-2.1-1-2.1-2.2 0-1 .1-2 .4-2.7C5.9 3.5 6.6 3 7.5 3zM5.4 11.2c1.1-.3 2.3.4 2.5 1.5.1.6.1 1.3 0 2-.2 1-1.1 1.6-2.1 1.5-1-.1-1.8-1-1.7-2 .1-.8.2-1.6.5-2.3.1-.3.4-.6.8-.7zM16.5 5c1.3 0 2.3 1 2.3 2.3 0 .8-.2 1.7-.5 2.6-.3.9-1.1 1.4-2 1.4-1.2 0-2.1-1-2.1-2.2 0-1 .1-2 .4-2.7.3-.9 1-1.4 1.9-1.4zM14.4 13.2c1.1-.3 2.3.4 2.5 1.5.1.6.1 1.3 0 2-.2 1-1.1 1.6-2.1 1.5-1-.1-1.8-1-1.7-2 .1-.8.2-1.6.5-2.3.1-.3.4-.6.8-.7z"/> },
};

const ICON_ALIAS = { 'hat-cowboy': 'hat', 'shield-cat': 'shield', 'shield-halved': 'shield', 'wand-magic-sparkles': 'wand-sparkles', 'shoe': 'shoe', 'tint': 'droplet' };
function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  let key = String(name || '').replace(/^fa-solid\s+/, '').replace(/^fa-/, '');
  key = ICON_ALIAS[key] || key;
  const ic = ICONS[key] || ICONS.box;
  const common = { width: size, height: size, viewBox: '0 0 24 24', style: { display: 'block', flexShrink: 0, ...style } };
  if (ic.stroke) return <svg {...common} fill="none" stroke={color}>{ic.el}</svg>;
  return <svg {...common} fill={color}>{ic.el}</svg>;
}

window.Icon = Icon;
