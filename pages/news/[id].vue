<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
</script>

<template>
  <div class="container pb-10 pt-4 md:max-w-[840px] md:pt-[100px]">
    <Breadcrumb class=" py-2 tracking-wide text-neutral-500">
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
            <a href="/news">
              訊息公告
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage class="text-primary-700">
            部分金融服務停機公告
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <!-- 主訊息 -->
    <div class="mt-4 w-full rounded-lg bg-neutral-50 p-6 md:mt-6 md:p-20">
      <div class="border-b border-neutral-100 pb-6">
        <h1 class="serif text-2xl font-bold md:text-[30px]">
          部分金融服務停機公告
        </h1>

        <div class="mt-5 flex shrink-0 space-x-5">
          <div class="border-x-2 border-primary-700 bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
            琉漁小鋪
          </div>

          <div class="text-sm text-neutral-400">
            111 / 6 / 17
          </div>
        </div>
      </div>

      <div class="mt-6 space-y-6 md:mt-10 md:space-y-10">
        <div class="h-[237px] w-full rounded-lg ring-1 md:h-[546px]" />

        <p class="text-sm md:text-base">
          依據南區資訊中心公告，111年6月11日星期六下午 14:00 至 17:00 因南區資訊中心進行更新維護，將停止網路ATM、網路銀行、EPOS、商務網站等服務。實體ATM自動櫃員機、跨行交易、語音系統不受影響，如有金融業務需求，請提早預作因應，如有不便，敬請見諒!
        </p>
      </div>
    </div>

    <!-- 切換按鈕 -->
    <div class="mt-4 flex justify-between text-sm text-neutral-950 md:text-base">
      <routerLink
        :to="`/news/${2}`"
        class="py-2"
      >
        上一篇
      </routerLink>

      <routerLink
        :to="`/news/${2}`"
        class="py-2"
      >
        下一篇
      </routerLink>
    </div>

    <div class="mt-4 flex justify-center">
      <Button>
        返回最新消息一覽
      </Button>
    </div>
  </div>
</template>
