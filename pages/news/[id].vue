<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import type { NewsData } from '~/services/supabase/useNews'
import { useSiteMetadata } from '@/composables/useMetaData'
import { stripHtml } from '@/lib/stripHtml'
import { useNewsStore } from '@/store/news'

// 路由守衛：如果公告訊息不存在，跳轉回 /news
definePageMeta({
  middleware: async (route) => {
    const newsStore = useNewsStore()
    const news = newsStore.newsList.find(news => news.id === Number(route.params.id))

    if (!news) {
      return navigateTo('/news')
    }
  },
})

const route = useRoute()
const newsStore = useNewsStore()

const renderNews = ref<NewsData | null>(null)
renderNews.value = newsStore.newsList.find(news => news.id === Number(route.params.id)) || null

useSiteMetadata({
  title: renderNews.value?.title,
  description: renderNews.value?.content ? stripHtml(renderNews.value.content) : '',
})
</script>

<template>
  <div class="container pb-10 pt-4 md:max-w-[840px] md:pt-[100px]">
    <ClientOnly>
      <Breadcrumb class=" py-2 tracking-wide text-neutral-500">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <a
                href="/"
              >
                首頁
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <a href="/news">
                訊息公告
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage class="text-primary-700">
              {{ renderNews?.title }}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </ClientOnly>

    <!-- 主訊息 -->
    <div class="mt-4 w-full rounded-lg bg-neutral-50 p-6 md:mt-6 md:p-20">
      <div class="border-b border-neutral-100 pb-6">
        <h1 class="serif text-2xl font-bold md:text-[30px]">
          {{ renderNews?.title }}
        </h1>

        <div class="mt-5 flex shrink-0 items-center space-x-5">
          <div
            class="border-x-2 border-primary-700 bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700"
            :style="renderNews?.unit?.style"
          >
            {{ renderNews?.unit?.name }}
          </div>

          <div class="text-sm text-neutral-400">
            {{ renderNews?.date }}
          </div>
        </div>
      </div>

      <div class="mt-6 space-y-6 md:mt-10 md:space-y-10">
        <div class=" w-full overflow-hidden rounded-lg">
          <NuxtImg
            :src="renderNews?.image_url"
            alt="newsImage"
            class="size-full object-cover"
            :placeholder="[32, 32, 80, 5]"
            loading="lazy"
            :draggable="false"
          />
        </div>
        <ClientOnly>
          <div class="ProseMirror">
            <p
              class="text-sm md:text-base"
              v-html="renderNews?.content"
            />
          </div>
        </ClientOnly>
      </div>
    </div>

    <!-- 切換按鈕 -->
    <!-- <div class="mt-4 flex justify-between text-sm text-neutral-950 md:text-base">
      <NuxtLink
        v-if="previousNews"
        :to="`/news/${previousNews.id}`"
        class="mr-auto py-2 duration-300 ease-in-out lg:hover:text-primary-700"
        :aria-disabled="!previousNews"
      >
        上一篇
      </NuxtLink>

      <NuxtLink
        v-if="nextNews"
        :to="`/news/${nextNews.id}`"
        class="ml-auto py-2 duration-300 ease-in-out lg:hover:text-primary-700"
        :aria-disabled="!nextNews"
      >
        下一篇
      </NuxtLink>
    </div> -->

    <div class="mt-8 flex justify-center">
      <NuxtLink
        href="/news"
        class="cs-border-1_5 rounded-lg px-6 py-3 font-bold text-primary-800 md:hover:text-primary-700"
      >
        返回最新消息一覽
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.ProseMirror h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

/* List styles */
.ProseMirror ul,
.ProseMirror ol {
  padding: 0 1rem;
  margin: 1.25rem 1rem 1.25rem 0.4rem;
}

.ProseMirror ul {
  list-style-type: disc;
}

.ProseMirror ol {
  list-style-type: decimal;
}

.ProseMirror li p {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}

/* Heading styles */
.ProseMirror h1,
.ProseMirror h2,
.ProseMirror h3,
.ProseMirror h4,
.ProseMirror h5,
.ProseMirror h6 {
  line-height: 1.1;
  text-wrap: pretty;
}

.ProseMirror h1,
.ProseMirror h2 {
  margin-top: 8px;
  margin-bottom: 8px;
}

.ProseMirror h1 {
  font-size: 1.4rem;
}

.ProseMirror h2 {
  font-size: 1.2rem;
}

.ProseMirror h3 {
  font-size: 1.1rem;
}

.ProseMirror .is-empty::before {
  color: #9ca3af;
  font-size: 14px;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
