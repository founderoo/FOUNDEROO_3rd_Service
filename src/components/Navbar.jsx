import { useState } from 'react';
import { useAuthStore } from '@/store/auth';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ProfileMenu } from './ProfileMenu';
import logo from '@/assets/founderoo.webp';
import { ArrowRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuthStore();

  return (
    <header className="border-b bg-primary text-primary-foreground fixed top-0 w-full z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Founderoo Logo" className="h-11 w-65 object-contain" />
          <span className="text-2xl font-bold text-white">Founderoo</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <div className="md:flex items-center gap-6 hidden">
              <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
                Founder
              </Link>
              <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
                What We Offer
              </Link>
             <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
                Pricing
              </Link>
              <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
                Community
              </Link>
              
              {!user && (
                <Link
                  to="/register"
                  className="md:block hidden text-sm font-medium md:hover:text-secondary transition-colors font-satoshi"
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
              className="md:hidden p-2 md:hover:bg-secondary md:hover:text-primary rounded-lg transition-colors"
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
          <button
            className="w-full text-left active:bg-secondary/20 rounded transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Link to="/" className="block text-sm font-medium font-satoshi py-2">
              Founder
            </Link>
          </button>
          <button
            className="w-full text-left active:bg-secondary/20 rounded transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Link to="/" className="block text-sm font-medium font-satoshi py-2">
              What We Offer
            </Link>
          </button>
          <button
            className="w-full text-left active:bg-secondary/20 rounded transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Link to="/" className="block text-sm font-medium font-satoshi py-2">
              Pricing
            </Link>
          </button>
          <button
            className="w-full text-left active:bg-secondary/20 rounded transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Link to="/" className="block text-sm font-medium font-satoshi py-2">
              Community
            </Link>
          </button>
          <button
            className="w-full text-left active:bg-secondary/20 rounded transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Link to="/" className="block text-sm font-medium font-satoshi py-2">
              Ask Founderoo
            </Link>
          </button>
          
          {!user && (
            <button
              className="w-full text-left active:bg-secondary/20 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Link to="/register" className="block text-sm font-medium font-satoshi py-2">
                Register
              </Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
// import { useState } from 'react';
// import { useAuthStore } from '@/store/auth';
// import { Link } from 'react-router-dom';
// import { ThemeToggle } from './ThemeToggle';
// import { ProfileMenu } from './ProfileMenu';
// import logo from '@/assets/founderoo.webp';
// import { ArrowRight } from 'lucide-react';

// export function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { user } = useAuthStore();

//   return (
//     <header className="border-b bg-primary text-primary-foreground fixed top-0 w-full z-50">
//       <div className="container mx-auto py-4 px-4 flex justify-between items-center">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Founderoo Logo" className="h-11 w-65 object-contain" />
//           <span className="text-2xl font-bold text-white">Founderoo</span>
//         </Link>
//         <div className="flex items-center gap-4">
//           <nav className="flex items-center gap-6">
//             <div className="md:flex items-center gap-6 hidden">
//               {/* TODO: Make this functional */}
//               <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
//                 Founder
//               </Link>
//               {/* TODO: Make this functional */}
//               <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
//                 What We Offer
//               </Link>
//               {/* TODO: Make this functional */}
//               <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
//                 Pricing
//               </Link>
//               {/* TODO: Make this functional */}
//               <Link to="/" className="text-sm font-medium md:hover:text-secondary transition-colors font-satoshi">
//                 Community
//               </Link>

//               {!user && (
//                 <Link
//                   to="/register"
//                   className="md:block hidden text-sm font-medium md:hover:text-secondary transition-colors font-satoshi"
//                 >
//                   Register
//                 </Link>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               <ThemeToggle />
//               <ProfileMenu />
//             </div>
//             <button
//               className="md:hidden p-2 md:hover:bg-secondary md:hover:text-primary rounded-lg transition-colors"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-primary pb-4`}>
//         <div className="space-y-1 px-4">
//           {/* TODO: Make this functional */}
//           <button
//             className="w-full text-left active:bg-secondary/20 rounded transition-colors"
//             onClick={() => setMobileMenuOpen(false)}
//             style={{ WebkitTapHighlightColor: 'transparent' }}
//           >
//             <Link to="/" className="block text-sm font-medium font-satoshi py-2">
//               Founder
//             </Link>
//           </button>
//           {/* TODO: Make this functional */}
//           <button
//             className="w-full text-left active:bg-secondary/20 rounded transition-colors"
//             onClick={() => setMobileMenuOpen(false)}
//             style={{ WebkitTapHighlightColor: 'transparent' }}
//           >
//             <Link to="/" className="block text-sm font-medium font-satoshi py-2">
//               What We Offer
//             </Link>
//           </button>
//           {/* TODO: Make this functional */}
//           <button
//             className="w-full text-left active:bg-secondary/20 rounded transition-colors"
//             onClick={() => setMobileMenuOpen(false)}
//             style={{ WebkitTapHighlightColor: 'transparent' }}
//           >
//             <Link to="/" className="block text-sm font-medium font-satoshi py-2">
//               Pricing
//             </Link>
//           </button>
//           {/* TODO: Make this functional */}
//           <button
//             className="w-full text-left active:bg-secondary/20 rounded transition-colors"
//             onClick={() => setMobileMenuOpen(false)}
//             style={{ WebkitTapHighlightColor: 'transparent' }}
//           >
//             <Link to="/" className="block text-sm font-medium font-satoshi py-2">
//               Community
//             </Link>
//           </button>
//           {/* TODO: Make this functional */}
//           <button
//             className="w-full text-left active:bg-secondary/20 rounded transition-colors"
//             onClick={() => setMobileMenuOpen(false)}
//             style={{ WebkitTapHighlightColor: 'transparent' }}
//           >
//             <Link to="/" className="block text-sm font-medium font-satoshi py-2">
//               Ask Founderoo
//             </Link>
//           </button>

//           {!user && (
//             <button
//               className="w-full text-left active:bg-secondary/20 rounded transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//               style={{ WebkitTapHighlightColor: 'transparent' }}
//             >
//               <Link to="/register" className="block text-sm font-medium font-satoshi py-2">
//                 Register
//               </Link>
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
