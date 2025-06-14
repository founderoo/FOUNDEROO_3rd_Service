import React from 'react';
import { X } from 'lucide-react';

export default function ComingSoonModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-[hsl(var(--overlay-bg))] backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-card text-card-foreground rounded-xl shadow-xl max-w-xl w-full relative p-8 text-center animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-primary mb-4">Coming Soon</h2>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-2">
          We're working hard to bring you an amazing web development service.
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          Stay tuned for updates as we develop this exciting new capability!
        </p>

        {/* Emoji / Icon */}
        <div className="text-4xl mb-6">🚀</div>

        {/* CTA Button */}
        <button
          onClick={onClose}
          className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-md hover:brightness-110 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
