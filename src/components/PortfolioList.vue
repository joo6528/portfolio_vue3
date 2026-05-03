<template>
  <div
    v-for="(group, index) in items"
    :key="group.year"
    data-aos="fade-up" data-aos-duration="1600"
    class="portfolio-cnt"
    :class="[
    index !== 0 ? 'mt-[120px]' : '',
    index !== 0 ? 'max-1280:mt-[100px]' : '',
    index !== 0 ? 'max-600:mt-[80px]' : '']",>
    <p class="cnt-title">{{ group.year }}년</p>
    <div class="portfolio-list">
      <Swiper
        @swiper="(swiper) => onSwiperInit(swiper, group.year)"
        :modules="[Autoplay, Pagination]"
        :slides-per-view="'auto'"
        :space-between="50"
        :slides-offset-after="50"
        :speed="800"
        :loop="false"
        :centered-slides="false"
        :resistance-ratio="0"
        :watch-overflow="true"
        :observer="true"
        :observe-parents="true"
        :autoplay="{
          delay: 6500,
          disableOnInteraction: false,
        }"
        :pagination="{
          el: `.pagination-${group.year}`,
          clickable: true,
        }"
        :breakpoints="{
          1280: { spaceBetween: 50 },
          600: { spaceBetween: 40 },
          200: { spaceBetween: 30 },
        }"
        class="!pb-[25px] !pr-[30px] max-1280:!pr-[0]" >
        <SwiperSlide
          v-for="item in group.items"
          :key="item.id"
          class="!w-auto">
          <BaseCard
            :id="item.id"
            :year="group.year"
            :title="item.title"
            :subTitle="item.subTitle"
            @click="goDetail"
            @mouseenter="handleMouseEnter(group.year)"
            @mouseleave="handleMouseLeave(group.year)"/>
        </SwiperSlide>
      </Swiper>

      <div
        :class="`pagination-${group.year}`"
        class="swiper-pagination">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'

import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  items: Array
})

const goDetail = ({ id, year }) => {
  router.push({
    name: 'subView',
    params: { id, year }
  })
}

const swiperMap = ref({})

/**
 * autoplay 제어
 * 1280px 이하 → stop
 * 1280px 초과 → start
 */
const controlAutoplay = (swiper) => {
  if (!swiper?.autoplay) return

  const isDesktop = window.innerWidth > 1280

  if (isDesktop) {
    swiper.autoplay.start()
  } else {
    swiper.autoplay.stop()
  }
}

/**
 * 초기화
 */
const onSwiperInit = async (swiper, year) => {
  swiperMap.value[year] = swiper

  await nextTick()
  controlAutoplay(swiper)
}

/**
 * resize 대응
 */
const handleResize = () => {
  Object.values(swiperMap.value).forEach(swiper => {
    controlAutoplay(swiper)
  })
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

/**
 * hover 제어
 */
const handleMouseEnter = (year) => {
  const swiper = swiperMap.value[year]
  swiper?.autoplay?.stop()
}

const handleMouseLeave = (year) => {
  const swiper = swiperMap.value[year]

  // 데스크탑일 때만 다시 시작
  if (window.innerWidth > 1280) {
    swiper?.autoplay?.start()
  }
}
</script>