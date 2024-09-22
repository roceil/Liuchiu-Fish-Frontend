<script lang="ts" setup>
import {
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import type { Tab } from '@/pages/Departments.vue'

defineProps<{
  tabs: Tab[]
}>()
</script>

<template>
  <TabsList class="flex w-full gap-x-2 md:justify-center md:gap-x-3">
    <TabsTrigger
      v-for="(tab) in tabs"
      :key="tab.name"
      :value="tab.value"
    >
      {{ tab.name }}
    </TabsTrigger>
  </TabsList>
</template>
