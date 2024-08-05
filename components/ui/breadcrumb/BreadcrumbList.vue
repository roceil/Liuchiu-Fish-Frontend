<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="cn('flex flex-wrap items-center gap-[1px] break-words text-xs text-muted-foreground sm:gap-2.5 md:text-base', props.class)"
  >
    <slot />
  </ol>
</template>
