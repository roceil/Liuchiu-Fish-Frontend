<script lang="ts" setup>
import Title from '~/components/Title.vue'
</script>

<template>
  <section class="index">
    <div class="container max-w-[1312px] pb-[52px] pt-[108px] md:pb-[100px] md:pt-[160px]">
      <div class="relative flex flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-[#EEF1F2] to-[#FDFBFB] pb-10 pt-20 md:items-end md:px-[62px] lg:px-[113px]">
        <Title text="人氣特產" />

        <!-- 手機版商品介紹 -->
        <ul class="w-[295px] space-y-12 md:hidden">
          <li
            v-for="(item, index) in 3"
            :key="index"
            class="relative"
          >
            <div class="absolute -top-3 left-4 border-x-2 border-danger-200 bg-white/90 px-3 py-1">
              <p class="text-sm font-bold text-danger-200">
                熱銷 No. 1
              </p>
            </div>

            <div class="h-[162px] w-full rounded-xl ring-1" />

            <div class="pb-4 pt-2">
              <h3 class="font-bold">
                特及鮮魚肝
              </h3>

              <div class="mt-1 flex justify-between">
                <p>NT 300</p>
                <div class="flex items-center justify-center space-x-1">
                  <button>查看更多</button>
                  <div class="size-6 rounded-full bg-primary-700" />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <!-- 電腦版商品介紹 -->
        <div class="hidden h-[318px] w-[650px] md:block lg:w-[950px]">
          <Carousel
            class="relative pt-20"
            :opts="{
              align: 'start',
              loop: true,
            }"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(item, index) in 9"
                :key="index"
                class="basis-1/2 lg:basis-1/3"
              >
                <div class="flex h-[162px] w-[290px] items-center justify-center rounded-xl bg-slate-300">
                  {{ index }}
                </div>

                <div class="py-2">
                  <h3 class="font-bold">
                    特及鮮魚肝
                  </h3>

                  <div class="mt-1 flex justify-between">
                    <p>NT 300</p>
                    <div
                      class="items -center flex justify-center space-x-1"
                    >
                      <button>查看更多</button>
                      <div class="size-6 rounded-full bg-primary-700" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious class="absolute right-4 top-0 -translate-x-full !rounded-full" />
            <CarouselNext class="absolute right-0 top-0 !rounded-full" />
          </Carousel>
        </div>

        <div class="flex w-full justify-center">
          <Button
            class="mt-10 text-primary-700"
          >
            查看所有商品
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
