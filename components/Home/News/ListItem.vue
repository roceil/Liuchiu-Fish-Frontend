<script lang="ts" setup>
import type { News } from '~/types'

defineProps<{
  newsList: News[]
}>()
</script>

<template>
  <li
    v-for="item in newsList"
    :key="item.id"
    class="group"
  >
    <NuxtLink
      :to="`/news/${item.id}`"
      class="block rounded py-3 transition-all duration-300 md:px-3 md:py-4 md:group-hover:bg-neutral-50"
    >
      <div class="flex space-x-3 md:space-x-6">
        <div class="shrink-0">
          <NewsTag :tag="item.tag" />
        </div>

        <div class="w-full items-center justify-between space-y-1 md:flex md:space-y-0">
          <p class="min-w-full max-w-[230px] truncate text-sm transition-all duration-300 sm:max-w-none md:min-w-0 md:text-base md:group-hover:text-primary-800">
            {{ item.title }}
          </p>
          <span class="text-xs text-neutral-400 md:text-sm">
            {{ item.date }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
