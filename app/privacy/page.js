"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans select-none">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 md:px-8 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-[#c2185b]">Privacy</span> Policy
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
            <p>
              At Truescorts, we respect your privacy and are committed to protecting your personal information.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit or use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect the following information:</p>

            <h3 className="text-lg font-medium text-white mb-2">Personal Information</h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Account information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-2">Technical Information</h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-400 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Website usage information</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-2">Communications</h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-400">
              <li>Customer support messages</li>
              <li>Feedback submissions</li>
              <li>Reports and inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Information</h2>
            <p className="mb-3">We may use collected information to:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400">
              <li>Provide website functionality</li>
              <li>Manage user accounts</li>
              <li>Improve website performance</li>
              <li>Respond to inquiries</li>
              <li>Monitor security and fraud prevention</li>
              <li>Enforce our terms and policies</li>
              <li>Comply with legal obligations</li>
              <li>Conduct analytics and research</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies and Tracking Technologies</h2>
            <p>
              Truescorts may use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Remember user preferences</li>
              <li>Improve website performance</li>
              <li>Analyze website traffic</li>
              <li>Enhance user experience</li>
              <li>Maintain account security</li>
            </ul>
            <p className="mt-3">
              Users may adjust browser settings to refuse cookies; however, certain website features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information Sharing</h2>
            <p className="mb-3">We may share information:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400">
              <li>With service providers who assist website operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and security</li>
              <li>During business transfers or restructuring</li>
              <li>With authorities when required by applicable law</li>
            </ul>
            <p className="mt-3 font-medium text-white">
              We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Security</h2>
            <p>
              Truescorts implement reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className="mt-3">
              However, no method of electronic storage or internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Links</h2>
            <p>
              Truescorts may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              Truescorts reserve the right to modify this Privacy Policy at any time. Updated versions will be posted on this page along with the revised effective date.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-6 mt-8">
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:newlisting4@gmail.com" className="text-[#fbc02d] hover:text-[#f57f17] transition-colors">
                newlisting4@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
