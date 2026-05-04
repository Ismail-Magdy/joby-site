import { motion, useReducedMotion } from 'framer-motion'

type AnimatedPhoneProps = {
  src: string
  alt: string
  /** Motion delay in seconds for staggered depth */
  delay?: number
  className?: string
}

export function AnimatedPhone({
  src,
  alt,
  delay = 0,
  className = '',
}: AnimatedPhoneProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`relative mx-auto w-[min(100%,240px)] ${className}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -14, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }
      }
    >
      <div className="aspect-[9/19.5] overflow-hidden rounded-[2.35rem] border-[10px] border-slate-900 bg-slate-900 shadow-[var(--shadow-phone)]">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-3 h-5 w-[28%] -translate-x-1/2 rounded-full bg-slate-950/85"
        aria-hidden
      />
    </motion.div>
  )
}
