import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type FeatureCardProps = {
  id?: string
  eyebrow?: string
  title: string
  description: string
  reverse?: boolean
  children: ReactNode
}

export function FeatureCard({
  id,
  eyebrow,
  title,
  description,
  reverse = false,
  children,
}: FeatureCardProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className={reverse ? 'lg:order-2' : ''}>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
        </div>
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 ${
            reverse ? 'lg:order-1' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </motion.article>
  )
}
