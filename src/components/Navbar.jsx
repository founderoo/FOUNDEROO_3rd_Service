import { useState } from 'react';
import { useAuthStore } from '@/store/auth';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ProfileMenu } from './ProfileMenu';
import logo from '@/assets/founderoo.webp';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuthStore();

  return (
<header className="bg-white dark:bg-background fixed top-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto py-3 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Founderoo Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">Founderoo</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <div className="md:flex items-center gap-8 hidden">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Home
              </Link>
              <a href="#feature" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Features
              </a>
              <Link to="/our-team" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Our Team
              </Link>
              <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Faq
              </a>

              {!user && (
                <Link
                  to="/register"
                  className="cta-button-small"
                >
                  Register
                </Link>
              )}
            </div>
            <div className="flex items-center gap-3">
              {/* <ThemeToggle /> */}
              <ProfileMenu />
            </div>
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      {/* Mobile menu */}
      <div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-background border-t border-gray-200 dark:border-gray-800`}
      >
        <div className="space-y-1 px-4 py-2">
          <Link to="/" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2">
            Home
          </Link>
          <a href="#feature" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2">
            Features
          </a>
          <Link to="/our-team" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2">
            Our Team
          </Link>
          <a href="#faq" className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2">
            Faq
          </a>

          {!user && (
            <Link to="/register" className="block text-sm font-medium text-[#5F2B8D] dark:text-[#9333EA] hover:text-[#5F2B8D]/80 dark:hover:text-[#9333EA]/80 py-2">
              Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}