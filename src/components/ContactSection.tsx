import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { CONTACT } from '../config/site'

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
)

const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TiktokIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const socialLinks = [
  {
    label: 'Instagram',
    href: CONTACT.instagram,
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: CONTACT.facebook,
    icon: FacebookIcon,
  },
  {
    label: 'LinkedIn',
    href: CONTACT.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'TikTok',
    href: CONTACT.tiktok,
    icon: TiktokIcon,
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
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.a>
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
