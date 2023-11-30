<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    increase() {
      this.count++
    }
  }
})
</script>

<template>
  <h1 @click="increase">{{ count }}</h1>
</template>
