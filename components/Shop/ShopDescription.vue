<script lang="ts" setup>
import type { ProductIntro } from '~/services/supabase/useProducts'

defineProps<{
  productIntro: ProductIntro[] | undefined
}>()
</script>

<template>
  <li
    v-for="(intro, index) in productIntro"
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
        :src="intro.subImage as string"
        alt="subImage"
        class="size-full object-cover"
      />
    </div>
    <div class="mt-3 md:mt-0 md:flex md:flex-col md:justify-center">
      <p class="text-left font-bold text-primary-950 md:text-lg">
        {{ intro.subTitle }}
      </p>
      <p class="mt-2 text-left text-sm font-normal text-neutral-600 md:mt-3 md:text-base">
        {{ intro.description }}
      </p>
    </div>
  </li>
</template>
