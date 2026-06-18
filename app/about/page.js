"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans select-none">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 md:px-8 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-[#c2185b]">About</span> Us
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Welcome to truescorts</h2>
            <p>
              At truescorts, our mission is to provide a secure, user-friendly, and professional online platform where independent adult companions and clients can connect through transparent advertising and communication tools.
            </p>
          </section>

          <section>
            <p>
              We understand that privacy, discretion, and trust are essential in the online companionship industry. Our platform has been designed to create a respectful environment that allows consenting adults to discover companionship services in a safe and convenient manner.
            </p>
          </section>

          <section>
            <p>
              Our website serves solely as an advertising and communication platform. We do not employ, manage, direct, supervise, or control any independent service providers who choose to advertise on our website. Each advertiser operates independently and is solely responsible for their own content, services, conduct, pricing, and interactions with clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Our Commitment</h2>
            <p>We are committed to maintaining a platform that promotes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Privacy and discretion</li>
              <li>Respectful communication</li>
              <li>User safety and security</li>
              <li>Transparency and authenticity</li>
              <li>Compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <p>
              Our team continuously works to improve the user experience by implementing modern technology, robust security measures, and responsive customer support.
            </p>
          </section>

          <section>
            <p>
              Whether you are seeking companionship opportunities or wish to advertise your independent services, our goal is to provide a reliable platform that respects the rights, privacy, and choices of all consenting adults.
            </p>
          </section>

          <section>
            <p>
              By accessing and using our platform, users acknowledge their responsibility to comply with all applicable local, state, federal, and international laws.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-6 mt-8">
            <h2 className="text-xl font-semibold text-white mb-3">All escorts in truescorts are Independent</h2>
            <p>
              Independent escorts in USA are known for their transparency, flexibility, and personalized service. Free from agencies or handlers, these providers set their own schedules, screening methods, and service offerings. Whether you are meeting a curvy Latina near Humboldt Park or a slim brunette in Edgewater, you will enjoy direct communication and honest expectations. Independent providers often showcase real selfies, handwritten bios, and detailed boundaries, making it easy to align your vibe before booking. They may offer both incall and outcall, and are typically more open to custom arrangements or repeat connections. Want a chill pre-meet spot? Check out Estereo in Logan Square for tropical cocktails and great people-watching.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Skip the Agencies: Booking Direct With truescorts</h2>
            <p>
              Going direct keeps expectations clean and messages short. When you contact an independent, you are speaking with the person you will meet — which means faster answers whether you are near The District or tucked along Old Southwest streets. Read the full profile first, follow screening exactly, and propose two realistic time windows that work with I-70 and Providence Road traffic.
            </p>
            <p className="mt-3">
              Keep the opener tidy: first name, date/time range, incall or outcall, and your area. Independent escorts in truescorts answer quickest when you send two realistic time windows and complete screening in one message. Prefer a public hello? Hold a corner table or a patio stool, then shift private when both of you are ready.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-6 mt-8 text-center">
            <p className="text-zinc-400">
              Thank you for choosing truescorts. We appreciate your trust and look forward to providing a professional and secure online experience.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
