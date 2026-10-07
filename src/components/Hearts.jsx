import { HEART_PATH } from './Buttons.jsx';

// Heart-shaped mask, stretched over its box (the box keeps the heart's 100:92 ratio).
const HEART_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 92" preserveAspectRatio="none"><path d="${HEART_PATH}"/></svg>`,
)}")`;

const maskStyle = {
  maskImage: HEART_MASK,
  WebkitMaskImage: HEART_MASK,
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
};

// A photo entry is a URL or { src, focus }. focus is a CSS object-position such as
// 'top' or 'center 30%': the part of the photo that stays in view.
const toPhoto = (p) => (typeof p === 'string' ? { src: p } : p);

function HeartOutline({ colors }) {
  return (
    <svg viewBox="0 0 100 92" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      {colors.map(([stroke, width]) => (
        <path key={stroke} d={HEART_PATH} fill="none" stroke={stroke} strokeWidth={width} />
      ))}
    </svg>
  );
}

// A single photo cropped into a heart with a white sticker edge.
export function HeartPhoto({ src, focus = 'center', alt = '', className = '' }) {
  return (
    <div className={`relative aspect-[100/92] drop-shadow-lg ${className}`}>
      <div className="absolute inset-0 bg-blush" style={maskStyle}>
        <img src={src} alt={alt} className="h-full w-full object-cover" style={{ objectPosition: focus }} />
      </div>
      <HeartOutline colors={[['#fff', 3.5]]} />
    </div>
  );
}

// One or more photos tiled into one big heart.
export function HeartCollage({ photos, alt = '', className = '' }) {
  const cols = Math.ceil(Math.sqrt(photos.length));
  return (
    <div role="img" aria-label={alt} className={`relative aspect-[100/92] drop-shadow-xl ${className}`}>
      <div
        className="absolute inset-0 grid gap-1 bg-white"
        style={{ ...maskStyle, gridTemplateColumns: `repeat(${cols}, 1fr)`, gridAutoRows: '1fr' }}
      >
        {photos.map(toPhoto).map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt=""
            className="h-full min-h-0 w-full object-cover"
            style={{ objectPosition: photo.focus ?? 'center' }}
          />
        ))}
      </div>
      <HeartOutline colors={[['#fff', 2.5], ['#ff8fab', 0.8]]} />
    </div>
  );
}

// Plain decorative heart shape.
export function Heart({ className = '', fill = '#ffc2d1' }) {
  return (
    <svg viewBox="0 0 100 92" className={className} aria-hidden="true">
      <path d={HEART_PATH} fill={fill} />
    </svg>
  );
}
