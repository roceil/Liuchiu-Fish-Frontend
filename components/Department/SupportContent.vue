<script lang="ts" setup>
import {
  TabsContent,
} from '@/components/ui/tabs'
import type { DepartmentJobs } from '@/pages/Departments.vue'

defineProps<{
  departmentJobs: DepartmentJobs[]
}>()
</script>

<template>
  <TabsContent
    :value="departmentJobs[0].value"
    class="mt-10 md:mt-[60px]"
  >
    <!-- 負責事項 -->
    <div
      v-for="(section, index) in departmentJobs[0].content"
      :key="index"
      class="mb-6 md:mb-[60px]"
    >
      <!-- 卡片標題 -->
      <div class="inline-block rounded-t bg-primary-400 px-3 py-1 text-sm text-white md:px-5 md:py-2 md:text-base">
        {{ section.title }}
      </div>

      <!-- 內容清單 -->
      <ul class="space-y-2 rounded-lg rounded-tl-none bg-neutral-50 p-4 md:p-6">
        <li
          v-for="(item, itemIndex) in section.value"
          :key="itemIndex"
          class="flex text-sm text-neutral-950 md:text-base"
        >
          <span class="">・</span>
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>

    <!-- 聯絡方式 -->
    <DepartmentContactCard />
  </TabsContent>
</template>
