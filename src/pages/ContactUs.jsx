import React from 'react';

const ContactUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Contact Us</h1>
      <div className="space-y-8 text-lg">
        <p className="leading-relaxed">
          We value open communication and welcome inquiries from users, partners, and potential collaborators. If you would like to reach out for support, partnerships, press, or any other purpose, please use the information below:
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Company Details</h2>
            <div className="space-y-3">
              <p><strong className="font-semibold">Corporate Name:</strong><br />BRANDIFY &amp; COMPANY</p>
              <p><strong className="font-semibold">Official Product:</strong><br />FOUNDEROO</p>
            </div>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p>
              <strong className="font-semibold">Registered Address:</strong><br />
              BHEJA, BLOCK-MADHEPUR,<br />
              DIST.-MADHUBANI, BIHAR – 847408,<br />
              India
            </p>
          </div>

          <div className="p-6 bg-secondary/5 rounded-lg sm:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-3">
              <p>
                <strong className="font-semibold">Primary Email:</strong><br />
                <a href="mailto:member@founderoo.in" className="text-primary hover:text-primary/80 underline">member@founderoo.in</a>
              </p>
              <p>
                <strong className="font-semibold">Social Media:</strong><br />
                @founderooHQ (LinkedIn, Instagram, Twitter)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-primary/5 rounded-lg text-center">
          <p className="text-base font-medium">We typically respond within 48 business hours.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
