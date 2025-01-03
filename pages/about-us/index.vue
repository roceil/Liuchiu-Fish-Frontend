<script lang="ts" setup>
import { watchOnce } from '@vueuse/core'
import Autoplay from 'embla-carousel-autoplay'
import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useSiteMetadata } from '@/composables/useMetaData'
import { useLeaders } from '~/services/supabase/useLeaders'
import { useAwards } from '~/services/supabase/useAwards'
import { historyCardList } from '@/constants'

interface AwardDetail {
  name: string
}

interface Award {
  id: number
  competitionName: string
  awardDetails: AwardDetail[]
  created_at: string
}

interface FormattedAward {
  title: string
  description: string[]
}

interface Leader {
  leaderName: string
  jobTitle: string
}

const { getLeaders } = useLeaders()
const { data: leadersData, error: leadersDataError } = await useAsyncData('leaders', () => getLeaders())

const { getAwards } = useAwards()
const { data: awardsData, error: awardsDataError } = await useAsyncData('awards', () => getAwards())

if (leadersDataError.value)
  console.error('leadersDataError', leadersDataError.value)

if (awardsDataError.value)
  console.error('awardsDataError', awardsDataError.value)

const renderLeaders = computed(() => {
  if (!leadersData.value)
    return []

  return leadersData.value as Leader[]
})

