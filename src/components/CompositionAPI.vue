<script setup lang="ts">
import { ref, onMounted } from 'vue'

// ref는 반응형 데이터를 만들어주는 함수.
// count는 참조 객체이다. 값을 수정하려면 .value를 사용해야 한다.
const count = ref(0)

// script 태그 내부가 created()와 동일하다.
console.log('created')

const increase = () => {
  count.value++
}

// mounted()와 동일하다.
onMounted(() => {
  console.log('mounted')
})
</script>

<!-- template은 OptionsAPI와 동일한 구조를 갖는다. -->
<template>
  <h1 @click="increase">{{ count }}</h1>
</template>
