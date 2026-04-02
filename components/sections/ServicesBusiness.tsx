import { useTranslations } from 'next-intl';
import ServiceCard from '../ui/ServiceCard';
import SectionHeader from '../ui/SectionHeader';

const icons = [
  // Factory/commercial solar
  <svg key="factory" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20V8l6-4v4l6-4v16" />
    <path d="M14 20V10l6-4v14" />
    <path d="M2 20h20" />
  </svg>,
  // Industrial storage
  <svg key="storage" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18" />
    <path d="M9 9v6M15 9v6" />
  </svg>,
  // Audit/chart
  <svg key="audit" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 21H4.6C3.72 21 3 20.28 3 19.4V3" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>,
  // Grid/network
  <svg key="grid" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <circle cx="4" cy="6" r="2" />
    <circle cx="20" cy="6" r="2" />
    <circle cx="4" cy="18" r="2" />
    <circle cx="20" cy="18" r="2" />
    <path d="M6 6h4m4 0h4M6 18h4m4 0h4M12 10v4M5.4 7.5l3.2 3M15.4 10.5l3.2-3M5.4 16.5l3.2-3M15.4 13.5l3.2 3" />
  </svg>,
  // Microgrid
  <svg key="micro" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>,
  // O&M
  <svg key="om" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>,
];

export default function ServicesBusiness() {
  const t = useTranslations('services_business');
  const items = t.raw('items') as { title: string; description: string }[];

  return (
    <section
      id="services-business"
      className="py-24 lg:py-32 relative"
      style={{ background: '#0f0f0f' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />

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
