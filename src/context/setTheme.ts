import { Theme } from '../types/enums';

export function setTheme() {
  const saveTheme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', saveTheme || Theme.Light);
}

// window.matchMedia('(prefers-color-scheme: dark)').matches ?
