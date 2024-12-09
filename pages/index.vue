<script lang="ts" setup>
import { useSiteMetadata } from '@/composables/useMetaData'

useSiteMetadata({
  title: '',
})
</script>

<template>
  <div class="overflow-hidden">
    <HomeBanner />
    <HomeIntro />
    <HomeProducts />
    <HomeNews />
    <HomeAbout />
    <HomeIntroPort />
  </div>
</template>
