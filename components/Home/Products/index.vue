<script lang="ts" setup>
import ProductsCard from './Card.vue'
import Title from '~/components/Title.vue'
import { type Product, useProducts } from '~/services/supabase/useProducts'

const { getProducts } = useProducts()
const { data, error } = await useAsyncData('products', () => getProducts())
const renderProducts = ref<Product[]>([])

if (error.value)
  console.error('error', error.value)

if (data.value)
  renderProducts.value = data.value
</script>

<template>
  <section class="index">
    <div class="container max-w-[1312px] pb-[52px] pt-[108px] md:pb-[100px] md:pt-[160px]">
      <div
        class="relative flex flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-[#EEF1F2] to-[#FDFBFB] pb-10 pt-20 md:items-end md:px-[62px] md:py-20 lg:px-[113px]"
      >
        <Title text="人氣特產" />

        <!-- 手機版商品介紹 -->
        <ul class="w-[295px] space-y-12 md:hidden">
          <li
            v-for="product in renderProducts.slice(0, 3)"
            :key="product.id"
          >
            <ProductsCard :product="product" />
          </li>
        </ul>

        <!-- 電腦版商品介紹 -->
        <div class="hidden h-[318px] w-[650px] md:block lg:w-[950px]">
          <Carousel
            class="relative pt-20"
            :opts="{
              align: 'start',
              loop: true,
            }"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(product) in renderProducts"
                :key="product.id"
                class="basis-1/2 lg:basis-1/3"
              >
                <ProductsCard
                  class="mt-[13px]"
                  :product="product"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious
              class="cs-border-1_5_icon absolute right-4 top-0 -translate-x-full !rounded-full focus:bg-primary-50"
            />
            <CarouselNext class="cs-border-1_5_icon absolute right-0 top-0 !rounded-full focus:bg-primary-50" />
          </Carousel>
        </div>

        <div class="mt-10 flex w-full justify-center">
          <NuxtLink to="/shopping-mall">
            <Button>
              查看所有商品
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
