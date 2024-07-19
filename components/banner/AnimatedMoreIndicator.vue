<script setup>
import { onMounted, ref } from 'vue'
import anime from 'animejs'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
const dot = ref(null)
const line = ref(null)

function initAnimation() {
  const timeline = anime.timeline({
    loop: true,
    duration: 4000, // Total duration of one loop
  })

  timeline
    .add({
      targets: dot.value,
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInOutQuad',
    })
    .add({
      targets: dot.value,
      translateY: [0, line.value.clientHeight - dot.value.clientHeight],
      duration: 1500,
      easing: 'easeOutExpo',
    })
    .add({
      targets: dot.value,
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad',
    })
    .add({
      duration: 1000,
    })
}

onMounted(() => {
  initAnimation()
})
</script>

<template>
  <div :class="cn('flex h-52 items-start font-sans', props.class)">
    <div
      ref="line"
      class="relative mr-1 h-full w-[1px] bg-primary-700"
    >
      <div
        ref="dot"
        class="absolute -left-1 top-0 size-2.5 rounded-full bg-primary-700 opacity-0"
      />
    </div>
    <div class="text-base text-primary-700 [text-orientation:mixed] [writing-mode:vertical-lr]">
      More
    </div>
  </div>
</template>
