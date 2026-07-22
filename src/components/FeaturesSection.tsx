import { motion } from 'framer-motion'
import { JOB_SEEKER_FEATURES } from '../data/mockups'
import { FeatureCard } from './FeatureCard'
import { featureCardItemVariants } from './featureMotion'
import {
  featureHeadingVariants,
  featureListVariants,
} from './featureSectionMotion'
import { TiltScreenshot } from './TiltScreenshot'

export function FeaturesSection() {
  const { profiles, gamification, seamless } = JOB_SEEKER_FEATURES

  return (
    <section
      id="features"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
      aria-labelledby="features-heading"
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
            id="features-heading"
            className="font-heading text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl"
          >
            Built for Ambitious Talent (Job Seekers)
          </h2>
          <p className="mt-3 font-sans text-lg text-slate-600">
            Profiles, rewards, and a calm experience&nbsp; even when the
            network disagrees.
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
              />
            ))}
          </FeatureCard>

          <FeatureCard
            id="gamification"
            variants={featureCardItemVariants}
            title={gamification.title}
            eyebrow={gamification.eyebrow}
            reverse
            description={gamification.description}
          >
            {gamification.screens.map((screen) => (
              <TiltScreenshot
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
              />
            ))}
          </FeatureCard>

          <FeatureCard
            variants={featureCardItemVariants}
            title={seamless.title}
            eyebrow={seamless.eyebrow}
            description={seamless.description}
          >
            {seamless.screens.map((screen) => (
              <TiltScreenshot
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
              />
            ))}
          </FeatureCard>
        </motion.div>
      </div>
    </section>
  )
}
