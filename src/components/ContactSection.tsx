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
    hoverColor: 'group-hover:text-[#E1306C] group-hover:border-[#E1306C]',
  },
  {
    label: 'Facebook',
    href: CONTACT.facebook,
    icon: FacebookIcon,
    hoverColor: 'group-hover:text-[#1877F2] group-hover:border-[#1877F2]',
  },
  {
    label: 'LinkedIn',
    href: CONTACT.linkedin,
    icon: LinkedinIcon,
    hoverColor: 'group-hover:text-[#0A66C2] group-hover:border-[#0A66C2]',
  },
  {
    label: 'TikTok',
    href: CONTACT.tiktok,
    icon: TiktokIcon,
    hoverColor: 'group-hover:text-black group-hover:border-black',
  },
] as const

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-white py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-gradient-to-br from-white via-white to-slate-50/80 p-8 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.06)] sm:p-14"
        >
          {/* Subtle glowing background orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-400/10 blur-[80px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left side: Heading */}
            <div>
              <span className="inline-block rounded-full bg-primary/8 px-3.5 py-1 font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Reach Out
              </span>
              <h2
                id="contact-heading"
                className="mt-4 font-heading text-4xl font-normal tracking-wide text-slate-900 sm:text-5xl"
              >
                Let's connect.
              </h2>
              <p className="mt-4 max-w-md font-sans text-lg text-slate-600">
                Have questions or need support? Reach the Joby team directly or
                follow our channels for the latest updates and early access.
              </p>

              {/* Social icons moved to left column on desktop */}
              <div className="mt-10 lg:mt-12">
                <p className="font-heading text-xs font-normal uppercase tracking-[0.2em] text-slate-400">
                  Follow Us
                </p>
                <nav
                  className="mt-4 flex flex-wrap gap-4"
                  aria-label="Social media"
                >
                  {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`group flex size-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors duration-300 ${hoverColor}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right side: Contact Cards */}
            <div className="flex flex-col gap-4">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href={CONTACT.phoneTel}
                className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-7"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <Phone className="size-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="relative">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-primary/70">
                    Phone
                  </p>
                  <p className="mt-1 font-sans text-lg font-medium text-slate-900 sm:text-xl">
                    {CONTACT.phoneDisplay}
                  </p>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href={CONTACT.emailMailto}
                className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-7"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <Mail className="size-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="relative min-w-0">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-primary/70">
                    Email
                  </p>
                  <p className="mt-1 truncate font-sans text-base font-medium text-slate-900 sm:text-lg">
                    {CONTACT.email}
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
