<script lang="ts" setup>
import { useSiteMetadata } from '@/composables/useMetaData'
import EnterLoading from '@/components/EnterLoading.vue'

useSiteMetadata({
  title: '官方網站',
})
</script>

<template>
  <EnterLoading />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
