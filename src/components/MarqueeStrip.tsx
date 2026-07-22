import type { MockupItem } from '../data/mockups'
import { PhoneFrame } from './PhoneFrame'

type MarqueeStripProps = {
  items: readonly MockupItem[]
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const renderSet = (dupKey: 'a' | 'b', decorative: boolean) => (
    <div className="flex shrink-0 items-end gap-5 pr-5 sm:gap-7 sm:pr-7">
      {items.map((item, i) => (
        <PhoneFrame
          key={`${dupKey}-${item.src}-${i}`}
          size="sm"
          caption={decorative ? undefined : item.caption}
          glow
        >
          <img
            src={item.src}
            alt={decorative ? '' : item.alt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </PhoneFrame>
      ))}
    </div>
  )

  return (
    <div className="w-full overflow-hidden">
      <div className="marquee-track flex items-end">
        {renderSet('a', false)}
        {renderSet('b', true)}
      </div>
    </div>
  )
}
