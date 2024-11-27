<script lang="ts" setup>
import { useSiteMetadata } from '@/composables/useMetaData'

useSiteMetadata()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
