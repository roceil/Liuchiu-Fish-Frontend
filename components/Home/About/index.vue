<script lang="ts" setup>
import { contentList } from '~/constants'
</script>

<template>
  <div class="w-full bg-[#FDFCF6] bg-net-bg-sm md:bg-net-bg-sm">
    <div class="container relative flex justify-center py-[60px] md:max-w-[1280px] md:py-[100px]">
      <h2 class="serif absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold md:hidden">
        關於小琉球
      </h2>
      <h2 class="title serif absolute left-[86px] top-0 hidden translate-y-[-20px] text-[40px] font-bold tracking-[1rem] md:block">
        關於小琉球
      </h2>

      <ul class="w-full space-y-12 md:max-w-[650px] md:space-y-[116px] lg:max-w-[769px]">
        <li
          v-for="(content, index) in contentList"
          :key="content.title"
          class="w-full pt-[112px] md:w-[450px] md:py-10 lg:w-[569px]"
          :class="[
            index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto',
          ]"
        >
          <div
            class="relative w-full space-y-2 rounded-xl bg-white p-5 "
            :class="index % 2 === 0 ? 'md:pl-20 md:pr-10' : 'md:pl-10 md:pr-20'"
          >
            <p class="text-xl font-bold text-primary-700">
              {{ content.title }}
            </p>

            <p class="text-sm leading-[25px] md:text-base">
              {{ content.description }}
            </p>

            <!-- 裝飾用圖片 -->
            <div
              class="absolute left-1/2 top-4 size-[120px] -translate-x-1/2 -translate-y-full md:top-1/2 md:size-[250px] md:-translate-y-1/2"
              :class="[
                index % 2 === 0
                  ? 'md:left-[-80px] md:-translate-x-1/2'
                  : 'md:left-auto md:right-[-80px] md:translate-x-1/2',
              ]"
            >
              <NuxtImg
                :src="content.images"
                :alt="content.title"
                class="size-full rounded-full border-2 border-primary-700 bg-white object-cover"
              />

              <!-- 裝飾用 Tag -->
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 border-x-2 border-primary-700 bg-primary-50 px-3 font-bold text-primary-700 ">0{{ index + 1 }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>
