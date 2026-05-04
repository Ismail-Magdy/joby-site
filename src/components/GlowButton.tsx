import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type GlowFields = Pick<
  ComponentPropsWithoutRef<'a'>,
  | 'href'
  | 'target'
  | 'rel'
  | 'download'
  | 'onClick'
  | 'id'
  | 'aria-label'
  | 'tabIndex'
>

type GlowButtonProps = {
  children: ReactNode
  className?: string
} & GlowFields

export function GlowButton({
  children,
  className = '',
  href,
  target,
  rel,
  download,
  onClick,
  id,
  'aria-label': ariaLabel,
  tabIndex,
}: GlowButtonProps) {
  return (
    <motion.span
      className="inline-flex max-w-full justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-10 py-4 font-sans text-lg font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_-8px_rgba(37,99,235,0.65),0_0_60px_-12px_rgba(37,99,235,0.35)] transition-shadow hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
      >
        {children}
      </a>
    </motion.span>
  )
}
