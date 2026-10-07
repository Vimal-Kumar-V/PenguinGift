// Built-in cartoon characters. Each can be swapped for an image via CHARACTERS in data.js.

const INK = '#33334d';
const BELLY = '#fffaf3';
const ORANGE = '#ffa94d';
const BLUSH = '#ffb3c1';
const PINK = '#ff8fab';

// Shows `src` as an image when given, otherwise the built-in SVG (children).
export function Character({ src, alt, className = '', children }) {
  if (src) return <img src={src} alt={alt} className={`object-contain ${className}`} />;
  return (
    <div role="img" aria-label={alt} className={className}>
      {children}
    </div>
  );
}

const fillBox = { transformBox: 'fill-box', transformOrigin: 'center' };

function Wings({ pose }) {
  if (pose === 'up') {
    return (
      <>
        <ellipse cx="34" cy="78" rx="13" ry="34" fill={INK} transform="rotate(-35 34 78)" />
        <ellipse cx="166" cy="78" rx="13" ry="34" fill={INK} transform="rotate(35 166 78)" />
      </>
    );
  }
  if (pose === 'hold') {
    return (
      <>
        <ellipse cx="60" cy="160" rx="12" ry="28" fill={INK} transform="rotate(-62 60 160)" />
        <ellipse cx="140" cy="160" rx="12" ry="28" fill={INK} transform="rotate(62 140 160)" />
      </>
    );
  }
  return (
    <>
      <ellipse cx="42" cy="142" rx="13" ry="34" fill={INK} transform="rotate(18 42 142)" />
      <ellipse cx="158" cy="142" rx="13" ry="34" fill={INK} transform="rotate(-18 158 142)" />
    </>
  );
}

function Gift() {
  return (
    <g>
      <rect x="68" y="150" width="64" height="48" rx="5" fill={PINK} />
      <rect x="63" y="140" width="74" height="15" rx="4" fill="#ffa8c0" />
      <rect x="95" y="140" width="10" height="58" fill="#e64980" />
      <ellipse cx="89" cy="134" rx="11" ry="7" fill="#e64980" transform="rotate(-20 89 134)" />
      <ellipse cx="111" cy="134" rx="11" ry="7" fill="#e64980" transform="rotate(20 111 134)" />
      <circle cx="100" cy="138" r="5" fill="#c2255c" />
      <circle cx="78" cy="172" r="3" fill="#fff" opacity="0.8" />
      <circle cx="120" cy="185" r="3" fill="#fff" opacity="0.8" />
    </g>
  );
}

function Cake() {
  return (
    <g>
      <ellipse cx="100" cy="200" rx="42" ry="7" fill="#fff" stroke="#ead8c8" strokeWidth="2" />
      <rect x="66" y="160" width="68" height="38" rx="6" fill="#ffe3c2" />
      <path d="M66 168 q0 -10 10 -10 h48 q10 0 10 10 q-5 8 -11 0 q-6 9 -12 0 q-6 9 -12 0 q-6 9 -12 0 q-6 9 -11 0 z" fill={PINK} />
      <circle cx="78" cy="182" r="2.5" fill="#74c0fc" />
      <circle cx="92" cy="188" r="2.5" fill="#ffd43b" />
      <circle cx="108" cy="181" r="2.5" fill="#69db7c" />
      <circle cx="122" cy="189" r="2.5" fill="#b197fc" />
      <rect x="96" y="136" width="8" height="24" rx="2" fill="#74c0fc" />
      <path d="M96 142 l8 -4 M96 150 l8 -4" stroke="#fff" strokeWidth="2" />
      <ellipse cx="100" cy="128" rx="5" ry="8" fill="#ffd43b" className="animate-pulse-soft" style={fillBox} />
      <ellipse cx="100" cy="130" rx="2" ry="4" fill="#ff922b" />
    </g>
  );
}

function PartyHat() {
  return (
    <g transform="rotate(-14 100 56)">
      <path d="M78 64 L101 6 L124 62 Z" fill="#74c0fc" />
      <path d="M85 46 L117 45 M92 28 L110 27" stroke="#fff" strokeWidth="4" />
      <circle cx="96" cy="55" r="3" fill="#ffd43b" />
      <circle cx="108" cy="36" r="3" fill="#ff6b6b" />
      <circle cx="101" cy="6" r="8" fill="#ffd43b" />
    </g>
  );
}

