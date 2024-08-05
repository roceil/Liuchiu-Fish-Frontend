<script lang="ts" setup>
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
  index?: number
}>()
</script>

<template>
  <div class="relative ">
    <div class="absolute -top-3 left-4 border-x-2 border-danger-200 bg-white/90 px-3 py-1">
      <p class="text-sm font-bold text-danger-200">
        熱銷 No. 1
      </p>
    </div>

    <div :class="cn('', props.class)">
      <div class="h-[162px] w-[290px] rounded-xl bg-primary-500 flex justify-center items-center">
        {{ props.index }}
      </div>

      <div class="pb-4 pt-2">
        <h3 class="font-bold">
          特及鮮魚肝
        </h3>

        <div class="mt-1 flex justify-between">
          <p>NT 300</p>
          <div class="flex items-center justify-center space-x-1">
            <button>查看更多</button>
            <div class="size-6 rounded-full bg-primary-700" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
