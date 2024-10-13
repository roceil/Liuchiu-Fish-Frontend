<script lang="ts" setup>
import { watchOnce } from '@vueuse/core'
import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
  api.value = val
}

watchOnce(api, (api) => {
  if (!api)
    return

  totalCount.value = api.scrollSnapList().length
  current.value = api.selectedScrollSnap() + 1

  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})

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
    content: [
      {
        title: '民國十四年三月',
        description: '高雄州東港郡琉球庄漁業者獲准成立『琉球漁業組合』，會址設於琉球庄役場內。',
      },
      {
        title: '民國卅三年',
        description: '改制為『保證責任琉球漁業協同組合』。',
      },
      {
        title: '民國卅三年',
        description: '與林邊、佳冬、新園等地一同併入東港，成立東港漁業會，在琉球設辦事處。',
      },
      {
        title: '民國四十二年',
        description: '光復以後，地方人士為琉球漁業之發展及謀求漁民之福利，熱心籌劃聯繫，民國四十二年七月依照『台灣省各級漁會改進辦法』，成立『琉球區漁會』迄今。',
      },
    ],
  },
  {
    number: '02',
    title: '漁會現況',
    picture: '/about-us/now.png',
    pictureSm: '/about-us/now-sm.png',
    description: '潮間帶景觀｜照片由李益利先生提供',
    content: [
      {
        title: '會員概況',
        description: '現有甲類會員3742人、乙類會員76人、贊助會員121人，合計3,939人。漁船一至九噸69艘、十至十九噸78艘、廿至四十九噸239艘五十噸至99噸共計513艘，均為延繩釣漁船，分別在國內沿近海及國外基地關島、帛琉、密棟、雅加達、濱城、新加坡、普吉島、斯里蘭卡等基地作業。國內沿近海作業漁船所捕撈魚貨有鮪、旗、沙魚等種類。',
      },
      {
        title: '漁會營運現況',
        description: '本會因受環境地理影響無法設立魚市場，全部均駛往東港魚市場銷售，致本會無法收管理費，一切經濟來源均賴信用部營運收益以量入為出來維持會務。',
      },
      {
        title: '開放外海箱網養殖',
        description: '自民國83年開放琉球外海箱網養殖高經濟價值魚類如海鱺、紅魽、嘉臘、紅魚、石斑魚等，現海鱺己大量銷售日本作為生魚片：目前在琉球地區申請核准養殖戶計有四家。',
      },
    ],
  },
  {
    number: '03',
    title: '漁會發展',
    picture: '/about-us/scenery.png',
    pictureSm: '/about-us/scenery-sm.png',
    description: '琉球景觀｜照片由李益利先生提供',
    content: [
      {
        title: '小琉球觀光休閒漁業發展',
        description: '小琉球地理環境特殊，加強原有漁業，結合政府週休二日，本鄉己納入大鵬灣國家風景區，海上的發展更不可缺少。本鄉冬暖夏涼，年平均溫度二十四度，沿海約有一百七十餘種魚類，一百七十餘種珊瑚，海水清澈，無工業污染，嗣後以發展觀光休閒漁業，來增加漁會收益，以富麗漁村帶動小琉球觀光事業為目標。',
      },
    ],
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

const awardsHistoryList = [
  [{
    title: '112 年第十七屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '112 年海宴水產精品入圍',
    description: [
      '小琉球純魚鬆禮盒組(鬼頭刀、旗魚、鮪魚純魚鬆)',
    ],
  }, {
    title: '112 年度漁村青少年技藝傳承推廣教育計畫(南區)',
    description: [
      '食農教育作業組影片競賽-第三名',
    ],
  }, {
    title: '111 年第十六屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '111 年度獲頒農業部漁業署',
    description: [
      '優等漁會',
    ],
  }],
  [{
    title: '110 年第十五屆農金獎',
    description: [
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '109 年度漁村技藝培育推廣教育計畫(南區)',
    description: [
      '漁村在地食材料理競賽-第二名',
    ],
  }, {
    title: '109 年度漁村青少年技藝傳承推廣教育計畫(南區)',
    description: [
      '食農教育及漁業技藝競賽-優等',
    ],
  }, {
    title: '109 年第十四屆農金獎',
    description: [
      '漁會金融服務獎-甲等獎',
    ],
  }, {
    title: '108年第十三屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }],
  [{
    title: '107年第十二屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }, {
    title: '106年第十一屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '105年第十屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '104年第九屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
      '農業金融偏鄉服務獎入圍佳作',
    ],
  }, {
    title: '103年榮獲海洋奧斯卡',
    description: [
      '漁業資源永續面向',
      '兼顧漁業資源永續及經濟利用合理進行漁業管理'
    ],
  }],
  [{
    title: '103年第八屆農金獎',
    description: [
      '營運卓越獎戊組入圍',
    ],
  }, {
    title: '102年第七屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
      '農業信用保證業務績效獎-優等獎',
    ],
  }, {
    title: '101年第六屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }, {
    title: '100年第五屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎丙組-優等獎',
      '農業信用保證業務績效獎-優等獎',
    ],
  }, {
    title: '100年海宴水產精品',
    description: [
      '小琉球魚鬆禮盒（鬼頭刀、旗魚、鮪魚魚鬆）',
    ],
  }],
  [{
    title: '100年第三屆十大魅力漁港',
    description: [
      '奔向大海-小琉球漁港',
    ],
  }, {
    title: '99 年第二屆十大魅力漁港',
    description: [
      '樂活休閒-小琉球漁港',
    ],
  }, {
    title: '99 年度漁事推廣成果評鑑',
    description: [
      '第二名',
    ],
  }, {
    title: '98 年第三屆農金獎',
    description: [
      '營運卓越獎丙組-特優獎',
    ],
  }, {
    title: '95 年農金獎農漁會信用部經營績效競賽',
    description: [
      '信用業務營運卓越獎',
    ],
  }],
  [{
    title: '94 年農金獎農漁會信用部經營績效競賽',
    description: [
      '信用業務營運績效優良獎',
      '資產品質管理績效獎',
    ],
  }, {
    title: '93 年度農漁會信用部農貸服務績效暨降低逾放比競賽',
    description: [
      '農貸服務績效獎',
      '營運績效傑出獎',
    ],
  }],
]
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
            <template v-if="card.title === '漁會歷史'">
              <AboutUsHistoryCard
                :card-title="card.title"
                :card-number="card.number"
                :intro-picture="card.picture"
                :intro-picture-sm="card.pictureSm"
                :picture-description="card.description"
              >
                <div class="mt-6 w-full md:ml-10 md:mt-0 md:w-[478px]">
                  <ul class="space-y-5">
                    <li
                      v-for="(content) in card.content"
                      :key="content.title"
                    >
                      <div class="flex items-start space-x-3">
                        <div class="mt-1 size-2 rounded-full bg-primary-700" />
                        <h5 class="font-bold text-primary-700">
                          {{ content.title }}
                        </h5>
                      </div>
                      <p class="ml-5 mt-1 text-sm text-neutral-950">
                        {{ content.description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </AboutUsHistoryCard>
            </template>

            <template v-else>
              <AboutUsHistoryCard
                :card-title="card.title"
                :card-number="card.number"
                :intro-picture="card.picture"
                :intro-picture-sm="card.pictureSm"
                :picture-description="card.description"
              >
                <ul class="mt-6 w-full space-y-5 md:ml-10 md:mt-0 md:w-[478px] md:space-y-6">
                  <li
                    v-for="(content) in card.content"
                    :key="content.title"
                  >
                    <h5 class="font-bold text-primary-700">
                      {{ content.title }}
                    </h5>
                    <p class="mt-1 text-sm text-neutral-950">
                      {{ content.description }}
                    </p>
                  </li>
                </ul>
              </AboutUsHistoryCard>
            </template>
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

        <div class="relative mt-10 w-full md:mx-auto md:max-w-[1120px]">
          <!-- 裝飾星星 -->
          <div class="absolute bottom-0 left-1 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 md:block">
            <NuxtImg
              src="/about-us/star-single.svg"
              alt="star"
              class="h-auto w-full"
            />
          </div>
          <div class="absolute right-2 top-1 z-10 hidden size-12 -translate-y-1/2 translate-x-1/2 md:block">
            <NuxtImg
              src="/about-us/star-double.svg"
              alt="star"
              class="h-auto w-full"
            />
          </div>

          <!-- 輪播 -->
          <Carousel
            class="relative w-full "
            :opts="{
              align: 'start',
              loop: true,
            }"
            @init-api="setApi"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(historyAward, index) in awardsHistoryList"
                :key="index"
                class="basis-1/1 lg:basis-1/2"
              >
                <ul class="h-full w-[343px] rounded-xl border border-neutral-100 bg-neutral-50 p-4 md:w-[556px] md:p-10">
                  <li
                    v-for="(award) in historyAward"
                    :key="award.title"
                    class="px-3 py-4 md:p-6"
                  >
                    <div class="flex items-center space-x-2">
                      <!-- 裝飾點點 -->
                      <div class="relative size-3 rounded-full bg-primary-700">
                        <div class="absolute left-1/2 top-1/2 size-1 -translate-x-1/2  -translate-y-1/2 rounded-full bg-neutral-50" />
                      </div>

                      <!-- 獎項標題  -->
                      <h5 class="font-bold text-primary-700">
                        {{ award.title }}
                      </h5>
                    </div>

                    <ul class="mt-2 space-y-2 md:mt-4">
                      <li
                        v-for="(description) in award.description"
                        :key="description"
                        class="flex items-center space-x-2"
                      >
                        <div class="h-5 w-[3px] rounded-full bg-neutral-200" />
                        <p class="text-sm text-neutral-950 md:text-base">
                          {{ description }}
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious class="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-140%] rounded-full focus:bg-primary-50 lg:flex" />
            <CarouselNext class="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[140%] rounded-full focus:bg-primary-50 lg:flex" />
          </Carousel>

          <!-- 分頁條 -->
          <ul class="mt-10 flex items-center justify-center space-x-2">
            <li
              v-for="(_, index) in totalCount"
              :key="index"
            >
              <div
                class="h-[5px] rounded-full transition-all duration-300"
                :class="[
                  index + 1 === current
                    ? 'w-6 bg-primary-700'
                    : 'w-[14px] bg-neutral-200',
                ]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
