import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/store/theme';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    toggleTheme();
    
    // Reset the clicked state after animation
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={`text-white touch-none select-none bg-transparent md:hover:bg-secondary/20 md:hover:text-secondary active:bg-secondary/10 transition-all duration-200 ${
        isClicked ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{ 
        WebkitTapHighlightColor: 'transparent', 
        touchAction: 'manipulation' 
      }}
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}