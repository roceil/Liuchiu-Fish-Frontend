<script lang="ts" setup>
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import { type NewsData, useNews } from '~/services/supabase/useNews'

const renderNewsList = ref<NewsData[] | []>([])
const allNewsList = ref<NewsData[] | []>([])
const { getNews } = useNews()
const { data, error } = await getNews()

if (error.value)
  console.error('error', error.value)

if (data.value) {
  allNewsList.value = data.value?.data || []
  renderNewsList.value = allNewsList.value
}

const newsTypes = [
  {
    id: 1,
    name: '所有消息',
  },
  {
    id: 2,
    name: '琉漁小鋪',
  },
  {
    id: 3,
    name: '輔導股',
  },
  {
    id: 4,
    name: '會務股',
  },
  {
    id: 5,
    name: '推廣股',
  },
  {
    id: 6,
    name: '信用部',
  },
]

const currentOrganization = ref(1)

function handleOrganizationChange(organizationId: number) {
  currentOrganization.value = organizationId

  if (organizationId === 1) {
    renderNewsList.value = allNewsList.value
    return
  }

  renderNewsList.value = allNewsList.value.filter(news =>
    news.unit?.key === organizationId,
  )
}
</script>

<template>
  <div class="bg-primary-50">
    <section class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            訊息公告
          </h1>
          <p class="text-sm text-neutral-400 md:text-base">
            News
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtImg
          src="/news/banner-sm.svg"
          alt="aboutUsBanner"
          width="250"
          height="250"
          class="md:hidden"
        />

        <NuxtImg
          src="/news/banner.svg"
          alt="aboutUsBanner"
          width="500"
          height="500"
          class="hidden md:block"
        />
      </div>
    </section>

    <section class="rounded-t-[40px] bg-white pl-4 md:py-20">
      <div class="pt-10 md:container md:rounded-[20px] md:bg-neutral-50 md:p-20">
        <!-- 選項按鈕 -->
        <div class="">
          <ul class="flex space-x-2 overflow-x-scroll pb-3 pl-1 pt-1 md:overflow-auto">
            <li
              v-for="(type) in newsTypes"
              :key="type.id"
              class="shrink-0"
            >
              <button
                class="cs-border-1_5 hover:cs-border-1_5:hover text-primary-800 md:hover:bg-primary-600 rounded-lg px-5 py-3 font-bold tracking-widest duration-300 ease-in-out focus:text-white md:hover:text-white"
                :class="type.id === currentOrganization ? 'bg-primary-800 text-white' : ''
                "
                @click="handleOrganizationChange(type.id)"
              >
                {{ type.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- 文章列表 -->
        <div class="cs-shadow-sm mt-8 rounded-lg bg-white pr-4 md:mt-10 md:pr-0">
          <ul class="py-4 md:py-6">
            <li
              v-for="(news) in renderNewsList"
              :key="news.id"
              class=""
            >
              <routerLink
                :to="`/news/${news.id}`"
                class="flex cursor-pointer space-x-3 px-4 py-3 md:items-center md:space-x-6 md:px-6 md:py-4 md:hover:bg-neutral-50"
              >
                <div class="shrink-0">
                  <div
                    class=" border-x-2 px-3 py-1 text-xs font-bold"
                    :style="news.unit?.style"
                  >
                    {{ news.unit?.name }}
                  </div>
                </div>

                <div class="h-[43px] w-[70%] space-y-1 sm:w-[80%] md:flex md:w-full md:items-center md:justify-between">
                  <p class="truncate text-sm md:text-balance ">
                    {{ news.title }}
                  </p>
                  <p class="text-sm text-neutral-400">
                    {{ news.date }}
                  </p>
                </div>
              </routerLink>
            </li>
          </ul>
        </div>
      </div>

      <Pagination
        v-slot="{ page }"
        :total="100"
        :sibling-count="1"
        show-edges
        :default-page="1"
        class="mt-8 pb-10 md:container hidden"
      >
        <PaginationList
          v-slot="{ items }"
          class="flex items-center justify-center gap-1"
        >
          <PaginationPrev class="disabled:text-neutral-200" />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <button
                class="text-primary-950 size-10 rounded-full border-none p-0"
                :class="item.value === page ? 'bg-primary-100' : 'bg-white'"
              >
                {{ item.value }}
              </button>
            </PaginationListItem>
            <PaginationEllipsis
              v-else
              :key="item.type"
              :index="index"
            />
          </template>

          <PaginationNext class="disabled:text-neutral-200" />
        </PaginationList>
      </Pagination>
    </section>
  </div>
</template>
