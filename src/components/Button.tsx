import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

const variants = {
  primary: `${base} bg-primary text-white hover:bg-primary-hover`,
  secondary: `${base} border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50`,
  ghost: `${base} text-slate-700 hover:bg-slate-100`,
} as const

type Variant = keyof typeof variants

type AnchorFields = Pick<
  ComponentPropsWithoutRef<'a'>,
  | 'href'
  | 'target'
  | 'rel'
  | 'download'
  | 'onClick'
  | 'id'
  | 'aria-label'
  | 'tabIndex'
>

type ButtonFields = Pick<
  ComponentPropsWithoutRef<'button'>,
  'type' | 'onClick' | 'disabled' | 'id' | 'aria-label' | 'tabIndex' | 'form'
>

type ButtonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
} & ({ href: string } & AnchorFields | { href?: undefined } & ButtonFields)

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = `${variants[variant]} ${className}`.trim()

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, target, rel, download, onClick, id, 'aria-label': ariaLabel, tabIndex } =
      rest
    return (
      <motion.span
        className="inline-flex max-w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          onClick={onClick}
          id={id}
          aria-label={ariaLabel}
          tabIndex={tabIndex}
          className={cls}
        >
          {children}
        </a>
      </motion.span>
    )
  }

  const {
    type = 'button',
    onClick,
    disabled,
    id,
    'aria-label': ariaLabel,
    tabIndex,
    form,
  } = rest as ButtonFields

  return (
    <motion.span
      className="inline-flex max-w-full"
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        id={id}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        form={form}
        className={cls}
      >
        {children}
      </button>
    </motion.span>
  )
}
