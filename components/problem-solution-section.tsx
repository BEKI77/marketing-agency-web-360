"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const AlertTriangle = () => (
  <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
)

const CheckCircle = () => (
  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
            Utopia Marketing Solution — Our Story
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Our Story and Vision
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Our journey began with a simple but powerful observation — the digital gap between Ethiopia and the
            rest of the world. While technology and innovation were rapidly transforming how businesses operate
            globally, many local industries were still deeply tied to traditional marketing and business practices.
          </p>
        </div>

        {/* Story & Vision Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Story Column */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">How We Started</h3>
            <p className="text-white/80 text-sm sm:text-base mb-4 leading-relaxed">
              We saw the gap not as a weakness, but as an opportunity — an opportunity to bridge tradition with
              transformation. At Utopia Marketing Solution, we were founded with a vision to take an active role in
              Ethiopia’s digital transformation.
            </p>
            <p className="text-white/80 text-sm sm:text-base mb-4 leading-relaxed">
              We believe in progress that respects our roots, combining the power of modern digital systems with the
              depth and connection of traditional marketing. We started as a marketing company helping brands grow,
              connect, and communicate through both digital and offline strategies.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              For us, “Utopia” represents more than a name — it’s our belief in creating a better, smarter, and more
              connected business world in Ethiopia. Step by step, campaign by campaign, system by system, we’re working
              to make that vision real.
            </p>
          </div>

          {/* Vision Column */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20">
                <CheckCircle />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-400">Our Vision</h3>
            </div>

            <p className="text-white/80 text-sm sm:text-base mb-4 leading-relaxed">
              Our long-term vision is to expand beyond marketing — to build digital systems that empower businesses,
              streamline operations, and modernize how organizations work across every level.
            </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <CheckCircle />
                <p className="text-white/70 text-sm sm:text-base">Combine modern systems with traditional marketing</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle />
                <p className="text-white/70 text-sm sm:text-base">Empower local businesses with scalable digital tools</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle />
                <p className="text-white/70 text-sm sm:text-base">Drive sustainable digital transformation across Ethiopia</p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
              >
                Learn Our Work
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className={`text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            This is just the beginning. We are committed to building practical digital solutions that respect culture and
            deliver measurable impact for Ethiopian businesses.
          </p>
        </div>
      </div>
    </section>
  )
}
