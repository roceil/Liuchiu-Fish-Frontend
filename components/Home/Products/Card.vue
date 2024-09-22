<script lang="ts" setup>
import { cn } from '@/lib/utils'
import type { Product } from '~/types'

const props = defineProps<{
  class?: string
  product: Product
}>()
</script>

<template>
  <div class="relative ">
    <div
      v-if="props.product.hotSale"
      class="absolute -top-3 left-4 z-30 border-x-2 border-danger-200 bg-white/90 px-3 py-1"
    >
      <p class="text-sm font-bold text-danger-200">
        熱銷 No. {{ props.product.hotSaleNumber }}
      </p>
    </div>

    <div :class="cn('group', props.class)">
      <NuxtLink :to="`/shopping-mall/${props.product.id}`">
        <div class="relative">
          <div class="shadow-custom flex h-[162px] w-[290px] items-center justify-center rounded-xl bg-primary-500 transition-all duration-300 group-hover:opacity-80">
            {{ props.product.id }}
          </div>
        </div>

        <div class="pb-4 pt-2">
          <h3 class="font-bold">
            {{ props.product.name }}
          </h3>

          <div class="mt-1 flex justify-between">
            <p>NT {{ props.product.price }}</p>
            <div class="flex items-center justify-center space-x-1">
              <button class="text-sm font-bold text-primary-700">
                查看更多
              </button>
              <div class="flex size-6 items-center justify-center rounded-full bg-primary-700">
                <Icon
                  name="mingcute:right-line"
                  class="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.shadow-custom {
  box-shadow: 0 #A9B6C0;
}

.group:hover .shadow-custom {
  box-shadow: 2px 2px 0px 2px #A9B6C0;
}
</style>
