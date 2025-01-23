<script lang="ts" setup>
defineProps<{
  phoneNumber: string
  faxNumber: string
  openTime: string
}>()
</script>

<template>
  <div class="rounded-lg border border-neutral-100 p-6 md:flex md:items-center md:justify-center">
    <p class="border-b border-neutral-100 pb-4 font-bold md:border-b-0 md:border-r md:pb-0 md:pr-5 md:text-lg">
      聯絡方式
    </p>

    <ul class="mt-4 space-y-4 md:mt-0 md:flex md:space-y-0">
      <li class="md:border-r md:border-neutral-100 md:px-5">
        <NuxtLink
          href="tel:088611245"
          class="flex items-center gap-x-2 underline-offset-4 lg:hover:underline"
        >
          <Icon
            name="ph:phone"
            class="text-base"
          />
          <p>{{ phoneNumber }}</p>
        </NuxtLink>
      </li>

      <li class="md:border-r md:border-neutral-100 md:px-5">
        <NuxtLink
          href="tel:088612394"
          class="flex items-center gap-x-2 underline-offset-4 lg:hover:underline"
        >
          <Icon
            name="fluent:print-16-regular"
            class="text-base"
          />
          <p>{{ faxNumber }}</p>
        </NuxtLink>
      </li>
    </ul>

    <div class="mt-4 rounded-xl bg-neutral-50 p-3 text-center text-sm text-neutral-500 md:ml-5 md:mt-0 md:flex md:items-center md:justify-center md:space-x-2">
      <p>週一到週五</p>
      <p>{{ openTime }}</p>
    </div>
  </div>
</template>
