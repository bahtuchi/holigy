import { useTranslations } from 'next-intl';
import FadeUp from '../ui/FadeUp';

const icons = [
  <svg key="tailor" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>,
  <svg key="end2end" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>,
  <svg key="longterm" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg key="local" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
];

export default function WhyHoligy() {
  const t = useTranslations('why');
  const items = t.raw('items') as { title: string; description: string }[];

  return (
    <section id="why" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#0f0f0f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)' }} />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.04), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeUp>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-orange-500/20 text-orange-400 mb-6"
              style={{ background: 'rgba(249,115,22,0.06)', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }}
            >
              {t('badge')}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              {t('title').split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-gradient' : ''}`}>{line}</span>
              ))}
            </h2>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="group flex gap-6 p-7 rounded-2xl border border-white/5 hover:border-orange-500/15 transition-all duration-300"
                style={{ background: 'rgba(10,10,10,0.6)' }}
              >
                {/* Number + Icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-orange-400 transition-all duration-300 group-hover:scale-105"
                    style={{ background: 'rgba(249,115,22,0.08)' }}
                  >
                    {icons[i]}
                  </div>
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: 'var(--font-sora)', color: 'rgba(249,115,22,0.12)' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-lg font-semibold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-white/50 leading-relaxed font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
