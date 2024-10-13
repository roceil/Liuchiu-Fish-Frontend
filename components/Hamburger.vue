<script lang="ts" setup>
const hamburgerStore = useHamburgerStore()

const navLinks = [
  { name: '琉漁小舖', href: '/shopping-mall' },
  { name: '關於琉漁', href: '/about-us' },
  { name: '業務部門', href: '/departments' },
  { name: '訊息公告', href: '/news' },
  { name: '便民服務', href: '/contact-us' },
]
</script>

<template>
  <nav
    class="fixed inset-0 z-40 translate-y-[-200%] bg-white pt-4 transition-transform duration-500 ease-in-out md:hidden"
    :class="{ '!translate-y-0': hamburgerStore.isHamburgerMenuOpen }"
  >
    <div class="container">
      <button
        class="ml-auto flex size-10 items-center justify-center rounded-full border border-neutral-200"
        @click="hamburgerStore.closeHamburgerMenu"
      >
        <Icon
          name="material-symbols-light:close"
          class="size-4"
        />
      </button>

      <ul class="mt-4">
        <li
          v-for="(link, index) in navLinks"
          :key="link.name"
          class="relative flex items-center"
        >
          <NuxtLink
            :to="link.href"
            class="w-full border-b border-neutral-100 py-5 text-center text-sm"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="absolute bottom-0 w-full">
      <div class="wavesTop" />
    </div>
  </nav>
</template>

<style scoped>
.wavesTop {
  width: 100%;
  height: 100px;
  background-image: url('/public/header/waveTop.svg');
  background-size: 650px 100px;
  /* background-repeat: repeat-x; */
  animation: waves_move 12s linear infinite;
  transform-origin: 0% 0%;
}

@keyframes waves_move {
  0% {
    background-position: 0px 0px;
    transform: translate(0, 15px);
  }

  50% {
    background-position: 600px 0px;
    transform: translate(0, 0);
  }

  100% {
    background-position: 1200px 0px;
    transform: translate(0, 15px);
  }
}
</style>
