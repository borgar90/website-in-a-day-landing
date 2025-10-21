"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import TimelineSection from '@/components/TimelineSection'
import ExamplesSection from '@/components/ExamplesSection'
import PricingSection from '@/components/PricingSection'
import BookingSection from '@/components/BookingSection'
import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <TimelineSection />
        <ExamplesSection />
        <PricingSection />
        <BookingSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
