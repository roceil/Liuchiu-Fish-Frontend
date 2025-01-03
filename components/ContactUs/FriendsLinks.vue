<script lang="ts" setup>
import type { FriendLink } from '@/pages/contact-us/index.vue'

defineProps<{
  renderFriendLinks: FriendLink[] | null
}>()
</script>

<template>
  <div class="py-10">
    <!-- 區塊標題 -->
    <div class="flex items-center space-x-3">
      <div class="h-[30px] w-[6px] rounded-full bg-primary-300" />
      <h2 class="text-2xl font-bold">
        友站連結
      </h2>
    </div>

    <!-- 各種連結 -->
    <div class="">
      <NuxtMarquee
        :pause-on-hover="true"
        :speed="40"
        :gradient="true"
        gradient-width="20px"
        :auto-fill="true"
        class="mt-6 overflow-hidden"
      >
        <NuxtLink
          v-for="link in renderFriendLinks?.slice(0, 8)"
          :key="link.siteName"
          :to="link.siteLink"
          class="mr-4"
        >
          <div class="flex h-[100px] w-[253px] items-center justify-center rounded-xl bg-neutral-50 px-4">
            <NuxtImg
              :src="link.imageUrl"
              :alt="link.siteName"
              class="h-auto w-full "
            />
          </div>
          <p class="mt-1 hidden text-sm font-bold md:text-base">
            {{ link.siteName }}
          </p>
        </NuxtLink>
      </NuxtMarquee>

      <NuxtMarquee
        :pause-on-hover="true"
        :speed="40"
        direction="right"
        :gradient="true"
        gradient-width="20px"
        :auto-fill="true"
        class="mt-6 overflow-hidden"
      >
        <NuxtLink
          v-for="link in renderFriendLinks?.slice(8)"
          :key="link.siteName"
          :to="link.siteLink"
          class="mr-4"
        >
          <div class="flex h-[100px] w-[253px] items-center justify-center rounded-xl bg-neutral-50 px-4">
            <NuxtImg
              :src="link.imageUrl"
              :alt="link.siteName"
              class="h-auto w-full "
            />
          </div>
          <p class="mt-1 hidden text-sm font-bold md:text-base">
            {{ link.siteName }}
          </p>
        </NuxtLink>
      </NuxtMarquee>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
