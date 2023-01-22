import { createContext } from 'react';
import { Theme } from '../types/enums';

export type TThemeContext = {
  theme: Theme;
  toggleTheme: () => Theme;
};

export const ThemeContext = createContext<TThemeContext>({
  theme: Theme.Light,
  toggleTheme: () => Theme.Dark,
});
