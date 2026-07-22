import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  /** Optional caption displayed below the frame */
  caption?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Extra wrapper classes */
  className?: string
  /** Enable the subtle glow behind the frame */
  glow?: boolean
}

const sizeMap = {
  sm: {
    wrapper: 'w-[140px] sm:w-[160px]',
    bezel: 'rounded-[1.6rem] border-[3px]',
    island: 'h-[6px] w-[22%] top-[6px] rounded-[3px]',
    radius: '1.35rem',
  },
  md: {
    wrapper: 'w-[180px] sm:w-[210px]',
    bezel: 'rounded-[2rem] border-[4px]',
    island: 'h-[7px] w-[22%] top-[7px] rounded-[3.5px]',
    radius: '1.7rem',
  },
  lg: {
    wrapper: 'w-[200px] sm:w-[240px]',
    bezel: 'rounded-[2.5rem] border-[5px]',
    island: 'h-[8px] w-[24%] top-[8px] rounded-[4px]',
    radius: '2.15rem',
  },
}

/**
 * Modern iPhone 15 Pro-style phone frame.
 * Features Dynamic Island, ultra-thin bezels, and a premium titanium look.
 */
export function PhoneFrame({
  children,
  caption,
  size = 'md',
  className = '',
  glow = false,
}: PhoneFrameProps) {
  const reduceMotion = useReducedMotion()
  const s = sizeMap[size]

  return (
    <motion.div
      className={`group relative flex flex-col items-center ${s.wrapper} ${className}`}
      whileHover={reduceMotion ? undefined : { scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {/* Glow effect behind the phone */}
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-110 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.25), transparent 70%)',
          }}
          aria-hidden
        />
      )}

      {/* Phone body */}
      <div className="relative w-full">
        {/* Outer titanium ring */}
        <div
          className={`relative overflow-hidden bg-gradient-to-b from-[#2a2a2e] via-[#1a1a1e] to-[#0f0f12] ${s.bezel} shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)_inset,0_1px_0_rgba(255,255,255,0.08)_inset]`}
        >
          {/* Inner screen bezel  ultra-thin gap */}
          <div
            className="relative aspect-[9/19.5] w-full overflow-hidden bg-black"
            style={{ borderRadius: s.radius }}
          >
            {children}
          </div>
        </div>

        {/* Dynamic Island */}
        <div
          className={`pointer-events-none absolute left-1/2 ${s.island} -translate-x-1/2 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]`}
          style={{ zIndex: 20 }}
          aria-hidden
        />

        {/* Side button accents */}
        <div
          className="pointer-events-none absolute -right-[2px] top-[28%] h-[12%] w-[3px] rounded-r-sm bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-[2px] top-[22%] h-[6%] w-[3px] rounded-l-sm bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-[2px] top-[32%] h-[10%] w-[3px] rounded-l-sm bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-[2px] top-[44%] h-[10%] w-[3px] rounded-l-sm bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]"
          aria-hidden
        />
      </div>

      {/* Caption */}
      {caption && (
        <p className="mt-3 text-center font-sans text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
          {caption}
        </p>
      )}
    </motion.div>
  )
}
