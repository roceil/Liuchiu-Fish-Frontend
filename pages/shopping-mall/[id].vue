<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { productsList } from '~/constants'

const router = useRoute()
const { id } = router.params

const product = computed(() => productsList[Number(id) - 1])

const randomProducts = computed(() => productsList.sort(() => Math.random() - 0.5).slice(0, 10))
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
              {{ product.name }}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <!-- 主商品 -->
    <div class="container mt-4 pb-6 md:flex md:justify-between md:space-x-10 md:pb-20">
      <div class="flex h-[192px] w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-100 md:h-[371px] md:max-w-[510px]">
        <NuxtImg
          :src="product.cover"
          alt="productCover"
          class="size-full object-cover"
        />
      </div>

      <div class="flex flex-col justify-between">
        <div class="space-y-1 py-2 md:space-y-[18px]">
          <h1 class="text-lg font-bold md:text-2xl">
            {{ product.name }}
          </h1>
          <p class="text-sm font-bold text-primary-500 md:text-lg">
            NT$ {{ product.price }} / {{ product.unit }}
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
          v-for="(intro, index) in product.intro"
          :key="intro.subTitle"
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
          <div class="h-[192px] w-full shrink-0 overflow-hidden rounded-lg md:h-[297px] md:w-[450px]">
            <NuxtImg
              v-for="subImage in intro.subImage"
              :key="subImage"
              :src="subImage"
              alt="subImage"
              class="size-full object-cover"
            />
          </div>
          <div class="mt-3 md:mt-0 md:flex md:flex-col md:justify-center">
            <p class="font-bold text-primary-950 md:text-lg">
              {{ intro.subTitle }}
            </p>
            <p class="mt-2 text-sm font-normal text-neutral-600 md:mt-3 md:text-base">
              {{ intro.description }}
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
              v-for="randomProduct in randomProducts"
              :key="randomProduct.id"
              class="basis-1/1 lg:basis-1/4"
            >
              <NuxtLink
                :to="`/shopping-mall/${randomProduct.id}`"
                class="block h-[227px] w-[290px] pt-[1px]"
              >
                <div class="h-[162px] w-[290px] overflow-hidden rounded-xl md:h-[162px] md:w-[290px]">
                  <NuxtImg
                    :src="randomProduct.cover"
                    alt="randomProductCover"
                    class="size-full object-cover"
                  />
                </div>
                <div class="py-2">
                  <p class="font-bold text-primary-950">
                    {{ randomProduct.name }}
                  </p>
                  <p class="text-sm text-neutral-700">
                    NT$ {{ randomProduct.price }} / {{ randomProduct.unit }}
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
