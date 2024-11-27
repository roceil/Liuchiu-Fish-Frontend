<script lang="ts" setup>
const props = defineProps<{
  cardTitle: string
  cardNumber: string
  introPicture: string
  introPictureSm: string
  pictureDescription: string
}>()
</script>

<template>
  <div class="rounded-xl bg-net-bg-sm-gray px-4 py-8 md:flex md:justify-center md:px-20 md:py-[60px]">
    <!-- 標題 -->
    <div class="flex justify-center">
      <div class="flex w-full max-w-[139px] items-center justify-center bg-neutral-200/50 py-[14.5px] md:h-[194px] md:w-[64px] md:max-w-none md:flex-col md:py-0">
        <span class="mr-2 font-black md:mr-0">{{ props.cardNumber }}</span>
        <NuxtImg
          src="/about-us/wave.svg"
          class="hidden w-full md:block"
        />
        <h4 class="vertical-text font-black text-primary-700 md:mt-3 md:text-lg md:tracking-[0.4em]">
          {{ props.cardTitle }}
        </h4>
      </div>
    </div>

    <!-- 圖片 -->
    <div class="mt-8 md:ml-[60px] md:mt-0 md:w-[478px]">
      <div class="h-[193px] w-full overflow-hidden rounded-lg md:h-[290px]">
        <NuxtImg
          :src="props.introPicture"
          class="hidden size-full object-cover md:block"
          :alt="props.cardTitle"
          format="webp"
        />
        <NuxtImg
          :src="props.introPictureSm"
          class="size-full object-cover md:hidden"
          :alt="props.cardTitle"
          format="webp"
        />
      </div>
      <p class="mt-2 text-xs text-neutral-500">
        {{ props.pictureDescription }}
      </p>
    </div>

    <!-- 內容 -->
    <slot />
  </div>
</template>

<style scoped>
@media (min-width: 991px) {
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
</style>
