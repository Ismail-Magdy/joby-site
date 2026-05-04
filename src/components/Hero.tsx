import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { assetPath, HERO_SCREENSHOTS, WHATSAPP_BETA_URL } from '../config/site'
import { AnimatedPhone } from './AnimatedPhone'
import { Button } from './Button'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <h1 className="font-heading text-balance text-4xl font-normal tracking-wide text-slate-900 sm:text-5xl lg:text-6xl">
            Career Moves Made Easy, Smart, and Rewarding.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty font-sans text-lg text-slate-600 lg:mx-0">
            The first gamified recruitment app in the MENA region that rewards
            your job hunt.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Button
              href={WHATSAPP_BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="!py-3 !text-base"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden />
              Get Beta on WhatsApp
            </Button>
            <Button href="#features" variant="secondary" className="!py-3 !text-base">
              Explore Features
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[280px] items-end justify-center gap-4 sm:min-h-[340px] sm:gap-6 lg:min-h-[400px]"
        >
          {!reduceMotion ? (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[42%] z-0 size-[min(100vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[72px]"
              animate={{
                scale: [1, 1.14, 1],
                opacity: [0.32, 0.58, 0.32],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ) : (
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[42%] z-0 size-[min(100vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[72px] opacity-45"
            />
          )}

          <div className="relative z-10 w-[46%] max-w-[220px] sm:w-[42%]">
            <AnimatedPhone
              src={assetPath(HERO_SCREENSHOTS[0])}
              alt="Joby app screen preview one"
              delay={0}
            />
          </div>
          <div className="relative z-10 w-[46%] max-w-[220px] -translate-y-6 sm:w-[42%] sm:-translate-y-8">
            <AnimatedPhone
              src={assetPath(HERO_SCREENSHOTS[1])}
              alt="Joby app screen preview two"
              delay={0.55}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
