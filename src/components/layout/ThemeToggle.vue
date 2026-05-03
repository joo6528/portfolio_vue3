<template>
  <div class="themeToggle">
    <div class="button b2">
      <input type="checkbox" class="checkbox" v-model="isLight"/>

      <div class="knobs">
          <span>LIGHT</span>
      </div>

      <div class="layer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isLight = ref(false)

watch(isLight, (val) => {
  const documentElement = document.documentElement // html
  if(val) {
    documentElement.classList.add('dark')
  }else {
    documentElement.classList.remove('dark')
  }
})
</script>