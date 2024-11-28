<script lang="ts" setup>
import type { Product } from '~/types'

defineProps<{
  randomProducts: Product[]
}>()
</script>

<template>
  <div class="">
    <NuxtImg
      src="/shopping-mall/footer-mask-sm.svg"
      class="size-full md:hidden"
    />
    <NuxtImg
      src="/shopping-mall/footer-mask.svg"
      class="hidden size-full md:block"
    />
    <div class="bg-neutral-50 py-10 ">
      <div class="container md:max-w-[1280px]">
        <div class="flex items-center space-x-2">
          <div class="h-5 w-1 rounded-full bg-primary-300" />
          <p class="py-2 text-xl font-bold tracking-wider">
            您可能會喜歡...
          </p>
        </div>

        <Carousel
          class="relative mt-6"
          :opts="{
            align: 'start',
            loop: true,
          }"
        >
          <CarouselContent>
            <CarouselItem
              v-for="randomProduct in randomProducts"
              :key="randomProduct.id"
              class="basis-1/1 lg:basis-1/4"
            >
              <NuxtLink
                :to="`/shopping-mall/${randomProduct.id}`"
                class="block h-[227px] w-[290px] pt-[1px]"
              >
                <div class="h-[162px] w-[290px] overflow-hidden rounded-xl md:h-[162px] md:w-[290px]">
                  <NuxtImg
                    :src="randomProduct.cover"
                    alt="randomProductCover"
                    class="size-full object-cover"
                  />
                </div>
                <div class="py-2">
                  <p class="font-bold text-primary-950">
                    {{ randomProduct.name }}
                  </p>
                  <p class="text-sm text-neutral-700">
                    NT$ {{ randomProduct.price }} / {{ randomProduct.unit }}
                  </p>
                </div>
              </NuxtLink>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious class="cs-border-1_5_icon absolute right-6 top-[-66px] hidden -translate-x-full !rounded-full focus:bg-primary-50 lg:flex" />
          <CarouselNext class="cs-border-1_5_icon absolute right-2 top-[-66px] hidden !rounded-full focus:bg-primary-50 lg:flex" />
        </Carousel>
      </div>
    </div>
  </div>
</template>
