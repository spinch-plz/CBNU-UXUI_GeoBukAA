/* GeoBukAA — shared UI kit components (assigned to window) */

const C = {
  coral: 'var(--coral-500)', coralPress: 'var(--coral-600)',
  sky: 'var(--sky-500)', cream: 'var(--neutral-50)', white: '#fff',
  gray: 'var(--neutral-300)',
};

/* ── App header: wordmark + hamburger ── */
function PhoneHeader({ onMenu, topPad = 54 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: `${topPad}px var(--s-8) 8px` }}>
      <Wordmark />
      <button onClick={onMenu} aria-label="menu" style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: 6, lineHeight: 0, color: C.coral }}>
        <Icon name="bars" size={26} color={C.coral} />
      </button>
    </div>
  );
}

/* ── Display banner pill (e.g. "추구미 변경") ── */
function BannerPill({ children, style = {} }) {
  return (
    <div style={{ margin: '0 var(--s-8)', background: C.coral, borderRadius: 'var(--r-pill)',
      padding: '14px 28px', textAlign: 'center', ...style }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40,
        color: C.sky, lineHeight: 1.1, letterSpacing: '-1px', whiteSpace: 'nowrap' }}>{children}</span>
    </div>
  );
}

/* ── Round play button ── */
function PlayButton({ size = 56, onClick }) {
  return (
    <button onClick={onClick} aria-label="play" style={{ width: size, height: size, borderRadius: '50%',
      background: C.coral, border: 'none', cursor: 'pointer', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.sky,
      boxShadow: 'var(--elev-sm)' }}>
      <Icon name="play" size={size * 0.34} color={C.sky} style={{ marginLeft: 2 }} />
    </button>
  );
}

/* ── Outlined "action" card: title + play, with ghost watermark ── */
function ActionCard({ title, watermark = 'fa-dumbbell', onClick }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', margin: '0 var(--s-8)',
      borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)',
      padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
      <Icon name={watermark} size={108} color="rgba(0,0,0,0.06)" style={{ position: 'absolute', right: 64, top: '50%',
        transform: 'translateY(-50%) rotate(-18deg)' }} />
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: C.coral,
        lineHeight: 1.4, whiteSpace: 'pre-line', position: 'relative' }}>{title}</span>
      <PlayButton onClick={onClick} />
    </div>
  );
}

/* ── Section header: title + trailing action ── */
function SectionHeader({ title, action, onAction, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      padding: '0 var(--s-8)', marginBottom: 12 }}>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: C.coral }}>{title}</h3>
      {(action || children) && (
        <div onClick={onAction} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
          color: C.coral, opacity: 0.85, cursor: onAction ? 'pointer' : 'default' }}>{action || children}</div>
      )}
    </div>
  );
}

/* ── Stat card: icon + label, big value + progress ── */
function StatCard({ icon, label, value, unit, progress }) {
  return (
    <div style={{ flex: 1, borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: 16,
      display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 36, height: 36, borderRadius: '50%', background: C.coral, color: C.white,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={icon} size={18} color={C.white} />
        </span>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: C.coral }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: C.coral, lineHeight: 1 }}>{value}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, color: C.coral, opacity: 0.8 }}>{unit}</span>
      </div>
      <div style={{ height: 12, borderRadius: 'var(--r-pill)', boxShadow: 'var(--elev-outline-1)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: C.coral, borderRadius: 'var(--r-pill)' }}></div>
      </div>
    </div>
  );
}

/* ── Category card: icon tile + title + meta ── */
function CategoryCard({ icon, title, meta, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 1, textAlign: 'left', cursor: 'pointer', background: 'none',
      borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: 16, border: 'none',
      display: 'flex', flexDirection: 'column', gap: 12, minHeight: 150, justifyContent: 'space-between' }}>
      <span style={{ width: 52, height: 52, borderRadius: 14, background: C.coral, color: C.sky,
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={26} color={C.sky} />
      </span>
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, color: C.coral }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 13, color: C.coral, opacity: 0.7, marginTop: 3 }}>{meta}</div>
      </div>
    </button>
  );
}

/* ── Toggle switch (outlined) ── */
function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)} aria-pressed={on} style={{ width: 60, height: 32, borderRadius: 'var(--r-pill)',
      boxShadow: 'var(--elev-outline)', background: on ? C.coral : 'transparent', border: 'none', cursor: 'pointer',
      position: 'relative', transition: 'background .18s', flexShrink: 0 }}>
      <span style={{ position: 'absolute', top: 4, left: on ? 32 : 4, width: 24, height: 24, borderRadius: '50%',
        background: on ? C.white : 'transparent', boxShadow: on ? 'none' : 'var(--elev-outline)', transition: 'left .18s' }}></span>
    </button>
  );
}

/* ── Segmented 1-5 slider (filled track + numbered nodes) ── */
function SegSlider({ value, max = 5, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ height: 18, borderRadius: 'var(--r-pill)', boxShadow: 'var(--elev-outline)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(value / max) * 100}%`, background: C.coral, borderRadius: 'var(--r-pill)' }}></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Array.from({ length: max }).map((_, i) => {
          const n = i + 1, active = n === value;
          return (
            <button key={n} onClick={() => onChange && onChange(n)} style={{ width: 30, height: 30, borderRadius: '50%',
              boxShadow: 'var(--elev-outline)', background: active ? C.coral : 'transparent', color: active ? C.white : C.coral,
              border: 'none', cursor: onChange ? 'pointer' : 'default', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>{n}</button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Badge token (circular) ── */
function Badge({ icon, locked }) {
  return (
    <span style={{ width: 64, height: 64, borderRadius: '50%', flexShrink: 0,
      background: locked ? C.gray : C.coral, color: C.white,
      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!locked && <Icon name={icon} size={28} color={C.white} />}
    </span>
  );
}

/* ── Coin / points pill ── */
function Coin({ value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '0 var(--s-8)' }}>
      <span style={{ width: 22, height: 22, borderRadius: '50%', background: C.coral, display: 'inline-block',
        boxShadow: 'inset 0 -3px 0 rgba(0,0,0,0.12)' }}></span>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: C.coral }}>{value}</span>
    </div>
  );
}

/* ── Bottom navigation bar ── */
const NAV_TABS = [
  { id: 'home', glyph: 'home' },
  { id: 'stats', glyph: 'stats' },
  { id: 'stretch', glyph: 'stretch' },
  { id: 'shop', glyph: 'shop' },
];
function BottomNav({ active, onChange, style = {} }) {
  return (
    <div style={{ position: 'absolute', left: 'var(--s-8)', right: 'var(--s-8)', bottom: 22, height: 64,
      borderRadius: 'var(--r-pill)', boxShadow: 'var(--elev-outline)', background: C.sky,
      display: 'flex', alignItems: 'center', padding: '0 24px', gap: 8, ...style }}>
      {NAV_TABS.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} aria-label={t.id} style={{ flex: 1, height: 48, borderRadius: 'var(--r-pill)',
            background: on ? C.coral : 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .15s' }}>
            <NavGlyph name={t.glyph} size={23} color={on ? C.sky : C.coral} />
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, {
  PhoneHeader, BannerPill, PlayButton, ActionCard, SectionHeader,
  StatCard, CategoryCard, Toggle, SegSlider, Badge, Coin, BottomNav, UIC: C,
});
