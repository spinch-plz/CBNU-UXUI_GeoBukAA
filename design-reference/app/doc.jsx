/* GeoBukAA Design System — documentation page building blocks */
const { useState } = React;
const D = window.UIC;

/* layout primitives */
function Section({ id, kicker, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 72 }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--coral-600)', marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 30, color: 'var(--neutral-900)', letterSpacing: '-0.01em' }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
function Frame({ label, children, span = 1, pad = 28, bg = '#fff', center = true }) {
  return (
    <div style={{ gridColumn: `span ${span}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: bg, borderRadius: 16, border: '1px solid var(--neutral-200)', padding: pad,
        minHeight: 80, display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'stretch',
        justifyContent: 'center', gap: 16, position: 'relative' }}>{children}</div>
      {label && <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--neutral-500)', paddingLeft: 2 }}>{label}</div>}
    </div>
  );
}
function Grid({ cols = 2, children, gap = 20 }) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>{children}</div>;
}

/* color swatch */
function Swatch({ name, val, hex, dark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ height: 76, borderRadius: 12, background: val, border: '1px solid rgba(0,0,0,0.06)' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--neutral-800)' }}>{name}</span>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: 'var(--neutral-500)', textTransform: 'uppercase' }}>{hex}</span>
      </div>
    </div>
  );
}
function Ramp({ title, colors }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--neutral-700)', marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(96px,1fr))', gap: 14 }}>
        {colors.map(c => <Swatch key={c.name} {...c} />)}
      </div>
    </div>
  );
}

/* type specimen row */
function TypeRow({ sample, font, size, weight, role, lh, display }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24,
      padding: '20px 0', borderBottom: '1px solid var(--neutral-200)' }}>
      <div style={{ fontFamily: display ? 'var(--font-display)' : 'var(--font-body)', fontWeight: weight,
        fontSize: Math.min(size, 52), color: 'var(--neutral-900)', lineHeight: 1.1, flex: 1, minWidth: 0 }}>{sample}</div>
      <div style={{ textAlign: 'right', flexShrink: 0, fontFamily: 'var(--font-body)' }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--neutral-800)' }}>{role}</div>
        <div style={{ fontSize: 12, color: 'var(--neutral-500)', marginTop: 2 }}>{font} · {size}px · {weight}{lh ? ` · ${lh}` : ''}</div>
      </div>
    </div>
  );
}

window.DOC = { Section, Frame, Grid, Swatch, Ramp, TypeRow };
