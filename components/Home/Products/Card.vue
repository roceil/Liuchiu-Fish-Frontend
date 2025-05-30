<script lang="ts" setup>
import { cn } from '@/lib/utils'
import type { Product } from '~/services/supabase/useProducts'
import { Skeleton } from '~~/components/ui/skeleton'

const props = defineProps<{
  class?: string
  product: Product
  showSkeleton?: boolean
}>()

const isImageLoaded = ref(false)

function handleImageLoad() {
  isImageLoaded.value = true
}
</script>

<template>
  <div class="relative w-[290px]">
    <div
      v-if="props.product.isHotSale"
      class="rank-badge absolute -top-3 left-4 z-20 px-3 py-1"
    >
      <p class="text-sm font-bold text-danger-200">
        熱銷 No. {{ props.product.hotSaleRank }}
      </p>
    </div>

    <div :class="cn('group', props.class)">
      <NuxtLink :to="`/shopping-mall/${props.product.id}`">
        <div class="relative w-full">
          <div
            class="cs-border-1_5_n200 flex h-[162px] w-full items-center justify-center overflow-hidden rounded-xl transition-all duration-300 group-hover:opacity-80"
          >
            <Skeleton
              v-if="!isImageLoaded && props.showSkeleton"
              class="absolute inset-0 size-full bg-primary-300"
            />

            <NuxtImg
              :src="props.product.cover"
              alt="productCover"
              class="size-full object-cover ring-1"
              @load="handleImageLoad"
            />
          </div>
        </div>

        <div class="pb-4 pt-2">
          <h3 class="font-bold">
            {{ props.product.name }}
          </h3>

          <div class="mt-1 flex justify-between">
            <p>NT {{ props.product.price }} / {{ props.product.unit }}</p>
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
  @media (min-width: 1024px) {
    box-shadow: 2px 2px 0px 2px #A9B6C0;
  }
}

.rank-badge {
  border-right: 2px solid #D74F4F;
  border-left: 2px solid #D74F4F;
  background: rgba(215, 79, 79, 0.10);
  backdrop-filter: blur(5px);
}
</style>
