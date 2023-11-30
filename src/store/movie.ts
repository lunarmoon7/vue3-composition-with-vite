import { defineStore } from 'pinia'

export type Movies = Movie[]
export interface Movie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies
  }),
  getters: {
    filteredMovies(state) {
      return state.movies
        .filter((movie) => parseInt(movie.Year) > 2010)
        .sort((a, b) => Number(b.Year) - Number(a.Year)) // 내림차순 정렬 (b-a), 오름차순 정렬(a-b)
    }
  },
  actions: {
    async fetchMovies(title: string) {
      const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`)
      const { Search } = await res.json()

      this.movies = Search
    }
  }
})
