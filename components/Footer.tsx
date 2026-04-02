import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Logo from './ui/Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { label: nav('services'), href: '#services-private' },
    { label: nav('about'), href: '#about' },
    { label: nav('why'), href: '#why' },
    { label: nav('projects'), href: '#projects' },
    { label: nav('contact'), href: '#contact' },
  ];

  return (
    <footer className="relative" style={{ background: '#080808' }}>
      {/* Top border */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo + tagline */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href={`/${locale}`}>
              <Logo size="md" />
            </Link>
            <p
              className="text-sm text-white/40 leading-relaxed font-light max-w-xs"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {t('tagline')}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/20 transition-all"
                  aria-label={social}
                >
                  {social === 'linkedin' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs font-semibold text-white/40 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {t('nav_title')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-light"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs font-semibold text-white/40 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {t('legal_title')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href={`/${locale}/impressum`}
                  className="text-sm text-white/50 hover:text-white transition-colors font-light"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {t('impressum')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/datenschutz`}
                  className="text-sm text-white/50 hover:text-white transition-colors font-light"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {t('datenschutz')}
                </Link>
              </li>
              {/* Language switcher in footer */}
              <li className="pt-2 flex gap-2">
                <Link href="/de" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-dm-sans)' }}>DE</Link>
                <span className="text-white/20 text-sm">|</span>
                <Link href="/en" className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-dm-sans)' }}>EN</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <p
            className="text-xs text-white/25 font-light"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            {t('copyright')}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-white/20" style={{ fontFamily: 'var(--font-dm-sans)' }}>Made with</span>
            <span className="text-orange-500/50">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
