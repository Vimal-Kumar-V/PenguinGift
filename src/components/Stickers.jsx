// Little scrapbook stickers. The white stroke + shadow gives a die-cut sticker look.
const sticker = 'drop-shadow-[0_3px_3px_rgb(0_0_0_/_0.18)]';
const EDGE = { stroke: '#fff', strokeWidth: 6, paintOrder: 'stroke' };

export function Bunny({ className = '' }) {
  return (
    <svg viewBox="0 0 100 110" className={`${sticker} ${className}`} aria-hidden="true">
      <g strokeWidth="3">
        <ellipse cx="36" cy="32" rx="11" ry="28" fill="#fff" stroke="#f1d4dc" />
        <ellipse cx="64" cy="32" rx="11" ry="28" fill="#fff" stroke="#f1d4dc" />
        <circle cx="50" cy="72" r="32" fill="#fff" stroke="#f1d4dc" />
      </g>
      <ellipse cx="36" cy="32" rx="5" ry="18" fill="#ffc2d1" />
      <ellipse cx="64" cy="32" rx="5" ry="18" fill="#ffc2d1" />
      <circle cx="39" cy="68" r="4" fill="#4a3b47" />
      <circle cx="61" cy="68" r="4" fill="#4a3b47" />
      <path d="M46 78 l4 4 l4 -4 z" fill="#ff8fab" />
      <ellipse cx="30" cy="80" rx="6" ry="4" fill="#ffc2d1" />
      <ellipse cx="70" cy="80" rx="6" ry="4" fill="#ffc2d1" />
    </svg>
  );
}

export function Camera({ className = '' }) {
  return (
    <svg viewBox="0 0 100 80" className={`${sticker} ${className}`} aria-hidden="true">
      <g {...EDGE}>
        <rect x="28" y="8" width="26" height="16" rx="4" fill="#ffa8c0" />
        <rect x="6" y="18" width="88" height="56" rx="12" fill="#ffa8c0" />
      </g>
      <circle cx="50" cy="46" r="20" fill="#fff" />
      <circle cx="50" cy="46" r="13" fill="#4a3b47" />
      <circle cx="45" cy="41" r="4" fill="#fff" />
      <rect x="74" y="26" width="12" height="7" rx="2" fill="#fff" />
      <circle cx="17" cy="29" r="4" fill="#ffd43b" />
    </svg>
  );
}

export function Cloud({ className = '' }) {
  return (
    <svg viewBox="0 0 120 70" className={`${sticker} ${className}`} aria-hidden="true">
      <g fill="#fff">
        <circle cx="35" cy="42" r="22" />
        <circle cx="62" cy="30" r="26" />
        <circle cx="88" cy="44" r="20" />
        <rect x="30" y="40" width="62" height="24" rx="12" />
      </g>
      <circle cx="54" cy="42" r="2.8" fill="#4a3b47" />
      <circle cx="72" cy="42" r="2.8" fill="#4a3b47" />
      <path d="M59 48 q4 4 8 0" fill="none" stroke="#4a3b47" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="48" cy="50" rx="4" ry="2.5" fill="#ffc2d1" />
      <ellipse cx="78" cy="50" rx="4" ry="2.5" fill="#ffc2d1" />
    </svg>
  );
}
