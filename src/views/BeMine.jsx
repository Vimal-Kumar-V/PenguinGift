import Screen from '../components/Screen.jsx';
import { ClickMe } from '../components/Buttons.jsx';
import { HeartCollage } from '../components/Hearts.jsx';
import { FloatingHearts } from '../components/Decor.jsx';
import { COUPLE_PHOTOS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 7 — Flow 2
export default function BeMine({ go }) {
  return (
    <Screen>
      <FloatingHearts />
      <h1 className="relative font-cute text-5xl font-extrabold text-coral-dark md:text-7xl">{TEXT.beMineTitle}</h1>
      <div className="relative w-72 transition duration-300 hover:scale-105 sm:w-96 md:w-[28rem]">
        <HeartCollage photos={COUPLE_PHOTOS} alt="Us" className="w-full" />
      </div>
      <p className="relative font-cute text-3xl tracking-[0.3em] md:text-4xl">{TEXT.specialDate}</p>
      <ClickMe onClick={() => go(PAGES.MENU)}>{TEXT.clickMe}</ClickMe>
    </Screen>
  );
}
