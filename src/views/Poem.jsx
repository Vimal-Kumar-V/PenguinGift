import Screen from '../components/Screen.jsx';
import { ClickMe } from '../components/Buttons.jsx';
import { Bunny, Camera, Cloud } from '../components/Stickers.jsx';
import { DEDICATION_PHOTO, POEM, TEXT } from '../data.js';
import { PAGES } from '../pages.js';

// View 5 — Flow 1
export default function Poem({ go }) {
  return (
    <Screen className="bg-gingham">
      <div className="grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto mt-6">
          <Cloud className="absolute -top-10 -right-14 z-10 w-28 animate-float" />
          <figure className="relative -rotate-3 bg-white p-3 pb-4 shadow-xl transition duration-300 hover:scale-105 hover:rotate-0">
            <span className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-2 bg-blush/70" aria-hidden="true" />
            <img
              src={DEDICATION_PHOTO.src}
              alt={TEXT.photoCaption}
              className="h-80 w-64 object-cover md:h-96 md:w-72"
              style={{ objectPosition: DEDICATION_PHOTO.focus }}
            />
            <figcaption className="mt-3 text-3xl">{TEXT.photoCaption}</figcaption>
          </figure>
          <Bunny className="absolute -bottom-6 -left-12 z-10 w-24 -rotate-12" />
          <Camera className="absolute -right-10 bottom-16 z-10 w-20 rotate-12" />
          <Cloud className="absolute top-24 -left-14 z-10 w-20" />
        </div>

        <article className="rounded-3xl bg-white/85 px-6 py-8 shadow-lg backdrop-blur-sm md:px-10">
          <h1 className="font-cute text-4xl font-extrabold text-coral-dark md:text-5xl">{TEXT.poemTitle}</h1>
          <div className="mt-6 space-y-5 text-xl leading-snug md:text-2xl">
            {POEM.map((stanza, i) => (
              <p key={i}>
                {stanza.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </article>
      </div>
      <ClickMe onClick={() => go(PAGES.MENU)}>{TEXT.clickMe}</ClickMe>
    </Screen>
  );
}
