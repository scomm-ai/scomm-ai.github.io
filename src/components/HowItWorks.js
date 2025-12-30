"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Download scomm.ai for your device (Windows, Mac, Linux, Android, iOS, or Web). Installation takes just a few minutes.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Connect Your Email",
      description: "Link your existing Gmail, Outlook, or Hotmail account. No migration needed — your emails stay where they are.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Automatic Encryption",
      description: "scomm.ai automatically encrypts all your emails with end-to-end encryption. Your messages are protected before they leave your device.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Choose Storage Location",
      description: "Decide where your encrypted emails are stored: locally on your device, in your cloud (S3, Google Cloud), or both for redundancy.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "AI-Powered Search",
      description: "Search through 50,000+ emails instantly with on-device AI. All indexing happens locally — your data never leaves your device.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Send & Receive Securely",
      description: "Compose and send encrypted emails. Recipients with scomm.ai get automatic decryption. Others receive instructions to view securely.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 lg:mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-4 sm:mb-6 leading-tight px-2">
              Get Started in 6 Simple Steps
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              scomm.ai integrates seamlessly with your existing email accounts. No migration, no hassle — just enhanced security and privacy.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
              <div className="relative bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 bg-[#2C8DA1] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-6">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimateOnScroll animation="fadeInUp" delay={700}>
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="bg-[#F5F9FA] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-200">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#023347] mb-4 sm:mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Download scomm.ai today and start protecting your emails with end-to-end encryption. No migration required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-semibold rounded-lg transition-smooth shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
                  Download Now
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#2C8DA1] text-[#2C8DA1] hover:bg-[#2C8DA1] hover:text-white font-semibold rounded-lg transition-smooth transform hover:scale-105 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

