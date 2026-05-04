import { AboutSection } from './AboutSection'
import { CompanyFeaturesSection } from './CompanyFeaturesSection'
import { ContactSection } from './ContactSection'
import { FeaturesSection } from './FeaturesSection'
import { FooterCta } from './FooterCta'
import { Hero } from './Hero'
import { ImageMarquee } from './ImageMarquee'
import { Navbar } from './Navbar'
import { ParticleTrail } from './ParticleTrail'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <ParticleTrail />
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <CompanyFeaturesSection />
        <ImageMarquee />
        <AboutSection />
        <ContactSection />
        <FooterCta />
      </main>
    </div>
  )
}
