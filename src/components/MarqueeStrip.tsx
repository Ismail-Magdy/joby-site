import { MarqueePlaceholderCard } from './MarqueePlaceholderCard'

export type MarqueeImageItem = {
  src: string
  alt: string
}

const imgClass =
  'h-56 w-auto max-w-[200px] shrink-0 rounded-2xl object-cover object-top shadow-[0_16px_32px_-8px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/90 sm:h-64 sm:max-w-[220px]'

type MarqueeStripProps =
  | { variant: 'images'; items: readonly MarqueeImageItem[] }
  | { variant: 'placeholders'; placeholderCount?: number }

export function MarqueeStrip(props: MarqueeStripProps) {
  if (props.variant === 'images') {
    const { items } = props
    const strip = (dupKey: 'a' | 'b', decorative: boolean) => (
      <div className="flex shrink-0 items-center gap-6 pr-6">
        {items.map((item, i) => (
          <img
            key={`${dupKey}-${item.src}-${i}`}
            src={item.src}
            alt={decorative ? '' : item.alt}
            className={imgClass}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ))}
      </div>
    )

    return (
      <div className="w-full overflow-hidden">
        <div className="marquee-track flex">
          {strip('a', false)}
          {strip('b', true)}
        </div>
      </div>
    )
  }

  const count = props.placeholderCount ?? 8
  const strip = (dupKey: string) => (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {Array.from({ length: count }, (_, i) => (
        <MarqueePlaceholderCard
          key={`${dupKey}-${i}`}
          variant={(i % 4) as 0 | 1 | 2 | 3}
        />
      ))}
    </div>
  )

  return (
    <div className="w-full overflow-hidden">
      <div className="marquee-track flex items-center">
        {strip('a')}
        <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden>
          {Array.from({ length: count }, (_, i) => (
            <MarqueePlaceholderCard
              key={`b-${i}`}
              variant={(i % 4) as 0 | 1 | 2 | 3}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
