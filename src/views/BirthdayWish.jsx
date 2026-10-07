import Screen from '../components/Screen.jsx';
import BouncyText from '../components/BouncyText.jsx';
import { ClickMe } from '../components/Buttons.jsx';
import { Character, Penguin } from '../components/Characters.jsx';
import { Confetti, Twinkles } from '../components/Decor.jsx';
import { CHARACTERS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 4 — Flow 1
export default function BirthdayWish({ go }) {
  return (
    <Screen>
      <Confetti />
      <Twinkles />
      <h1 className="relative font-cute text-5xl font-extrabold md:text-8xl">
        <BouncyText text={TEXT.birthdayTitle} rainbow className="drop-shadow-[0_4px_0_rgb(0_0_0_/_0.12)]" />
      </h1>
      <div className="relative flex items-center gap-2 md:gap-6">
        <Character src={CHARACTERS.partyPenguin} alt="Penguin with a party hat holding a birthday cake" className="w-52 animate-float md:w-72">
          <Penguin pose="hold" holding="cake" hat />
        </Character>
        <p className="-rotate-12 font-cute text-xl font-extrabold text-coral md:text-3xl">
          ← {TEXT.makeAWish}
        </p>
      </div>
      <ClickMe onClick={() => go(PAGES.POEM)} className="right-3 bottom-4 md:right-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
        {TEXT.clickMe}
      </ClickMe>
    </Screen>
  );
}
