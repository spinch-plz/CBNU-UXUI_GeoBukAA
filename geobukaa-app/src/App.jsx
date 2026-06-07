import React, { useState, useEffect } from 'react';
import { IOSDevice } from './components/IOSDevice.jsx';
import { Onboarding, HomeScreen, StatsScreen, StretchScreen, ShopScreen } from './screens/main.jsx';
import { Drawer, ChugumiScreen, ThemeScreen, AlarmScreen } from './screens/settings.jsx';

function Toast({ msg, show }) {
  return (
    <div style={{ position: 'absolute', left: '50%', bottom: 108, transform: `translateX(-50%) translateY(${show ? 0 : 16}px)`,
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

  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => {
      const m = 24;
      setScale(Math.min(1, (window.innerHeight - m) / 874, (window.innerWidth - m) / 402));
    };
    fit(); window.addEventListener('resize', fit); return () => window.removeEventListener('resize', fit);
  }, []);

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
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'center', transition: 'transform .1s' }}>
      <IOSDevice>
        <div style={{ position: 'relative', height: '100%' }}>
          {view === 'onboarding'
            ? <Onboarding onEnter={() => setView('home')} />
            : screens[view]}
          {view !== 'onboarding' && (
            <Drawer open={drawer} onClose={() => setDrawer(false)} onGo={onGo} />
          )}
          <Toast msg="스트레칭을 시작합니다 🐢" show={toast} />
        </div>
      </IOSDevice>
    </div>
  );
}
