const DEFAULT_WHATSAPP_BETA = 'https://wa.me/201507090603'

/** Join Beta / primary CTA , WhatsApp chat. */
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

/** Navbar brand mark (public path). */
export const LOGO_SVG = '/assets/svgs/joby_logo.svg'

/** Hero iPhone mockups (public paths). */
export const HERO_MOCKUP_IMAGES = {
  left: '/assets/common/on_boarding.jpeg',
  right: '/assets/common/splash.jpeg',
} as const

/** Job seeker feature screens under `/assets/users/`. */
export const JOB_SEEKER_FEATURE_IMAGES = {
  profiles: ['/assets/users/profile.jpeg', '/assets/users/location.jpeg'] as const,
  gamification: ['/assets/users/pionts.jpeg', '/assets/users/awesome.jpeg'] as const,
  seamless: ['/assets/users/settings.jpeg'] as const,
}

/** "Inside the app" , Common tab (`/assets/common/`). */
export const MARQUEE_COMMON_IMAGES = [
  '/assets/common/login.jpeg',
  '/assets/common/sign_up.jpeg',
  '/assets/common/on_boarding.jpeg',
  '/assets/common/splash.jpeg',
] as const

/** "Inside the app" , Job Seekers tab (`/assets/users/`). */
export const MARQUEE_USER_IMAGES = [
  '/assets/users/basic_info.jpeg',
  '/assets/users/links.jpeg',
  '/assets/users/work_type.jpeg',
  '/assets/users/feedback.jpeg',
  '/assets/users/profile.jpeg',
  '/assets/users/location.jpeg',
  '/assets/users/awesome.jpeg',
  '/assets/users/pionts.jpeg',
] as const
