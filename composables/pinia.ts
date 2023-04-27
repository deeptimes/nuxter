export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 2,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
