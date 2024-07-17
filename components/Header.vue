<script lang="ts" setup>
const navLinks = [
  { name: '琉漁小舖', href: '#' },
  { name: '關於琉漁', href: '#' },
  { name: '業務部門', href: '#' },
  { name: '訊息公告', href: '#' },
  { name: '便民服務', href: '#' },
]
</script>

<template>
  <div class="shadow-bottom py-4 md:shadow-none">
    <div class="container flex w-full items-center justify-between">
      <!-- Logo -->
      <div class="flex h-[34px] w-[154px] items-center justify-center md:h-[38px] md:w-[171px]">
        <img
          src="/logo.svg"
          class="size-full"
        >
      </div>

      <!-- Nav Links -->
      <nav class="hidden items-center justify-center md:flex">
        <ul class="flex items-center">
          <li
            v-for="(link, index) in navLinks"
            :key="link.name"
            class="relative flex items-center"
          >
            <a
              class="px-4 py-2"
              :href="link.href"
            >{{ link.name }}</a>
            <span
              v-if="index < navLinks.length - 1"
              class="absolute right-0 h-5 w-[1px] bg-neutral-200"
            />
          </li>

          <li>
            <Button class="rounded-lg px-6 py-3 text-primary-800">
              選購商品
            </Button>
          </li>
        </ul>
      </nav>

      <!-- Hamburger Icon -->
      <div class="flex space-x-[6px] md:hidden">
        <div class="size-10 rounded-full border border-neutral-200" />
        <div class="size-10 rounded-full border border-neutral-200" />
      </div>
    </div>
  </div>
</template>
