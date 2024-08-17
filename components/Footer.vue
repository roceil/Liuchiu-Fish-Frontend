<script lang="ts" setup>
const footerLinks = [
  {
    title: '琉漁小舖',
    links: [
      { text: '所有商品', url: '#' },
      { text: '禮盒專區', url: '#' },
      { text: '人氣特產', url: '#' },
    ],
  },
  {
    title: '關於琉漁',
    links: [
      { text: '沿革發展', url: '#' },
      { text: '組織架構', url: '#' },
      { text: '歷年進度', url: '#' },
    ],
  },
  {
    title: '業務部門',
    links: [
      { text: '輔導股', url: '#' },
      { text: '會務股', url: '#' },
      { text: '推廣股', url: '#' },
      { text: '信用部', url: '#' },
    ],
  },
  {
    title: '便民服務',
    links: [
      { text: '(08)861-3491', url: 'tel:+88688613491', icon: 'phone' },
      { text: '(08)861-3492', url: 'tel:+88688613492', icon: 'fax' },
      { text: '929 屏東縣琉球鄉本福村中山路 231 號', url: 'https://maps.google.com/?q=929 屏東縣琉球鄉本福村中山路 231 號', icon: 'location' },
      { text: 'FB 粉絲專頁', url: '#', icon: 'facebook' },
    ],
  },
]
</script>

<template>
  <div class="border-t border-neutral-100">
    <div class="container items-start justify-between px-5 py-12 md:flex md:px-0 md:py-[60px]">
      <div class="flex flex-col">
        <NuxtImg
          src="/logo.svg"
          class="mr-6 hidden h-12 w-[210px] md:block"
        />
        <NuxtImg
          src="/logo-sm.svg"
          class="h-[38px] w-[171px] md:hidden"
        />
        <div class="mt-[53px] hidden flex-col text-xs text-neutral-500 md:flex space-y-1">
          <span>Copyright © 琉球區漁會 2024｜All Rights Reserved.</span>
          <span>Illustration made by Design.AI</span>
        </div>
      </div>

      <!-- 電腦版 Footer 連結 -->
      <ul class=" hidden space-x-10 md:flex">
        <li
          v-for="section in footerLinks"
          :key="section.title"
          class="flex min-w-[85px] flex-col"
        >
          <h3 class="mb-4 text-sm font-bold text-primary-700">
            {{ section.title }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="link in section.links"
              :key="link.text"
              class="text-sm"
            >
              <a
                :href="link.url"
                class="flex items-center hover:text-primary-800"
              >
                <!-- <span
                  v-if="link.icon"
                  class="mr-2"
                >
                  {{ link.icon === 'phone' ? '📞' : link.icon === 'fax' ? '📠' : link.icon === 'location' ? '📍' : '📘' }}
                </span> -->
                {{ link.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <!-- 手機版 Footer 連結 -->
      <ul class="mt-9 flex flex-col space-y-6 md:hidden">
        <li
          v-for="section in footerLinks"
          :key="section.title"
          class="flex flex-col"
        >
          <h3 class="mb-2 text-sm font-bold text-primary-700">
            {{ section.title }}
          </h3>
          <ul class="space-y-1">
            <li
              v-for="link in section.links"
              :key="link.text"
              class="text-sm"
            >
              <a
                :href="link.url"
                class="flex items-center hover:text-primary-800"
              >
                <!-- <span
                  v-if="link.icon"
                  class="mr-2"
                >
                  {{ link.icon === 'phone' ? '📞' : link.icon === 'fax' ? '📠' : link.icon === 'location' ? '📍' : '📘' }}
                </span> -->
                {{ link.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="mt-[53px] flex flex-col justify-center space-y-1 text-center text-xs text-neutral-500 md:hidden">
        <span>Copyright © 琉球區漁會 2024</span>
        <span>All Rights Reserved.</span>
        <span>Illustration made by Design.AI</span>
      </div>
    </div>
  </div>
</template>
