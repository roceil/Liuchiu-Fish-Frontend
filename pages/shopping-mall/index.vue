<script lang="ts" setup>
import ProductsCard from '~/components/Home/Products/Card.vue'
import { useSiteMetadata } from '@/composables/useMetaData'
import { handleDownload } from '@/lib/downloadForm'
import { type Product, useProducts } from '~/services/supabase/useProducts'

const { getProducts } = useProducts()
const { data, error } = await useAsyncData('products', () => getProducts())
const renderProducts = ref<Product[]>([])

if (error.value)
  console.error('error', error.value)

if (data.value)
  renderProducts.value = data.value

useSiteMetadata({
  title: '｜琉漁小鋪',
})
</script>

<template>
  <div class="index bg-primary-50">
    <div class="container flex w-full justify-between px-6 pt-6 md:pt-[93px]">
      <div class="">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            琉漁小鋪
          </h1>
          <p class="text-md text-neutral-400 md:text-2xl">
            Shopping Mall
          </p>
        </div>

        <Button
          class="mt-6 md:mt-[60px]"
          @click="handleDownload"
        >
          下載購物表單
        </Button>
      </div>

      <div class="mt-auto md:mt-0">
        <NuxtImg
          src="/shop/banner.svg"
          alt="shopBanner"
          width="200"
          height="200"
          class="md:hidden"
        />

        <NuxtImg
          src="/shop/banner.svg"
          alt="shopBanner"
          width="500"
          height="500"
          class="hidden md:block"
        />
      </div>
    </div>

    <div class="bg-primary-50">
      <div class="h-full rounded-t-[40px] bg-white">
        <div class="container mx-auto px-4 py-[60px] md:py-20">
          <ul
            class="mx-auto grid max-w-[1312px] grid-cols-1 justify-items-center gap-x-10 gap-y-[60px] sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 xl:grid-cols-4"
          >
            <li
              v-for="(product) in renderProducts"
              :key="product.name"
              class="w-full max-w-[290px]"
            >
              <ProductsCard :product="product" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
