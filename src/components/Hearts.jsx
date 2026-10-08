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
// zoom (e.g. 2) enlarges the photo for a close-up; focus then works like background-position.
export function HeartPhoto({ src, focus = 'center', zoom, alt = '', className = '' }) {
  return (
    <div className={`relative aspect-[100/92] drop-shadow-lg ${className}`}>
      <div className="absolute inset-0 bg-blush" style={maskStyle}>
        {zoom ? (
          <div
            role="img"
            aria-label={alt}
            className="h-full w-full bg-no-repeat"
            style={{ backgroundImage: `url("${src}")`, backgroundSize: `${zoom * 100}% auto`, backgroundPosition: focus }}
          />
        ) : (
          <img src={src} alt={alt} className="h-full w-full object-cover" style={{ objectPosition: focus }} />
        )}
      </div>
      <HeartOutline colors={[['#fff', 3.5]]} />
    </div>
  );
}

// One or more photos tiled into one big heart. A tile can also take zoom (e.g. 1.4)
// with origin, the point it zooms around, to nudge faces into the part the heart shows.
// span: 2 stretches a tile across two columns.
export function HeartCollage({ photos, alt = '', className = '' }) {
  const cols = Math.ceil(Math.sqrt(photos.length));
  return (
    <div role="img" aria-label={alt} className={`relative aspect-[100/92] drop-shadow-xl ${className}`}>
      <div
        className="absolute inset-0 grid gap-1 bg-white"
        style={{ ...maskStyle, gridTemplateColumns: `repeat(${cols}, 1fr)`, gridAutoRows: '1fr' }}
      >
        {photos.map(toPhoto).map((photo, i) => (
          <div key={i} className="min-h-0 overflow-hidden" style={{ gridColumn: photo.span ? `span ${photo.span}` : undefined }}>
            <img
              src={photo.src}
              alt=""
              className="h-full w-full object-cover"
              style={{
                objectPosition: photo.focus ?? 'center',
                transform: photo.zoom ? `scale(${photo.zoom})` : undefined,
                transformOrigin: photo.origin ?? 'center',
              }}
            />
          </div>
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
