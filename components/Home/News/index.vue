<script lang="ts" setup>
import { useNewsStore } from '@/store/news'
import { useNews } from '~/services/supabase/useNews'

const newsStore = useNewsStore()

const { getNews } = useNews()
const { data, error } = await useAsyncData('news', () => getNews())

if (error.value) {
  console.error('error', error.value)
}

if (data.value) {
  newsStore.setNewsList(data.value)
}
</script>

<template>
  <section>
    <div class="w-full rounded-t-[48px] bg-[#F0F8FF] md:rounded-t-[100px] ">
      <div class="flex flex-col items-center px-4 pb-[120px] pt-[60px] md:pb-[160px] md:pt-[100px]">
        <h2
          class="serif text-center text-3xl font-bold"
          data-aos="fade-up"
        >
          最新消息
        </h2>

        <div
          class="cs-shadow-sm relative mt-10 w-full rounded-[20px] bg-white md:mt-20 md:flex md:max-w-[1060px] md:justify-between md:px-10 md:pb-[90px] md:pt-[60px] lg:px-12"
          data-aos="fade-up"
          :data-aos-delay="100"
        >
          <!-- 裝飾用照片 -->
          <div class="flex justify-center pb-6 pt-10 md:pt-0">
            <div class=" space-y-2 ">
              <div class=" h-[154px] w-[271px] overflow-hidden rounded-xl md:size-[248px]">
                <NuxtImg
                  src="/home/news/decoration.jpg"
                  class="block size-full"
                  alt="News"
                />
              </div>

              <p class="w-full text-xs text-neutral-500 md:text-sm">
                琉球區漁會 提供
              </p>
            </div>
          </div>

          <!-- 最新消息列表 -->
          <div class="w-full md:w-[70%]">
            <ul class="w-full border-y border-neutral-100 px-4 pb-[14px] pt-2 md:min-h-[248px] md:w-full md:rounded-lg md:border md:px-3">
              <HomeNewsListItem
                :news-list="newsStore.newsList.slice(0, 6)"
              />
            </ul>

            <div class="flex items-center justify-center pb-5 pt-3 md:justify-end md:pt-3 ">
              <NuxtLink
                to="/news"
                class="group flex items-center py-2 pl-3 font-bold text-primary-700 transition-all duration-300 md:hover:text-primary-800 md:hover:ring-primary-800"
              >
                查看更多

                <div class="ml-2 flex size-6 items-center justify-center rounded-full bg-primary-700 transition-all duration-300 md:group-hover:bg-primary-800">
                  <Icon
                    name="mingcute:right-line"
                    class="text-white"
                  />
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- 裝飾用 Tag -->
          <span class="cs-border-1_5_tag absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded bg-white px-3 py-2 text-xs font-bold text-primary-700 md:px-5 md:py-3 md:text-sm">News</span>
        </div>
      </div>
    </div>
  </section>
</template>
