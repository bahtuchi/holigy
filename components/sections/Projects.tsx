import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as {
    type: string;
    title: string;
    location: string;
    metric: string;
    description: string;
  }[];

  return (
    <section id="projects" className="py-24 lg:py-32" style={{ background: '#0a0a0a' }}>
      <div className="absolute left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {items.map((project, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="group flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/15 transition-all duration-300"
                  style={{ background: 'rgba(15,15,15,0.8)' }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${i + 20}/600/400`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.8), transparent)' }} />
                    {/* Type badge */}
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30 text-orange-400"
                      style={{ background: 'rgba(0,0,0,0.6)', fontFamily: 'var(--font-dm-sans)', backdropFilter: 'blur(8px)' }}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <div>
                      <h3
                        className="text-base font-semibold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-sora)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-xs text-white/40 mt-1 flex items-center gap-1.5"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {project.location}
                      </p>
                    </div>

                    {/* Key metric */}
                    <div
                      className="px-3 py-2 rounded-lg"
                      style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.12)' }}
                    >
                      <span
                        className="text-sm font-semibold text-gradient"
                        style={{ fontFamily: 'var(--font-sora)' }}
                      >
                        {project.metric}
                      </span>
                    </div>

                    <p
                      className="text-xs text-white/45 leading-relaxed font-light"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {project.description}
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
