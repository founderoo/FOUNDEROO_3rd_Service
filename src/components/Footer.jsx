import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Linkedin } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedFeature, setClickedFeature] = useState('');

  const handleFeatureClick = (e, featureName) => {
    e.preventDefault();
    setClickedFeature(featureName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedFeature('');
  };

  return (
    <>
      <footer className="bg-[#0f0f0f] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'About Us')}>About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Careers')}>Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Blog')}>Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Startup Kit')}>Startup Kit</a></li>
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Founder Network')}>Founder Network</a></li>
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Marketplace')}>Marketplace</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Help Center')}>Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Terms of Service')}>Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition" onClick={(e) => handleFeatureClick(e, 'Privacy Policy')}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={16} /> Mumbai, India</li>
              <li className="flex items-center gap-2"><Mail size={16} /> hello@founderoo.in</li>
              <li className="flex items-center gap-2"><MessageCircle size={16} /> +91 9876543210</li>
              <li className="flex items-center gap-2"><Linkedin size={16} /> @founderoo</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Founderoo. All rights reserved.
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {isModalOpen && (
        <ComingSoonModal onClose={closeModal} feature={clickedFeature} />
      )}
    </>
  );
}
