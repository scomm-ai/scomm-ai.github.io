"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      description: "Perfect for personal use",
      features: [
        "End-to-end encryption",
        "On-device AI search",
        "Offline mode",
        "Peer-to-peer file transfer",
        "Basic spam filtering",
        "Local storage only"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For power users and professionals",
      features: [
        "Everything in Free",
        "Live email updates",
        "Zero-day anti-phishing",
        "Community AI spam filter",
        "Cloud storage options",
        "Priority support",
        "Advanced audit trails"
      ],
      buttonText: "Upgrade to Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management",
        "Centralized administration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Custom deployment options"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Push Notification",
      price: "$3/year",
      description: "Receive instant notifications for new or updated emails across all devices — no need to press 'Send/Receive' manually.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      name: "Zero-Day Anti-Phishing",
      price: "3u.gg",
      description: "Stay protected from the latest phishing attacks with real-time threat detection.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: "Community AI Spam Filter",
      price: "Included",
      description: "Smarter, continuously learning protection powered by the community.",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FA] to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-0">
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#2C8DA1] mb-2 sm:mb-3 uppercase tracking-wide">
                ADD-ONS
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023347] mb-2 sm:mb-3 leading-tight">
                              Enhance your experience with add-ons. 
              </h1>
            
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {plans.map((plan, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
                <div className={`bg-white border-2 rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col ${
                  plan.popular 
                    ? 'border-[#2C8DA1] shadow-xl relative' 
                    : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#2C8DA1] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#023347]">
                          {plan.price}
                        </span>
                        {plan.price !== "Custom" && (
                          <span className="text-sm sm:text-base text-gray-600">
                            /{plan.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#2C8DA1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full px-6 py-3 sm:py-3.5 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-[#2C8DA1] hover:bg-[#257a8d] text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-2 border-gray-200'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4">
                Pro Add-ons
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your scomm.ai experience with these optional add-ons
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {addOns.map((addOn, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={100 + (index * 100)}>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#2C8DA1]/10 flex items-center justify-center mb-4 sm:mb-6">
                    {addOn.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    {addOn.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#2C8DA1] mb-4">
                    {addOn.price}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                    {addOn.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#023347] mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6 sm:space-y-8">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  Can I switch plans later?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  The Free plan is available forever with no trial period needed. Pro features can be tested with a 14-day free trial.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-[#F5F9FA] rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We accept all major credit cards, PayPal, and for Enterprise plans, we can arrange invoicing.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

