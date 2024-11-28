<script lang="ts" setup>
import { useSiteMetadata } from '@/composables/useMetaData'
import EnterLoading from '@/components/EnterLoading.vue'
import { useLoadingState } from '@/composables/useLoadingState'

useSiteMetadata({
  title: '官方網站',
})

const route = useRoute()
const isHome = computed(() => route.name === 'index')
const { hasShownAnimation } = useLoadingState()
</script>

<template>
  <NuxtRouteAnnouncer />

  <EnterLoading
    v-if=" !hasShownAnimation && isHome"
  />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
