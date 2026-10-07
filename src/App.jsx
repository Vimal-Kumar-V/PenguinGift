import { useState } from 'react';
import { PAGES } from './pages.js';
import Landing from './views/Landing.jsx';
import NoClicked from './views/NoClicked.jsx';
import Menu from './views/Menu.jsx';
import BirthdayWish from './views/BirthdayWish.jsx';
import Poem from './views/Poem.jsx';
import Collage from './views/Collage.jsx';
import BeMine from './views/BeMine.jsx';
import VirtualHug from './views/VirtualHug.jsx';
import ILoveYou from './views/ILoveYou.jsx';

const VIEWS = {
  [PAGES.LANDING]: Landing,
  [PAGES.NO]: NoClicked,
  [PAGES.MENU]: Menu,
  [PAGES.BIRTHDAY]: BirthdayWish,
  [PAGES.POEM]: Poem,
  [PAGES.COLLAGE]: Collage,
  [PAGES.BE_MINE]: BeMine,
  [PAGES.HUG]: VirtualHug,
  [PAGES.LOVE]: ILoveYou,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.LANDING);
  const View = VIEWS[currentPage];

  const go = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  // The key remounts the wrapper on every page change, replaying the fade-in.
  return (
    <div key={currentPage} className="min-h-dvh animate-fade-in">
      <View go={go} />
    </div>
  );
}
