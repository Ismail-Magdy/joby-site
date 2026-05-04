import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { assetPath, HERO_SCREENSHOTS, TELEGRAM_URL } from '../config/site'
import { AnimatedPhone } from './AnimatedPhone'
import { Button } from './Button'

export function Hero() {
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
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Career Moves Made Easy, Smart, and Rewarding.{' '}
            <span className="inline-block" aria-hidden>
              🚀
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-slate-600 lg:mx-0">
            The first gamified recruitment app in the MENA region that rewards
            your job hunt.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Button
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="!py-3 !text-base"
            >
              <Send className="size-5 shrink-0" aria-hidden />
              Join Telegram Community
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
          <div className="relative z-10 w-[46%] max-w-[220px] sm:w-[42%]">
            <AnimatedPhone
              src={assetPath(HERO_SCREENSHOTS[0])}
              alt="Joby app screen preview one"
              delay={0}
            />
          </div>
          <div className="relative z-0 w-[46%] max-w-[220px] -translate-y-6 sm:w-[42%] sm:-translate-y-8">
            <AnimatedPhone
              src={assetPath(HERO_SCREENSHOTS[1])}
              alt="Joby app screen preview two"
              delay={0.45}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
