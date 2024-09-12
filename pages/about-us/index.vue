<script lang="ts" setup>
const mountLinks = [
  {
    title: '沿革發展',
    link: 'history',
    icon: '/about-us/development.svg',
  },
  {
    title: '組織架構',
    link: 'structure',
    icon: '/about-us/organization.svg',
  },
  {
    title: '歷年獲獎',
    link: 'awards',
    icon: '/about-us/awards.svg',
  },
]

const historyCardList = [
  {
    number: '01',
    title: '漁會歷史',
    picture: '/about-us/history.png',
    pictureSm: '/about-us/history-sm.png',
    description: '琉球漁會成立初期',
  },
  {
    number: '02',
    title: '漁會現況',
    picture: '/about-us/now.png',
    pictureSm: '/about-us/now-sm.png',
    description: '潮間帶景觀｜照片由李益利先生提供',
  },
  {
    number: '03',
    title: '漁會發展',
    picture: '/about-us/scenery.png',
    pictureSm: '/about-us/scenery-sm.png',
    description: '琉球景觀｜照片由李益利先生提供',
  },
]

const leaderCardList = [
  {
    name: '洪文良',
    title: '理事長',
  },
  {
    name: '陳智雄',
    title: '常務監事',
  },
  {
    name: '李叔娟',
    title: '總幹事',
  },
]

const historyRef = ref<HTMLElement | null>(null)
const structureRef = ref<HTMLElement | null>(null)
const awardsRef = ref<HTMLElement | null>(null)

function scrollToSection(sectionId: string) {
  const refMap: { [key: string]: any } = {
    history: historyRef,
    structure: structureRef,
    awards: awardsRef,
  }

  const targetRef = refMap[sectionId]
  if (targetRef.value) {
    const headerHeight = document.getElementById('header')?.clientHeight
    const offset = headerHeight ?? 72
    const elementPosition = targetRef.value.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div class="index bg-primary-50">
    <div class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            關於琉漁
          </h1>
          <p class="text-sm text-neutral-400 md:text-base">
            漁會以保障漁民權益，提高漁民知識、技能，增加漁民生產收益，改善漁民生活，促進漁業現代化，並謀其發展為宗旨
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtImg
          src="/about-us/banner.svg"
          alt="aboutUsBanner"
          width="250"
          height="250"
          class="md:hidden"
        />

        <NuxtImg
          src="/about-us/banner.svg"
          alt="aboutUsBanner"
          width="500"
          height="500"
          class="hidden md:block"
        />
      </div>
    </div>

    <div class="bg-white">
      <!-- 錨點連結 -->
      <ul class="container flex justify-center py-6 md:pb-4 md:pt-[76px]">
        <li
          v-for="(link, index) in mountLinks"
          :key="link.title"
          class="group flex items-center"
        >
          <div class="p-3 transition-all duration-300 md:group-hover:scale-110">
            <div
              class="size-[60px] cursor-pointer md:size-[90px]"
              @click="scrollToSection(link.link)"
            >
              <NuxtImg
                :src="link.icon"
                :alt="link.title"
                class="cs-shadow-sm md:group-hover:cs-shadow-lg h-auto w-full rounded-full transition-all duration-300"
              />
            </div>
            <p class="mt-1 text-center text-sm font-bold md:mt-2 md:text-base">
              {{ link.title }}
            </p>
          </div>
          <div
            v-if="index < mountLinks.length - 1"
            class="mx-4 h-12 w-px bg-gray-200"
          />
        </li>
      </ul>

      <!-- 沿革發展 -->
      <div
        ref="historyRef"
        class="container w-full py-[60px] md:py-[100px]"
      >
        <!-- 標題 -->
        <AboutUsSectionTitle
          title="沿革發展"
          sub-title="History"
        />

        <ul class="mx-auto mt-10 space-y-5 md:max-w-[1280px]">
          <li
            v-for="(card) in historyCardList"
            :key="card.title"
          >
            <AboutUsHistoryCard
              :card-title="card.title"
              :card-number="card.number"
              :intro-picture="card.picture"
              :intro-picture-sm="card.pictureSm"
              :picture-description="card.description"
            >
              <div class="mt-6 h-[356px] w-full ring-1 md:ml-10 md:mt-0 md:w-[478px]">
                歷史沿革
              </div>
            </AboutUsHistoryCard>
          </li>
        </ul>
      </div>

      <!-- 組織架構 -->
      <div
        ref="structureRef"
        class="w-full rounded-tr-[40px] bg-primary-100 py-[60px] md:py-[100px]"
      >
        <div class="container">
          <!-- 標題 -->
          <AboutUsSectionTitle
            title="組織架構"
            sub-title="Organization"
          />

          <!-- 首長介紹 -->
          <div class="mt-10 w-full md:mx-auto md:mt-[60px] md:max-w-[1120px]">
            <h4 class="relative pl-3 text-lg font-bold md:text-xl">
              <div class="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded bg-primary-300 md:h-[30px] md:w-[6px]" />
              首長介紹
            </h4>

            <ul class="mt-4 w-full space-y-3 md:flex md:space-x-5 md:space-y-0">
              <li
                v-for="(card) in leaderCardList"
                :key="card.name"
                class="relative flex w-full items-center justify-center rounded-[20px] border-[3px] border-white bg-primary-50 px-[140px] py-12 md:px-[120px] md:py-16 lg:px-[142px]"
              >
                <div class="absolute left-4 top-4 flex items-center space-x-2 rounded-lg bg-neutral-100 px-3 py-1">
                  <div class="size-[6px] rounded-full bg-neutral-300 " />
                  <p class="text-sm text-neutral-500">
                    {{ card.title }}
                  </p>
                </div>
                <p class="shrink-0 text-xl font-bold tracking-wider text-primary-700 md:text-2xl">
                  {{ card.name }}
                </p>
              </li>
            </ul>
          </div>

          <!-- 組織架構 -->
          <div class="mt-10 w-full md:mx-auto md:max-w-[1120px]">
            <h4 class="relative pl-3 text-lg font-bold md:text-xl">
              <div class="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded bg-primary-300 md:h-[30px] md:w-[6px]" />
              組織架構
            </h4>

            <div class="mt-4 w-full">
              <NuxtImg
                src="/about-us/constructor-sm.svg"
                alt="organization"
                class="h-auto w-full md:hidden"
              />
              <NuxtImg
                src="/about-us/constructor-lg.svg"
                alt="organization"
                class="hidden h-auto w-full md:block"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 歷年獲獎 -->
      <div
        ref="awardsRef"
        class="container w-full py-[60px] md:py-[100px]"
      >
        <!-- 標題 -->
        <AboutUsSectionTitle
          title="歷年獲獎"
          sub-title="Awards"
        />

        <div class="mt-10 h-[536px] w-full rounded-xl ring-1">
          歷年獲獎
        </div>
      </div>
    </div>
  </div>
</template>
