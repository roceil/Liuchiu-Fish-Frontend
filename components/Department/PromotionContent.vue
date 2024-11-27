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
    :value="departmentJobs[2].value"
    class="mt-10 md:mt-[60px]"
  >
    <div
      v-for="(section, index) in departmentJobs[2].content"
      :key="index"
      class="my-6 md:my-[60px]"
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
          <p v-if="typeof item === 'string'">
            {{ item }}
          </p>
          <p
            v-else
            class="flex flex-col"
          >
            <span class="mb-1 font-bold">{{ item.subTitle }}</span>
            <span>{{ item.description }}</span>
          </p>
        </li>
      </ul>
    </div>

    <!-- 聯絡方式 -->
    <DepartmentContactCard />
  </TabsContent>
</template>
