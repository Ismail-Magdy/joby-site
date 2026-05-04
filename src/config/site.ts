const DEFAULT_TELEGRAM = 'https://t.me/+Ly0NuI9eqhgxNTg0'

export const TELEGRAM_URL =
  import.meta.env.VITE_TELEGRAM_URL?.trim() || DEFAULT_TELEGRAM

export function assetPath(n: number): string {
  return `/assets/${n}.jpeg`
}

/** Hero floating phones */
export const HERO_SCREENSHOTS = [1, 2] as const

/** Feature blocks: two images each (tune indices to match your screenshots). */
export const FEATURE_SCREENSHOTS = {
  profiles: [3, 4] as const,
  gamification: [5, 6] as const,
  offline: [7, 8] as const,
}

/** Marquee strip — full set 3–14, duplicated in UI for seamless loop. */
export const MARQUEE_SCREENSHOTS: readonly number[] = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]
