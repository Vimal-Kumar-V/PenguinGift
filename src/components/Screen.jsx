// Full-height centered page shell. Pass a background class (e.g. bg-gingham).
export default function Screen({ children, className = '' }) {
  return (
    <main
      className={`relative flex min-h-dvh flex-col items-center justify-center gap-6 overflow-hidden px-4 pt-10 pb-36 text-center md:pb-16 ${className}`}
    >
      {children}
    </main>
  );
}
