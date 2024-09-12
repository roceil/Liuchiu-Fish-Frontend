<script lang="ts" setup>
const props = defineProps<{
  title: string
  subTitle: string
}>()
</script>

<template>
  <div class="flex items-end justify-center space-x-2 font-bold text-primary-900">
    <h3 class="relative text-2xl md:text-[30px]">
      <div class="absolute left-0 top-[-10px] h-[6px] w-6 -translate-y-full bg-primary-300" />
      {{ props.title }}
    </h3>
    <span class="md:text-base">{{ props.subTitle }}</span>
  </div>
</template>
