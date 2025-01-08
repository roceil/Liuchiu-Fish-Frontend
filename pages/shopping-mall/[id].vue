<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { lineUrl, productsList } from '~/constants'
import { handleDownload } from '@/lib/downloadForm'
import { useSiteMetadata } from '@/composables/useMetaData'
import { type Product, useProducts } from '~/services/supabase/useProducts'

const router = useRoute()
const { id } = router.params
const product = ref<Product | null>(null)

const { getProductById } = useProducts()
const { data, error } = await useAsyncData('product', () => getProductById(id))

if (error.value)
  console.error('error', error.value)

if (data.value)
  product.value = data.value

// const product = computed(() => productsList.find(product => product.id === id))

const randomProducts = computed(() =>
  [...productsList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10),
)

useSiteMetadata({
  title: `｜${product.value?.name}`,
  // description: product.value?.intro[0].description,
  image: product.value?.cover,
})
</script>

<template>
  <div class="pt-6 md:mx-auto md:max-w-[1092px]">
    <!-- 麵包屑 -->
    <div class="container">
      <ClientOnly>
        <Breadcrumb class="py-2 tracking-wide text-neutral-500">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <a href="/">
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
                {{ product?.name }}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ClientOnly>
    </div>

    <!-- 主商品 -->
    <div class="container mt-4 pb-6 md:flex md:justify-between md:space-x-10 md:pb-20">
      <div
        class="flex h-[192px] w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-100 md:h-[371px] md:max-w-[510px]"
      >
        <NuxtImg
          :src="product?.cover"
          alt="productCover"
          class="size-full object-cover"
        />
      </div>

      <div class="flex flex-col justify-between">
        <div class="space-y-1 py-2 md:space-y-[18px]">
          <h1 class="text-lg font-bold md:text-2xl">
            {{ product?.name }}
          </h1>
          <p class="text-sm font-bold text-primary-500 md:text-lg">
            NT$ {{ product?.price }} / {{ product?.unit }}
          </p>
        </div>

        <div class="mt-4 flex h-auto w-full justify-center gap-x-3 md:h-[152px] md:w-[510px]">
          <NuxtLink
            :to="lineUrl"
            target="_blank"
            class="cs-border-1_5 group flex w-1/2 cursor-pointer flex-col items-center justify-center space-y-3 rounded-lg py-5 text-sm font-bold text-primary-800 ring-1 md:text-base"
          >
            <div class="size-14">
              <NuxtImg
                src="/shop/line-qrcode.png"
                alt="lineQRCode"
                class="size-full object-cover"
              />
            </div>
            <p class="md:group-hover:text-primary-600">
              Line QRCode
            </p>
          </NuxtLink>
          <button
            type="button"
            class="cs-border-1_5 group flex w-1/2 cursor-pointer flex-col items-center justify-center space-y-3 rounded-lg text-sm font-bold text-primary-800 ring-1 md:text-base"
            @click="handleDownload"
          >
            <div class="size-14">
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
        <ShopDescription :product-intro="product?.intro" />
      </ul>
    </div>
  </div>

  <!-- 相關商品 -->
  <ClientOnly>
    <ShopRandomProduct :random-products="randomProducts" />
  </ClientOnly>
</template>
