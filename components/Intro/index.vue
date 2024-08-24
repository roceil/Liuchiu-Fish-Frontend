<script setup lang="ts">
const linksList = [
  {
    title: '琉漁小鋪',
    link: '/about',
    icon: 'icon-shop',
  },
  {
    title: '關於琉漁',
    link: '/products',
    icon: 'icon-about',
  },
  {
    title: '業務部門',
    link: '/events',
    icon: 'icon-department',
  },
  {
    title: '訊息公告',
    link: '/news',
    icon: 'icon-news',
  },
  {
    title: '便民服務',
    link: '/contact',
    icon: 'icon-service',
  },
]

function showImg(linkType: string) {
  switch (linkType) {
    case '琉漁小鋪':
      return '/intro/shop.svg'
    case '關於琉漁':
      return '/intro/about.svg'
    case '業務部門':
      return '/intro/group.svg'
    case '訊息公告':
      return '/intro/news.svg'
    case '便民服務':
      return '/intro/service.svg'
    default:
      return '/intro/shop.svg'
  }
}
</script>

<template>
  <section>
    <div class="mt-[-1px] bg-gradient-to-r from-[#D6E6FF] to-[#EDFAFE] pt-5">
      <div class="container py-10 md:pb-0 md:pt-[100px]">
        <div class="flex flex-col items-center md:py-[60px]">
          <h4 class="serif text-center text-2xl font-bold md:text-[30px]">
            認識琉球區漁會
          </h4>

          <ul class="mt-9 grid w-full grid-cols-3 md:flex md:max-w-[864px] md:justify-center">
            <li
              v-for="(links, index) in linksList"
              :key="index"
              class="group flex cursor-pointer flex-col items-center justify-center p-3 md:px-5"
            >
              <div class="cs-shadow-sm md:group-hover:cs-shadow-lg size-[90px] overflow-hidden rounded-full bg-white p-[21px] transition-all duration-300 md:size-[120px] md:p-7 md:group-hover:scale-110">
                <NuxtImg
                  :src="showImg(links.title)"
                  :alt="links.title"
                  class="size-full object-cover"
                />
              </div>

              <p class="mt-2 text-center text-sm font-bold md:mt-4 md:text-base">
                {{ links.title }}
              </p>
            </li>
          </ul>

          <div class="mt-9 flex items-center justify-center md:mt-[60px]">
            <Button>
              逛逛特產
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[-1px] h-[118px] w-full bg-wave-bottom-sm bg-cover bg-bottom bg-no-repeat md:bg-wave-bottom" />
  </section>
</template>
