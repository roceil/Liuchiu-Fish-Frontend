<template>
  <ul class="mt-6 flex justify-center gap-x-2 text-gray-600 dark:text-gray-400">
    <li class="flex rounded transition-all hover:bg-gray-300/50 dark:hover:bg-gray-700/50">
      <NuxtLink
        class="p-1"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"
        /></svg>
      </NuxtLink>
    </li>
  </ul>

  <p class="mt-3 text-sm text-gray-700 dark:text-gray-300">
    <em>
      This Vue 3 template is inspired by
      <NuxtLink
        href="https://github.com/antfu/vitesse-nuxt3"
        target="_blank"
        class="text-sky-600 hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-400"
      >
        antfu/vitesse-nuxt3
      </NuxtLink>
    </em>
  </p>

  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline">
        Show Dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  <router-link
    to="/ssr"
    class="mt-2"
  >
    <Button>SSR Page</Button>
  </router-link>

  <router-link
    to="/env"
    class="mt-2"
  >
    <Button>env</Button>
  </router-link>
</template>
