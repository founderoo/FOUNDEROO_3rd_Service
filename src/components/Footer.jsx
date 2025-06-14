import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,MessageCircleCodeIcon  } from 'lucide-react';

export function Footer() {
  return (
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
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.linkedin.com/company/founderoo-circle/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a> */}
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a></li>
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
                <MessageCircleCodeIcon size={16} className="text-gray-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 7970931573
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <a href="mailto:hello@founderoo.com" className="text-gray-300 hover:text-white transition-colors text-sm">
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
  );
}