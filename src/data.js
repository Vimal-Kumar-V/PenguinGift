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

  storyTitle: 'Our little story',
  storySubtitle: 'Every picture of us, all in one place 📸',

  hugTitle: 'Virtual hug for ya!',
  missYou: 'I MISS YOU',

  loveYou: 'I LOVE YOU',

  clickMe: 'CLICK ME',
};

// View 5 — the photo in the polaroid frame.
export const DEDICATION_PHOTO = { src: './photos/wedding-forehead.jpg', focus: 'center 20%' };

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
  { src: './photos/forest-selfie.jpg', focus: '45% center', caption: 'My love', top: '14%', left: '6%', rotate: -8 },
  { src: './photos/home-selfie.jpg', focus: 'center', caption: 'My Hubby', top: '10%', left: '68%', rotate: 7 },
  { src: './photos/balloon-party.jpg', focus: 'center 8%', caption: 'My hero', top: '40%', left: '37%', rotate: -3 },
  { src: './photos/gnc-event.jpg', focus: 'center 32%', caption: 'My favourite', top: '58%', left: '8%', rotate: 6 },
  { src: './photos/flower-stand.jpg', zoom: 1.7, focus: '50% 18%', caption: 'My everything', top: '56%', left: '70%', rotate: -6 },
];

// View 7 — photos tiled into the big heart. One fills the whole heart; more make a grid.
export const COUPLE_PHOTOS = [
  { src: './photos/wedding-garland.jpg', focus: 'center 40%' },
  { src: './photos/us-portrait.jpg', focus: 'center 15%' },
  { src: './photos/forest-selfie.jpg', focus: '0% center', zoom: 1.4, origin: '33% 62%' },
  { src: './photos/wedding-forehead.jpg', focus: 'center 22%' },
];

// "Our little story" — a scrapbook wall of polaroids, in this order.
export const STORY_PHOTOS = [
  { src: './photos/wedding-forehead.jpg', caption: 'Forever starts here' },
  { src: './photos/wedding-garland.jpg', caption: 'Garlands & giggles' },
  { src: './photos/us-portrait.jpg', caption: 'Mr & Mrs' },
  { src: './photos/mehndi.jpg', caption: 'Your hand in mine' },
  { src: './photos/us-colour.jpg', caption: 'That look ❤️' },
  { src: './photos/forest-selfie.jpg', caption: 'Lost in the woods with you' },
  { src: './photos/gnc-event.jpg', caption: 'All dressed up' },
  { src: './photos/balloon-party.jpg', caption: 'Party people' },
  { src: './photos/flower-stand.jpg', caption: 'Us, always' },
  { src: './photos/home-selfie.jpg', caption: 'Home is you' },
];
