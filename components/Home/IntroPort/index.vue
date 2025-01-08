<script lang="ts" setup>
import CardContainer from '~~/components/ui/card-3d/CardContainer.vue'
import CardBody from '~~/components/ui/card-3d/CardBody.vue'
import CardItem from '~~/components/ui/card-3d/CardItem.vue'

const portList = [
  {
    title: '小琉球漁港',
    description: '位於白沙尾鬧區，俗稱白沙觀光港，本會現址位於該港。小琉球漁港不僅是小琉球的海陸交通樞紐，更是一個充滿活力的景點，一進港映入眼簾的海洋世界防波堤和彩虹建築物，是大家對琉球的最初印象。您可以在此搭乘交通船往返台灣本島，或選擇搭乘娛樂船進行海上環島遊、海底半潛艇等水上活動，探索小琉球精彩的海洋世界 ; 亦或是透過公車及陸上交通工具環島，認識小琉球豐富的地形及生態。另港區設有免稅商店及旅客服務中心，提供您最完善的旅遊服務。漁港緊鄰中澳沙灘，您可以欣賞美麗的海景，也能換一個角度遠眺在琉球才能看到的高屏全景，並一邊享受海風拂面的愜意。',
    images: '/introPort/1.png',
  },
  {
    title: '衫福漁港',
    description: '位於小琉球的西側是您探索小琉球的必訪景點之一。這裡擁有獨特的海蝕地形，包括海蝕柱、海蝕凹壁與海石壺穴等、豐富的海洋生態，以及美麗的海岸風光。不僅是外地遊客踏浪必訪景點，也是許多在地人的聚集之地，可以在此漫步、戲水、浮潛及欣賞日落，享受大自然的美好。周邊還有許多景點可以一訪，讓您的旅程更加豐富多彩。',
    images: '/introPort/2.png',
  },
  {
    title: '漁福漁港',
    description: '位於小琉球與的東北方是您來小琉球不容錯過的景點之一！這裡不僅有寬廣的戲水區，適合親子同樂，周邊還有豐富的潮間帶生態資源，可以讓您近距離認識海洋生物。此外，中澳沙灘與龍蝦洞等景點也近在咫尺，讓您的旅程更加豐富多彩。',
    images: '/introPort/3.png',
  },
  {
    title: '天福漁港',
    description: '位於琉球嶼的最南端，又稱海子口漁港，港口兩側為消波塊，海水想當潔淨清澈。這裡是一個寧靜祥和的小漁港，遠離塵囂，提供您一個放鬆身心的好去處，有涼亭供遊客休憩賞景，隨處可見漁筏於岸邊停泊。沿著海岸線您可以從港邊漫步至厚石群礁，欣賞島上特有的自然景觀，並享受著海風拂面的愜意。',
    images: '/introPort/4.png',
  },
  {
    title: '琉球新漁港',
    description: '舊名為大福漁港，為處於琉球鄉的東南方，行政區域隸屬大福村，為琉球鄉主要港口之一，提供公營交通船、貨船及一般漁業作業船隻停泊之用。提供您便捷的海上交通服務，讓您輕鬆往返台灣本島，港區內設有舒適的候船區，讓您在候船時也能享受片刻的悠閒。由於琉球新漁港主要為遠洋漁船隻停泊地點，該港口特別具有漁業文化之風貌。港邊防波堤上特別妝點的整片壁畫，融合了小琉球的全島風光，也是該港口最具特色的景點。',
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

      <ul
        class="mt-[64px] space-y-16 md:mt-[120px] md:grid md:grid-cols-12 md:gap-x-10 md:gap-y-[100px] md:space-y-0"
        data-aos="fade-up"
      >
        <li
          v-for="(port) in portList"
          :key="port.title"
          class="group md:col-span-4"
        >
          <ClientOnly>
            <CardContainer>
              <CardBody class="size-full min-h-[403px] rounded-[20px] bg-neutral-50 px-6 py-10 md:min-h-[463px]">
                <CardItem :translate-z="70">
                  <NuxtImg
                    :src="port.images"
                    :alt="port.title"
                    class="h-[196px] w-full rounded-[10px] object-cover"
                  />
                </CardItem>

                <CardItem
                  :translate-z="60"
                  :translate-x="20"
                  class="mt-4"
                >
                  <p class="text-base font-bold tracking-wider text-primary-800 md:text-base">
                    {{ port.title }}
                  </p>
                </CardItem>

                <CardItem
                  :translate-z="70"
                  class="mt-4 text-sm leading-[1.8] text-neutral-700 md:text-base"
                >
                  {{ port.description }}
                </CardItem>
              </CardBody>
            </CardContainer>
          </ClientOnly>
        </li>
      </ul>
    </div>
  </div>
</template>
