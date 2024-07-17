<script lang="ts" setup>

</script>

<template>
  <div class="container flex pb-[138px] md:pb-0 md:h-[calc(100dvh-143.48px)] w-full items-center justify-center bg-white">
    <div class="flex flex-col items-center justify-center md:flex-row md:space-x-[83px]">
      <!-- TODO:之後要換成 clip-path -->
      <div class="h-[280px] w-[273px] md:h-[645px] md:w-[796px]">
        <img
          src="/banner/main-bg.svg"
          class="hidden md:block"
        >

        <img
          src="/banner/main-sm.svg"
          class="md:hidden"
        >
      </div>

      <!-- TODO:要討論字體問題 -->
      <div class="relative md:h-[374px] md:w-[170px]">
        <img
          src="/banner/main-text.svg"
          class="hidden size-full md:block"
        >

        <img
          src="/banner/main-text-sm.svg"
          class="size-full md:hidden"
        >

        <BannerAnimatedMoreIndicator class="absolute  right-1/2 translate-x-1/2 translate-y-12" />
      </div>
    </div>
  </div>
</template>
