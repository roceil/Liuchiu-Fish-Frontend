<script lang="ts" setup>
import BannerAnimatedMoreIndicator from './AnimatedMoreIndicator.vue'
</script>

<template>
  <section class="flex h-[733px] flex-col justify-between md:h-auto md:min-h-[728px] md:pb-0 md:pt-10">
    <div class="container flex flex-col items-center justify-center md:flex-row md:items-start md:space-x-10">
      <div class="h-[343px] w-[352px] md:mt-5 md:h-[536px] md:w-[950px]">
        <NuxtImg
          src="/banner/map-sm.svg"
          class="size-full md:hidden"
          alt="banner-map"
          draggable="false"
          loading="eager"
          formats="webp"
          priority
          fetchpriority="high"
        />

        <NuxtImg
          src="/banner/map.svg"
          class="hidden size-full md:block"
          alt="banner-map"
          draggable="false"
          loading="eager"
          formats="webp"
          priority
          fetchpriority="high"
        />
      </div>

      <div class="relative md:px-[46px]">
        <div class=" h-[131px] w-[295px] md:h-[501px] md:w-[198px]">
          <NuxtImg
            src="/banner/banner-text-sm.svg"
            class="size-full md:hidden"
            alt="banner-text"
          />

          <NuxtImg
            src="/banner/banner-text.svg"
            class="hidden size-full md:block"
            alt="banner-text"
          />
        </div>

        <BannerAnimatedMoreIndicator
          class="absolute right-1/2 translate-x-1/2 translate-y-12 md:inset-x-0 md:top-[478px] md:translate-x-0 md:translate-y-0"
        />
      </div>
    </div>

    <div
      class="mt-[60px] h-[120px] w-full bg-wave-top-sm bg-cover bg-top bg-no-repeat md:h-[72px] md:bg-wave-top lg:bg-cover"
    />
  </section>
</template>
