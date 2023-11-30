<script setup lang="ts">
import { ref, onMounted } from 'vue'

// ref에 타입을 전달할 때 제네릭을 사용한다.
// null일 수도 있고, HTMLInputElement일 수도 있다.
const inputEl = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (inputEl.value) {
    // inputEl.value는 HTMLInputElement이다.
    // ref의 타입 선언을 하지 않으면 에러가 발생한다.
    inputEl.value.focus()
  }
})
</script>

<template>
  <input ref="inputEl" />
</template>

<style></style>
