<script lang="ts" setup>
import {
  Tabs,
} from '@/components/ui/tabs'
import { departmentJobs } from '@/constants'

interface Optional {
  subTitle: string
  description: string
}

export interface DepartmentJobs {
  name: string
  value: string
  content: {
    title: string
    value: (string | Optional)[]
  }[]
}
</script>

<template>
  <div class="index bg-primary-50">
    <div class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            業務部門
          </h1>
          <p class="text-md text-neutral-400 md:text-2xl">
            Departments
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtImg
          src="/department/banner-sm.svg"
          alt="departmentBanner"
          width="250"
          height="250"
          class="md:hidden"
        />

        <NuxtImg
          src="/department/banner.svg"
          alt="departmentBanner"
          width="500"
          height="500"
          class="hidden md:block"
        />
      </div>
    </div>

    <div class="bg-white py-10 md:py-[100px]">
      <div class="container w-full">
        <ClientOnly>
          <Tabs
            default-value="support"
          >
            <DepartmentTabTrigerList
              :department-jobs="departmentJobs"
            />

            <!-- 輔導股 -->
            <DepartmentSupportContent
              :department-jobs="departmentJobs"
            />

            <!-- 會務股 -->
            <DepartmentMeetingContent
              :department-jobs="departmentJobs"
            />

            <!-- 推廣部 -->
            <DepartmentPromotionContent
              :department-jobs="departmentJobs"
            />

            <!-- 信用部 -->
            <DepartmentCreditContent
              :department-jobs="departmentJobs"
            />
          </Tabs>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
