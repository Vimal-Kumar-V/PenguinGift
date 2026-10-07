import Screen from '../components/Screen.jsx';
import { PillButton } from '../components/Buttons.jsx';
import { Character, Penguin } from '../components/Characters.jsx';
import { CHARACTERS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 2
export default function NoClicked({ go }) {
  return (
    <Screen>
      <h1 className="font-cute text-4xl font-extrabold text-coral-dark md:text-6xl">{TEXT.noTitle}</h1>
      <div className="flex flex-col items-center">
        <Character
          src={CHARACTERS.sadPenguin}
          alt="Sad penguin lying on its back"
          className={`w-52 md:w-64 ${CHARACTERS.sadPenguin ? '' : '-rotate-90'}`}
        >
          <Penguin mood="sad" />
        </Character>
        <div className="-mt-6 h-5 w-64 rounded-[50%] bg-ink/10" />
      </div>
      <PillButton onClick={() => go(PAGES.LANDING)}>{TEXT.tryAgain}</PillButton>
    </Screen>
  );
}
