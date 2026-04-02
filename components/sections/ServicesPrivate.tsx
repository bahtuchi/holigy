import { useTranslations } from 'next-intl';
import ServiceCard from '../ui/ServiceCard';
import SectionHeader from '../ui/SectionHeader';

const icons = [
  // Solar panel
  <svg key="solar" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>,
  // Battery
  <svg key="battery" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" />
    <path d="M22 11v2" strokeWidth="2" />
    <path d="M7 11h4m0 0v-2m0 2v2" />
  </svg>,
  // EV charging
  <svg key="ev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  // Monitoring
  <svg key="monitor" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M6 10l3 3 3-4 3 3 3-3" />
  </svg>,
  // Wrench/service
  <svg key="service" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
];

export default function ServicesPrivate() {
  const t = useTranslations('services_private');
  const items = t.raw('items') as { title: string; description: string }[];

  return (
    <section
      id="services-private"
      className="py-24 lg:py-32 relative"
      style={{ background: '#0a0a0a' }}
    >
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <ServiceCard
                key={i}
                icon={icons[i]}
                title={item.title}
                description={item.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
