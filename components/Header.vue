<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const navLinks = [
  { name: '琉漁小舖', href: '/shopping-mall' },
  { name: '關於琉漁', href: '/about-us' },
  { name: '業務部門', href: '/departments' },
  { name: '訊息公告', href: '/news' },
  { name: '便民服務', href: '/contact-us' },
]

const isScrolled = ref(false)

if (process.client) {
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}

function handleScroll() {
  isScrolled.value = window.scrollY > 200
}

const headerClasses = computed(() => [
  'shadow-bottom sticky top-0 z-50 py-4 transition-all duration-300 ease-in-out',
  isScrolled.value ? 'bg-white/50 backdrop-blur' : 'bg-white',
])
</script>

<template>
  <header
    id="header"
    :class="headerClasses"
  >
    <div class="container flex w-full items-center justify-between">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex h-[34px] w-[154px] items-center justify-center md:h-[38px] md:w-[171px]"
      >
        <NuxtImg
          src="/logo.svg"
          class="size-full"
          alt="Logo"
        />
      </router-link>

      <!-- Nav Links -->
      <nav class="hidden items-center justify-center md:flex">
        <ul class="flex items-center">
          <li
            v-for="(link, index) in navLinks"
            :key="link.name"
            class="relative flex items-center"
          >
            <a
              class="px-4 py-2 transition-colors duration-200 hover:text-primary-600"
              :href="link.href"
            >{{ link.name }}</a>
            <span
              v-if="index < navLinks.length - 1"
              class="absolute right-0 h-5 w-[1px] bg-neutral-200"
            />
          </li>
          <li>
            <Button>
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
  </header>
</template>
