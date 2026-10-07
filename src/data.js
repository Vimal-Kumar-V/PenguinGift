// ✏️  Everything you'd want to personalise lives in this file.
//
// Images: any URL works (https://… or a file you drop into /public, e.g. '/me.jpg'
// → put the file at public/me.jpg and use './me.jpg').
// Characters: leave a character as null to use the built-in cartoon, or set it
// to an image/GIF URL to use your own sticker instead.

export const RECIPIENT_NAME = 'Cutie';

export const CHARACTERS = {
  landingPenguin: null, // penguin with arms raised
  sadPenguin: null, // penguin lying on its back
  giftPenguin: null, // penguin holding a pink gift (shown 3× on the menu)
  partyPenguin: null, // penguin with party hat and cake
  huggingBears: null, // two bears hugging
};

export const TEXT = {
  landingTitle: 'PLS ACCEPT THE GIFT',
  yes: 'YES',
  no: 'NO',

  noTitle: 'WHY DID YOU CLICK NO!',
  tryAgain: 'TRY AGAIN',

  menuTitle: 'Choose a penguin',
  menuSubtitle: 'Each one has something special to say ✨',

  birthdayTitle: 'HAPPY BIRTHDAY',
  makeAWish: 'MAKE A WISH',

  poemTitle: 'HAPPY BIRTHDAY',
  photoCaption: `${RECIPIENT_NAME} ❤️`,

  collageTitle: 'Beautiful girlfriend',

  beMineTitle: 'Will you be mine?',
  specialDate: '11.05.2026',

  hugTitle: 'Virtual hug for ya!',
  missYou: 'I MISS YOU',

  loveYou: 'I LOVE YOU',

  clickMe: 'CLICK ME',
};

// View 5 — the photo in the polaroid frame.
export const DEDICATION_PHOTO = 'https://picsum.photos/seed/cutie/480/560';

// View 5 — four stanzas, one array of lines each.
export const POEM = [
  [
    'Another year of you, my dear,',
    'the brightest part of every day,',
    'the laugh I always want to hear,',
    'the reason clouds just drift away.',
  ],
  [
    'You make the ordinary glow,',
    'turn quiet Mondays into gold,',
    'and everywhere you choose to go',
    'is warmer than it was, I’m told.',
  ],
  [
    'So blow the candles, make a wish,',
    'and let the frosting hit your nose,',
    'you’re every sweet and lovely dish,',
    'the softest petal on the rose.',
  ],
  [
    'Today the whole world sings for you,',
    'and I sing loudest of them all —',
    'happy birthday, through and through,',
    'my favourite person, big or small.',
  ],
];

// View 6 — heart-shaped photos scattered around the page.
// top/left/rotate only apply on wider screens; phones show a tidy grid.
export const COLLAGE_PHOTOS = [
  { src: 'https://picsum.photos/seed/love1/400/400', caption: 'My love', top: '14%', left: '6%', rotate: -8 },
  { src: 'https://picsum.photos/seed/love2/400/400', caption: 'My Baby', top: '10%', left: '68%', rotate: 7 },
  { src: 'https://picsum.photos/seed/love3/400/400', caption: 'My sunshine', top: '40%', left: '37%', rotate: -3 },
  { src: 'https://picsum.photos/seed/love4/400/400', caption: 'My favourite', top: '58%', left: '8%', rotate: 6 },
  { src: 'https://picsum.photos/seed/love5/400/400', caption: 'My everything', top: '56%', left: '70%', rotate: -6 },
];

// View 7 — tiles of the big heart collage (6 looks best; any number works).
export const COUPLE_PHOTOS = [
  'https://picsum.photos/seed/us1/400/400',
  'https://picsum.photos/seed/us2/400/400',
  'https://picsum.photos/seed/us3/400/400',
  'https://picsum.photos/seed/us4/400/400',
  'https://picsum.photos/seed/us5/400/400',
  'https://picsum.photos/seed/us6/400/400',
];
