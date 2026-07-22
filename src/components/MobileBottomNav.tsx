import { LayoutDashboard, Gamepad2, Info, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Features', href: '#features', icon: LayoutDashboard },
  { label: 'Gamification', href: '#gamification', icon: Gamepad2 },
  { label: 'About Us', href: '#about', icon: Info },
  { label: 'Contact', href: '#contact', icon: Mail },
] as const

export function MobileBottomNav() {
  const [activeId, setActiveId] = useState<string>('')

  // Optional: Simple intersection observer to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    navItems.forEach((item) => {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:hidden">
      <nav
        className="flex items-center gap-1 rounded-full border border-white/20 bg-white/70 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        aria-label="Mobile Bottom Navigation"
      >
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = activeId === href
          return (
            <a
              key={href}
              href={href}
              className={`flex min-w-[72px] flex-col items-center justify-center gap-1 rounded-full px-3 py-2 transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-800'
              }`}
            >
              <Icon className="size-[22px]" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-semibold tracking-wide">
                {label}
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
