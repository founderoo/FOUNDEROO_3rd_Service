import React from 'react';

const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About Us</h1>
      <div className="space-y-6 text-lg">
        <p className="leading-relaxed">
          <strong className="font-semibold">FOUNDEROO</strong> is an integrated digital ecosystem built to empower first-time founders and aspiring entrepreneurs. Our platform offers a structured, step-by-step framework to transform raw startup ideas into scalable businesses with speed, clarity, and confidence.
        </p>

        <p className="leading-relaxed">
          Founded by Ramanand Thakur and operated under the legal entity <strong className="font-semibold">BRANDIFY &amp; COMPANY</strong>, FOUNDEROO serves as a one-stop solution for early-stage founders seeking practical tools, templates, mentoring, and growth strategies.
        </p>

        <p className="leading-relaxed">
          Whether you are prototyping an MVP, building your brand, or preparing for market entry, FOUNDEROO equips you with everything you need — all in one platform.
        </p>

        <ul className="space-y-3 list-none pl-4 border-l-4 border-primary">
          <li><strong className="font-semibold">Mission:</strong> To empower 100,000 first-time founders globally.</li>
          <li><strong className="font-semibold">Vision:</strong> To systematize the chaotic startup journey for new-age entrepreneurs.</li>
          <li><strong className="font-semibold">Core Offerings:</strong> Branding kits, MVP accelerators, founder mentorship, and startup operating templates.</li>
        </ul>

        <div className="mt-12 pt-6 border-t">
          <p className="text-base">
            <strong className="font-semibold">Corporate Office:</strong> BRANDIFY &amp; COMPANY, BHEJA, BLOCK-MADHEPUR, DIST.-MADHUBANI, BIHAR – 847408, India.
          </p>
          <p className="text-base mt-2">
            <strong className="font-semibold">Contact:</strong>{' '}
            <a href="mailto:member@founderoo.in" className="text-primary hover:text-primary/80 underline">member@founderoo.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
