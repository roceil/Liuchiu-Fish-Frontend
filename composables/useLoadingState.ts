export function useLoadingState() {
  // 直接在創建 state 時檢查 sessionStorage
  const hasShownAnimation = useState('hasShownAnimation', () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hasShownAnimation') === 'true'
    }
    return false
  })

  const setAnimationShown = () => {
    hasShownAnimation.value = true
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasShownAnimation', 'true')
    }
  }

  return {
    hasShownAnimation,
    setAnimationShown,
  }
}
