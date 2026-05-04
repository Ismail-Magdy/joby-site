import { motion } from 'framer-motion'
import { JOB_SEEKER_FEATURE_IMAGES } from '../config/site'
import { FeatureCard } from './FeatureCard'
import { featureCardItemVariants } from './featureMotion'
import {
  featureHeadingVariants,
  featureListVariants,
} from './featureSectionMotion'
import { TiltScreenshot } from './TiltScreenshot'

export function FeaturesSection() {
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
            Profiles, rewards, and a calm experience , even when the network
            disagrees.
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
            title="Smart Profiles"
            eyebrow="Feature"
            description="Add your location, upload your CV, and connect social links so employers see the full picture , fast, structured, and ready to share."
          >
            <TiltScreenshot
              src={JOB_SEEKER_FEATURE_IMAGES.profiles[0]}
              alt="Joby profile screen"
            />
            <TiltScreenshot
              src={JOB_SEEKER_FEATURE_IMAGES.profiles[1]}
              alt="Joby location screen"
            />
          </FeatureCard>

          <FeatureCard
            id="gamification"
            variants={featureCardItemVariants}
            title="Gamified Experience"
            eyebrow="Core USP"
            reverse
            description="Daily check-ins and point rewards keep momentum high. Small wins (+10 points and more) turn your job hunt into a streak you actually want to maintain."
          >
            <TiltScreenshot
              src={JOB_SEEKER_FEATURE_IMAGES.gamification[0]}
              alt="Joby points and rewards"
            />
            <TiltScreenshot
              src={JOB_SEEKER_FEATURE_IMAGES.gamification[1]}
              alt="Joby achievement and alerts"
            />
          </FeatureCard>

          <FeatureCard
            variants={featureCardItemVariants}
            title="Seamless UX & Offline Mode"
            eyebrow="Reliability"
            description="A clean interface with thoughtful error handling , including a friendly offline state , so the app stays approachable even when connectivity drops."
          >
            <TiltScreenshot
              src={JOB_SEEKER_FEATURE_IMAGES.seamless[0]}
              alt="Joby settings screen"
            />
            <TiltScreenshot
              src="/assets/common/off_line.jpeg"
              alt="Joby offline mode"
            />
          </FeatureCard>
        </motion.div>
      </div>
    </section>
  )
}
