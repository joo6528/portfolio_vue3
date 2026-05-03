<template>
  <ul class="keyword-list">
    <li
      v-for="(list, index) in items"
      :key="index"
      :style="list.style"
      class="">
      <img :src="list.img" :alt="list.alt" class="list-img">
      <span class="list-label">{{ list.label }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items:Array
})
</script>