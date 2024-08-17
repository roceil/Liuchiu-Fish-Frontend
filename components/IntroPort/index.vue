<script lang="ts" setup>
const portList = [
  {
    title: '小琉球漁港',
    description: '白沙尾為小琉球四大漁港之一(白沙尾、大福、漁福及海子口漁港)，位於小琉球北側。因漁船及民營交通船共用白沙尾港埠同一出入口，而民營交通船大多經營觀光航線，故白沙尾也成為由屏東東港進出小琉球的主要觀光港口。',
    images: '/introPort/1.png',
  },
  {
    title: '衫福漁港',
    description: '杉福漁港位於小琉球的西側，擁有多元且完整的海蝕地形，包括海蝕柱、海蝕凹壁與海蝕壺穴等，具備獨特的景觀及優美的海景。不僅是外地遊客踏浪的必訪景點，也是許多在地人的聚集之地，夏季時可見到孩童們在河堤上奔跑，在沙灘上戲水，形成一幅悠閒自在的純樸景色。',
    images: '/introPort/2.png',
  },
  {
    title: '漁福漁港',
    description: '漁福漁港位於小琉球嶼的東北方，距離舊琉球漁港的南面約1公里處的漁福村海岸上，目前有84艘利用天然珊瑚礁灣停泊的漁筏。 鄰近的著名景點還有在它上方的中澳沙灘和下方的龍蝦洞。',
    images: '/introPort/3.png',
  },
  {
    title: '天福漁港',
    description: '天福漁港為島上六個港口之一，位於琉球嶼的最南端，港口兩側為消波塊，海水相當潔淨清澈，更建有涼亭供遊客休憩賞景，隨處可見小漁船於岸邊停泊，非常適合旅人戲水、賞景及從事海釣等活動。',
    images: '/introPort/4.png',
  },
  {
    title: '琉球新漁港',
    description: '大福漁港位處於琉球鄉的東南方，行政區域屬於大福村，為琉球鄉主要港口之一，提供公營交通船及一般漁業作業船隻停泊之用。由於大福漁港主要為遠洋漁船之停泊地點，所以該地區特別具有漁業產業文化之風貌。',
    images: '/introPort/5.png',
  },
]
</script>

<template>
  <div class="container">
    <div class="py-[60px] md:py-[100px]">
      <!-- TODO:暫時的標題，看看要怎麼元件化 -->
      <div class="relative mx-auto flex h-[68px] w-[200px] items-center justify-center md:h-[96px] md:w-[266px]">
        <div class="absolute left-0 top-[3.43px] size-6 border-t border-black" />
        <div class="absolute left-[3.43px] top-0 size-6 border-l border-black" />
        <div class="absolute bottom-[3.43px] right-0 size-6 border-b border-black" />
        <div class="absolute bottom-0 right-[3.43px] size-6 border-r border-black" />

        <h2 class="serif text-3xl font-bold md:text-[40px]">
          漁港介紹
        </h2>
      </div>

      <ul class="mt-[64px] space-y-16 md:mt-[120px] md:grid md:grid-cols-12 md:gap-x-10 md:gap-y-[100px] md:space-y-0">
        <li
          v-for="(port) in portList"
          :key="port.title"

          class="group md:col-span-4"
        >
          <div class="relative min-h-[403px] w-full rounded-[20px] bg-neutral-50 px-6 py-10 md:min-h-[463px]">
            <!-- 漁港名稱 -->
            <div class="absolute left-1/2 top-0 h-[58px] w-[144px] -translate-x-1/2 -translate-y-10 rounded-[20px] bg-primary-100 md:opacity-0 duration-300 md:h-[83px] md:w-[192px] md:group-hover:translate-y-[-60px] md:group-hover:opacity-100  md:translate-y-0">
              <div class="relative flex size-full items-center justify-center">
                <NuxtImg
                  src="/introPort/polygon.svg"
                  alt="number"
                  class="absolute bottom-0 left-1/2 h-[16px] w-[23px] -translate-x-1/2 translate-y-3"
                />

                <p class="text-sm font-bold tracking-wider text-primary-800 md:text-base">
                  {{ port.title }}
                </p>
              </div>
            </div>

            <NuxtImg
              :src="port.images"
              :alt="port.title"
              class="w-full"
            />

            <p class="mt-4 text-sm leading-[1.8] text-neutral-700">
              {{ port.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
