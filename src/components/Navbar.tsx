import { LOGO_SVG, WHATSAPP_BETA_URL } from '../config/site'
import { Button } from './Button'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Gamification', href: '#gamification' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
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

        {/* Mobile: Just the CTA, no hamburger menu since we have a bottom nav */}
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
        </div>
      </div>
    </header>
  )
}
