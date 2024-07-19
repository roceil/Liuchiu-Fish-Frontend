<script lang="ts" setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="absolute left-1/2 top-0 h-[68px] w-[200px] -translate-x-1/2 -translate-y-1/2 px-9 py-4 md:left-[50px] md:size-auto md:translate-x-0 md:translate-y-[-60px] md:py-7">
    <div class="absolute left-0 top-[3.43px] size-6 border-t border-black" />
    <div class="absolute left-[3.43px] top-0 size-6 border-l border-black" />
    <div class="absolute bottom-[3.43px] right-0 size-6 border-b border-black" />
    <div class="absolute bottom-0 right-[3.43px] size-6 border-r border-black" />

    <h2
      :class="cn('text-3xl md:hidden', props.class)"
    >
      {{ props.text }}
    </h2>

    <h2
      class="title"
      :class="cn('text-[40px] hidden md:block tracking-[1rem]', props.class)"
    >
      {{ props.text }}
    </h2>
  </div>
</template>

<style scoped>
.title {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>
