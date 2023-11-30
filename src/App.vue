<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from './store/movie'

const movieStore = useMovieStore()
const title = ref('')

const findMovieHandler = async (title: string) => {
  await movieStore.fetchMovies(title)
}

const resetMovieHandler = () => {
  title.value = ''
  movieStore.$reset() /// movieStore가 가지는 상태 초기화 (내장 함수)
}
</script>

<template>
  <div>
    <h1>Search Movie!!!😛</h1>
    <input
      v-model="title"
      @keydown.enter="findMovieHandler(title)" />
    <ul>
      <li
        v-for="movie in movieStore.filteredMovies"
        :key="movie.imdbID">
        {{ movie.Title }}
        {{ movie.Year }}
      </li>
    </ul>
    <button @click="findMovieHandler(title)">Search</button>
    <button @click="resetMovieHandler">reset</button>
  </div>
</template>
