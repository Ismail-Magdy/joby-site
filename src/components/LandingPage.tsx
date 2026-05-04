import { AboutSection } from './AboutSection'
import { FeaturesSection } from './FeaturesSection'
import { FooterCta } from './FooterCta'
import { Hero } from './Hero'
import { ImageMarquee } from './ImageMarquee'
import { Navbar } from './Navbar'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <ImageMarquee />
        <AboutSection />
        <FooterCta />
      </main>
    </div>
  )
}
