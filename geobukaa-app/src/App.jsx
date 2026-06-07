import React, { useState } from 'react';
import { Onboarding, HomeScreen, StatsScreen, StretchScreen, ShopScreen } from './screens/main.jsx';
import { Drawer, ChugumiScreen, ThemeScreen, AlarmScreen } from './screens/settings.jsx';

function Toast({ msg, show }) {
  return (
    <div style={{ position: 'absolute', left: '50%', bottom: 'calc(env(safe-area-inset-bottom, 0px) + 108px)', transform: `translateX(-50%) translateY(${show ? 0 : 16}px)`,
      zIndex: 90, background: 'var(--coral-500)', color: '#fff', padding: '12px 22px', borderRadius: 9999,
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, boxShadow: 'var(--elev-md)',
      opacity: show ? 1 : 0, transition: 'all .25s', pointerEvents: 'none', whiteSpace: 'nowrap' }}>{msg}</div>
  );
}

export default function App() {
  const [view, setView] = useState('onboarding');
  const [drawer, setDrawer] = useState(false);
  const [toast, setToast] = useState(false);

  const fireToast = () => { setToast(true); setTimeout(() => setToast(false), 1600); };
  const onMenu = () => setDrawer(true);
  const onNav = (id) => { setView(id); setDrawer(false); };
  const onGo = (id) => { setView(id); setDrawer(false); };

  const screens = {
    home: <HomeScreen onMenu={onMenu} onNav={onNav} onPlay={fireToast} />,
    stats: <StatsScreen onMenu={onMenu} onNav={onNav} />,
    stretch: <StretchScreen onMenu={onMenu} onNav={onNav} onPlay={fireToast} />,
    shop: <ShopScreen onMenu={onMenu} onNav={onNav} />,
    chugumi: <ChugumiScreen onMenu={onMenu} onNav={onNav} />,
    theme: <ThemeScreen onMenu={onMenu} onNav={onNav} />,
    alarm: <AlarmScreen onMenu={onMenu} onNav={onNav} />,
  };

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
      {view === 'onboarding'
        ? <Onboarding onEnter={() => setView('home')} />
        : screens[view]}
      {view !== 'onboarding' && (
        <Drawer open={drawer} onClose={() => setDrawer(false)} onGo={onGo} />
      )}
      <Toast msg="스트레칭을 시작합니다 🐢" show={toast} />
    </div>
  );
}
