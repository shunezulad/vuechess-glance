import { defineStore } from 'pinia'

export enum LSKeys {
  PreferredTheme = 'preferredTheme',
}

export enum Themes {
  Wood = 'wood',
  Minimal = 'minimal',
  Dark = 'dark',
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    current: Themes.Wood,
  }),
  actions: {
    setTheme(theme: Themes) {
      this.current = theme
      localStorage.setItem(LSKeys.PreferredTheme, theme)
    },
  },
})
