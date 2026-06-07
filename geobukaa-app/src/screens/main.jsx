import React from 'react';
import { UIC as S, PhoneHeader, BannerPill, PlayButton, ActionCard, SectionHeader, StatCard, CategoryCard, Badge, Coin, BottomNav } from '../components/ui.jsx';
import { Turtle, Campfire } from '../components/art.jsx';
import { Icon } from '../components/icons.jsx';

/* GeoBukAA — main tab screens: Onboarding, Home, Stats, Stretch, Shop */



/* generic screen shell with scroll + optional bottom nav */
function Screen({ children, nav, active, onNav, pad = true }) {
  return (
    <div style={{ position: 'relative', height: '100%', background: S.sky, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', WebkitOverflowScrolling: 'touch',
        paddingBottom: nav ? 'calc(env(safe-area-inset-bottom, 0px) + 100px)' : 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}>
        {children}
      </div>
      {nav && <BottomNav active={active} onChange={onNav} />}
    </div>
  );
}

/* ── 0 · Onboarding splash ── */
function Onboarding({ onEnter }) {
  return (
    <div onClick={onEnter} style={{ height: '100%', background: S.sky, cursor: 'pointer',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: 40 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: S.coral, letterSpacing: '-1px' }}>나 거북이 아니다</div>
      <Turtle variant={0} color={S.coral} eye={S.sky} height={130} />
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 80, color: S.coral, lineHeight: 1, letterSpacing: '-3px', marginTop: 8, whiteSpace: 'nowrap' }}>거북아</div>
      <div style={{ position: 'absolute', bottom: 70, fontFamily: 'var(--font-body)', fontSize: 14, color: S.coral, opacity: 0.6 }}>화면을 눌러 시작하기</div>
    </div>
  );
}

