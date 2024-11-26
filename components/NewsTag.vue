<script lang="ts" setup>
const props = defineProps<{
  tag: string
}>()

const tagStyle = computed(() => {
  switch (props.tag.toLowerCase()) {
    case '琉漁小鋪':
      return 'border-blue-700 bg-blue-50 text-blue-700'
    case '輔導股':
      return 'border-warning-200 bg-[#FFF6EC] text-warning-200'
    case '會務股':
      return 'border-success-200 bg-[#EDFCF6] text-success-200'
    case '推廣部':
      return 'border-danger-200 bg-[#FEF2F2] text-danger-200'
    default:
      return 'border-primary-700 bg-primary-50 text-primary-700'
  }
})
</script>

<template>
  <div
    class="flex min-h-[26px] min-w-[74px] items-center justify-center border-x-2 text-xs font-bold"
    :class="[tagStyle]"
  >
    {{ tag }}
  </div>
</template>
