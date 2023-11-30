<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  inheritAttrs: false, // 부모 컴포넌트의 속성을 상속하지 않는다.
  props: {
    // App.vue에서 v-model로 바인딩한 title이 modelValue로 들어온다.
    modelValue: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'], // Custom Event 등록

  // props의 경우 this 키워드에 바로 바인딩이 되기 때문에
  // this.$props로 접근할 필요가 없다.
  // this.name, this.active로 접근해도 된다.
  created() {
    console.log(this.$props.name, this.$props.active)
  },
  methods: {
    inputHandler(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    }
  }
})
</script>

<template>
  <!-- active가 true면, active라는 클래스 추가 -->
  <label :class="{ active: active }">
    {{ name }}
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
