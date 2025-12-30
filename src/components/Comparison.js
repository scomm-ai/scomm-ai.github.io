"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Comparison() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F9FA] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C8DA1]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#023347]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#023347] mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              How scomm.ai Compares to Other Email Services.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Comparison Table */}
        <AnimateOnScroll animation="scaleIn" delay={200}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform transition-smooth hover:shadow-3xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-left text-xs sm:text-sm lg:text-base font-semibold text-gray-700 bg-gray-50 border-b-2 border-gray-200">
                    Feature
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base font-semibold text-gray-700 bg-gray-50 border-b-2 border-gray-200">
                    ProtonMail
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base font-semibold text-gray-700 bg-gray-50 border-b-2 border-gray-200">
                    New Outlook
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center text-xs sm:text-sm lg:text-base font-semibold text-white bg-[#2C8DA1] border-b-2 border-[#2C8DA1] relative">
                    scomm.ai
                    <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 lg:top-1.5 lg:right-1.5 bg-white text-[#2C8DA1] text-[10px] sm:text-xs lg:text-sm font-bold px-1 sm:px-2 lg:px-3 py-0.5 lg:py-1 rounded-full">BEST</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Row 1 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    Use existing Gmail/Outlook
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-green-100">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 mt-0.5 sm:mt-1 max-w-[100px] sm:max-w-[120px] lg:max-w-[140px]">(but stores on MS Cloud)</p>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="flex flex-col items-center gap-1">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-[#2C8DA1] font-medium mt-0.5 sm:mt-1 max-w-[100px] sm:max-w-[120px] lg:max-w-[140px]">(local or hybrid)</p>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    Stores emails locally
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    End-to-End Encryption
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-green-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    On-device AI Search
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    Customizable Themes
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-green-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    Offline Mode
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="inline-flex items-center justify-center px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 lg:py-1.5 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold bg-yellow-100 text-yellow-700">
                        Limited
                      </span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                </tr>

                {/* Row 7 */}
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                    Peer-to-Peer File Transfer
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-red-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 text-center bg-[#2C8DA1]/5">
                    <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2C8DA1] shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

