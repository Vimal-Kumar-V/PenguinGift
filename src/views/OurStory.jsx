import Screen from '../components/Screen.jsx';
import { ClickMe } from '../components/Buttons.jsx';
import { Bunny, Camera, Cloud } from '../components/Stickers.jsx';
import { STORY_PHOTOS, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

const TILTS = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'];
const TAPES = ['bg-blush/70', 'bg-amber-200/70', 'bg-sky-200/70'];

// Flow 2, after "Mine forever?" — every photo as a polaroid pinned to a scrapbook wall.
export default function OurStory({ go }) {
  return (
    <Screen className="bg-gingham justify-start!">
      <header className="relative">
        <Cloud className="absolute -top-6 -left-20 w-20 animate-float max-md:hidden" />
        <h1 className="font-script text-6xl text-coral-dark drop-shadow-[0_3px_0_#fff] md:text-8xl">{TEXT.storyTitle}</h1>
        <p className="mt-2 text-2xl">{TEXT.storySubtitle}</p>
        <Camera className="absolute -top-2 -right-20 w-16 rotate-12 max-md:hidden" />
      </header>

      <div className="w-full max-w-6xl columns-2 gap-4 sm:gap-8 md:columns-3 lg:columns-4">
        {STORY_PHOTOS.map((photo, i) => (
          <figure
            key={photo.src + i}
            className={`mb-8 break-inside-avoid bg-white p-2 pb-3 shadow-lg transition duration-300 hover:z-10 hover:scale-105 hover:rotate-0 sm:p-3 ${TILTS[i % TILTS.length]}`}
          >
            {/* In-flow tape: absolutely positioned children drift inside CSS columns. */}
            <span
              className={`mx-auto -mt-5 mb-2 block h-6 w-20 sm:-mt-6 ${i % 2 ? '-rotate-3' : 'rotate-3'} ${TAPES[i % TAPES.length]}`}
              aria-hidden="true"
            />
            <img src={photo.src} alt={photo.caption} loading="lazy" className="w-full" />
            <figcaption className="mt-2 text-lg leading-tight sm:text-2xl">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <Bunny className="w-20 -rotate-6" />
      <ClickMe onClick={() => go(PAGES.MENU)}>{TEXT.clickMe}</ClickMe>
    </Screen>
  );
}
