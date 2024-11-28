<script lang="ts" setup>
import type { Product } from '~/types'

defineProps<{
  product: Product | undefined
}>()
</script>

<template>
  <li
    v-for="(intro, index) in product?.intro"
    :key="intro.subTitle"
    class="container relative w-full bg-net-blue py-6 md:flex md:gap-x-10 md:space-x-0 md:rounded-[20px] md:p-[60px]"
    :class="[index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']"
  >
    <div class="absolute right-6 top-0 hidden h-10 w-6 md:block">
      <NuxtImg
        src="/shopping-mall/tag.svg"
        class="h-auto: w-full"
      />
    </div>
    <div class="h-[192px] w-full shrink-0 overflow-hidden rounded-lg md:h-[297px] md:w-[450px]">
      <NuxtImg
        v-for="subImage in intro.subImage"
        :key="subImage"
        :src="subImage"
        alt="subImage"
        class="size-full object-cover"
      />
    </div>
    <div class="mt-3 md:mt-0 md:flex md:flex-col md:justify-center">
      <p class="font-bold text-primary-950 md:text-lg">
        {{ intro.subTitle }}
      </p>
      <p class="mt-2 text-sm font-normal text-neutral-600 md:mt-3 md:text-base">
        {{ intro.description }}
      </p>
    </div>
  </li>
</template>
