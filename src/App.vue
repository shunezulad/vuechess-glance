<script setup lang="ts">
import { onMounted, ref } from 'vue'

const foo = ref([1, 2, 3])

function update() {
  foo.value.push(9)
}

onMounted(() => {
  update()
})
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
    {{ foo }}
  </p>
</template>

<style scoped></style>
