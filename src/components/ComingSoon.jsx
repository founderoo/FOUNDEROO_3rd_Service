import React from 'react';

export default function ComingSoonModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 text-white p-6 rounded-xl max-w-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Coming Soon</h2>
        <p className="text-sm text-gray-300">
          We're working hard to bring you an amazing notes upload feature.
          <br />
          Stay tuned for updates as we develop this exciting new capability!
        </p>
        <div className="text-4xl my-4">🚀</div>
        <button
          onClick={onClose}
          className="bg-purple-500 hover:bg-purple-600 px-4 py-2 text-white rounded mt-4"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
