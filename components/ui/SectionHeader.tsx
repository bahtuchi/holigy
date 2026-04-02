import FadeUp from './FadeUp';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-5 max-w-xl">
      <FadeUp>
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-orange-500/20 text-orange-400"
          style={{ background: 'rgba(249,115,22,0.06)', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }}
        >
          {badge}
        </span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2
          className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          {title.split('\n').map((line, i) => (
            <span key={i} className={`block ${i === 1 ? 'text-gradient' : ''}`}>{line}</span>
          ))}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p
            className="text-base text-white/50 leading-relaxed font-light"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
