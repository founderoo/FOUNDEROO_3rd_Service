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
    
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className={`relative overflow-hidden rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:text-[#5F2B8D] dark:hover:text-[#9333EA] hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${
        isClicked ? 'scale-95' : 'scale-100'
      }`}
      style={{ 
        WebkitTapHighlightColor: 'transparent', 
        touchAction: 'manipulation' 
      }}
    >
      <span className="relative z-10 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </span>
    </Button>
  );
}