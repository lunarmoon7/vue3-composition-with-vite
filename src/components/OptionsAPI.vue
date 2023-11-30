<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double: {
      // Getter
      get() {
        return this.count * 2
      },
      // Setter
      set(value: number) {
        this.count = value / 2
      }
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log(`newVal: ${newVal}, oldVal: ${oldVal}`)
    }
  },
  methods: {
    increase() {
      this.count++
    },
    assign() {
      this.double = 8
    }
  }
})
</script>

<template>
  <button @click="increase">Increase</button>
  <button @click="assign">Assign</button>
  <h1>{{ count }}</h1>
  <h2>{{ double }}</h2>
</template>
