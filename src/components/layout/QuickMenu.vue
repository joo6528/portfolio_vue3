<template>
  <ul
    class="quickMenu"
    @mouseenter="!isMobile && (ui.isQuickMenuHover = true)"
    @mouseleave="!isMobile && (ui.isQuickMenuHover = false)">
    <li
      v-for="(list, index) in filteredMenu"
      :key="list.class"
      :class="list.class"
      class="cursor-pointer"
      @click="handleClick(list)">
      <img :src="list.img" :alt="list.alt">
    </li>
  </ul>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

import { useUIStore } from '@/stores/ui'

const ui = useUIStore()

import IconHome from '@/assets/images/cate04.png'
import IconMyself from '@/assets/images/cate01.png'
import IconImage from '@/assets/images/potfolio01.png'
import IconPortfolio from '@/assets/images/cate02.png'
import IconStudy from '@/assets/images/cate03.png'

const menuList = [
  {class: 'home', img: IconHome, alt: '홈'},
  {class: 'myself', img: IconMyself, alt: '자기소개'},
  {class: 'image', img: IconImage, alt: '독바 이미지'},
  {class: 'portfolio', img: IconPortfolio, alt: '포트폴리오'},
  {class: 'study', img: IconStudy, alt: '공부기록'},
]

const filteredMenu = computed(()=> {
  if(route.name === 'subView') {
    return menuList.filter(item=>item.class === 'home')
  }
  return menuList
})

const handleClick = (item) => {
  if(item.class === 'home') {
    router.push('/')
    return
  }

  const el = document.querySelector(`#${item.class}`)
  if (!el) return

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const isMobileSize = () => {
  return window.innerWidth <= 600
}

const isMobile = ref(isMobileSize())

const checkScreen = () => {
  isMobile.value = isMobileSize()
}

onMounted(()=>{
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(()=>{
  window.removeEventListener('resize', checkScreen)
})
</script>