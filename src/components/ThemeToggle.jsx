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

// import { Moon, Sun } from 'lucide-react';
// import { Button } from './ui/button';
// import { useTheme } from '@/store/theme';

// export function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <Button
//       onClick={toggleTheme}
//       className="group theme-toggle-button bg-transparent text-white transition-colors duration-200 focus:outline-none focus:ring-0"
//       size="icon"
//       variant="ghost"
//     >
//       {theme === 'light' ? (
//         <Moon className="h-5 w-5 text-white group-hover:text-secondary group-focus:text-white transition-colors duration-200" />
//       ) : (
//         <Sun className="h-5 w-5 text-white group-hover:text-secondary group-focus:text-white transition-colors duration-200" />
//       )}
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
      onClick={toggleTheme}
      className="group theme-toggle-button bg-transparent text-white focus:outline-none focus-visible:ring-0"
      size="icon"
      variant="ghost"
    >
      {theme === 'light' ? (
        <Moon
          className="h-5 w-5 text-white transition-colors duration-200 group-hover:text-secondary group-focus:text-white"
        />
      ) : (
        <Sun
          className="h-5 w-5 text-white transition-colors duration-200 group-hover:text-secondary group-focus:text-white"
        />
      )}
    </Button>
  );
}


