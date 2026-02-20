<!-- components/ThemeSwitcher.vue -->
<script setup lang="ts">
import { Themes, useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <select v-model="themeStore.current" @change="themeStore.setTheme(themeStore.current)">
    <option @value="Themes.Wood">Wood</option>
    <option @value="Themes.Minimal">Minimal</option>
    <option @value="Themes.Dark">Dark</option>
  </select>
</template>
