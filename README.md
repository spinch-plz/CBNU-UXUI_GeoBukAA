# 거북아 · GeoBukAA — Developer Handoff

Posture & turtle-neck (거북목) wellness app. This bundle lets you continue development
of the **mobile viewport** in VSCode. It contains a **runnable React + Vite project**
(`geobukaa-app/`) that reproduces every screen, plus the original **design references**
(`design-reference/`).

---

## What's in this bundle

```
GeoBukAA-handoff/
├─ geobukaa-app/          ← runnable project — open this in VSCode
│  ├─ index.html          ← Vite entry, loads Pretendard + Gaegu fonts
│  ├─ package.json        ← React 18 + Vite
│  ├─ vite.config.js
│  └─ src/
│     ├─ main.jsx               ← React root
│     ├─ App.jsx                ← screen router + iOS frame + drawer + toast
│     ├─ index.css              ← global + @import tokens
│     ├─ styles/tokens.css      ← ALL design tokens (CSS variables)
│     ├─ lib/art.js             ← turtle + campfire SVG data (extracted from the .fig)
│     ├─ components/
│     │  ├─ icons.jsx           ← inline SVG system-icon set  <Icon name="…" />
│     │  ├─ art.jsx             ← <Turtle/> <Campfire/> <NavGlyph/> <Wordmark/>
│     │  ├─ ui.jsx              ← UI kit (buttons, cards, nav, toggle, slider, badge…)
│     │  └─ IOSDevice.jsx       ← iPhone device frame (status bar / home indicator)
│     └─ screens/
│        ├─ main.jsx            ← Onboarding, Home, Stats, Stretch, Shop
│        └─ settings.jsx        ← Drawer, Chugumi(추구미), Theme(테마), Alarm(알림)
└─ design-reference/      ← visual source of truth (open in a browser)
   ├─ GeoBukAA App.html         ← the interactive prototype
   ├─ GeoBukAA Design System.html ← tokens + UI-kit documentation
   └─ app/ assets/ styles.css   ← their supporting files
```

## Run it

```bash
cd geobukaa-app
npm install
npm run dev        # opens http://localhost:5173
```

> Fonts (Pretendard, Gaegu) load from CDN in `index.html`. For fully-offline builds,
> self-host them and add `@font-face` rules with the exact family names `Pretendard` and `Gaegu`.

---

## About the design files

The files under `design-reference/` are **design references created in HTML** — prototypes
that show the intended look and behavior. The `geobukaa-app/` project is a faithful React
implementation of them. Treat both as the spec; build production features using your team's
established patterns, component library, routing, and state-management conventions.

**Fidelity: High.** Colors, typography, spacing, radii, and interactions are final. Reproduce
the UI pixel-for-pixel. The only substitution is the display typeface (see Typography).

---

## Screens / Views

All screens are designed at the iPhone frame **390 × 844** (rendered inside a 402 × 874 bezel).
App background is powder-blue `#B0E0E6`; the status bar + home indicator come from `IOSDevice`.

| # | Screen | File / export | Purpose |
|---|--------|---------------|---------|
| 0 | **Onboarding** | `screens/main.jsx › Onboarding` | Splash: "나 거북이 아니다" + flexing turtle + 거북아 wordmark. Tap → Home. |
| 1 | **Home** | `screens/main.jsx › HomeScreen` | Streak hero (campfire + turtle + `DAY + 7`), today's-stretch action card, 하루기록 stat cards. |
| 2 | **Stats** | `screens/main.jsx › StatsScreen` | "나 이런 거북이야!", sitting-turtle card, stretching calendar, badge collection. |
| 3 | **Stretch** | `screens/main.jsx › StretchScreen` | "더 하시게요?", two action cards, 부위별 스트레칭 category grid. |
| 4 | **Shop** | `screens/main.jsx › ShopScreen` | "받아 마땅합니다", points, featured box, segmented 꾸밈요소 / 도우미 item grid. |
| 5 | **Drawer** | `screens/settings.jsx › Drawer` | Right slide-over: 추구미 변경 / 테마 변경 / 상황별 알림 설정 / 로그아웃. |
| 6 | **추구미 변경** | `screens/settings.jsx › ChugumiScreen` | Character card + status sliders + persona list. |
| 7 | **테마 변경** | `screens/settings.jsx › ThemeScreen` | Selectable theme swatches (coral / blue / teal). |
| 8 | **상황별 알림 설정** | `screens/settings.jsx › AlarmScreen` | 방해금지 / 이동 / 휴식 modes with toggle + description. |

