import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <div className="space-y-8 text-lg">
        <p className="leading-relaxed">
          This Privacy Policy outlines how FOUNDEROO, operated by BRANDIFY &amp; COMPANY, collects, uses, and protects your personal data. We are committed to safeguarding the privacy of all users interacting with our platform.
        </p>
        
        <div className="grid gap-6">
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="leading-relaxed">
              We may collect data including name, email address, business information, and usage behavior on the platform. This information is used to deliver services, enhance user experience, and provide support.
            </p>
          </div>
          
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">How We Use Data</h2>
            <p className="leading-relaxed">
              Collected data is used strictly for platform operations, communications, performance analytics, and personalized offerings. We do not sell or rent personal information to third parties.
            </p>
          </div>
          
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="leading-relaxed">
              We may partner with trusted services for analytics, payments, or communication. Each provider is vetted for compliance with privacy and security standards.
            </p>
          </div>
          
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="leading-relaxed">
              You may request access, correction, or deletion of your data at any time by contacting us. We aim to respond to all inquiries within 10 business days.
            </p>
          </div>
          
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="leading-relaxed">
              All data is securely stored and encrypted using industry-standard protocols.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-base">
          <p className="mb-2">
            <strong className="font-semibold">Legal Entity:</strong> BRANDIFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.
          </p>
          <p>
            <strong className="font-semibold">Contact:</strong>{' '}
            <a href="mailto:member@founderoo.in" className="text-black hover:text-gray-700 underline">member@founderoo.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;