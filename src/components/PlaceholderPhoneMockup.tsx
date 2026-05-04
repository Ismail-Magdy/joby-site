import { useReducedMotion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const frameClass =
  'flex h-[min(52vw,320px)] w-[min(46vw,280px)] max-w-[min(46vw,280px)] shrink-0 flex-col rounded-2xl border border-slate-700/90 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] ring-1 ring-slate-800 sm:h-[300px] sm:w-[240px] sm:max-w-[240px]'

type PlaceholderPhoneMockupProps = {
  /** Short label shown in the wireframe header area */
  label?: string
}

export function PlaceholderPhoneMockup({ label = 'Preview' }: PlaceholderPhoneMockupProps) {
  const reduceMotion = useReducedMotion()

  const inner = (
    <div className={frameClass} role="img" aria-label={label}>
      <div className="flex shrink-0 items-center justify-between border-b border-slate-800 px-3 py-2.5">
        <div className="h-2 w-12 rounded-full bg-slate-700" aria-hidden />
        <div className="h-2 w-8 rounded-full bg-slate-700" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <div className="flex items-center gap-2">
          <div className="size-10 shrink-0 rounded-full border border-slate-700 bg-slate-800/80" aria-hidden />
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="h-2 w-[75%] max-w-[8rem] rounded bg-slate-700/90" aria-hidden />
            <div className="h-1.5 w-[50%] max-w-[5rem] rounded bg-slate-800" aria-hidden />
          </div>
        </div>
        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded bg-slate-800" aria-hidden />
          <div className="h-1.5 w-[92%] rounded bg-slate-800" aria-hidden />
          <div className="h-1.5 w-[78%] rounded bg-slate-800" aria-hidden />
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2 pb-1">
          <div className="h-14 rounded-lg border border-dashed border-slate-700 bg-slate-800/40" aria-hidden />
          <div className="h-14 rounded-lg border border-dashed border-slate-700 bg-slate-800/40" aria-hidden />
        </div>
      </div>
    </div>
  )

  if (reduceMotion) {
    return inner
  }

  return (
    <Tilt
      tiltMaxAngleX={11}
      tiltMaxAngleY={11}
      scale={1.02}
      transitionSpeed={450}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#64748b"
      className="rounded-2xl will-change-transform"
    >
      {inner}
    </Tilt>
  )
}
