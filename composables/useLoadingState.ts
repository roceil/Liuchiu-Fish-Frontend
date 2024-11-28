export function useLoadingState() {
  // 使用 useState 來確保 SSR 兼容性
  const hasShownAnimation = useState('hasShownAnimation', () => false)

  onMounted(() => {
    if (typeof window !== 'undefined') {
      hasShownAnimation.value = sessionStorage.getItem('hasShownAnimation') === 'true'
    }
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
