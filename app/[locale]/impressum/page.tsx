import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';
export const dynamicParams = false;

export default function ImpressumPage() {
  const t = useTranslations('impressum');
  const locale = 'de'; // fallback, will be handled by locale layout

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Zurück
          </Link>

          <h1
            className="text-4xl font-bold text-white mb-10 tracking-tight"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {t('title')}
          </h1>

          <div
            className="prose prose-invert max-w-none"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            {t('content').split('\n\n').map((block, i) => (
              <p key={i} className="text-white/60 leading-relaxed mb-4 font-light text-sm">
                {block.split('\n').map((line, li) => (
                  <span key={li} className="block">{line}</span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
