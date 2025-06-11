import { useState } from 'react';
import { useAuthStore } from '@/store/auth';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ProfileMenu } from './ProfileMenu';
import logo from '@/assets/founderoo.jpg';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuthStore();

  return (
    <header className="border-b bg-primary text-white">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Founderoo Logo" className="h-11 w-65 object-contain" />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <div className="md:flex items-center gap-6 hidden">
              <Link to="/" className="text-sm font-medium hover:text-secondary transition-colors font-satoshi">
                Home
              </Link>
              <a href="#team" className="text-sm font-medium hover:text-secondary transition-colors font-satoshi">
                Team
              </a>
              <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors font-satoshi">
                About Us
              </a>
              <a href="#success-stories" className="text-sm font-medium hover:text-secondary transition-colors font-satoshi">
                Success Stories
              </a>
              {!user && (
                <Link
                  to="/register"
                  className="md:block hidden text-sm font-medium hover:text-secondary transition-colors font-satoshi"
                >
                  Register
                </Link>
              )}
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <ProfileMenu />
              
            </div>
            <button
              className="md:hidden p-2 hover:bg-secondary hover:text-dark rounded-lg transition-colors"
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-primary pb-4`}>
        <div className="space-y-1 px-4">
          <Link
            to="/"
            className="block text-sm font-medium hover:text-secondary transition-colors font-satoshi py-2"
          >
            Home
          </Link>
          <a
            href="#team"
            className="block text-sm font-medium hover:text-secondary transition-colors font-satoshi py-2"
          >
            Team
          </a>
          <a
            to="#about"
            className="block text-sm font-medium hover:text-secondary transition-colors font-satoshi py-2"
          >
            About Us
          </a>
          <a
            to="#success-stories"
            className="block text-sm font-medium hover:text-secondary transition-colors font-satoshi py-2"
          >
            Success Stories
          </a>
         
          {!user && (
            <Link
              to="/register"
              className="block text-sm font-medium hover:text-secondary transition-colors font-satoshi py-2"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}