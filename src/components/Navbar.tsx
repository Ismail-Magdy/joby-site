import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { LOGO_SVG, WHATSAPP_BETA_URL } from '../config/site'
import { Button } from './Button'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Gamification', href: '#gamification' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 font-sans backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex shrink-0 items-center py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <img
            src={LOGO_SVG}
            alt="Joby"
            className="h-7 w-auto max-h-9 max-w-[min(180px,46vw)] object-contain object-left sm:h-8"
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button
            href={WHATSAPP_BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-4 !py-2 !text-sm"
          >
            Join Beta
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            href={WHATSAPP_BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-3 !py-2 !text-xs"
          >
            Join Beta
          </Button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-800 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
