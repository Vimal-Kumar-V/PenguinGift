import Screen from '../components/Screen.jsx';
import { Character, Penguin } from '../components/Characters.jsx';
import { Twinkles } from '../components/Decor.jsx';
import { CHARACTERS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

const CHOICES = [PAGES.BIRTHDAY, PAGES.COLLAGE, PAGES.HUG];

// View 3
export default function Menu({ go }) {
  return (
    <Screen>
      <Twinkles count={10} />
      <div className="relative">
        <h1 className="font-cute text-5xl font-extrabold text-coral-dark md:text-7xl">{TEXT.menuTitle}</h1>
        <p className="mt-3 text-2xl md:text-3xl">{TEXT.menuSubtitle}</p>
      </div>
      <div className="relative flex flex-wrap items-end justify-center gap-4 md:gap-12">
        {CHOICES.map((page, i) => (
          <button
            key={page}
            type="button"
            onClick={() => go(page)}
            aria-label={`Penguin ${i + 1}`}
            className="cursor-pointer rounded-3xl p-2 transition duration-200 hover:-translate-y-3 hover:scale-110 hover:rotate-3 focus-visible:outline-4 focus-visible:outline-coral"
          >
            <Character
              src={CHARACTERS.giftPenguin}
              alt=""
              className="w-24 animate-float sm:w-36 md:w-48"
            >
              <Penguin pose="hold" holding="gift" />
            </Character>
          </button>
        ))}
      </div>
    </Screen>
  );
}
