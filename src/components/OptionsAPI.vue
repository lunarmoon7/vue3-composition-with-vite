<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    // HTML 요소에 연결된 ref는 this.$refs로 접근할 수 있습니다.
    if (this.$refs.inputEl) {
      ;(this.$refs.inputEl as HTMLInputElement).focus()
    }
  }
})
</script>

<template>
  <input ref="inputEl" />
</template>

<style></style>
