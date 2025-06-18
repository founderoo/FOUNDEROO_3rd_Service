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
    // <Button
    //   variant="ghost"
    //   size="icon"
    //   onClick={toggleTheme}
    //   className="group text-white transition-colors"
    // >
    //   {theme === 'light' ? (
    //     <Moon className="h-5 w-5 text-white group-hover:text-secondary transition-colors" />
    //   ) : (
    //     <Sun className="h-5 w-5 text-white group-hover:text-secondary transition-colors" />
    //   )}
    // </Button>
    <Button
  onClick={toggleTheme}
  className="theme-toggle-button bg-transparent text-white transition-colors duration-200"
  size="icon"
  variant="ghost"
>
  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
</Button>

  );
}
