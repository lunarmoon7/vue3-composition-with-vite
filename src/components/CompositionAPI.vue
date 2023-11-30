<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)

const increase = () => {
  count.value++
}

const double = computed(() => {
  return count.value * 2
})
</script>

<template>
  <button @click="increase">Increase</button>
  <h1>{{ count }}</h1>
  <h2>{{ double }}</h2>
</template>
