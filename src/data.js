// ✏️  Everything you'd want to personalise lives in this file.
//
// Images: any URL works, or a file in public/ — e.g. public/photos/us1.jpg is './photos/us1.jpg'.
// Heart-cropped photos take an optional focus (a CSS object-position, e.g. 'top' or 'center 30%')
// that picks which part of the photo stays in view.
// Characters: leave a character as null to use the built-in cartoon, or set it
// to an image/GIF URL to use your own sticker instead.

export const RECIPIENT_NAME = 'My Hubby';

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

  collageTitle: 'Handsome husband',

  beMineTitle: 'Mine forever?',
  specialDate: '09.10.2026', // shown under the heart collage

  hugTitle: 'Virtual hug for ya!',
  missYou: 'I MISS YOU',

  loveYou: 'I LOVE YOU',

  clickMe: 'CLICK ME',
};

// View 5 — the photo in the polaroid frame.
export const DEDICATION_PHOTO = './photos/us-colour.jpg';

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
    'you’re still my answer to each wish,',
    'my husband, as everybody knows.',
  ],
  [
    'Today the whole world sings for you,',
    'and I sing loudest of them all —',
    'happy birthday, through and through,',
    'I’d marry you again, that’s all.',
  ],
];

// View 6 — heart-shaped photos scattered around the page.
// top/left/rotate only apply on wider screens; phones show a tidy grid.
// zoom: 2 makes a close-up; focus then picks the spot, like CSS background-position.
export const COLLAGE_PHOTOS = [
  { src: './photos/us-colour.jpg', focus: 'center 40%', caption: 'My love', top: '14%', left: '6%', rotate: -8 },
  { src: './photos/us-portrait.jpg', focus: 'center 10%', caption: 'My Hubby', top: '10%', left: '68%', rotate: 7 },
  { src: './photos/us-colour.jpg', zoom: 2, focus: '100% 18%', caption: 'My hero', top: '40%', left: '37%', rotate: -3 },
  { src: './photos/us-portrait.jpg', zoom: 2, focus: '98% 30%', caption: 'My favourite', top: '58%', left: '8%', rotate: 6 },
  { src: './photos/us-colour.jpg', zoom: 2, focus: '0% 40%', caption: 'My everything', top: '56%', left: '70%', rotate: -6 },
];

// View 7 — photos tiled into the big heart. One fills the whole heart; add more to make a grid
// (e.g. './photos/us1.jpg' … './photos/us6.jpg').
export const COUPLE_PHOTOS = [{ src: './photos/us-portrait.jpg', focus: 'center 8%' }];
