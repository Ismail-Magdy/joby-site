import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  Music2,
  Phone,
  UsersRound,
} from 'lucide-react'
import { CONTACT } from '../config/site'

const socialLinks = [
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

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-8 shadow-sm sm:p-10"
        >
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-2 max-w-2xl font-sans text-slate-600">
            Reach the Joby team directly or follow our channels for updates and
            early access.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <a
              href={CONTACT.phoneTel}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-sans text-slate-800 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </a>
            <a
              href={CONTACT.emailMailto}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-sans text-slate-800 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="truncate text-base font-semibold text-slate-900 sm:text-lg">
                  {CONTACT.email}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-8 border-t border-slate-200/90 pt-8">
            <p className="font-heading text-sm font-normal uppercase tracking-[0.2em] text-slate-500">
              Social
            </p>
            <nav
              className="mt-4 flex flex-wrap gap-3"
              aria-label="Social media"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="size-5" aria-hidden />
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
