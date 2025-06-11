import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTheme = create(
  persist(
    (set) => ({
      theme: typeof window !== 'undefined' 
        ? window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
        : 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme-storage',
    }
  )
);