import Screen from '../components/Screen.jsx';
import BouncyText from '../components/BouncyText.jsx';
import { FloatingHearts } from '../components/Decor.jsx';
import { TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 9 — Flow 3, the finale.
export default function ILoveYou({ go }) {
  return (
    <Screen className="bg-stripes pb-16!">
      <FloatingHearts count={12} fill="#fff4ec" />
      <div className="relative -rotate-2 rounded-[2.5rem] border-8 border-white bg-cream px-6 py-10 shadow-2xl md:px-16 md:py-14">
        <h1 className="font-cute text-[clamp(3rem,11vw,9rem)] leading-none font-extrabold text-coral drop-shadow-[0_6px_0_#ffd9bf]">
          <BouncyText text={TEXT.loveYou} />
        </h1>
      </div>
      <button
        type="button"
        onClick={() => go(PAGES.LANDING)}
        className="absolute bottom-4 cursor-pointer text-lg text-white/90 underline-offset-4 hover:underline"
      >
        ↺ start over
      </button>
    </Screen>
  );
}
