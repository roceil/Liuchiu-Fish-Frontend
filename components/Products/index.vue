<script lang="ts" setup>
import Title from '~/components/Title.vue'
</script>

<template>
  <section class="index">
    <div class="container max-w-[1312px] pb-[52px] pt-[108px]">
      <div class="relative flex flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-[#EEF1F2] to-[#FDFBFB] pb-10 pt-20 md:items-end md:px-[62px] lg:px-[113px]">
        <Title text="人氣特產" />

        <div class="h-[801px] w-[295px] bg-primary-400 md:h-[318px] md:w-[700px] lg:w-[950px]" />

        <div class="flex w-full justify-center">
          <Button
            class="mt-10 text-primary-700"
          >
            查看所有商品
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
