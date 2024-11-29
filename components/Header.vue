<script lang="ts" setup>
const hamburgerStore = useHamburgerStore()

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
  'shadow-bottom sticky top-0 z-30 py-4 transition-all duration-300 ease-in-out',
  isScrolled.value ? 'bg-white/50 backdrop-blur' : 'bg-white',
])
</script>

<template>
  <header
    id="header"
    :class="headerClasses"
    class="z-30"
  >
    <div class="container flex w-full items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex h-[34px] w-[154px] items-center justify-center md:h-[38px] md:w-[171px]"
      >
        <NuxtImg
          src="/logo.svg"
          class="size-full"
          alt="Logo"
        />
      </NuxtLink>

      <!-- Nav Links -->
      <nav class="hidden items-center justify-center md:flex">
        <ul class="flex items-center">
          <li
            v-for="(link, index) in navLinks"
            :key="link.name"
            class="relative flex items-center"
          >
            <NuxtLink
              class="px-4 py-2 transition-colors duration-200 hover:text-primary-600"
              :to="link.href"
            >
              {{ link.name }}
            </NuxtLink>
            <span
              v-if="index < navLinks.length - 1"
              class="absolute right-0 h-5 w-[1px] bg-neutral-200"
            />
          </li>
          <li class="ml-4">
            <NuxtLink to="/shopping-mall">
              <Button>
                選購商品
              </Button>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Hamburger Icon -->
      <div class="flex space-x-[6px] md:hidden">
        <NuxtLink
          to="/shopping-mall"
          class="flex size-10 items-center justify-center rounded-full border border-neutral-200"
        >
          <NuxtImg
            src="/header/shoppingBag.svg"
            class="size-4"
          />
        </NuxtLink>
        <button
          class="flex size-10 items-center justify-center rounded-full border border-neutral-200"
          @click="hamburgerStore.openHamburgerMenu"
        >
          <NuxtImg
            src="/header/alignRight.svg"
            class="size-4"
          />
        </button>
      </div>
    </div>
  </header>
</template>
