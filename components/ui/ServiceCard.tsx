'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:border-orange-500/20"
      style={{ background: 'rgba(15,15,15,0.8)' }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(249,115,22,0.05), transparent 60%)' }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-orange-400"
        style={{ background: 'rgba(249,115,22,0.08)' }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-base font-semibold text-white mb-2 tracking-tight"
        style={{ fontFamily: 'var(--font-sora)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-white/50 leading-relaxed font-light"
        style={{ fontFamily: 'var(--font-dm-sans)' }}
      >
        {description}
      </p>

      {/* Arrow on hover */}
      <div className="mt-4 flex items-center gap-1 text-xs text-orange-500/0 group-hover:text-orange-500/60 transition-all duration-300">
        <span style={{ fontFamily: 'var(--font-dm-sans)' }}>Mehr erfahren</span>
        <span>→</span>
      </div>
    </motion.div>
  );
}
