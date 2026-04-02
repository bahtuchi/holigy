'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function RisingSun() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: 340, height: 340 }}
    >
      {/* Outer glow rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-orange-500/10"
          style={{ width: 220 + i * 60, height: 220 + i * 60 }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}

      {/* Sun body */}
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="heroSunGrad" cx="50%" cy="80%" r="60%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#e85d20" />
            </radialGradient>
            <filter id="sunGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Rays */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const innerR = 72;
            const outerR = 95;
            const x1 = 100 + innerR * Math.cos(angle);
            const y1 = 100 + innerR * Math.sin(angle);
            const x2 = 100 + outerR * Math.cos(angle);
            const y2 = 100 + outerR * Math.sin(angle);
            return (
              <motion.line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#f97316"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.6"
                animate={{ strokeOpacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
              />
            );
          })}

          {/* Half circle */}
          <path
            d="M30 120 A70 70 0 0 1 170 120 Z"
            fill="url(#heroSunGrad)"
            filter="url(#sunGlow)"
          />

          {/* Horizon line */}
          <line x1="20" y1="120" x2="180" y2="120" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Ground glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.2), transparent 70%)' }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: '#0a0a0a' }}
    >
      {/* Radial bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-orange-500/20 text-orange-400"
                style={{ background: 'rgba(249,115,22,0.06)', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                {t('badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              {t('headline').split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-gradient' : 'text-white'}`}>
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/50 leading-relaxed max-w-md font-light"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              {t('subline')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #f97316, #e85d20)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {t('cta_primary')}
              </a>
              <a
                href="#services-private"
                className="px-7 py-3.5 rounded-full text-sm font-medium text-white/70 border border-white/10 hover:border-white/20 hover:text-white transition-all"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {t('cta_secondary')}
                <span className="ml-2 opacity-50">↓</span>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex gap-10 pt-4 border-t border-white/5">
              {[
                { value: '500+', label: 'Anlagen' },
                { value: '35 MW', label: 'Installierte Leistung' },
                { value: '10+', label: 'Jahre Erfahrung' },
              ].map((stat) => (
                <div key={stat.value}>
                  <div
                    className="text-2xl font-bold text-gradient"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Rising Sun graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <RisingSun />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-white/20 tracking-widest uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
