<script setup lang="ts">
import { useAttrs } from 'vue'

// 부모 컴포넌트에서 전달한 속성을 출력해보고 싶다면?
const attrs = useAttrs()

// props 사용하기
// defineProps({
//   modelValue: {
//     type: String,
//     required: true
//   }
// })

// props 더 쉽게 사용하기
// defineProps<{
//   modelValue: string
//   name?: string
//   active?: boolean
// }>()

// 부모 컴포넌트에서 전달한 데이터가 아닌 속성들을 상속하지 않도록 설정하기
defineOptions({
  inheritAttrs: false // 부모 컴포넌트의 속성을 상속하지 않는다.
})
// props에 기본값 추가하기
const props = withDefaults(
  defineProps<{
    modelValue: string
    name?: string
    active?: boolean
  }>(),
  {
    name: '',
    active: false
  }
)

// props에 접근하기
// defineProps를 props라는 변수에 저장해야 한다.
console.log(attrs, props.name, props.active, ' created!')

// emits 사용하기
const emit = defineEmits(['update:modelValue'])

// emits 분리하여 사용하기
// defineEmits를 emit이라는 변수에 먼저 할당해야 한다.
const inputHandler = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <!-- active가 true면, active라는 클래스 추가 -->
  <label :class="{ active: active }">
    {{ name }}
    <!-- input에 부모 컴포넌트에서 전달받은 속성들 추가하기 -->
    <!-- v-bind="$attrs" -->
    <input
      v-bind="$attrs"
      type="text"
      :value="modelValue"
      @input="inputHandler" />
  </label>
</template>

<style scoped>
.active {
  color: crimson;
}
</style>
