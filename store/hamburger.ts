export const useHamburgerStore = defineStore('hamburger', () => {
  const isHamburgerMenuOpen = ref(false)

  function openHamburgerMenu() {
    isHamburgerMenuOpen.value = true
    document.body.style.overflowY = 'hidden'
  }
  function closeHamburgerMenu() {
    isHamburgerMenuOpen.value = false
    document.body.style.overflowY = 'auto'
  }

  return {
    isHamburgerMenuOpen,
    openHamburgerMenu,
    closeHamburgerMenu,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useHamburgerStore, import.meta.hot))
