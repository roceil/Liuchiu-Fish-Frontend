<script lang="ts" setup>
import { ShopFacebookUrl, contactData, friendLink, lineUrl } from '@/constants'
import { useSiteMetadata } from '@/composables/useMetaData'

useSiteMetadata({
  title: '便民服務',
})
</script>

<template>
  <div class="index bg-primary-50">
    <section class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            便民服務
          </h1>
          <p class="text-md text-neutral-400 md:text-2xl">
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
                  :key="phoneNumber.phone"
                  class="flex items-center space-x-2"
                >
                  <div class="size-4">
                    <Icon
                      :name="phoneNumber.icon"
                      class="size-full"
                    />
                  </div>
                  <a
                    :href="`tel:${phoneNumber.phone}`"
                    class="hover:underline"
                  >
                    {{ phoneNumber.phone }}
                  </a>
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
          <div class="mt-3 flex h-[216px] w-full items-center justify-center overflow-hidden rounded-lg md:h-[293px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0105302778725!2d120.38001367707696!3d22.353231240971397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e570bda2d179%3A0xcd1b08298e32ce95!2z55CJ55CD5Y2A5ryB5pyD!5e0!3m2!1szh-TW!2stw!4v1728829146005!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
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
                  <div class="size-4">
                    <Icon
                      name="mdi-light:phone"
                      class="size-full"
                    />
                  </div>
                  <a
                    href="tel:(08)861-3491"
                    class="hover:underline"
                  >
                    (08)861-3491
                  </a>
                </div>

                <div
                  class="flex items-center space-x-2"
                >
                  <div class="size-4">
                    <Icon
                      name="teenyicons:print-outline"
                      class="size-full"
                    />
                  </div>
                  <a
                    href="tel:(08)861-3492"
                    class="hover:underline"
                  >
                    (08)861-3492
                  </a>
                </div>
              </div>

              <p class="text-center text-sm tracking-wider text-neutral-950 md:text-base">
                週一到週日8:00~~17:00
              </p>
            </li>

            <li
              class="rounded-xl bg-neutral-50 text-sm md:w-1/2 md:text-base"
            >
              <p class="border-b border-neutral-100 py-2 text-center text-neutral-500">
                社群媒體
              </p>

              <div class="space-y-3 p-4 md:flex md:flex-col md:items-center md:py-6">
                <NuxtLink
                  :to="ShopFacebookUrl"
                  target="_blank"
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
                  :to="lineUrl"
                  target="_blank"
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
          <div class="">
            <NuxtMarquee
              :pause-on-hover="true"
              :speed="70"
              :gradient="true"
              gradient-width="20px"
              :auto-fill="true"
              class="mt-6 overflow-hidden"
            >
              <NuxtLink
                v-for="link in friendLink.slice(0, 8)"
                :key="link.title"
                :to="link.link"
                class="mr-4"
              >
                <div class="flex h-[100px] w-[253px] items-center justify-center rounded-xl bg-neutral-50 px-4">
                  <NuxtImg
                    :src="link.image"
                    :alt="link.title"
                    class="h-auto w-full "
                  />
                </div>
                <p class="mt-1 text-sm font-bold md:text-base">
                  {{ link.title }}
                </p>
              </NuxtLink>
            </NuxtMarquee>

            <NuxtMarquee
              :pause-on-hover="true"
              :speed="70"
              direction="right"
              :gradient="true"
              gradient-width="20px"
              :auto-fill="true"
              class="mt-6 overflow-hidden"
            >
              <NuxtLink
                v-for="link in friendLink.slice(8)"
                :key="link.title"
                :to="link.link"
                class="mr-4"
              >
                <div class="flex h-[100px] w-[253px] items-center justify-center rounded-xl bg-neutral-50 px-4">
                  <NuxtImg
                    :src="link.image"
                    :alt="link.title"
                    class="h-auto w-full "
                  />
                </div>
                <p class="mt-1 text-sm font-bold md:text-base">
                  {{ link.title }}
                </p>
              </NuxtLink>
            </NuxtMarquee>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
