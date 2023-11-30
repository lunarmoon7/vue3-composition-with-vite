<script setup lang="ts">
import { reactive, watch } from 'vue'

const user = reactive({
  name: 'coggie',
  age: 18
})

// 추가 설정이 없다면 객체는 참조로 전달된다. -> 감시하지 못한다.
// 세 번째 인자로 deep: true를 전달하면 객체의 모든 속성을 감시한다.
// 특정 속성의 변경만 감시하려면
// 첫 번째 인자로 객체의 특정 속성을 반환하는 콜백함수를 전달하면 된다.

// reactive로 선언한 반응형 데이터는 deep: true를 사용하지 않아도 된다.
// 또한, 첫 번째 인자로 데이터 자체를 넘기면 된다.
watch(user, (newVal) => {
  console.log(newVal)
})

console.log(user.name, user.age)
</script>

<template>
  <input
    v-model="user.name"
    type="text" />
  <h1>{{ user.name }}</h1>
  <h2></h2>
</template>

<style></style>
