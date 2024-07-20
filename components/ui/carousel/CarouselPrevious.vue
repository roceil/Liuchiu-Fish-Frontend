<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'touch-manipulation absolute size-10 p-0 hover:scale-110 duration-300 ease-in-out transition-all',
      // orientation === 'horizontal'
      //   ? '-left-12 top-1/2 -translate-y-1/2'
      //   : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="size-5 text-current" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