/* ── 1 · Home (C) ── */
function HomeScreen({ onMenu, onNav, onPlay }) {
  return (
    <Screen nav active="home" onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      {/* hero */}
      <div style={{ margin: '8px var(--s-8) 0', borderRadius: 'var(--r-md)', background: S.coral,
        padding: '28px 24px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', height: 132, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Campfire color={S.sky} height={132} />
          <Turtle variant={1} color={S.sky} eye={S.coral} height={70}
            style={{ position: 'absolute', left: '50%', top: '52%', transform: 'translate(-50%,-50%)' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, color: S.sky, lineHeight: 1, letterSpacing: '-2px', marginTop: 10, whiteSpace: 'nowrap' }}>DAY + 7</div>
      </div>
      <div style={{ height: 20 }}></div>
      <ActionCard title={'오늘의 스트레칭을\n진행하세요!'} watermark="fa-dumbbell" onClick={onPlay} />
      <div style={{ height: 28 }}></div>
      <SectionHeader title="하루기록" />
      <div style={{ display: 'flex', gap: 12, padding: '0 var(--s-8)' }}>
        <StatCard icon="fa-chair" label="자세 유지" value="4.2" unit="시간" progress={62} />
        <StatCard icon="fa-bell" label="알림에 반응" value="5/6" unit="하루" progress={83} />
      </div>
    </Screen>
  );
}

/* ── 2 · Stats (D) ── */
const CAL = {
  month: '2023년 7월',
  weeks: [
    [{ d: 27, dim: 1 }, { d: 28, dim: 1 }, { d: 29, dim: 1 }, { d: 30, dim: 1 }, { d: 1, ring: 1 }, { d: 2, ring: 1 }, { d: 3 }],
    [{ d: 4, ring: 1 }, { d: 5, ring: 1 }, { d: 6, ring: 1 }, { d: 7, today: 1 }, { d: 8 }, { d: 9 }, { d: 10 }],
  ],
};
function Calendar() {
  return (
    <div style={{ margin: '0 var(--s-8)', borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: '16px 14px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', textAlign: 'center', marginBottom: 8 }}>
        {['S','M','T','W','T','F','S'].map((d, i) => (
          <div key={i} style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, color: S.coral }}>{d}</div>
        ))}
      </div>
      {CAL.weeks.map((w, wi) => (
        <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', placeItems: 'center', marginTop: 6 }}>
          {w.map((c, ci) => (
            <div key={ci} style={{ width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: c.ring ? 'var(--elev-outline-1)' : 'none', background: c.today ? S.coral : 'transparent',
              fontFamily: 'var(--font-body)', fontWeight: c.today ? 700 : 500, fontSize: 15,
              color: c.today ? '#fff' : c.dim ? 'var(--coral-200)' : S.coral }}>{c.d}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
function StatsScreen({ onMenu, onNav }) {
  const [badgesOpen, setBadgesOpen] = React.useState(false);
  return (
    <Screen nav active="stats" onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      <div style={{ height: 4 }}></div>
      <BannerPill>나 이런 거북이야!</BannerPill>
      <div style={{ margin: '20px var(--s-8) 0', borderRadius: 'var(--r-md)', background: S.coral,
        padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <Turtle variant={1} color={S.sky} eye={S.coral} height={150} />
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: S.sky, whiteSpace: 'nowrap' }}>거북이 앉다</div>
      </div>
      <div style={{ height: 28 }}></div>
      <SectionHeader title="스트레칭 달력">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 14 }}>
          <Icon name="chevron-left" size={16} color={S.coral} />{CAL.month}<Icon name="chevron-right" size={16} color={S.coral} />
        </div>
      </SectionHeader>
      <Calendar />
      <div style={{ height: 28 }}></div>
      <SectionHeader title="뱃지" action="12개 수집" />
      <div style={{ margin: '0 var(--s-8)', borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: '20px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Badge icon="fa-crown" /><Badge icon="fa-sun" /><Badge icon="fa-droplet" /><Badge locked />
        </div>
        {badgesOpen && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
            <Badge icon="fa-fire" /><Badge icon="fa-medal" /><Badge icon="fa-heart" /><Badge locked />
          </div>
        )}
        <button onClick={() => setBadgesOpen(o => !o)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          color: S.coral, marginTop: 14, padding: 0 }}>
          <Icon name={badgesOpen ? 'chevron-up' : 'chevron-down'} size={18} color={S.coral} style={{ margin: '0 auto' }} />
        </button>
      </div>
    </Screen>
  );
}

/* ── 3 · Stretch (E) ── */
function StretchScreen({ onMenu, onNav, onPlay }) {
  return (
    <Screen nav active="stretch" onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      <div style={{ height: 4 }}></div>
      <BannerPill>더 하시게요?</BannerPill>
      <div style={{ height: 24 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <ActionCard title={'오늘의 스트레칭을\n진행하세요!'} watermark="fa-dumbbell" onClick={onPlay} />
        <ActionCard title={'오늘의 챌린지부터\n하시려구요?'} watermark="fa-fire" onClick={onPlay} />
      </div>
      <div style={{ height: 30 }}></div>
      <SectionHeader title="부위별 스트레칭" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 var(--s-8)' }}>
        <div style={{ display: 'flex', gap: 14 }}>
          <CategoryCard icon="fa-brain" title="거북이 탈출" meta="12개 스트레칭" onClick={onPlay} />
          <CategoryCard icon="fa-bone" title="허리 아프세요?" meta="8개 스트레칭" onClick={onPlay} />
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          <CategoryCard icon="fa-child-reaching" title="말린 어깨 펴기" meta="15개 스트레칭" onClick={onPlay} />
          <CategoryCard icon="fa-dna" title="코어를 단단히!" meta="10개 스트레칭" onClick={onPlay} />
        </div>
      </div>
      <div style={{ height: 16 }}></div>
      <MoreButton />
    </Screen>
  );
}

/* ── reusable "더보기" outline button ── */
function MoreButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ display: 'block', margin: '0 var(--s-8)', width: 'calc(100% - 64px)', background: 'none',
      borderRadius: 'var(--r-pill)', boxShadow: 'var(--elev-outline)', border: 'none', cursor: 'pointer',
      padding: '14px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: S.coral, textAlign: 'center' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>더보기 <Icon name="chevron-right" size={13} color={S.coral} /></span>
    </button>
  );
}

/* ── 4 · Shop (F) ── */
function ShopItem({ icon, name, desc }) {
  return (
    <div style={{ flex: 1, borderRadius: 'var(--r-md)', boxShadow: 'var(--elev-outline)', padding: '22px 14px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
      <Icon name={icon} size={40} color={S.coral} />
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: S.coral }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 12, color: S.coral, opacity: 0.7, marginTop: 4, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{desc}</div>
      </div>
    </div>
  );
}
const SHOP = {
  deco: [
    ['fa-hat-cowboy', '멋쟁이 모자', '모자 하나 쓰실라우?'],
    ['fa-shield-cat', '윤기나는 등껍질', '내집마련의 꿈'],
    ['fa-shoe-prints', '힙하다 신발', '당당하게 걷기'],
    ['fa-glasses', '지적인 안경', '느좋북이로 변신'],
  ],
  helper: [
    ['fa-shield-halved', '연속일수 보호 방패', '연속 스트레칭 일수를\n보호하세요!'],
    ['fa-flask', '포인트 200% 물약', '30분동안 스트레칭 후\n얻는 포인트가 두 배!'],
    ['fa-box', '랜덤 포인트 박스', '인생은 한방!\n1~5000P 랜덤박스'],
    ['fa-ticket', '랜덤 꾸밈요소 티켓', '하루동안 사용 가능한\n거북이 꾸밈요소를 랜덤으로!'],
  ],
};
function ShopScreen({ onMenu, onNav }) {
  const [tab, setTab] = React.useState('deco');
  const items = SHOP[tab];
  return (
    <Screen nav active="shop" onNav={onNav}>
      <PhoneHeader onMenu={onMenu} />
      <div style={{ height: 4 }}></div>
      <BannerPill>받아 마땅합니다</BannerPill>
      <div style={{ height: 16 }}></div>
      <Coin value="23,750" />
      <div style={{ height: 14 }}></div>
      {/* featured */}
      <div style={{ margin: '0 var(--s-8)', borderRadius: 'var(--r-md)', background: S.coral, padding: '26px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <span style={{ width: 56, height: 56, borderRadius: 14, boxShadow: 'inset 0 0 0 2px var(--sky-500)', color: S.sky,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700,
          fontFamily: 'var(--font-display)' }}>?</span>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: S.sky }}>랜덤 포인트 박스 30% 할인</div>
      </div>
      <div style={{ height: 22 }}></div>
      {/* segmented tabs */}
      <div style={{ margin: '0 var(--s-8)', borderRadius: 'var(--r-sm)', boxShadow: 'var(--elev-outline)', display: 'flex', overflow: 'hidden' }}>
        {[['deco', '거북이 꾸밈요소', 'fa-wand-magic-sparkles'], ['helper', '스트레칭 도우미', 'fa-dumbbell']].map(([id, label, ic]) => (
          <button key={id} onClick={() => setTab(id)} style={{ flex: 1, border: 'none', cursor: 'pointer', padding: '11px 8px',
            background: tab === id ? S.coral : 'transparent', color: tab === id ? S.sky : S.coral,
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
            <Icon name={ic} size={15} color={tab === id ? S.sky : S.coral} />{label}
          </button>
        ))}
      </div>
      <div style={{ height: 16 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 var(--s-8)' }}>
        <div style={{ display: 'flex', gap: 14 }}><ShopItem icon={items[0][0]} name={items[0][1]} desc={items[0][2]} /><ShopItem icon={items[1][0]} name={items[1][1]} desc={items[1][2]} /></div>
        <div style={{ display: 'flex', gap: 14 }}><ShopItem icon={items[2][0]} name={items[2][1]} desc={items[2][2]} /><ShopItem icon={items[3][0]} name={items[3][1]} desc={items[3][2]} /></div>
      </div>
      <div style={{ height: 16 }}></div>
      <MoreButton />
    </Screen>
  );
}

export { Screen, Onboarding, HomeScreen, StatsScreen, StretchScreen, ShopScreen, MoreButton };
