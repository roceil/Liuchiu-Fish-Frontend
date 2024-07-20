<script lang="ts" setup>
</script>

<template>
  <section class="index">
    <div class="w-full rounded-t-[48px] bg-[#F0F8FF] md:rounded-t-[100px] ">
      <div class="flex flex-col items-center px-4 pb-[120px] pt-[60px] md:pb-[160px] md:pt-[100px]">
        <h2 class="serif text-center text-3xl font-bold">
          最新消息
        </h2>

        <div class="cs-shadow-sm relative mt-10 w-full rounded-[20px] bg-white md:mt-20 md:flex md:max-w-[1060px] md:justify-center md:space-x-6 md:px-12 md:pb-[90px] md:pt-[60px]">
          <div class="flex justify-center pb-6 pt-10 md:pt-0">
            <div class=" space-y-2 ">
              <div class=" h-[154px] w-[271px] rounded-xl ring-1 md:size-[248px]" />

              <p class="w-full text-xs text-neutral-500 md:text-sm">
                琉球區漁會資訊 提供
              </p>
            </div>
          </div>

          <div class="md:w-full">
            <ul class="w-full border-y border-neutral-100 px-4 pb-[14px] pt-2 md:w-full md:rounded-lg md:border md:px-6">
              <li
                v-for="(item, index) in 4"
                :key="index"
                class="py-3 md:py-4"
              >
                <div class="flex space-x-3 md:space-x-6">
                  <div>
                    <div class="w-[76px] border-x-2 border-primary-700 bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                      琉漁小鋪
                    </div>
                  </div>

                  <div class="w-full items-center justify-between space-y-1 md:flex md:space-y-0">
                    <p class="text-sm md:text-base">
                      部分金融服務停機公告
                    </p>
                    <span class="text-xs text-neutral-400 md:text-sm">111 / 6 / 17</span>
                  </div>
                </div>
              </li>
            </ul>

            <div class="flex items-center justify-center pb-5 pt-3 md:justify-end md:pt-3">
              <button class="flex items-center py-2 font-bold text-primary-700">
                查看更多

                <div class="ml-2 size-6 rounded-full bg-primary-700" />
              </button>
            </div>

            <!-- 裝飾用 Tag -->
            <span class="cs-border-1_5 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded bg-white px-3 py-2 text-xs font-bold text-primary-700 md:px-5 md:py-3 md:text-sm">News</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
