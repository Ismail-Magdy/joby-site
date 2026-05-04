import { assetPath, FEATURE_SCREENSHOTS } from '../config/site'
import { FeatureCard } from './FeatureCard'
import { TiltScreenshot } from './TiltScreenshot'

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for ambitious talent
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Profiles, rewards, and a calm experience — even when the network
            disagrees.
          </p>
        </div>

        <div className="space-y-10">
          <FeatureCard
            title="Smart Profiles"
            eyebrow="Feature"
            description="Add your location, upload your CV, and connect social links so employers see the full picture — fast, structured, and ready to share."
          >
            <TiltScreenshot
              src={assetPath(FEATURE_SCREENSHOTS.profiles[0])}
              alt="Joby profile screen"
            />
            <TiltScreenshot
              src={assetPath(FEATURE_SCREENSHOTS.profiles[1])}
              alt="Joby map or location screen"
            />
          </FeatureCard>

          <FeatureCard
            id="gamification"
            title="Gamified Experience"
            eyebrow="Core USP"
            reverse
            description="Daily check-ins and point rewards keep momentum high. Small wins (+10 points and more) turn your job hunt into a streak you actually want to maintain."
          >
            <TiltScreenshot
              src={assetPath(FEATURE_SCREENSHOTS.gamification[0])}
              alt="Joby points and rewards"
            />
            <TiltScreenshot
              src={assetPath(FEATURE_SCREENSHOTS.gamification[1])}
              alt="Joby gamification alerts"
            />
          </FeatureCard>

          <FeatureCard
            title="Seamless UX & Offline Support"
            eyebrow="Reliability"
            description="A clean interface with thoughtful error handling — including a friendly offline state — so the app stays approachable even when connectivity drops."
          >
            <TiltScreenshot
              src={assetPath(FEATURE_SCREENSHOTS.offline[0])}
              alt="Joby offline screen"
            />
            <TiltScreenshot
              src={assetPath(FEATURE_SCREENSHOTS.offline[1])}
              alt="Joby settings screen"
            />
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
