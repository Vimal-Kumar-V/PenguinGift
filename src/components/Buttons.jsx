// Thick-bordered pill button used on the landing and "no" screens.
export function PillButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-32 cursor-pointer rounded-full border-4 border-coral-dark bg-coral px-10 py-3 font-cute text-2xl font-extrabold tracking-wide text-white shadow-[0_6px_0_#c23a3a] transition duration-200 hover:-translate-y-1 hover:scale-110 hover:rotate-2 active:translate-y-1 active:shadow-[0_2px_0_#c23a3a] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-coral"
    >
      {children}
    </button>
  );
}

// Heart-shaped "CLICK ME" button. `className` places it (e.g. bottom-right).
export function ClickMe({ children, onClick, className = 'right-4 bottom-4 md:right-8 md:bottom-8' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`fixed z-30 cursor-pointer transition duration-200 hover:scale-115 hover:-rotate-6 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-coral rounded-full ${className}`}
    >
      <span className="relative block w-28 animate-pulse-soft md:w-32">
        <svg viewBox="0 0 100 92" className="w-full drop-shadow-[0_5px_0_#c23a3a]" aria-hidden="true">
          <path d={HEART_PATH} fill="#ff6b6b" stroke="#fff" strokeWidth="4" />
        </svg>
        <span className="absolute inset-x-0 top-[34%] font-cute text-base font-extrabold leading-none text-white md:text-lg">
          {children}
        </span>
      </span>
    </button>
  );
}

export const HEART_PATH =
  'M50 90 C22 68 2 52 2 28 C2 13 14 2 29 2 C39 2 46 8 50 16 C54 8 61 2 71 2 C86 2 98 13 98 28 C98 52 78 68 50 90 Z';
