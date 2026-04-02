'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import FadeUp from '../ui/FadeUp';

export default function Contact() {
  const t = useTranslations('contact');
  const f = useTranslations('contact.form');
  const [clientType, setClientType] = useState<'private' | 'business'>('private');

  return (
    <section id="contact" className="py-24 lg:py-32 relative" style={{ background: '#0f0f0f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }} />

      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(249,115,22,0.04), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div className="flex flex-col gap-10">
            <div>
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
              <FadeUp delay={0.2}>
                <p
                  className="mt-4 text-base text-white/50 leading-relaxed font-light"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {t('subtitle')}
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.25}>
              <div className="flex flex-col gap-5">
                <h3
                  className="text-sm font-semibold text-white/70 uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {t('info_title')}
                </h3>
                {[
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    value: t('address'),
                    multiline: true,
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 9.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.88 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" />
                      </svg>
                    ),
                    value: t('phone'),
                    multiline: false,
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    value: t('email'),
                    multiline: false,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(249,115,22,0.08)' }}>
                      {item.icon}
                    </div>
                    <p className="text-sm text-white/60 font-light" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      {item.multiline ? item.value.split('\n').map((l, li) => <span key={li} className="block">{l}</span>) : item.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Map placeholder */}
            <FadeUp delay={0.3}>
              <div
                className="h-40 rounded-2xl border border-white/5 flex items-center justify-center"
                style={{ background: 'rgba(15,15,15,0.8)' }}
              >
                <div className="flex flex-col items-center gap-2 text-white/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                  </svg>
                  <span className="text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>{t('map_placeholder')}</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Contact form */}
          <FadeUp delay={0.15}>
            <form
              className="flex flex-col gap-5 p-8 rounded-2xl border border-white/5"
              style={{ background: 'rgba(10,10,10,0.8)' }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Client type toggle */}
              <div className="flex gap-2 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
                {(['private', 'business'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setClientType(type)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      background: clientType === type ? 'linear-gradient(135deg, #f97316, #e85d20)' : 'transparent',
                      color: clientType === type ? 'white' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {type === 'private' ? f('type_private') : f('type_business')}
                  </button>
                ))}
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: f('name'), type: 'text', name: 'name' },
                  { label: f('email'), type: 'email', name: 'email' },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/8 focus:border-orange-500/40 focus:outline-none transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', fontFamily: 'var(--font-dm-sans)' }}
                    />
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>{f('phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/8 focus:border-orange-500/40 focus:outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', fontFamily: 'var(--font-dm-sans)' }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>{f('message')}</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={f('message_placeholder')}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/8 focus:border-orange-500/40 focus:outline-none transition-colors resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', fontFamily: 'var(--font-dm-sans)' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #f97316, #e85d20)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {f('submit')}
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
