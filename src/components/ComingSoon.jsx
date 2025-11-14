






import React from 'react';
import { X } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../animations/LottieFiles.json';

export default function ComingSoonModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-black/90 text-white rounded-lg max-w-md w-full relative p-8 text-center border border-gray-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Coming Soon!</h2>

        {/* Description */}
        <div className="space-y-3 mb-2">
          <p className="text-gray-300 text-base">
            We're working hard to bring you an amazing feature.
          </p>
          <p className="text-gray-400 text-base">
            Stay tuned for updates as we develop this exciting new capability!
          </p>
        </div>

        {/* Animation Container */}
        <div className="w-full h-48 mx-auto my-4">
          <Lottie 
            animationData={animationData} 
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={onClose}
          className="bg-purple-600 text-white font-medium px-8 py-2.5 rounded-lg hover:bg-purple-700 transition-all mt-2"
        >
          Got it!
        </button>

        <p className="text-gray-500 text-sm mt-4">
          We'll notify you when it's ready!
        </p>
      </div>
    </div>
  );
}
