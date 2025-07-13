import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTheme = create(
  persist(
    (set) => ({
      theme: 'light', // Always default to light theme
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