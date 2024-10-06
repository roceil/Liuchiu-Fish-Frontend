<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const router = useRoute()
const { id } = router.params
</script>

<template>
  <div class="pt-6 md:mx-auto md:max-w-[1092px]">
    <!-- 麵包屑 -->
    <div class="container">
      <Breadcrumb class="py-2 tracking-wide text-neutral-500">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <a
                href="/"
              >
                首頁
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <a href="/shopping-mall">
                商品總覽
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage class="text-primary-700">
              烤飛魚乾
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <!-- 主商品 -->
    <div class="container mt-4 pb-6 md:flex md:justify-between md:space-x-10 md:pb-20">
      <div class="flex h-[192px] w-full items-center justify-center rounded-xl bg-neutral-100 md:h-[371px] md:max-w-[510px]">
        商品圖片
      </div>

      <div class="flex flex-col justify-between">
        <div class="space-y-1 py-2 md:space-y-[18px]">
          <h1 class="text-lg font-bold md:text-2xl">
            特級鮮魚乾-{{ id }}
          </h1>
          <p class="text-sm font-bold text-primary-500 md:text-lg">
            NT$ 100
          </p>
        </div>

        <div class="mt-4 flex h-auto w-full justify-center gap-x-3 md:h-[152px] md:w-[510px]">
          <button class="cs-border-1_5 group flex w-1/2 cursor-pointer flex-col items-center justify-center space-y-3 rounded-lg py-5 text-sm font-bold text-primary-800 ring-1 md:text-base">
            <div class="size-10 ring-1" />
            <p class="md:group-hover:text-primary-600">
              Line QRCode
            </p>
          </button>
          <button class="cs-border-1_5 group flex w-1/2 cursor-pointer flex-col items-center justify-center space-y-3 rounded-lg text-sm font-bold text-primary-800 ring-1 md:text-base">
            <div class="size-10">
              <Icon
                name="line-md:document-twotone"
                class="size-full md:group-hover:text-primary-600"
              />
            </div>
            <p class="md:group-hover:text-primary-600">
              填寫購買表單
            </p>
          </button>
        </div>
      </div>
    </div>

    <!-- 商品描述 -->
    <div class="border-t border-neutral-100 py-10">
      <div class="container flex items-center space-x-2 text-lg font-bold text-primary-950">
        <div class="h-5 w-1 rounded-full bg-primary-300" />
        <p>商品介紹</p>
      </div>

      <ul class="mt-3 space-y-1 md:mt-6 md:space-y-6">
        <li
          v-for="(item, index) in 2"
          :key="item"
          class="container relative w-full bg-net-blue py-6 md:flex md:gap-x-10 md:space-x-0 md:rounded-[20px] md:p-[60px]"
          :class="[
            { 'md:flex-row-reverse': index % 2 !== 0 },
          ]"
        >
          <div class="absolute right-6 top-0 hidden h-10 w-6 md:block">
            <NuxtImg
              src="/shopping-mall/tag.svg"
              class="h-auto: w-full"
            />
          </div>
          <div class="h-[192px] w-full shrink-0 rounded-lg ring-1 md:h-[297px] md:w-[450px] " />

          <div class="mt-3 md:mt-0 md:flex md:flex-col md:justify-center">
            <p class="font-bold text-primary-950 md:text-lg">
              來自大海的美味
            </p>
            <p class="mt-2 text-sm font-normal text-neutral-600 md:mt-3 md:text-base">
              烤飛魚乾是小琉球最具代表性的特產之一，選用新鮮飛魚，經過精心烘烤製作而成。飛魚捕撈於小琉球清澈的海域，品質優良，味道鮮美。每一片飛魚乾都經過嚴格挑選，保證肉質的細嫩和鮮香。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- 相關商品 -->
  <div class="">
    <NuxtImg
      src="/shopping-mall/footer-mask-sm.svg"
      class="size-full md:hidden"
    />
    <NuxtImg
      src="/shopping-mall/footer-mask.svg"
      class="hidden size-full md:block"
    />
    <div class="bg-neutral-50 py-10 ">
      <div class="container md:max-w-[1280px]">
        <div class="flex items-center space-x-2">
          <div class="h-5 w-1 rounded-full bg-primary-300" />
          <p class="py-2 text-xl font-bold tracking-wider">
            您可能會喜歡...
          </p>
        </div>

        <Carousel
          class="relative mt-6"
          :opts="{
            align: 'start',
            loop: true,
          }"
        >
          <CarouselContent>
            <CarouselItem
              v-for="(index) in 10"
              :key="index"
              class="basis-1/1 lg:basis-1/4"
            >
              <NuxtLink
                :to="`/shopping-mall/${index}`"
                class="h-[227px] w-[290px] pt-[1px] block"
              >
                <div class="md:w-[290px md:h-[162px]] h-[162px] w-[290px] rounded-xl ring-1" />

                <div class="py-2">
                  <p class="font-bold text-primary-950">
                    特及鮮魚肝
                  </p>
                  <p class="text-sm text-neutral-700">
                    NT$ 100
                  </p>
                </div>
              </NuxtLink>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious class="cs-border-1_5_icon absolute right-6 top-[-66px] hidden -translate-x-full !rounded-full focus:bg-primary-50 lg:flex" />
          <CarouselNext class="cs-border-1_5_icon absolute right-2 top-[-66px] hidden !rounded-full focus:bg-primary-50 lg:flex" />
        </Carousel>
      </div>
    </div>
  </div>
</template>
