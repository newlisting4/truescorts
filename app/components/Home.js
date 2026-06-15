"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import { columnsData } from "../config/statesData";

export default function Home({ adminId, posterId }) {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSignInClick = () => {
    setIsLoginMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setIsLoginMode(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans select-none">
      {/* Header */}
      <Header 
        onSignInClick={handleSignInClick} 
        onCreateAccountClick={handleSignInClick}
        onAddListingClick={handleSignInClick}
        onLogoClick={handleLogoClick}
      />

      {isLoginMode ? (
        /* Login Screen View */
        <main className="flex-grow flex items-center justify-center py-16 px-4 bg-black">
          <LoginForm adminId={adminId} posterId={posterId} />
        </main>
      ) : (
        /* Directory Home Screen View */
        <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
          {/* Subtitle */}
          <p className="text-center text-zinc-400 text-sm md:text-base font-medium mb-6">
            Verified Independent Escorts — Browse by City
          </p>

          {/* Intro Box */}
          <div className="max-w-3xl mx-auto bg-[#0b0b0b] border border-zinc-800 rounded-lg p-6 mb-12 text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
              Browse Verified Independent Companions by State and City
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              Explore city pages across the United States through a clean, viewable directory structure built for users and search engines.
            </p>
          </div>

          {/* Directory Column Grid (masonry style 5 columns on large screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {columnsData.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-4">
                {column.map((stateItem, stateIdx) => (
                  <div 
                    key={stateIdx} 
                    className="bg-[#0b0b0b] border border-zinc-900 rounded-lg p-4 flex flex-col gap-3"
                  >
                    {/* State Name */}
                    <div className="border-b border-zinc-800 pb-1.5">
                      <h3 className="text-sm font-semibold tracking-wider text-zinc-300 uppercase">
                        {stateItem.state}
                      </h3>
                    </div>
                    {/* Cities */}
                    {stateItem.cities.length > 0 ? (
                      <ul className="flex flex-col gap-1.5">
                        {stateItem.cities.map((city, cityIdx) => (
                          <li key={cityIdx}>
                            <button
                              onClick={handleSignInClick}
                              className="text-[#fbc02d] hover:text-[#f57f17] text-xs font-medium text-left transition-colors cursor-pointer w-full hover:underline"
                            >
                              {city}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-zinc-600 text-xs italic">No cities listed</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* SEO Content Section */}
          <div className="max-w-7xl mx-auto border-t border-[#c2185b] pt-10 pb-6 px-4 md:px-8">
            <h2 className="text-2xl font-bold text-[#c2185b] mb-4">
              Best Escort Sites
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Truescorts – The Official Companion Directory proudly stands among the <strong className="font-semibold text-white">best escort</strong> sites in the country thanks to its emphasis on verification, ease of use, and privacy-first design. Unlike low-quality directories filled with fake ads, TruEscorts offers Verified Independent Escorts that you can browse by City with real photos and detailed listings. Whether you're seeking a quick browse or ready to connect with a companion who fits your preferences, our advanced filtering tools and intuitive layout make it seamless. Each profile includes clearly listed services, availability, and contact info — no gimmicks, no fluff. From elegant GFE companions to specialized service providers, TruEscorts provides an organized, trustworthy platform for both clients and independent providers. And with a clean, modern layout built for mobile and desktop, our site offers the ideal user experience from start to finish - making the process of finding verified escorts near you easier than ever.
            </p>

            {!isExpanded ? (
              <button 
                onClick={() => setIsExpanded(true)}
                className="text-[#fbc02d] hover:text-[#f57f17] text-sm font-semibold hover:underline"
              >
                Read More
              </button>
            ) : (
              <div className="space-y-8 animate-fadeIn">
                {/* Image 1 */}
                <div className="w-full my-4 overflow-hidden">
                  <img 
                    src="/escorts_images/Best%20Escort%20Sites.png" 
                    alt="Best Escort Sites"
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>
                <hr className="border-t-2 border-[#c2185b] mt-4 mb-2" />
                <h3 className="text-xl font-bold text-[#c2185b] mb-2">
                  Find Local Escorts Near Me
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Searching for <strong className="font-semibold text-white">local escorts</strong> near me has never been easier. TruEscorts covers every state in the U.S., from coast to coast, with verified listings across major metro areas, mid-size cities, and even smaller communities. Whether you're in a bustling urban center or a quieter suburb, TruEscorts helps you discover independent companions and agency providers who are actually available in your area. Our smart search system lets you browse by keyword, filter by service, or scroll through state-by-state pages to explore nearby options. Many providers offer both incall and outcall services, and each profile clearly states availability and contact method. Plus, we update listings regularly to ensure relevance and accuracy. So whether you're traveling or browsing from home, you'll always be able to say, “I found escorts near me — fast.” Check out our directory of verified listings or dive deeper into what defines an <span className="text-[#fbc02d] hover:underline cursor-pointer">authentic GFE experience</span>.
                </p>

                {/* Image 2 */}
                <div className="w-full my-4 overflow-hidden">
                  <img 
                    src="/escorts_images/Find%20Local%20Escorts%20Near%20Me.png" 
                    alt="Find Local Escorts Near Me"
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>


                <hr className="border-t-2 border-[#c2185b] my-8" />
                
                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Frequently Asked Questions About Escorts
                </h3>

                {/* FAQ Image */}
                <div className="w-2xl my-4 overflow-hidden">
                  <img 
                    src="/escorts_images/Frequently%20Asked%20Questions%20About%20Escorts.png" 
                    alt="Frequently Asked Questions About Escorts"
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#c2185b] mb-2">What is an escort?</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      An <strong className="font-semibold text-white">escort</strong> is a professional companion hired for non-sexual services like attending social events, enjoying conversation, or sharing private time. The purpose is companionship — not sexual acts. Escorts may accompany clients to business dinners, weekend getaways, or quiet nights in. The key distinction lies in legality: escorting is legal in many areas, while exchanging money for sexual activity is classified as prostitution. For a breakdown of the differences, visit <a href="http://lacriminaldefenseattorney.com" target="_blank" rel="noopener noreferrer" className="text-[#fbc02d] hover:underline">lacriminaldefenseattorney.com</a>.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#c2185b] mb-2">Is hiring an escort legal in the United States?</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Hiring an <strong className="font-semibold text-white">escort</strong> for companionship purposes is legal in most areas of the United States. Escorts can legally offer time, attention, and presence for agreed-upon hourly rates. However, if the exchange involves payment for sexual services, it may violate local prostitution laws. Clients and providers alike should be informed about local regulations and operate within legal boundaries to maintain safety and respect.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#c2185b] mb-2">Are escorts verified on TruEscorts?</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Yes. All <strong className="font-semibold text-white">escort</strong> listings on TruEscorts go through a verification process before appearing on the site. We check for accurate photos, consistent service details, and up-to-date availability. This ensures that users are connecting with real, reputable providers who value clarity and professionalism.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#c2185b] mb-2">Do escorts offer both incall and outcall?</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Most providers on TruEscorts offer both incall and outcall service options. Incall means you visit their hosting location — often a private apartment or hotel. Outcall means the escort travels to you. Listings clearly state which options are available, along with any travel boundaries, screening requirements, or additional rates.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#c2185b] mb-2">Can I filter by services or preferences?</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Yes — TruEscorts lets you filter providers by service type, communication style, availability, and physical preferences. Whether you're looking for a <strong className="font-semibold text-[#fbc02d]">fetish-friendly</strong> escort, GFE, or massage-focused provider, our search tools help you narrow your choices quickly.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#c2185b] mb-2">Is TruEscorts private and secure?</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Absolutely. TruEscorts operates on a secure, encrypted platform and never requires an account to view listings. We respect your privacy at every step, whether you're browsing casually or connecting with someone directly. All communication is managed between you and the provider.
                    </p>
                  </div>
                </div>

                <hr className="border-t-2 border-[#c2185b] my-8" />
                
                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Incall Escorts
                </h3>

                {/* Incall Escorts Image */}
                <div className="w-full my-4 overflow-hidden">
                  <img 
                    src="/escorts_images/Incall%20Escorts.png" 
                    alt="Incall Escorts"
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  <span className="text-[#fbc02d] font-semibold">Incall escorts</span> offer a discreet and welcoming environment where clients visit the provider's private location. These spaces are typically upscale, clean, and well-appointed — ranging from luxury apartments to hotel suites. Many escorts use scented candles, ambient music, and soft lighting to create a spa-like experience for their guests. Incalls are ideal for those who value privacy and control over the setting. On TruEscorts, each provider clearly lists whether incall is available, as well as their approximate location, hours, and any screening requirements. Whether you're newcomer or a returning client, incall services provide a calm, low-stress option that's easy to arrange.
                </p>

                <hr className="border-t-2 border-[#c2185b] my-8" />
                
                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Outcall Escorts
                </h3>

                {/* Outcall Escorts Image */}
                <div className="w-full my-4 overflow-hidden">
                  <img 
                    src="/escorts_images/Outcall%20Escorts.png" 
                    alt="Outcall Escorts"
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  <span className="text-[#fbc02d] font-semibold">Outcall escorts</span> bring the experience directly to your home, hotel, or private rental. This option is perfect for clients who prefer to remain in their own environment or enjoy added flexibility. Whether you're entertaining at a penthouse suite, relaxing in your living room, or traveling through town, outcalls provide both convenience and comfort. Escorts typically list their travel areas, required screening steps, and preferred notice time on their profiles. With TruEscorts, you'll find providers who communicate professionally and arrive prepared — ensuring a safe, discreet, and mutually enjoyable time. Just be sure to confirm logistics and expectations in advance for a smooth encounter.
                </p>


                <hr className="border-t-2 border-[#c2185b] my-8" />
                
                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Independent Escorts
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  <strong className="font-semibold text-white">Independent</strong> escorts offer a more personalized experience than agencies or collectives. These providers manage their own listings, communication, and bookings — allowing them to tailor each interaction to your preferences. On TruEscorts, you'll find a wide range of independent personalities: from bubbly conversationalists and sultry GFE dates to kink-friendly companions with strong boundaries and clear offerings. Independent providers often post candid photos, write their own bios, and engage directly with clients, so what you see is truly what you get. Many also maintain repeat clientele and offer greater flexibility with custom requests, extended bookings, or low-key meetups. Choose independence for honesty, authenticity, and direct communication.
                </p>

                <hr className="border-t-2 border-[#c2185b] my-8" />
                
                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Massage Escorts
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  <strong className="font-semibold text-white">Massage</strong> escorts specialize in body-focused sessions that range from light relaxation to full body-to-body experiences. Many providers incorporate soothing elements like warm oils, sensual techniques, and aromatherapy into their sessions. These experiences are ideal for clients seeking intimacy blended with stress relief, and often mimic spa treatments with a more personal twist. Whether offered as incall or outcall, massage listings on TruEscorts clearly indicate what's included, as well as any customizations, add-ons, or time-based options. Massage encounters may be labeled as tantra, nuru, sensual, or therapeutic — and you can filter by these terms while browsing. Just be sure to read the provider's full profile to respect boundaries and expectations.
                </p>

                <hr className="border-t-2 border-[#c2185b] my-8" />

                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Fetish Friendly Escorts
                </h3>

                {/* Fetish Friendly Escorts Image */}
                <div className="w-full my-4 overflow-hidden">
                  <img 
                    src="/escorts_images/Fetish%20Friendly%20Escorts.png" 
                    alt="Fetish Friendly Escorts"
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  <strong className="font-semibold text-white">Fetish-friendly</strong> escorts cater to specific interests, kinks, and roleplay scenarios — all within a safe, consensual framework. Whether you're into light bondage, foot worship, role reversal, or sensation play, there are providers who specialize in creating structured, respectful environments for exploration. On TruEscorts, you can identify these listings using search terms or the "fetish" tag. Profiles may also outline tools used, limits observed, and experience level with particular fetishes. Some companions travel with props or wearables, while others have fully equipped incall spaces. Communication is key in fetish play, so always discuss interests in advance. Not sure where to start? Visit <a href="https://fetlife.com" target="_blank" rel="noopener noreferrer" className="text-[#fbc02d] hover:underline">FetLife</a> to learn more about boundaries, etiquette, and popular fantasies.
                </p>

                <hr className="border-t-2 border-[#c2185b] my-8" />

                <h3 className="text-xl font-bold text-[#c2185b] mb-4">
                  Things to Do With an Escort
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Escorts are more than just companions — they're partners in experience. Many clients enjoy planning outings with providers that go beyond the hotel room. Whether it's dinner at a fine restaurant, cocktails at a rooftop bar, or even a stroll through a local attraction, the right companion adds energy and presence to the occasion. Planning something fun together creates natural chemistry and a more memorable connection. On TruEscorts, you'll find listings from providers who enjoy social dates, conversation-led experiences, and extended arrangements. Just communicate your expectations ahead of time, and be respectful of time, comfort, and boundaries. With the right energy, your escort date can feel effortless, exciting, and real.
                </p>

                <hr className="border-t-2 border-[#c2185b] my-8" />

                {/* Business Info Block */}
                <div className="text-zinc-400 text-sm space-y-1 mb-4">
                  <p className="font-semibold text-white">TruEscorts – United States</p>
                  <p>Open 24 hours a day, 7 days a week</p>
                  <a href="#" className="text-[#fbc02d] hover:underline block">United States</a>
                </div>

                <div className="py-2">
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-[#fbc02d] hover:text-[#f57f17] text-sm font-semibold hover:underline"
                  >
                    Show Less
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      )}

      {/* Footer */}
       <Footer />
      
    </div>
  );
}
