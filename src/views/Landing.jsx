import Screen from '../components/Screen.jsx';
import { PillButton } from '../components/Buttons.jsx';
import { Character, Penguin } from '../components/Characters.jsx';
import { FloatingHearts } from '../components/Decor.jsx';
import { CHARACTERS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 1
export default function Landing({ go }) {
  return (
    <Screen>
      <FloatingHearts count={8} />
      <h1 className="relative font-cute text-5xl font-extrabold leading-tight text-coral-dark md:text-7xl">
        {TEXT.landingTitle}
      </h1>
      <Character src={CHARACTERS.landingPenguin} alt="Cheering penguin" className="relative w-52 animate-float md:w-64">
        <Penguin pose="up" />
      </Character>
      <div className="relative flex gap-6">
        <PillButton onClick={() => go(PAGES.MENU)}>{TEXT.yes}</PillButton>
        <PillButton onClick={() => go(PAGES.NO)}>{TEXT.no}</PillButton>
      </div>
    </Screen>
  );
}
