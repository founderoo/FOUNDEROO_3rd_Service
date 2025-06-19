import React from 'react';

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Terms and Conditions</h1>
      <div className="space-y-8 text-lg">
        <p className="leading-relaxed">
          Welcome to FOUNDEROO, a digital platform operated by BRANDIFY &amp; COMPANY. These Terms and Conditions govern your access to and use of the services, products, and content provided by FOUNDEROO. By using this website or any of its services, you agree to comply with and be bound by the following terms in full.
        </p>

        <div className="grid gap-6 sm:gap-8">
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">1. Eligibility</h2>
            <p className="leading-relaxed">
              Access to the FOUNDEROO platform is limited to individuals who are at least 18 years of age or are legally recognized as adults in their respective jurisdictions.
            </p>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">2. Use of Services</h2>
            <p className="leading-relaxed">
              You agree to use the platform solely for lawful purposes. Any misuse, including unauthorized access, data manipulation, or other activities deemed harmful or unethical, will result in immediate suspension or termination of access.
            </p>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              All materials provided through FOUNDEROO, including but not limited to software, branding, content, and design, are the intellectual property of BRANDIFY &amp; COMPANY. Unauthorized use or reproduction is strictly prohibited.
            </p>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">4. Payments and Subscriptions</h2>
            <p className="leading-relaxed">
              Certain features and services are subject to fees and/or subscriptions. All payments are non-transferable. Subscriptions renew automatically unless canceled prior to the billing date.
            </p>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">5. Termination</h2>
            <p className="leading-relaxed">
              BRANDIFY &amp; COMPANY reserves the right to terminate or suspend access to any user found in violation of these terms, without prior notice.
            </p>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">6. Amendments</h2>
            <p className="leading-relaxed">
              We may revise these terms periodically. Users will be notified of substantial changes, and continued use of the platform implies acceptance of updated terms.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-base">
          <p className="mb-2">
            <strong className="font-semibold">Registered Office:</strong> BRANDIFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.
          </p>

          <p>
            For any legal correspondence, please contact us at{' '}
            <a href="mailto:member@founderoo.in" className="text-primary hover:text-primary/80 underline">member@founderoo.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
