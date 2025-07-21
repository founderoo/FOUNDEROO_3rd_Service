import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { User } from 'lucide-react';
import { useAuthStore } from '../store/auth';
import { useToast } from './ui/use-toast';

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await logout();
      toast({
        title: "Success",
        description: "Signed out successfully!",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsOpen(false);
    }
  };

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {user ? (
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-secondary transition-colors rounded-full overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user?.photoURL ? (
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="h-8 w-8 rounded-full"
            />
          ) : (
            <User className="h-5 w-5" />
          )}
        </Button>
      ) : null}

      {isOpen && user && (
        <div className="absolute right-0 mt-xs-token w-48 rounded-md shadow-lg bg-card border border-border z-[55]">
          <div className="py-xs-token" role="menu" aria-orientation="vertical">
            <div className="px-sm-token py-xs-token text-sm-token text-card-foreground border-b border-border">
              <div className="flex items-center gap-xs-token">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="h-6 w-6 rounded-full"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-medium-token truncate text-sm-token leading-normal-token">{user.displayName || 'User'}</p>
                  <p className="text-xs-token text-muted-foreground truncate leading-normal-token">{user.email}</p>
                </div>
              </div>
            </div>
            <Link
              to="/dashboard"
              className="block px-sm-token py-xs-token text-sm-token text-card-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors leading-normal-token"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <button
              className="block w-full text-left px-sm-token py-xs-token text-sm-token text-card-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors leading-normal-token"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}