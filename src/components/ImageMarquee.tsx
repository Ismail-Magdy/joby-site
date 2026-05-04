import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState, type KeyboardEvent } from 'react'
import {
  MARQUEE_COMMON_IMAGES,
  MARQUEE_USER_IMAGES,
} from '../config/site'
import { MarqueeStrip, type MarqueeImageItem } from './MarqueeStrip'

const TABS = [
  { id: 'common', label: 'Common' },
  { id: 'jobSeekers', label: 'Job Seekers' },
  { id: 'company', label: 'Company' },
] as const

type TabId = (typeof TABS)[number]['id']

function toImageItems(
  paths: readonly string[],
  labelPrefix: string,
): MarqueeImageItem[] {
  return paths.map((src, i) => ({
    src,
    alt: `${labelPrefix} screen ${i + 1}`,
  }))
}

const commonItems = toImageItems(MARQUEE_COMMON_IMAGES, 'Joby')
const userItems = toImageItems(MARQUEE_USER_IMAGES, 'Joby job seeker')

const panelMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.42, ease: [0.4, 0, 0.2, 1] as const },
}

export function ImageMarquee() {
  const [active, setActive] = useState<TabId>('common')

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

  return (
    <section
      className="border-y border-slate-100 bg-white py-16 sm:py-20"
      aria-label="Inside the app"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-normal tracking-wide text-slate-900 sm:text-3xl">
          Inside the app
        </h2>
        <p className="mx-auto mt-2 max-w-2xl font-sans text-slate-600">
          Explore shared flows, job seeker journeys, and the employer view ,
          each in its own live marquee.
        </p>

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
                className={`rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6 sm:text-base ${
                  selected
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-10 min-h-[14.5rem] w-full max-w-[100vw] sm:min-h-[16.5rem]">
        <AnimatePresence initial={false} mode="sync">
          {active === 'common' ? (
            <motion.div
              key="common"
              id="marquee-panel-common"
              role="tabpanel"
              aria-labelledby="marquee-tab-common"
              className="absolute inset-x-0 top-0 overflow-hidden"
              {...panelMotion}
            >
              <MarqueeStrip variant="images" items={commonItems} />
            </motion.div>
          ) : null}
          {active === 'jobSeekers' ? (
            <motion.div
              key="jobSeekers"
              id="marquee-panel-jobSeekers"
              role="tabpanel"
              aria-labelledby="marquee-tab-jobSeekers"
              className="absolute inset-x-0 top-0 overflow-hidden"
              {...panelMotion}
            >
              <MarqueeStrip variant="images" items={userItems} />
            </motion.div>
          ) : null}
          {active === 'company' ? (
            <motion.div
              key="company"
              id="marquee-panel-company"
              role="tabpanel"
              aria-labelledby="marquee-tab-company"
              className="absolute inset-x-0 top-0 overflow-hidden"
              {...panelMotion}
            >
              <MarqueeStrip variant="placeholders" placeholderCount={8} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}
