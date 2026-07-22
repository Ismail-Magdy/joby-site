import { motion } from 'framer-motion'


export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-100 bg-slate-50 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2
            id="about-heading"
            className="font-heading text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl"
          >
            About Joby
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16"
        >
          <div className="flex flex-col text-center md:text-left">
            <h3 className="font-heading text-xl text-slate-900 mb-4">For Job Seekers</h3>
            <p className="font-sans text-lg leading-relaxed text-slate-600">
              We provide the clarity and momentum you need to stand out. Through thoughtful UX and light touch gamification, we ensure fair recognition for your efforts, making the hiring process less of a grind and more about progress you can see.
            </p>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h3 className="font-heading text-xl text-slate-900 mb-4">For Companies</h3>
            <p className="font-sans text-lg leading-relaxed text-slate-600">
              Discover verified talent efficiently with our advanced platform. We streamline your hiring workflow through smart matching, enabling you to build the best teams without the noise of traditional recruitment channels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
