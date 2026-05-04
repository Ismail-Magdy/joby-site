type MarqueePlaceholderCardProps = {
  variant?: 0 | 1 | 2 | 3
}

const base =
  'flex h-56 w-[188px] shrink-0 flex-col rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.4)] ring-1 ring-slate-800/90 sm:h-64 sm:w-[208px]'

export function MarqueePlaceholderCard({ variant = 0 }: MarqueePlaceholderCardProps) {
  return (
    <div className={base} role="presentation" aria-hidden>
      <div className="flex shrink-0 items-center gap-2 border-b border-slate-800 px-2.5 py-2">
        <div className="h-1.5 w-8 rounded-full bg-slate-700" />
        <div className="ml-auto h-1.5 w-5 rounded-full bg-slate-700/80" />
      </div>
      {variant === 0 ? (
        <div className="flex flex-1 flex-col gap-2 p-2.5">
          <div className="flex gap-2">
            <div className="size-8 shrink-0 rounded-lg border border-slate-700 bg-slate-800/60" />
            <div className="min-w-0 flex-1 space-y-1">
              <div className="h-1.5 w-full rounded bg-slate-700/70" />
              <div className="h-1 w-[70%] rounded bg-slate-800" />
            </div>
          </div>
          <div className="mt-auto h-16 rounded-lg border border-dashed border-slate-700/70 bg-slate-800/30" />
        </div>
      ) : null}
      {variant === 1 ? (
        <div className="flex flex-1 flex-col justify-center gap-2 p-2.5">
          <div className="h-2 w-[75%] rounded bg-slate-700/80" />
          <div className="h-1.5 w-full rounded bg-slate-800" />
          <div className="h-1.5 w-[88%] rounded bg-slate-800" />
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <div className="aspect-square rounded-md bg-slate-800/50" />
            <div className="aspect-square rounded-md bg-slate-800/50" />
            <div className="aspect-square rounded-md bg-slate-800/50" />
          </div>
        </div>
      ) : null}
      {variant === 2 ? (
        <div className="flex flex-1 flex-col gap-2 p-2.5">
          <div className="h-12 rounded-lg border border-slate-700/60 bg-slate-800/40" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-slate-800" />
            <div className="h-1.5 w-[80%] rounded bg-slate-800" />
            <div className="h-1.5 w-[65%] rounded bg-slate-800" />
          </div>
        </div>
      ) : null}
      {variant === 3 ? (
        <div className="flex flex-1 flex-col gap-2 p-2.5">
          <div className="flex gap-1.5">
            <div className="h-6 flex-1 rounded-md bg-slate-800/70" />
            <div className="h-6 w-8 rounded-md bg-slate-700/60" />
          </div>
          <div className="flex-1 rounded-lg border border-slate-700/50 bg-slate-800/25" />
        </div>
      ) : null}
    </div>
  )
}
