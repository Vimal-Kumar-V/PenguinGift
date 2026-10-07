import { useMemo } from 'react';
import { Heart } from './Hearts.jsx';

const CONFETTI_COLORS = ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#74c0fc', '#b197fc', '#f783ac'];

const random = (min, max) => min + Math.random() * (max - min);

// Falling confetti over the whole screen.
export function Confetti({ count = 45 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: random(0, 100),
        size: random(6, 13),
        duration: random(5, 11),
        delay: -random(0, 11),
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        round: i % 3 === 0,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 animate-fall"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.5,
            background: p.color,
            borderRadius: p.round ? '50%' : 2,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Twinkling stars scattered around.
export function Twinkles({ count = 14, color = '#ffc94d' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: random(3, 92),
        left: random(2, 96),
        size: random(14, 30),
        delay: random(0, 2),
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute animate-twinkle leading-none"
          style={{ top: `${s.top}%`, left: `${s.left}%`, fontSize: s.size, color, animationDelay: `${s.delay}s` }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

// Soft hearts drifting around the background.
export function FloatingHearts({ count = 10, fill = '#ffc2d1' }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: random(4, 88),
        left: random(2, 92),
        size: random(22, 54),
        delay: -random(0, 3.5),
        rotate: random(-25, 25),
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="absolute animate-float opacity-70"
          style={{ top: `${h.top}%`, left: `${h.left}%`, width: h.size, rotate: `${h.rotate}deg`, animationDelay: `${h.delay}s` }}
        >
          <Heart fill={fill} />
        </span>
      ))}
    </div>
  );
}
