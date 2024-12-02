<script lang="ts" setup>
import type { NewsData } from '~/services/supabase/useNews'

defineProps<{
  newsList: NewsData[]
}>()
</script>

<template>
  <li
    v-for="news in newsList"
    :key="news.id"
    class="group"
  >
    <NuxtLink
      :to="`/news/${news.id}`"
      class="block rounded py-3 transition-all duration-300 md:px-3 md:py-4 md:group-hover:bg-neutral-50"
    >
      <div class="flex items-center space-x-3">
        <div
          class=" min-w-20 border-x-2 px-3 py-1 text-center text-xs font-bold"
          :style="news.unit?.style"
        >
          {{ news.unit?.name }}
        </div>

        <div class="w-full items-center justify-between space-y-1 md:flex md:space-y-0">
          <p class="min-w-full max-w-[230px] truncate text-sm transition-all duration-300 sm:max-w-none md:min-w-0 md:max-w-[340px] md:text-base md:group-hover:text-primary-800 lg:max-w-[400px]">
            {{ news.title }}
          </p>
          <span
            class="text-xs text-neutral-400 md:text-sm"
            :style="{ fontVariantNumeric: 'tabular-nums' }"
          >
            {{ news.date }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
