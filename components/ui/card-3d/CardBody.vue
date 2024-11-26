<script setup lang="ts">
import { cn } from '~~/lib/utils'

const props = defineProps({
  class: String,
})
</script>

<template>
  <div
    :class="cn('', $props.class)"
    style="transform-style: preserve-3d"
  >
    <slot />
  </div>
</template>
