<script lang="ts" setup>
const contactData = [
  {
    title: '會務股',
    contactPhone: [
      '(08)861-3491',
      '(08)861-3491',
    ],
  },
  {
    title: '輔導股',
    contactPhone: [
      '(08)861-1709',
      '(08)861-2394',
    ],
  },
  {
    title: '推廣部',
    contactPhone: [
      '(08)861-4470',
      '(08)861-4469',
    ],
  },
  {
    title: '信用部',
    contactPhone: [
      '(08)861-2512',
      '(08)861-1180',
      '(08)861-1473',
    ],
  },
]

const friendLink = [
  {
    title: '漁業署',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink1.png',
  },
  {
    title: '全國漁會',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink2.png',
  },
  {
    title: '農業金庫',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink3.png',
  },
  {
    title: '南濃中心',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink4.png',
  },
]
</script>

<template>
  <div class="index bg-primary-50">
    <section class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            便民服務
          </h1>
          <p class="text-sm text-neutral-400 md:text-base">
            Contact Us
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtImg
          src="/contact-us/banner-sm.svg"
          alt="aboutUsBanner"
          width="250"
          height="250"
          class="md:hidden"
        />

        <NuxtImg
          src="/contact-us/banner.svg"
          alt="aboutUsBanner"
          width="500"
          height="500"
          class="hidden md:block"
        />
      </div>
    </section>

    <section class="rounded-t-[40px] bg-white px-8 md:py-10">
      <div class="container">
        <!-- 琉球區漁會 -->
        <div class="border-b border-neutral-100 py-10 md:py-[60px]">
          <!-- 區塊標題 -->
          <div class="flex items-center space-x-3">
            <div class="h-[30px] w-[6px] rounded-full bg-primary-300" />
            <h2 class="text-2xl font-bold tracking-wide">
              琉球區漁會
            </h2>
          </div>
          <!-- 聯絡方式 -->
          <ul class="mt-6 space-y-4 md:flex md:gap-x-4 md:space-y-0">
            <li
              v-for="(data) in contactData"
              :key="data.title"
              class="rounded-xl bg-primary-50 text-sm md:w-1/4 md:text-base"
            >
              <p class="border-b border-primary-100 py-2 text-center text-primary-600">
                {{ data.title }}
              </p>

              <div class="flex flex-col items-center justify-center space-y-2 py-4 text-center">
                <div
                  v-for="(phoneNumber) in data.contactPhone"
                  :key="phoneNumber"
                  class="flex items-center space-x-2"
                >
                  <div class="size-4 ring-1">
                    Ic
                  </div>
                  <p>
                    {{ phoneNumber }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <!-- 營業時間 -->
          <div class="mt-3 rounded-xl bg-neutral-50 py-3">
            <p class="text-center text-sm tracking-wider text-neutral-500">
              週一到週五 8:00~12:00、13:00~17:00
            </p>
          </div>
          <!-- 地圖 -->
          <div class="mt-3 flex h-[216px] w-full items-center justify-center rounded-lg ring-1 md:h-[293px]">
            Map
          </div>
        </div>

        <!-- 琉漁小鋪 -->
        <div class="border-b border-neutral-100 py-10">
          <!-- 區塊標題 -->
          <div class="flex items-center space-x-3">
            <div class="h-[30px] w-[6px] rounded-full bg-primary-300" />
            <h2 class="text-2xl font-bold tracking-wide">
              琉漁小舖
            </h2>
          </div>
          <!-- 聯絡方式 -->
          <ul class="mt-6 space-y-4 md:flex md:gap-x-4 md:space-y-0">
            <li
              class="rounded-xl bg-neutral-50 text-sm md:w-1/2 md:text-base"
            >
              <p class="border-b border-neutral-100 py-2 text-center text-neutral-500">
                聯絡我們
              </p>

              <div class="flex flex-col items-center space-y-2 py-4 text-center text-neutral-950">
                <div
                  class="flex items-center space-x-2"
                >
                  <div class="size-4 ring-1">
                    Ic
                  </div>
                  <p>
                    (08)861-3491
                  </p>
                </div>

                <p>週一到週日8:00~~17:00</p>
              </div>
            </li>

            <li
              class="rounded-xl bg-neutral-50 text-sm md:w-1/2 md:text-base"
            >
              <p class="border-b border-neutral-100 py-2 text-center text-neutral-500">
                社群媒體
              </p>

              <div class="space-y-3 p-4 md:flex md:flex-col md:items-center md:py-6">
                <NuxtLink
                  to="/"
                  class="cs-border-1_5 flex items-center space-x-2 rounded-xl px-4 py-[13.5px] text-center text-sm font-bold tracking-wide text-primary-800 md:w-[279px]"
                >
                  <NuxtImg
                    src="/contact-us/fb.svg"
                    alt="Facebook"
                    width="24"
                    height="24"
                  />
                  <p>
                    琉漁小鋪粉專
                  </p>
                </NuxtLink>
                <NuxtLink
                  to="/"
                  class="cs-border-1_5_n_950 flex items-center space-x-2 rounded-xl px-4 py-[13.5px] text-center text-sm font-bold tracking-wide text-neutral-950 md:w-[279px]"
                >
                  <NuxtImg
                    src="/contact-us/line.svg"
                    alt="Line"
                    width="24"
                    height="24"
                  />
                  <p>
                    官方 Line
                  </p>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>

        <!-- 友站連結 -->
        <div class="py-10">
          <!-- 區塊標題 -->
          <div class="flex items-center space-x-3">
            <div class="h-[30px] w-[6px] rounded-full bg-primary-300" />
            <h2 class="text-2xl font-bold">
              友站連結
            </h2>
          </div>
          <!-- 各種連結 -->
          <ul class="mt-6 space-y-6 md:flex md:gap-4 md:space-y-0">
            <li
              v-for="(link) in friendLink"
              :key="link.title"
              class="space-y-1 md:w-1/4"
            >
              <div class="flex min-h-[100px] w-full items-center justify-center rounded-xl bg-neutral-50 px-14 py-6 text-sm">
                <NuxtImg
                  :src="link.image"
                  :alt="link.title"
                  class="size-full"
                />
              </div>

              <p class="text-sm font-bold">
                {{ link.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
