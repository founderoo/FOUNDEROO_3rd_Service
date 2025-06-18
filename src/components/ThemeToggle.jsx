// import { Moon, Sun } from 'lucide-react';
// import { Button } from './ui/button';
// import { useTheme } from '@/store/theme';

// export function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={toggleTheme}
//       className="text-white hover:text-secondary transition-colors"
//     >
//       {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
//     </Button>
//   );
// }
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/store/theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="group text-white transition-colors"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-white group-hover:text-secondary transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-white group-hover:text-secondary transition-colors" />
      )}
    </Button>
  );
}
