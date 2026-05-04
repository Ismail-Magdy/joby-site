import { motion } from 'framer-motion'
import { FeatureCard } from './FeatureCard'
import { featureCardItemVariants } from './featureMotion'
import {
  featureHeadingVariants,
  featureListVariants,
} from './featureSectionMotion'
import { PlaceholderPhoneMockup } from './PlaceholderPhoneMockup'

export function CompanyFeaturesSection() {
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
            title="Rich Candidate Profiles"
            eyebrow="Talent"
            description="Browse structured profiles with CVs, locations, and social context so you can shortlist faster and interview with confidence."
          >
            <PlaceholderPhoneMockup label="Company candidate profile preview placeholder" />
            <PlaceholderPhoneMockup label="Company candidate insights preview placeholder" />
          </FeatureCard>

          <FeatureCard
            variants={featureCardItemVariants}
            title="Pipeline & Engagement"
            eyebrow="Hiring"
            reverse
            description="Track applicants through stages, see engagement signals, and keep momentum on roles that matter , without losing context in spreadsheets."
          >
            <PlaceholderPhoneMockup label="Company pipeline preview placeholder" />
            <PlaceholderPhoneMockup label="Company engagement metrics preview placeholder" />
          </FeatureCard>

          <FeatureCard
            variants={featureCardItemVariants}
            title="Operational Clarity"
            eyebrow="Control"
            description="A calm dashboard for roles, settings, and day-to-day hiring tasks , designed to stay usable when volume spikes or teams collaborate."
          >
            <PlaceholderPhoneMockup label="Company dashboard preview placeholder" />
            <PlaceholderPhoneMockup label="Company settings preview placeholder" />
          </FeatureCard>
        </motion.div>
      </div>
    </section>
  )
}
