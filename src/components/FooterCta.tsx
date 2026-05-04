import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Camera,
  MessageCircle,
  Music2,
  UsersRound,
} from 'lucide-react'
import { CONTACT, WHATSAPP_BETA_URL } from '../config/site'
import { GlowButton } from './GlowButton'

const footerSocial = [
  {
    label: 'Instagram',
    href: CONTACT.instagram,
    icon: Camera,
  },
  {
    label: 'Facebook',
    href: CONTACT.facebook,
    icon: UsersRound,
  },
  {
    label: 'LinkedIn',
    href: CONTACT.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: 'TikTok',
    href: CONTACT.tiktok,
    icon: Music2,
  },
] as const

export function FooterCta() {
  return (
    <footer className="bg-slate-900 font-sans text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl font-normal tracking-wide text-white sm:text-4xl">
            Ready to Level Up Your Career?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Join our early-access community today and be the first to experience
            the future of hiring.
          </p>
          <div className="mt-10 flex justify-center">
            <GlowButton
              href={WHATSAPP_BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden />
              Join Beta on WhatsApp
            </GlowButton>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Joby. All rights reserved.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              <a
                href={CONTACT.phoneTel}
                className="hover:text-slate-300"
              >
                {CONTACT.phoneDisplay}
              </a>
              <span className="mx-2 text-slate-600" aria-hidden>
                ·
              </span>
              <a
                href={CONTACT.emailMailto}
                className="hover:text-slate-300"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
          <nav className="flex items-center gap-3" aria-label="Social">
            {footerSocial.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="size-5" aria-hidden />
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
