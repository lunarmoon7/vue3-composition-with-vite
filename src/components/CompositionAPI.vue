<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const count = ref(0)

const increase = () => {
  count.value++
}

const assign = () => {
  double.value = 8
}

const double = computed({
  // Getter
  get() {
    return count.value * 2
  },
  // Setter
  set(value: number) {
    count.value = value / 2
  }
})

// 첫 번째 인자는 감시하려는 참조 객체
watch(count, (newVal, oldVal) => {
  console.log(`newVal: ${newVal}, oldVal: ${oldVal}`)
})
</script>

<template>
  <button @click="increase">Increase</button>
  <button @click="assign">Assign</button>
  <h1>{{ count }}</h1>
  <h2>{{ double }}</h2>
</template>
