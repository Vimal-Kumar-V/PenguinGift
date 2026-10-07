import Screen from '../components/Screen.jsx';
import BouncyText from '../components/BouncyText.jsx';
import { ClickMe } from '../components/Buttons.jsx';
import { Character, HuggingBears } from '../components/Characters.jsx';
import { Heart } from '../components/Hearts.jsx';
import { CHARACTERS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 8 — Flow 3
export default function VirtualHug({ go }) {
  return (
    <Screen>
      <h1 className="font-cute text-4xl font-extrabold text-coral-dark md:text-6xl">{TEXT.hugTitle}</h1>
      <div className="relative grid w-80 place-items-center md:w-[30rem]">
        <Heart className="w-full animate-pulse-soft" fill="#ffd6e0" />
        <Character src={CHARACTERS.huggingBears} alt="Two bears hugging" className="absolute top-[4%] w-3/4">
          <HuggingBears />
        </Character>
      </div>
      <p className="font-cute text-6xl font-extrabold text-coral md:text-8xl">
        <BouncyText text={TEXT.missYou} />
      </p>
      <ClickMe onClick={() => go(PAGES.LOVE)} className="right-3 bottom-4 md:right-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
        {TEXT.clickMe}
      </ClickMe>
    </Screen>
  );
}
