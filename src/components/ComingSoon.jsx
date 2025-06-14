import React from 'react';
import { X } from 'lucide-react';

export default function ComingSoonModal({ onClose, feature }) {
  return (
    <div className="fixed inset-0 bg-[hsl(var(--overlay-bg))]/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-[#0f0f0f] text-white rounded-xl shadow-xl max-w-md w-full relative p-8 text-center animate-fadeIn border border-gray-700">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Coming Soon
        </h2>

        <p className="text-gray-300 text-lg mb-2">
          We're working hard to bring you an amazing {feature.toLowerCase()} service.
        </p>
        <p className="text-gray-400 text-sm mb-4">
          Stay tuned for updates as we develop this exciting new capability!
        </p>

        <div className="text-5xl mb-6 animate-bounce">🚀</div>

        <button
          onClick={onClose}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
