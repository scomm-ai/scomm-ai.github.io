"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function BackupSecurity() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <div className="inline-block mb-2 sm:mb-3 lg:mb-4">
              <span className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] bg-[#2C8DA1]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                BACKUP & SECURITY SECTION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              Security You Control.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {/* Feature 1: Encrypted Backups */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="group relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:border-[#2C8DA1]/30 transition-all duration-300 hover:-translate-y-2 transform transition-smooth hover:scale-105">
            <div className="absolute inset-0 bg-[#2C8DA1]/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#2C8DA1] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-2 sm:mb-3 group-hover:text-[#2C8DA1] transition-colors">
                Encrypted Backups
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Fully encrypted backups to your preferred storage — AWS S3, Google Cloud, or local drives.
              </p>
            </div>
          </div>
          </AnimateOnScroll>

          {/* Feature 2: Audit Trails */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="group relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:border-[#2C8DA1]/30 transition-all duration-300 hover:-translate-y-2 transform transition-smooth hover:scale-105">
            <div className="absolute inset-0 bg-[#2C8DA1]/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#2C8DA1] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-2 sm:mb-3 group-hover:text-[#2C8DA1] transition-colors">
                Audit Trails
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Detailed history logs for full audit trails.
              </p>
            </div>
          </div>
          </AnimateOnScroll>

          {/* Feature 3: Peer-to-Peer Transfer */}
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className="group relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:border-[#2C8DA1]/30 transition-all duration-300 hover:-translate-y-2 transform transition-smooth hover:scale-105">
            <div className="absolute inset-0 bg-[#2C8DA1]/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#2C8DA1] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-2 sm:mb-3 group-hover:text-[#2C8DA1] transition-colors">
                Peer-to-Peer Transfer
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Peer-to-peer data transfers — no intermediary servers.
              </p>
            </div>
          </div>
          </AnimateOnScroll>

          {/* Feature 4: Presence Info */}
          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <div className="group relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:border-[#2C8DA1]/30 transition-all duration-300 hover:-translate-y-2 transform transition-smooth hover:scale-105">
            <div className="absolute inset-0 bg-[#2C8DA1]/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#2C8DA1] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#023347] mb-2 sm:mb-3 group-hover:text-[#2C8DA1] transition-colors">
                Presence Info
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Optional presence info: see when trusted contacts are online.
              </p>
            </div>
          </div>
          </AnimateOnScroll>
        </div>

        {/* Closing Statement */}
        <AnimateOnScroll animation="fadeInUp" delay={500}>
          <div className="text-center relative">
            <div className="inline-block bg-[#2C8DA1]/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-12 py-4 sm:py-5 lg:py-8 border border-[#2C8DA1]/20 transform transition-smooth hover:scale-105">
              <p className="text-sm sm:text-base lg:text-xl text-[#023347] font-semibold max-w-3xl mx-auto leading-relaxed px-2">
                With scomm.ai, you're not just protected — <span className="text-[#2C8DA1]">you're in control.</span>
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

