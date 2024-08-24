<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const router = useRoute()
const { id } = router.params
</script>

<template>
  <div class=" pt-6 md:mx-auto md:max-w-[1092px]">
    <Breadcrumb class="container py-2 tracking-wide text-neutral-500">
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

    <!-- 主商品 -->
    <div class="container mt-4 md:flex md:justify-between md:space-x-10">
      <div class="flex h-[192px] w-full items-center justify-center rounded-xl bg-neutral-100 md:h-[371px] md:max-w-[510px]">
        商品圖片
      </div>

      <div class="flex flex-col justify-between">
        <div class="space-y-1 py-2 md:space-y-[18px]">
          <h1 class="text-lg font-bold md:text-2xl">
            特級鮮魚乾-{{ id }}
          </h1>
          <p class="text-sm text-neutral-500 md:text-lg">
            NT$ 100
          </p>
        </div>

        <div class="cs-border-1_5_p_600 flex h-[145px] w-full items-center justify-center space-x-6 rounded-lg px-6 py-4 sm:justify-between sm:px-[60px] md:h-[183px] md:w-[481px] md:py-5">
          <div class="flex h-[113px] w-[127px] flex-col items-center justify-center space-y-2 md:h-[143px] md:w-[127px]">
            <div class="size-[60px] rounded-full bg-neutral-50 md:size-[90px]" />
            <p class="text-sm font-bold">
              Line QRCode
            </p>
          </div>

          <div class="h-full w-[1px] bg-neutral-100" />

          <div class="flex h-[113px] w-[127px] flex-col items-center justify-center space-y-2 md:h-[143px] md:w-[127px]">
            <div class="size-[60px] rounded-full bg-neutral-50 md:size-[90px]" />
            <p class="text-sm font-bold">
              填寫購買表單
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品描述 -->
    <div class="container mt-14 md:mt-20">
      <Tabs
        default-value="intro"
        class="w-full"
      >
        <TabsList class="flex space-x-2 overflow-scroll md:space-x-3 md:overflow-auto">
          <TabsTrigger value="intro">
            商品介紹
          </TabsTrigger>

          <TabsTrigger value="shopWays">
            購買方式
          </TabsTrigger>

          <TabsTrigger value="list">
            購買須知
          </TabsTrigger>

          <TabsTrigger value="keepWays">
            保存方式
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="intro"
          class="space-y-10 pb-12 pt-6 md:space-y-[60px] md:py-20"
        >
          <div
            v-for="(item, index) in 4"
            :key="index"
            class="w-full md:flex md:justify-between md:gap-x-10"
            :class="[
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row',
            ]"
          >
            <div class="h-[192px] rounded-lg bg-neutral-100 md:h-[297px] md:w-[510px]" />
            <div class="mt-5 md:mt-0 md:flex md:w-[510px] md:flex-col md:justify-center">
              <h3 class="font-bold text-neutral-950 md:text-lg">
                來自大海的美味
              </h3>
              <p class="mt-2 text-sm leading-relaxed tracking-wider text-neutral-600 md:mt-3 md:text-base">
                烤飛魚乾是小琉球最具代表性的特產之一，選用新鮮飛魚，經過精心烘烤製作而成。飛魚捕撈於小琉球清澈的海域，品質優良，味道鮮美。每一片飛魚乾都經過嚴格挑選，保證肉質的細嫩和鮮香。
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="shopWays">
          <div class="flex h-[300px] items-center justify-center bg-neutral-100">
            shopWays
          </div>
        </TabsContent>
        <TabsContent value="list">
          <div class="flex h-[300px] items-center justify-center bg-neutral-100">
            list
          </div>
        </TabsContent>
        <TabsContent value="keepWays">
          <div class="flex h-[300px] items-center justify-center bg-neutral-100">
            keepWays
          </div>
        </TabsContent>
      </Tabs>
    </div>

    <!-- 相關商品 -->
    <div class="border-t border-neutral-100 py-12">
      <div class="container">
        <p class="py-2 text-xl font-bold tracking-wider">
          您可能會喜歡...
        </p>

        <div class="mt-12 h-[238px] w-full bg-neutral-100" />
      </div>
    </div>
  </div>
</template>
