
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, MessageCircleCodeIcon, Rocket } from 'lucide-react';
import ComingSoonModal from './ComingSoon';
import { Link } from 'react-router-dom';  

export function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleComingSoonClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}

      {/* Animated background elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px] opacity-10"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-[80px] opacity-10"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Enhanced */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Founderoo</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Operating System for Founders.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building innovative solutions that help businesses grow and thrive in the digital age. 
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/founderoo-circle/" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/founderoo" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Products & Services - Simplified but with click handlers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <div className="space-y-2">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting', 'Support'].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={handleComingSoonClick}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links - Simplified but with click handlers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-2">
              <a 
                href="#" 
                onClick={handleComingSoonClick}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
              >
                About Us
              </a>
              {/* <a 
                href="#" 
                onClick={handleComingSoonClick}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
              >
                Our Team
              </a> */}
           <Link 
  to="/our-team" 
  className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
>
  Our Team
</Link>
              <a 
                href="https://tally.so/r/wMQk60" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
              >
                Careers
              </a>
              <a 
                href="#" 
                onClick={handleComingSoonClick}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
              >
                Blog
              </a>
              <a 
                href="https://www.linkedin.com/newsletters/the-founder-s-signal-7338714487572570114" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm block"
              >
                Newsletter
              </a>
            </div>
          </div>

          {/* Contact Info - Unchanged */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Amity University <br />
                  Police Station, Bailey Rd, near Rupaspur, Kaliket Nagar<br />
                  Patna, Bihar 801503
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircleCodeIcon size={16} className="text-purple-400 flex-shrink-0" />
                <a 
                  href="tel:+917970931573" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  +91 7970931573
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:member@founderoo.in" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  member@founderoo.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <div className="border-t border-gray-800 bg-gray-950 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-sm text-gray-400">
              © {new Date().getFullYear()} Founderoo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Cookie Policy
              </a>
              <a 
                href="https://github.com/founderoo" 
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
