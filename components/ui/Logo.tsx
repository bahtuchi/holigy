'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: { text: 'text-xl', sun: 20 },
    md: { text: 'text-2xl', sun: 26 },
    lg: { text: 'text-4xl', sun: 40 },
  };

  const { text, sun } = sizes[size];

  return (
    <div className="flex flex-col items-start leading-none select-none">
      <div className={`${text} font-bold tracking-tight flex items-center`} style={{ fontFamily: 'var(--font-sora)' }}>
        <span className="text-white">h</span>
        {/* Rising sun replacing "o" */}
        <span className="inline-flex items-center justify-center" style={{ width: sun, height: sun }}>
          <svg
            width={sun}
            height={sun}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#e85d20" />
              </linearGradient>
            </defs>
            {/* Half circle (rising sun) */}
            <path
              d="M3 16 A10 10 0 0 1 23 16 Z"
              fill="url(#sunGrad)"
            />
            {/* Sun rays */}
            <line x1="13" y1="3" x2="13" y2="6" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4.5" y1="6.5" x2="6.6" y2="8.6" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="21.5" y1="6.5" x2="19.4" y2="8.6" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1.5" y1="14" x2="4.5" y2="14" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="21.5" y1="14" x2="24.5" y2="14" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-white">ligy</span>
      </div>
      <span
        className="text-xs tracking-widest uppercase"
        style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.18em' }}
      >
        <span className="text-white/50">holistic </span>
        <span style={{ color: '#f97316' }}>energy</span>
      </span>
    </div>
  );
}
