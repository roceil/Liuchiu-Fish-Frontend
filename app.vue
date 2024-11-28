<script lang="ts" setup>
import { useSiteMetadata } from '@/composables/useMetaData'

useSiteMetadata({
  title: '官方網站',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
