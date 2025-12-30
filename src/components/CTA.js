"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* CTA Card */}
        <AnimateOnScroll animation="scaleIn" delay={0}>
          <div className="bg-[#023347] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 shadow-2xl relative overflow-hidden transform transition-smooth hover:shadow-3xl">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Text Content */}
                <AnimateOnScroll animation="fadeInLeft" delay={200}>
                  <div>
                    {/* Label */}
                    <div className="mb-4 sm:mb-6">
                      <span className="text-xs sm:text-sm font-medium text-[#2C8DA1] bg-[#2C8DA1]/20 px-4 py-2 rounded-full">
                        TRY IT NOW
                      </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                      Ready to level up your email security?
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                      scomm.ai supports individuals and businesses with end-to-end encryption, on-device AI search, and complete control over where your data is stored.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* Right Side - CTA Buttons */}
                <AnimateOnScroll animation="fadeInRight" delay={300}>
                  <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-4 items-center justify-start lg:justify-end">
                    <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold text-xs sm:text-sm lg:text-base rounded-lg transition-colors shadow-lg hover:shadow-xl whitespace-nowrap transform transition-smooth hover:scale-105">
                      Get Started Now
                    </button>
                    <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-xs sm:text-sm lg:text-base rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap transform transition-smooth hover:scale-105">
                      Learn More
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

