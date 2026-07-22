const DEFAULT_WHATSAPP_BETA = 'https://wa.me/201507090603'

/** Join Beta / primary CTA  WhatsApp chat. */
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

/** Navbar brand mark (public path). */
export const LOGO_SVG = '/assets/svgs/joby_logo.svg'
