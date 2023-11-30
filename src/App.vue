<script lang="ts">
import { defineComponent } from 'vue'
import CompositionAPI from './components/CompositionAPI.vue'

export default defineComponent({
  components: {
    // 사용하려는 컴포넌트 등록
    CompositionAPI
  },
  data() {
    return {
      title: ''
    }
  }
})
</script>

<template>
  <!-- 양방향 데이터 바인딩 v-model -->
  <CompositionAPI
    id="hello"
    v-model="title"
    name="coggie"
    class="hello"
    title="Hello World!"
    data-hello="world"
    active />
  <h1>{{ title }}</h1>
</template>
