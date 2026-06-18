"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans select-none">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 md:px-8 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-[#c2185b]">Contact</span> Us
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <p className="text-lg mb-6">
              Thank you for visiting truescorts.
            </p>
            <p>
              We value our users and strive to provide prompt assistance whenever possible. If you have questions, concerns, feedback, or require support regarding your account or use of our website, please contact us using the information below.
            </p>
          </section>

          <section className="bg-[#0b0b0b] border border-zinc-800 rounded-lg p-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">Customer Support</h2>
              <a href="mailto:newlisting4@gmail.com" className="text-[#fbc02d] hover:text-[#f57f17] transition-colors">
                newlisting4@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-1">General Inquiries</h2>
              <a href="mailto:newlisting4@gmail.com" className="text-[#fbc02d] hover:text-[#f57f17] transition-colors">
                newlisting4@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-1">Business Inquiries</h2>
              <a href="mailto:newlisting4@gmail.com" className="text-[#fbc02d] hover:text-[#f57f17] transition-colors">
                newlisting4@gmail.com
              </a>
            </div>

            <div className="pt-2">
              <h2 className="text-lg font-semibold text-white mb-1">Response Time</h2>
              <p className="text-zinc-400">
                Our support team aims to respond to inquiries within 24 to 72 business hours. Response times may vary depending on the nature and complexity of the request.
              </p>
            </div>
          </section>

          <section className="border-t border-zinc-800 pt-6 mt-8">
            <h2 className="text-xl font-semibold text-white mb-3">Reporting Violations</h2>
            <p>
              If you believe content on our platform violates our Terms of Use, infringes intellectual property rights, involves unauthorized use of information, or otherwise breaches our policies, please contact us immediately and provide the following information:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-400">
              <li>Your full name</li>
              <li>Contact information</li>
              <li>Description of the issue</li>
              <li>Relevant URLs or screenshots</li>
              <li>Any supporting documentation</li>
            </ul>
            <p className="mt-3">
              Truescorts review all reports in good faith and reserve the right to remove content, suspend accounts, or take other actions as deemed appropriate.
            </p>
            <p className="mt-3">
              Truescorts feedback helps us maintain a safe, respectful, and professional platform for all users.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
