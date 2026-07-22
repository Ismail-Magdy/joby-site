import { motion, useReducedMotion } from 'framer-motion'
import { PhoneFrame } from './PhoneFrame'

type AnimatedPhoneProps = {
  src: string
  alt: string
  caption?: string
  /** Motion delay in seconds for staggered depth */
  delay?: number
  className?: string
}

export function AnimatedPhone({
  src,
  alt,
  caption,
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
              y: [0, -18, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 6.25,
              repeat: Infinity,
              ease: [0.45, 0.05, 0.55, 0.95],
              delay,
            }
      }
    >
      <PhoneFrame size="lg" caption={caption} glow>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
      </PhoneFrame>
    </motion.div>
  )
}
