import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Refund Policy</h1>
      <div className="space-y-6 text-lg">
        <p className="leading-relaxed">
          At FOUNDEROO, we are committed to delivering value to our users. As a product of BRANDIFY &amp; COMPANY, we operate in accordance with industry standards to ensure transparency and fairness in all financial transactions.
        </p>

        <div className="space-y-6">
          <div className="bg-secondary/10 p-6 rounded-lg">
            <p className="leading-relaxed">
              <strong className="font-semibold block mb-2">Digital Products and Services</strong>
              Due to the instant-access nature of digital products and consulting services offered through our platform, all sales are considered final once the service has been accessed or delivered.
            </p>
          </div>

          <div className="bg-secondary/10 p-6 rounded-lg">
            <p className="leading-relaxed">
              <strong className="font-semibold block mb-2">Subscription Refunds</strong>
              Users subscribing to paid services have the option to cancel anytime. If cancellation occurs within the first 7 days of the subscription period and no digital product has been accessed, a full refund may be requested by contacting our support team.
            </p>
          </div>

          <div className="bg-secondary/10 p-6 rounded-lg">
            <p className="leading-relaxed">
              <strong className="font-semibold block mb-2">Issue Resolution</strong>
              In cases of service delivery failures or technical issues, users are encouraged to contact support. We are committed to ensuring satisfaction where possible within reasonable business practices.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-base">
          <p>
            <strong className="font-semibold">Contact Information:</strong> All refund requests should be directed to{' '}
            <a href="mailto:member@founderoo.in" className="text-primary hover:text-primary/80 underline">member@founderoo.in</a>
          </p>

          <p className="mt-2">
            <strong className="font-semibold">Address:</strong> BRANDIFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
