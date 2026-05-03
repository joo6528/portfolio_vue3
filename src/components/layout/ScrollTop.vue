<template>
  <div
    v-if="route.name !== 'subView'"
    class="scrollTop-btn"
    @click="scrollToTop">
    <img :src="topBtn" alt="맨 위 이동" class="block dark:hidden">
    <img :src="topBtnW" alt="맨 위 이동" class="hidden dark:block">
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

import topBtn from "@/assets/images/topBtn.svg"
import topBtnW from "@/assets/images/topBtnW.svg"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
</script>