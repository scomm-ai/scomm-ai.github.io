"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function ProFeatures() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 lg:mb-4">
              PAID ADD-ONS & PRO FEATURES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              Enhance Your Inbox.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12 lg:mb-16 items-stretch">
          {/* Feature 1: Live Updates */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Live Updates
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                $3/year
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto">
              Receive instant notifications for new or updated emails across all devices — no need to press "Send/Receive" manually.
            </p>
          </div>
          </AnimateOnScroll>

          {/* Feature 2: Zero-Day Anti-Phishing */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Zero-Day Anti-Phishing Services
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3">
                3u.gg
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto">
              Stay protected from the latest phishing attacks.
            </p>
          </div>
          </AnimateOnScroll>

          {/* Feature 3: Community-Based AI Spam Filter */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow transform transition-smooth hover:scale-105 h-full flex flex-col">
            <div className="mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#023347] mb-1.5 sm:mb-2">
                Community-Based AI Spam Filter
              </h3>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mt-auto">
              Smarter, continuously learning protection powered by the community.
            </p>
          </div>
          </AnimateOnScroll>
        </div>

        {/* CTA Button */}
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <div className="text-center">
            <button className="px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 lg:py-5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold text-sm sm:text-base lg:text-xl rounded-lg transition-colors shadow-md hover:shadow-lg transform transition-smooth hover:scale-105">
              Upgrade to Pro
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

