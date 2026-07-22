import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState, type KeyboardEvent } from 'react'
import { MARQUEE_TABS } from '../data/mockups'
import { MarqueeStrip } from './MarqueeStrip'

const TABS = [
  { id: 'common', label: 'Common' },
  { id: 'jobSeekers', label: 'Job Seekers' },
  { id: 'company', label: 'Company' },
] as const

type TabId = (typeof TABS)[number]['id']

const panelMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const },
}

export function ImageMarquee() {
  const [active, setActive] = useState<TabId>('common')
  const [paused, setPaused] = useState(false)

  const onKeyDown = useCallback(
    (e: KeyboardEvent, index: number) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActive(TABS[Math.min(index + 1, TABS.length - 1)]!.id)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActive(TABS[Math.max(index - 1, 0)]!.id)
      }
    },
    [],
  )

  const items = MARQUEE_TABS[active]

  return (
    <section
      className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 py-16 sm:py-20"
      aria-label="Inside the app"
    >
      {/* Decorative gradient orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/8 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-violet-500/6 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-2xl font-normal tracking-wide text-slate-900 sm:text-3xl">
            Inside the app
          </h2>
          <p className="mx-auto mt-2 max-w-2xl font-sans text-slate-600">
            Explore shared flows, job seeker journeys, and the employer
            view&nbsp; each in its own live showcase.
          </p>
        </motion.div>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Marquee category"
        >
          {TABS.map((tab, index) => {
            const selected = active === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                id={`marquee-tab-${tab.id}`}
                aria-controls={`marquee-panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`relative rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6 sm:text-base ${
                  selected
                    ? 'bg-primary text-white shadow-[0_4px_20px_-4px_rgba(37,99,235,0.5)]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-sm'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="marquee-tab-glow"
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Marquee viewport */}
      <div
        className="relative mx-auto mt-10 w-full max-w-[100vw]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={
          { '--marquee-play-state': paused ? 'paused' : 'running' } as React.CSSProperties
        }
      >
        {/* Edge fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
          aria-hidden
        />

        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={active}
            id={`marquee-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`marquee-tab-${active}`}
            className="overflow-hidden"
            {...panelMotion}
          >
            <MarqueeStrip items={items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
