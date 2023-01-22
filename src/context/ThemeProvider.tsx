import { ReactNode, useState } from 'react';
import { ThemeContext, TThemeContext } from './ThemeContext';
import { Theme } from '../types/enums';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [saveTheme, setSaveTheme] = useState<Theme>(() => {
    if (!localStorage.getItem('theme')) return Theme.Light;
    return localStorage.getItem('theme') === Theme.Light ? Theme.Light : Theme.Dark;
  });

  const newTheme: TThemeContext = {
    theme: saveTheme,
    toggleTheme: () => {
      const nextTheme: Theme = saveTheme === Theme.Light ? Theme.Dark : Theme.Light;
      document.documentElement.setAttribute('data-theme', nextTheme);
      setSaveTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    },
  };

  return <ThemeContext.Provider value={newTheme}>{children}</ThemeContext.Provider>;
}
