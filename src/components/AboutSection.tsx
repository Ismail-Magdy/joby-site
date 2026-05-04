import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-100 bg-slate-50 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="size-6" aria-hidden />
          </div>
          <h2
            id="about-heading"
            className="font-heading text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl"
          >
            About Joby
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
            Joby is built for job seekers in MENA who want clarity, momentum, and
            fair recognition for the effort they put in. We combine thoughtful UX
            with light-touch gamification so hiring feels less like a grind — and
            more like progress you can see.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
