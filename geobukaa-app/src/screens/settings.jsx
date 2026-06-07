import React from 'react';
import { UIC as SS, PhoneHeader, BannerPill, SegSlider, SectionHeader, Toggle } from '../components/ui.jsx';
import { Turtle } from '../components/art.jsx';
import { Icon } from '../components/icons.jsx';
import { Screen, MoreButton } from './main.jsx';

/* GeoBukAA — drawer + settings screens: Chugumi, Theme, Alarm */



/* ── Side drawer (B) ── */
function Drawer({ open, onClose, onGo }) {
  const items = [
    ['chugumi', '추구미 변경'],
    ['theme', '테마 변경'],
    ['alarm', '상황별 알림 설정'],
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 80, pointerEvents: open ? 'auto' : 'none' }}>
      {/* scrim */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)',
        opacity: open ? 1 : 0, transition: 'opacity .25s' }}></div>
      {/* panel */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '74%', background: SS.sky,
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .28s cubic-bezier(.4,0,.2,1)',
        boxShadow: '-12px 0 40px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column',
        padding: '60px 32px 40px' }}>
        <button onClick={onClose} aria-label="close" style={{ alignSelf: 'flex-end', background: 'none', border: 'none',
          cursor: 'pointer', color: SS.coral, padding: 6, lineHeight: 0 }}>
          <Icon name="xmark" size={30} color={SS.coral} />
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 30, marginTop: 30, alignItems: 'flex-end' }}>
          {items.map(([id, label]) => (
            <button key={id} onClick={() => onGo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 22, color: SS.coral, padding: 0 }}>{label}</button>
          ))}
        </nav>
        <div style={{ flex: 1 }}></div>
        <button onClick={onClose} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: SS.coral, opacity: 0.85, padding: 0 }}>로그아웃</button>
      </div>
    </div>
  );
}

/* ── 추구미 변경 (B1) ── */
function ChugumiScreen({ onMenu, onNav }) {
  const [freq, setFreq] = React.useState(3);
  const [intensity, setIntensity] = React.useState(4);
  return (
    <Screen nav active={null} onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      <div style={{ height: 4 }}></div>
      <BannerPill>추구미 변경</BannerPill>
      <div style={{ height: 20 }}></div>
      <div style={{ margin: '0 var(--s-8)', borderRadius: 'var(--r-md)', background: SS.coral, padding: '22px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: SS.sky, whiteSpace: 'nowrap' }}>나의 추구미</div>
        <Turtle variant={3} color={SS.sky} eye={SS.coral} height={120} />
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: SS.sky, whiteSpace: 'nowrap' }}>바른자세 지킴이</div>
      </div>
      <div style={{ height: 26 }}></div>
      <SectionHeader title="스테이터스" />
      <div style={{ margin: '0 var(--s-8)', borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: 20,
        display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: SS.coral }}>하루 알림 주기</div>
          <SegSlider value={freq} onChange={setFreq} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: SS.coral }}>오늘의 스트레칭 강도</div>
          <SegSlider value={intensity} onChange={setIntensity} />
        </div>
      </div>
      <div style={{ height: 28 }}></div>
      <SectionHeader title="스테이터스에 따른 추구미" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 var(--s-8)' }}>
        <PersonaRow variant={3} name="바른자세 지킴이" freq={3} intensity={4} />
        <PersonaRow variant={4} name="슈퍼 거북이" freq={1} intensity={1} />
      </div>
      <div style={{ height: 16 }}></div>
      <MoreButton />
    </Screen>
  );
}
function PersonaRow({ variant, name, freq, intensity }) {
  return (
    <div style={{ borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: 16, display: 'flex', gap: 14, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 90, flexShrink: 0 }}>
        <Turtle variant={variant} color={SS.coral} eye={SS.sky} height={70} />
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: SS.coral, textAlign: 'center' }}>{name}</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, color: SS.coral, marginBottom: 6 }}>하루 알림 주기</div>
          <SegSlider value={freq} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, color: SS.coral, marginBottom: 6 }}>오늘의 스트레칭 강도</div>
          <SegSlider value={intensity} />
        </div>
      </div>
    </div>
  );
}

/* ── 테마 변경 (B2) ── */
const THEMES = [
  { id: 't1', a: 'var(--coral-500)', b: 'var(--coral-500)', solid: true },
  { id: 't2', a: 'var(--theme-blue)', b: 'var(--neutral-50)' },
  { id: 't3', a: 'var(--theme-teal)', b: 'var(--neutral-50)' },
];
function ThemeScreen({ onMenu, onNav }) {
  const [sel, setSel] = React.useState('t1');
  return (
    <Screen nav active={null} onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      <div style={{ height: 4 }}></div>
      <BannerPill>테마 변경</BannerPill>
      <div style={{ height: 24 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '0 var(--s-8)' }}>
        {THEMES.map(t => {
          const on = sel === t.id;
          return (
            <div key={t.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, height: 22 }}>
                <span style={{ width: 22, height: 22, borderRadius: 5, boxShadow: 'var(--elev-outline)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: SS.coral }}>
                  {on && <Icon name="check" size={15} color={SS.coral} />}
                </span>
                {on && <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: SS.coral }}>현재 선택됨</span>}
              </div>
              <button onClick={() => setSel(t.id)} style={{ display: 'block', width: '100%', height: 120, border: 'none', cursor: 'pointer',
                borderRadius: 'var(--r-md)', boxShadow: `inset 0 0 0 2px ${t.a}`, overflow: 'hidden', padding: 0,
                background: t.solid ? t.a : `linear-gradient(115deg, ${t.a} 0 49.6%, ${t.b} 50.4% 100%)` }}></button>
            </div>
          );
        })}
      </div>
    </Screen>
  );
}

/* ── 상황별 알림 설정 (B3) ── */
const MODES = [
  { id: 'dnd', icon: 'fa-moon', name: '방해금지모드', desc: '활성화 시 모든 알림이 울리지 않습니다.' },
  { id: 'move', icon: 'fa-shoe-prints', name: '이동모드', desc: '스마트폰을 보며 이동하는 상황을 위한 모드입니다.\n화면이 바닥을 향해 일정 각도 이상 오랫동안 기울어져 있으면,\n햅틱 피드백을 통해 고개를 들게 유도합니다.' },
  { id: 'rest', icon: 'fa-bed', name: '휴식모드', desc: '누워서 스마트폰을 사용하는 상황을 위한 모드입니다.\n기기가 수평으로 누워있을 때, 휴식 상태로 인지하여 알림을 일시 정지합니다.' },
];
function AlarmScreen({ onMenu, onNav }) {
  const [state, setState] = React.useState({ dnd: false, move: true, rest: false });
  return (
    <Screen nav active={null} onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      <div style={{ height: 4 }}></div>
      <BannerPill>상황별 알림 설정</BannerPill>
      <div style={{ height: 30 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, padding: '0 var(--s-8)' }}>
        {MODES.map(m => (
          <div key={m.id}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 26, display: 'flex', justifyContent: 'center' }}><Icon name={m.icon} size={22} color={SS.coral} /></span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 22, color: SS.coral }}>{m.name}</span>
              </div>
              <Toggle on={state[m.id]} onChange={v => setState(s => ({ ...s, [m.id]: v }))} />
            </div>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, lineHeight: 1.6,
              color: SS.coral, opacity: 0.85, whiteSpace: 'pre-line' }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </Screen>
  );
}

export { Drawer, ChugumiScreen, ThemeScreen, AlarmScreen, PersonaRow };
