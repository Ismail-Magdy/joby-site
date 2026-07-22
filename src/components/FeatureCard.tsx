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
      className="group/card scroll-mt-24 overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-white to-slate-50/80 p-8 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_12px_48px_-8px_rgba(37,99,235,0.12)] will-change-transform sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Text content */}
        <div className={reverse ? 'lg:order-2' : ''}>
          {eyebrow ? (
            <span className="inline-block rounded-full bg-primary/8 px-3.5 py-1 font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-3 font-heading text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        {/* Phone mockups */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 ${
            reverse ? 'lg:order-1' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </motion.article>
  )
}
