import { motion } from 'framer-motion'
import { Send, Share2, X } from 'lucide-react'
import { TELEGRAM_URL } from '../config/site'
import { GlowButton } from './GlowButton'

const social = [
  {
    label: 'Telegram',
    href: TELEGRAM_URL,
    icon: Send,
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: X,
  },
  {
    label: 'More',
    href: 'https://example.com',
    icon: Share2,
  },
] as const

export function FooterCta() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Level Up Your Career?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Join our early-access community today and be the first to experience
            the future of hiring.
          </p>
          <div className="mt-10 flex justify-center">
            <GlowButton
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="size-5" aria-hidden />
              Join Telegram
            </GlowButton>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Joby. All rights reserved.
          </p>
          <nav className="flex items-center gap-3" aria-label="Social">
            {social.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={label}
              >
                <Icon className="size-5" aria-hidden />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
