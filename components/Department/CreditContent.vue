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
    :value="departmentJobs[3].value"
    class="mt-10 md:mt-[60px]"
  >
    <!-- 獎章 -->
    <div class="relative mt-[84px]">
      <div class="flex items-center justify-center rounded-lg bg-primary-50 p-6 text-sm font-bold text-primary-800 md:text-lg">
        <p>被聯合報譽為基層金融機構的最佳「模範生」</p>
      </div>

      <div class="absolute -top-3 left-1/2 size-[60px] -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:size-[120px] md:-translate-y-1/2 md:translate-x-[-10px]">
        <NuxtImg
          src="department/award.svg"
          alt="award"
          class="w-full"
        />
      </div>
    </div>

    <!-- 負責事項 -->
    <div
      v-for="(section, index) in departmentJobs[3].content"
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
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>

    <!-- 聯絡方式 -->
    <DepartmentContactCard
      phone-number="(08)861-2512"
      fax-number="(08)861-1473"
      open-time="8:00~12:00、13:30~16:30"
    />
  </TabsContent>
</template>
