"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans select-none">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 md:px-8 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-[#c2185b]">Terms</span> of Use
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using Truescorts, you agree to be bound by these Terms of Use. If you do not agree with these terms, you must discontinue use of the website immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Eligibility</h2>
            <p>
              You must be at least eighteen (18) years of age, or the age of legal majority in your jurisdiction, whichever is higher, to access Truescorts.
            </p>
            <p className="mt-3">By using this Truescorts website, you represent and warrant that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>You are legally an adult.</li>
              <li>You have the legal capacity to enter into agreements.</li>
              <li>You will comply with all applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Platform Services</h2>
            <p>
              Truescorts provides an online platform that allows independent adults to publish advertisements and communicate with other users.
            </p>
            <p className="mt-3">Truescorts does not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Employ service providers</li>
              <li>Arrange meetings</li>
              <li>Negotiate services</li>
              <li>Control user interactions</li>
              <li>Guarantee the accuracy of listings</li>
              <li>Endorse any particular advertiser</li>
            </ul>
            <p className="mt-3">
              All interactions between users occur entirely at their own risk and discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">User Conduct</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Violate any applicable law</li>
              <li>Post false or misleading information</li>
              <li>Impersonate another person</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Upload malicious software</li>
              <li>Attempt unauthorized access to accounts or systems</li>
              <li>Use automated tools to scrape website content</li>
              <li>Infringe intellectual property rights</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">User Content</h2>
            <p>
              Users remain solely responsible for all content they upload, submit, publish, or transmit through the website.
            </p>
            <p className="mt-3">
              By posting content, users represent that they possess all necessary rights and permissions to publish such content.
            </p>
            <p className="mt-3">
              We reserve the right, but assume no obligation, to review, edit, remove, or restrict access to content that violates these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Disclaimer</h2>
            <p>
              The website and all services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind.
            </p>
            <p className="mt-3">Truescorts does not guarantee:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Continuous website availability</li>
              <li>Error-free operation</li>
              <li>Accuracy of listings</li>
              <li>User identity verification</li>
              <li>Outcomes of interactions between users</li>
            </ul>
            <p className="mt-3">
              Use of Truescorts is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Truescorts, its owners, affiliates, employees, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Use of Truescorts</li>
              <li>User-generated content</li>
              <li>Third-party conduct</li>
              <li>Technical interruptions</li>
              <li>Loss of data</li>
              <li>Unauthorized access to accounts</li>
              <li>Modifications</li>
            </ul>
            <p className="mt-4">
              We reserve the right to update these Terms of Use at any time without prior notice. Continued use of the website constitutes acceptance of any revised terms.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
