<script lang="ts" setup>
const { data, error } = useFetch('/api/testSSR')
</script>

<template>
  <div class="">
    {{ data }}
  </div>
</template>
