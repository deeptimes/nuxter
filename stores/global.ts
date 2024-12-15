export const useStoreGLobal = defineStore('globalStore', () => {
  // state
  const loading = ref(false)

  return {
    loading,
  }
})

// HMR
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStoreGLobal, import.meta.hot))
