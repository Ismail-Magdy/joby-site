import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { featureCardItemVariants } from './featureMotion'

type FeatureCardProps = {
  id?: string
  eyebrow?: string
  title: string
  description: string
  reverse?: boolean
  children: ReactNode
  variants?: Variants
}

export function FeatureCard({
  id,
  eyebrow,
  title,
  description,
  reverse = false,
  children,
  variants = featureCardItemVariants,
}: FeatureCardProps) {
  return (
    <motion.article
      id={id}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      className="scroll-mt-24 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm will-change-transform sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className={reverse ? 'lg:order-2' : ''}>
          {eyebrow ? (
            <p className="font-heading text-sm font-normal uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-heading mt-2 text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
            {description}
          </p>
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