// pose: 'up' | 'down' | 'hold'   mood: 'happy' | 'sad'   holding: null | 'gift' | 'cake'
export function Penguin({ pose = 'down', mood = 'happy', holding = null, hat = false }) {
  const sad = mood === 'sad';
  return (
    <svg viewBox="0 0 200 230" className="h-auto w-full overflow-visible" aria-hidden="true">
      <ellipse cx="80" cy="214" rx="18" ry="8" fill={ORANGE} />
      <ellipse cx="120" cy="214" rx="18" ry="8" fill={ORANGE} />
      {pose !== 'hold' && <Wings pose={pose} />}
      <ellipse cx="100" cy="135" rx="62" ry="80" fill={INK} />
      <ellipse cx="100" cy="150" rx="44" ry="62" fill={BELLY} />
      <circle cx="84" cy="103" r="21" fill={BELLY} />
      <circle cx="116" cy="103" r="21" fill={BELLY} />

      {/* eyes */}
      <circle cx="85" cy="102" r="7" fill={INK} />
      <circle cx="115" cy="102" r="7" fill={INK} />
      <circle cx="87.5" cy="99.5" r="2.4" fill="#fff" />
      <circle cx="117.5" cy="99.5" r="2.4" fill="#fff" />
      {sad && (
        <>
          <path d="M74 91 L92 85" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M126 91 L108 85" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M77 112 q-4 7 0 10 q4 -3 0 -10 z" fill="#74c0fc" />
        </>
      )}

      <ellipse cx="73" cy="117" rx="8" ry="5" fill={BLUSH} />
      <ellipse cx="127" cy="117" rx="8" ry="5" fill={BLUSH} />
      {sad ? (
        <path d="M92 120 Q100 110 108 120 Z" fill={ORANGE} />
      ) : (
        <path d="M91 112 Q100 126 109 112 Z" fill={ORANGE} />
      )}

      {hat && <PartyHat />}
      {holding === 'gift' && <Gift />}
      {holding === 'cake' && <Cake />}
      {pose === 'hold' && <Wings pose="hold" />}
    </svg>
  );
}

const BROWN = '#c68b59';
const MUZZLE = '#f4dcc4';
const OUTLINE = { stroke: '#4a3b47', strokeWidth: 3 };

function BearHead({ cx, cy, fill, flip = false }) {
  const s = flip ? -1 : 1;
  return (
    <g>
      <circle cx={cx - 27 * s} cy={cy - 30} r="12" fill={fill} {...OUTLINE} />
      <circle cx={cx + 25 * s} cy={cy - 33} r="12" fill={fill} {...OUTLINE} />
      <circle cx={cx - 27 * s} cy={cy - 30} r="6" fill={BLUSH} />
      <circle cx={cx + 25 * s} cy={cy - 33} r="6" fill={BLUSH} />
      <circle cx={cx} cy={cy} r="38" fill={fill} {...OUTLINE} />
      <path d={`M${cx - 20} ${cy - 2} q6 -7 12 0`} fill="none" stroke="#4a3b47" strokeWidth="3" strokeLinecap="round" />
      <path d={`M${cx + 8} ${cy - 2} q6 -7 12 0`} fill="none" stroke="#4a3b47" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx={cx + 6 * s} cy={cy + 14} rx="15" ry="11" fill={MUZZLE} />
      <ellipse cx={cx + 6 * s} cy={cy + 10} rx="5" ry="3.5" fill="#4a3b47" />
      <path d={`M${cx + 6 * s - 5} ${cy + 17} q5 5 10 0`} fill="none" stroke="#4a3b47" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx={cx - 24} cy={cy + 12} rx="7" ry="4.5" fill={BLUSH} />
      <ellipse cx={cx + 24} cy={cy + 12} rx="7" ry="4.5" fill={BLUSH} />
    </g>
  );
}

export function HuggingBears() {
  return (
    <svg viewBox="0 0 240 210" className="h-auto w-full overflow-visible" aria-hidden="true">
      <path d="M120 22 c-4 -8 -14 -6 -12 2 c1 5 12 12 12 12 s11 -7 12 -12 c2 -8 -8 -10 -12 -2 z" fill="#ff6b6b" className="animate-pulse-soft" style={fillBox} />
      <ellipse cx="74" cy="196" rx="14" ry="8" fill={BROWN} {...OUTLINE} />
      <ellipse cx="108" cy="198" rx="14" ry="8" fill={BROWN} {...OUTLINE} />
      <ellipse cx="134" cy="198" rx="14" ry="8" fill="#fff" {...OUTLINE} />
      <ellipse cx="168" cy="196" rx="14" ry="8" fill="#fff" {...OUTLINE} />
      <ellipse cx="152" cy="148" rx="46" ry="50" fill="#fff" {...OUTLINE} />
      <ellipse cx="90" cy="148" rx="46" ry="50" fill={BROWN} {...OUTLINE} />
      {/* each bear's arm wraps around the other */}
      <ellipse cx="148" cy="138" rx="30" ry="11" fill={BROWN} transform="rotate(-18 148 138)" {...OUTLINE} />
      <ellipse cx="92" cy="152" rx="30" ry="11" fill="#fff" transform="rotate(16 92 152)" {...OUTLINE} />
      <g transform="rotate(10 156 82)">
        <BearHead cx={156} cy={82} fill="#fff" flip />
      </g>
      <g transform="rotate(-10 86 82)">
        <BearHead cx={86} cy={82} fill={BROWN} />
      </g>
    </svg>
  );
}
