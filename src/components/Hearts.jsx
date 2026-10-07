import { useId } from 'react';
import { HEART_PATH } from './Buttons.jsx';

// useId output can contain characters that break url(#…) references.
function useSvgId() {
  return 'h' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
}

// A single photo cropped into a heart with a white sticker edge.
export function HeartPhoto({ src, alt = '', className = '' }) {
  const id = useSvgId();
  return (
    <svg viewBox="0 0 100 92" role="img" aria-label={alt} className={`drop-shadow-lg ${className}`}>
      <defs>
        <clipPath id={id}>
          <path d={HEART_PATH} />
        </clipPath>
      </defs>
      <path d={HEART_PATH} fill="#ffc2d1" />
      <image href={src} width="100" height="92" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${id})`} />
      <path d={HEART_PATH} fill="none" stroke="#fff" strokeWidth="3.5" />
    </svg>
  );
}

// Several photos tiled into one big heart.
export function HeartCollage({ photos, alt = '', className = '' }) {
  const id = useSvgId();
  const cols = Math.ceil(Math.sqrt(photos.length));
  const rows = Math.ceil(photos.length / cols);
  const w = 100 / cols;
  const h = 92 / rows;
  const gap = 0.8;

  return (
    <svg viewBox="0 0 100 92" role="img" aria-label={alt} className={`drop-shadow-xl ${className}`}>
      <defs>
        <clipPath id={id}>
          <path d={HEART_PATH} />
        </clipPath>
      </defs>
      <path d={HEART_PATH} fill="#fff" />
      <g clipPath={`url(#${id})`}>
        {photos.map((src, i) => (
          <image
            key={i}
            href={src}
            x={(i % cols) * w + gap}
            y={Math.floor(i / cols) * h + gap}
            width={w - gap * 2}
            height={h - gap * 2}
            preserveAspectRatio="xMidYMid slice"
          />
        ))}
      </g>
      <path d={HEART_PATH} fill="none" stroke="#fff" strokeWidth="2.5" />
      <path d={HEART_PATH} fill="none" stroke="#ff8fab" strokeWidth="0.8" />
    </svg>
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
