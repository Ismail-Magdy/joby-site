import { MARQUEE_SCREENSHOTS, assetPath } from '../config/site'

export function ImageMarquee() {
  const items = MARQUEE_SCREENSHOTS.map((n) => ({
    n,
    src: assetPath(n),
    alt: `Joby app screenshot ${n}`,
  }))

  const strip = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {items.map(({ n, src, alt }) => (
        <img
          key={`${n}-a`}
          src={src}
          alt={alt}
          className="h-56 w-auto max-w-[200px] shrink-0 rounded-2xl object-cover object-top shadow-[0_16px_32px_-8px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/90 sm:h-64 sm:max-w-[220px]"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  )

  return (
    <section
      className="border-y border-slate-100 bg-white py-16 sm:py-20"
      aria-label="App showcase"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Inside the app
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">
          A continuous scroll through real screens — from onboarding moments to
          everyday flows.
        </p>
      </div>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="marquee-track flex">
          {strip}
          <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden>
            {items.map(({ n, src }) => (
              <img
                key={`${n}-b`}
                src={src}
                alt=""
                className="h-56 w-auto max-w-[200px] shrink-0 rounded-2xl object-cover object-top shadow-[0_16px_32px_-8px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/90 sm:h-64 sm:max-w-[220px]"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
