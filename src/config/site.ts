const DEFAULT_WHATSAPP_BETA = 'https://wa.me/201507090603'

/** Join Beta / primary CTA — WhatsApp chat. */
export const WHATSAPP_BETA_URL =
  import.meta.env.VITE_WHATSAPP_BETA_URL?.trim() || DEFAULT_WHATSAPP_BETA

export const CONTACT = {
  phoneDisplay: '01507090603',
  phoneTel: 'tel:+201507090603',
  email: 'ismailmagdy920@gmail.com',
  emailMailto: 'mailto:ismailmagdy920@gmail.com',
  instagram:
    'https://www.instagram.com/joby_app_?igsh=ZndvdHM4eTFzbXo1',
  facebook: 'https://www.facebook.com/share/1B4LsLAAdq/',
  linkedin: 'https://www.linkedin.com/company/joby-application/',
  tiktok: 'https://www.tiktok.com/@joby922?_r=1&_t=ZS-964FnlNpv1u',
} as const

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
