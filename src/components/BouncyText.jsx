import { Fragment } from 'react';

const COLORS = ['#ff6b6b', '#ffa94d', '#f6c700', '#51cf66', '#4dabf7', '#9775fa', '#f783ac'];

// Letters that bob up and down one after another, optionally rainbow-coloured.
// Words stay whole so lines only ever break between them.
export default function BouncyText({ text, rainbow = false, className = '' }) {
  let index = 0;
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <Fragment key={w}>
          {w > 0 && ' '}
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {[...word].map((char) => {
              const i = index++;
              return (
                <span
                  key={i}
                  className="inline-block animate-wave"
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    color: rainbow ? COLORS[i % COLORS.length] : undefined,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
