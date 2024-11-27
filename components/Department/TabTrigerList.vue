<script lang="ts" setup>
import {
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import type { DepartmentJobs } from '@/pages/Departments.vue'

defineProps<{
  departmentJobs: DepartmentJobs[]
}>()
</script>

<template>
  <TabsList class="flex w-full gap-x-2 md:justify-center md:gap-x-3">
    <TabsTrigger
      v-for="(tab) in departmentJobs"
      :key="tab.name"
      :value="tab.value"
    >
      {{ tab.name }}
    </TabsTrigger>
  </TabsList>
</template>
