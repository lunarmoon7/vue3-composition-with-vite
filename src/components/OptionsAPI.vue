<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    increase() {
      this.count++
    }
  }
})
</script>

<template>
  <button @click="increase">Increase</button>
  <h1>{{ count }}</h1>
  <h2>{{ double }}</h2>
</template>
