<script lang="ts" setup>
import lottie from 'lottie-web'
import firstLoading from '~/assets/lottie/firstLoading.json'

import { useLoadingState } from '@/composables/useLoadingState'

const { setAnimationShown } = useLoadingState()

const wholeContainer = ref<HTMLDivElement>()
const lottieContainer = ref<HTMLDivElement>()

onMounted(() => {
  document.body.style.overflowY = 'hidden'

  // 初始化 Lottie 動畫
  lottie.loadAnimation({
    container: lottieContainer.value!,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: firstLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  })

  // 1.5秒後背景改為透明
  setTimeout(() => {
    wholeContainer.value!.style.backgroundColor = 'transparent'
  }, 1500)

  // 4秒後關閉 Loading 並移除元件
  setTimeout(() => {
    document.body.style.overflowY = 'auto'
    setAnimationShown()
  }, 4000)
})
</script>

<template>
  <div
    ref="wholeContainer"
    class="fixed inset-0 z-50 bg-white"
  >
    <div class="absolute inset-0 h-screen w-screen">
      <div
        ref="lottieContainer"
        class="size-full shrink-0"
      />
    </div>
  </div>
</template>