const renderAwards = computed(() => {
  if (!awardsData.value)
    return []

  // Note: 每 4 個獎項為一組
  const ITEMS_PER_GROUP = 4
  const formattedAwards: FormattedAward[][] = []
  let currentGroup: FormattedAward[] = []

  awardsData.value.forEach((award: Award) => {
    const formattedAward: FormattedAward = {
      title: award.competitionName,
      description: award.awardDetails.map(detail => detail.name),
    }

    currentGroup.push(formattedAward)

    if (currentGroup.length === ITEMS_PER_GROUP) {
      formattedAwards.push([...currentGroup])
      currentGroup = []
    }
  })

  // Note: 處理最後一組不足 4 個的情況
  if (currentGroup.length > 0) {
    formattedAwards.push([...currentGroup])
  }

  return formattedAwards
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

const historyRef = ref<HTMLElement | null>(null)
const structureRef = ref<HTMLElement | null>(null)
const awardsRef = ref<HTMLElement | null>(null)

useSiteMetadata({
  title: '｜關於琉漁',
  description: '民國十四年三月，高雄州東港郡琉球庄漁業者獲准成立『琉球漁業組合』，會址設於琉球庄役場內。民國三十年改制為『保證責任琉球漁業協同組合』。民國卅三年與林邊、佳冬、新園等地一同併入東港，成立東港漁業會，在琉球設辦事處。光復以後，地方人士為琉球漁業之發展及謀求漁民之福利，熱心籌劃聯繫，民國四十二年七月依照『台灣省各級漁會改進辦法』，成立『琉球區漁會』迄今。',
})
</script>

<template>
  <div class="index bg-primary-50">
    <div class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            關於琉漁
          </h1>
          <p class="text-md text-neutral-400 md:text-2xl">
            About Us
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
            <a
              :href="`#${link.link}`"
              class="block size-[60px] md:size-[90px]"
            >
              <NuxtImg
                :src="link.icon"
                :alt="link.title"
                class="cs-shadow-sm md:group-hover:cs-shadow-lg h-auto w-full rounded-full transition-all duration-300"
              />
            </a>
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
        id="history"
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
                :show-gallery="false"
              >
                <div class="mt-6 w-full md:ml-10 md:mt-0 md:w-[478px]">
                  <ul class="space-y-5">
                    <li
                      v-for="(content) in card.content"
                      :key="content.title"
                    >
                      <div class="flex items-start space-x-3">
                        <div class="mt-1 size-2 rounded-full bg-primary-700" />
                        <h5 class="font-bold text-primary-700 md:text-lg">
                          {{ content.title }}
                        </h5>
                      </div>
                      <p class="ml-5 mt-1 text-sm text-neutral-950 md:text-base">
                        {{ content.description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </AboutUsHistoryCard>
            </template>

            <template v-else-if="card.title === '琉球一隅'">
              <AboutUsHistoryCard
                :card-title="card.title"
                :card-number="card.number"
                :intro-picture="card.picture"
                :intro-picture-sm="card.pictureSm"
                :picture-description="card.description"
                :show-gallery="true"
              >
                <div class="mt-6 flex w-full items-center justify-center md:ml-10 md:mt-0 md:w-full">
                  <Carousel
                    class="w-full"
                    :opts="{
                      align: 'center',
                      loop: true,
                    }"
                    :plugins="[Autoplay({
                      delay: 4000,
                      stopOnInteraction: false,
                    })]"
                  >
                    <CarouselContent>
                      <CarouselItem
                        v-for="(item, index) in 8"
                        :key="index"
                        class="w-full md:basis-1/2 lg:basis-1/3"
                      >
                        <div class="size-full overflow-hidden rounded-lg">
                          <NuxtImg
                            :src="`/about-us/slide/${index + 1}.png`"
                            alt="history"
                            class="h-auto w-full"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
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
                :show-gallery="false"
              >
                <ul class="mt-6 w-full space-y-5 md:ml-10 md:mt-0 md:w-[478px] md:space-y-6">
                  <li
                    v-for="(content) in card.content"
                    :key="content.title"
                  >
                    <h5 class="font-bold text-primary-700 md:text-lg">
                      {{ content.title }}
                    </h5>
                    <p class="mt-1 text-sm text-neutral-950 md:text-base">
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
        id="structure"
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
              <div
                class="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded bg-primary-300 md:h-[30px] md:w-[6px]"
              />
              首長介紹
            </h4>

            <ul class="mt-4 w-full space-y-3 md:flex md:space-x-5 md:space-y-0">
              <li
                v-for="(leader) in renderLeaders"
                :key="leader.leaderName"
                class="relative flex w-full items-center justify-center rounded-[20px] border-[3px] border-white bg-primary-50 px-[140px] py-12 md:px-[120px] md:py-16 lg:px-[142px]"
              >
                <div class="absolute left-4 top-4 flex items-center space-x-2 rounded-lg bg-neutral-100 px-3 py-1">
                  <div class="size-[6px] rounded-full bg-neutral-300 " />
                  <p class="text-sm text-neutral-500">
                    {{ leader.jobTitle }}
                  </p>
                </div>
                <p class="shrink-0 text-xl font-bold tracking-wider text-primary-700 md:text-2xl">
                  {{ leader.leaderName }}
                </p>
              </li>
            </ul>
          </div>

          <!-- 組織架構 -->
          <div class="mt-10 w-full md:mx-auto md:max-w-[1120px]">
            <h4 class="relative pl-3 text-lg font-bold md:text-xl">
              <div
                class="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded bg-primary-300 md:h-[30px] md:w-[6px]"
              />
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
        id="awards"
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
                v-for="(historyAward, index) in renderAwards"
                :key="index"
                class="basis-1/1 lg:basis-1/2"
              >
                <ul
                  class="h-full w-[343px] rounded-xl border border-neutral-100 bg-neutral-50 p-4 md:w-[556px] md:p-10"
                >
                  <li
                    v-for="(award) in historyAward"
                    :key="award.title"
                    class="px-3 py-4 md:p-6"
                  >
                    <div class="flex items-center space-x-2">
                      <!-- 裝飾點點 -->
                      <div class="relative size-3 rounded-full bg-primary-700">
                        <div
                          class="absolute left-1/2 top-1/2 size-1 -translate-x-1/2  -translate-y-1/2 rounded-full bg-neutral-50"
                        />
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

            <CarouselPrevious
              class="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-140%] rounded-full focus:bg-primary-50 lg:flex"
            />
            <CarouselNext
              class="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[140%] rounded-full focus:bg-primary-50 lg:flex"
            />
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
