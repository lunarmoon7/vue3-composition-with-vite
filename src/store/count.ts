// 하나의 pinia 모듈이 된다.

import { defineStore } from 'pinia'

// 첫 번째 인자는 store의 이름
// 두 번째 인자는 객체(state, getters, actions)를 반환하는 함수
export const useCountStore = defineStore('count', {
  state: () => ({
    count: 1
  }),
  getters: {
    // 인자로 state를 받는다.
    double(state) {
      return state.count * 2
    }
  },
  // pinia는 mutations가 없다.
  // 따라서, actions에서 state를 변경할 수 있다.
  actions: {
    // this로 state, getters에 접근할 수 있다.
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    }
  }
})
