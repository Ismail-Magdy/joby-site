import { motion } from 'framer-motion'
import { COMPANY_FEATURES } from '../data/mockups'
import { FeatureCard } from './FeatureCard'
import { featureCardItemVariants } from './featureMotion'
import {
  featureHeadingVariants,
  featureListVariants,
} from './featureSectionMotion'
import { TiltScreenshot } from './TiltScreenshot'

export function CompanyFeaturesSection() {
  const { profiles, pipeline, clarity } = COMPANY_FEATURES

  return (
    <section
      id="company-features"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
      aria-labelledby="company-features-heading"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={featureHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2
            id="company-features-heading"
            className="font-heading text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl"
          >
            Powering Forward-Thinking Companies
          </h2>
          <p className="mt-3 font-sans text-lg text-slate-600">
            Discover qualified candidates, review rich profiles, and keep your
            hiring pipeline organized in one focused workspace.
          </p>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={featureListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FeatureCard
            variants={featureCardItemVariants}
            title={profiles.title}
            eyebrow={profiles.eyebrow}
            description={profiles.description}
          >
            {profiles.screens.map((screen) => (
              <TiltScreenshot
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                caption={screen.caption}
              />
            ))}
          </FeatureCard>

          <FeatureCard
            variants={featureCardItemVariants}
            title={pipeline.title}
            eyebrow={pipeline.eyebrow}
            reverse
            description={pipeline.description}
          >
            {pipeline.screens.map((screen) => (
              <TiltScreenshot
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                caption={screen.caption}
              />
            ))}
          </FeatureCard>

          <FeatureCard
            variants={featureCardItemVariants}
            title={clarity.title}
            eyebrow={clarity.eyebrow}
            description={clarity.description}
          >
            {clarity.screens.map((screen) => (
              <TiltScreenshot
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                caption={screen.caption}
              />
            ))}
          </FeatureCard>
        </motion.div>
      </div>
    </section>
  )
}