### Layout system
- **Screen gutter:** 32px (`--s-8`) left/right on nearly every block.
- **Header:** `PhoneHeader` — wordmark left, hamburger right, `54px` top pad to clear the status bar.
- **Bottom nav:** `BottomNav` — absolutely positioned, `bottom: 22`, 4 tabs (home / stats / stretch / shop); active tab is a filled coral pill, glyph flips to sky-blue.
- **Cards:** radius `12`; the signature elevation is an **inset 2px coral outline** (`--elev-outline`), not a drop shadow. Filled cards use solid coral with sky-blue text (duotone).

---

## Interactions & behavior

- **Routing:** single `view` state in `App.jsx` (`'onboarding' | 'home' | 'stats' | 'stretch' | 'shop' | 'chugumi' | 'theme' | 'alarm'`). Replace with your router if desired.
- **Bottom nav** sets `view` to the tapped tab.
- **Hamburger** opens `Drawer` (`drawer` boolean); drawer items navigate then close. Drawer slides in via `transform: translateX(100%→0)` over `.28s cubic-bezier(.4,0,.2,1)` with a fading scrim.
- **Play buttons** fire a transient `Toast` ("스트레칭을 시작합니다") for 1.6s — wire these to your real stretch/challenge flow.
- **Toggles** (alarm modes), **segmented 1–5 sliders** (추구미 status), **theme swatch selection**, and **badge expand/collapse** (Stats) are all local `useState` — lift to real state/storage as needed.
- **Fit-to-viewport:** `App.jsx` scales the 402×874 frame to the window. Drop this wrapper when embedding in a real device / full-screen app.

## State management
Currently all local `useState`. Data to persist for production: current `view`, streak day count,
daily posture/alert stats, calendar of completed days, earned badges, selected 추구미 (persona) +
its status values, selected theme, alarm-mode booleans, and point balance.

---

## Design tokens

All tokens live in **`src/styles/tokens.css`** as CSS variables. Highlights:

**Color**
- Primary coral: `--coral-500: #E97451` (scale 50–900).
- Brand surface powder-blue: `--sky-500: #B0E0E6`.
- Duotone rule: text on coral renders in sky-blue (`--on-primary`); text on sky renders in coral (`--on-surface`).
- Themes: `--theme-blue #468AD0`, `--theme-teal #46A098`; cream `#FCF6E4`; gold `#F2B705`; gray `#D9D9D9`.
- Neutrals: warm ramp `--neutral-0 … --neutral-900`.

**Typography**
- Display: **Gaegu** (`--font-display`) — used for the original **HGSisuns_Pro** handwritten face, which is not web-available. Swap in the real font here if licensed.
- Body/UI: **Pretendard** (`--font-body`).
- Scale: display 60 · h1 40 · title 28 · h2 24 · h3 20 · h4 18 · body 16 · body-sm 14 · caption 12 · micro 10.

**Spacing** 4-base: `--s-1 4 · s-2 8 · s-3 12 · s-4 16 · s-5 20 · s-6 24 · s-8 32 · s-16 64`.
**Radius** `--r-md 12` (cards) · `--r-pill 9999` (controls) · sm 8 · lg 20.
**Elevation** `--elev-outline` (inset 2px coral, signature) · `--elev-sm` · `--elev-md`.

## Assets
- **Turtles & campfire** — vector art extracted from the uploaded `.fig` into `src/lib/art.js`
  as inline SVG strings. `<Turtle variant={0–4} color eye />` recolors via `currentColor` +
  `--eye`. Variants: `0` flex · `1` sit · `2` slump · `3` upright · `4` escape-shell.
- **Bottom-nav glyphs** — bespoke paths in `components/art.jsx` (`<NavGlyph name="home|stats|stretch|shop" />`).
- **System icons** — inline SVG set in `components/icons.jsx` (`<Icon name="chair|bell|play|…" />`),
  no icon-font dependency. These stand in for the Figma's Font Awesome 5 usage.

## Files (where to look)
- Visual truth: `design-reference/GeoBukAA App.html` (behavior) and
  `design-reference/GeoBukAA Design System.html` (tokens + every component spec'd in isolation).
- Implementation: everything under `geobukaa-app/src/`.
