<script lang="ts" setup>
import lottie from 'lottie-web'
import firstLoading from '~/assets/lottie/firstLoading.json'

const isLoading = ref(true)

const wholeContainer = ref<HTMLDivElement>()
const lottieContainer = ref<HTMLDivElement>()

onMounted(() => {
  document.body.style.overflowY = 'hidden'

  // 初始化 Lottie 動畫
  lottie.loadAnimation({
    container: lottieContainer.value!, // 指定容器
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: firstLoading, // 指定動畫數據
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  })

  // 3秒後背景改為透明
  setTimeout(() => {
    wholeContainer.value!.style.backgroundColor = 'transparent'
  }, 1500)

  // 3秒後關閉 Loading
  setTimeout(() => {
    document.body.style.overflowY = 'auto'
    isLoading.value = false
  }, 3000)
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
        class="size-full shrink-0 ring-1"
      />
    </div>
  </div>
</template>
