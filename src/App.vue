<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { LSKeys, Themes, useThemeStore } from './stores/theme'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const themeStore = useThemeStore()

watch(
  () => themeStore.current,
  (newTheme) => document.documentElement.setAttribute('data-theme', newTheme),
  {
    immediate: true,
  },
)

onMounted(() => {
  const saved = localStorage.getItem(LSKeys.PreferredTheme)

  if (saved) {
    themeStore.setTheme(saved as Themes)
  }
})
</script>

<template>
  <h1 class="heading">You did it!</h1>
  <p class="subheading">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <ThemeSwitcher />
</template>

<style scoped lang="scss">
@import 'styles/main.scss';
</style>
