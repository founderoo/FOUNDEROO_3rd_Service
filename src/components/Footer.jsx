import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle, X } from 'lucide-react';

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
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Founderoo</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The Operating System for Founders.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building innovative solutions that help businesses grow and thrive in the digital age. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/founderoo-circle/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Products & Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handleFeatureClick(e, 'Web Development')}
                    className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handleFeatureClick(e, 'Mobile Apps')}
                    className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handleFeatureClick(e, 'Cloud Solutions')}
                    className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handleFeatureClick(e, 'Consulting')}
                    className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    Consulting
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => handleFeatureClick(e, 'Support')}
                    className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Newsletter</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Amity University <br />
                    Police Station, Bailey Rd, near Rupaspur, Rupaspur, Kaliket Nagar<br />
                    Patna, Bihar 801503
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle size={16} className="text-gray-400 flex-shrink-0" />
                  <a href="tel:+917970931573" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +91 7970931573
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  <a href="mailto:member@founderoo.in" className="text-gray-300 hover:text-white transition-colors text-sm">
                    member@founderoo.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-gray-950">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <p className="text-center md:text-left text-sm text-gray-400">
                © {new Date().getFullYear()} Founderoo. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
                <a href="https://github.com/founderoo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 relative border border-gray-700 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-6">
              {/* Title */}
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Coming Soon
              </h2>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  We're working hard to bring you an amazing {clickedFeature.toLowerCase()} service.
                </p>
                <p className="text-gray-400 text-sm">
                  Stay tuned for updates as we develop this exciting new capability!
                </p>
              </div>

              {/* Rocket Icon */}
              <div className="flex justify-center py-4">
                <div className="text-6xl animate-bounce">
                  🚀
                </div>
              </div>

              {/* Button */}
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
