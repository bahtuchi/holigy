import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FadeUp from '../ui/FadeUp';

export default function About() {
  const t = useTranslations('about');
  const paragraphs = t.raw('paragraphs') as string[];
  const team = t.raw('team') as { name: string; role: string; bio: string }[];

  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: '#0a0a0a' }}>
      <div className="absolute left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-24">

        {/* Mission */}
        <div>
          <FadeUp>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-orange-500/20 text-orange-400 mb-10"
              style={{ background: 'rgba(249,115,22,0.06)', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }}
            >
              {t('badge')}
            </span>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Pull quote */}
            <FadeUp delay={0.1}>
              <div className="relative">
                {/* Orange accent line */}
                <div className="absolute -left-6 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #f97316, transparent)' }} />
                <blockquote
                  className="text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  &ldquo;{t('pull_quote')}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm text-orange-400/80" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  — {t('mission_label')}
                </p>
              </div>
            </FadeUp>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5">
              {paragraphs.map((para, i) => (
                <FadeUp key={i} delay={0.15 + i * 0.1}>
                  <p
                    className="text-base text-white/55 leading-relaxed font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {para}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <FadeUp>
            <div className="mb-12">
              <h2
                className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                {t('team_title')}
              </h2>
              <p
                className="mt-3 text-base text-white/50 font-light"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {t('team_subtitle')}
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="group flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
                  style={{ background: 'rgba(15,15,15,0.8)' }}>
                  {/* Photo */}
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500/20">
                    <Image
                      src={`https://picsum.photos/seed/${i + 10}/160/160`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div>
                    <h3
                      className="text-sm font-semibold text-white tracking-tight"
                      style={{ fontFamily: 'var(--font-sora)' }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs text-orange-400/80 mt-0.5"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-xs text-white/40 mt-2 leading-relaxed font-light"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
