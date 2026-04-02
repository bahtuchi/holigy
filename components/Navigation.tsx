'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './ui/Logo';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('services'), href: '#services-private' },
    { label: t('about'), href: '#about' },
    { label: t('why'), href: '#why' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ];

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 transition-colors ${
                  locale === 'en' ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'
                }`}
              >
                EN
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => switchLocale('de')}
                className={`px-2 py-1 transition-colors ${
                  locale === 'de' ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'
                }`}
              >
                DE
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #f97316, #e85d20)',
                fontFamily: 'var(--font-dm-sans)',
                color: 'white',
              }}
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-lg py-1 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  <button
                    onClick={() => { switchLocale('en'); setMobileOpen(false); }}
                    className={locale === 'en' ? 'text-white font-medium' : 'text-white/40'}
                  >EN</button>
                  <span className="text-white/20">|</span>
                  <button
                    onClick={() => { switchLocale('de'); setMobileOpen(false); }}
                    className={locale === 'de' ? 'text-white font-medium' : 'text-white/40'}
                  >DE</button>
                </div>
                <a
                  href="#contact"
                  className="flex-1 text-center px-5 py-2.5 rounded-full text-sm font-medium"
                  style={{ background: 'linear-gradient(135deg, #f97316, #e85d20)', color: 'white', fontFamily: 'var(--font-dm-sans)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {t('cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
