import Screen from '../components/Screen.jsx';
import { ClickMe } from '../components/Buttons.jsx';
import { HeartPhoto } from '../components/Hearts.jsx';
import { COLLAGE_PHOTOS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 6 — Flow 2. Photos form a grid on phones and scatter freely from md up.
export default function Collage({ go }) {
  return (
    <Screen className="bg-gingham justify-start!">
      <h1 className="font-script text-6xl text-coral-dark drop-shadow-[0_3px_0_#fff] md:text-8xl">{TEXT.collageTitle}</h1>
      <div className="relative grid w-full max-w-5xl grid-cols-2 gap-6 md:block md:h-[68vh] md:min-h-[480px]">
        {COLLAGE_PHOTOS.map((photo, i) => (
          <figure
            key={i}
            className="mx-auto w-36 md:absolute md:top-(--top) md:left-(--left) md:w-52 md:rotate-(--rot)"
            style={{ '--top': photo.top, '--left': photo.left, '--rot': `${photo.rotate}deg` }}
          >
            <div className="transition duration-300 hover:scale-110 hover:-rotate-3">
              <HeartPhoto src={photo.src} alt={photo.caption} className="w-full" />
            </div>
            <figcaption className="mt-1 text-2xl">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <ClickMe onClick={() => go(PAGES.BE_MINE)}>{TEXT.clickMe}</ClickMe>
    </Screen>
  );
}
