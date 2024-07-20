<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute size-10 p-0 hover:scale-110 duration-300 ease-in-out transition-all',
      // orientation === 'horizontal'
      //   ? '-right-12 top-1/2 -translate-y-1/2'
      //   : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight class="size-5 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
