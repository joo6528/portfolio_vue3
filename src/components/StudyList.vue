<template>
  <div v-for="data in items"
  class="study-cnt"
  data-aos="fade-up" 
  data-aos-duration="1600">
    <section
      :data-title="data.title"
      :data-sub="data.sub"
      class="study-list">
      <article
        v-for="item in data.lists">
        <a :href="item.url" target="_black">
          <p class="list-title">{{ item.title }}</p>
          <img :src="IconMoreBtn" alt="더보기" class="block dark:hidden">
          <img :src="IconMoreBtnW" alt="더보기" class="hidden dark:block">
        </a>
      </article>
    </section>
  </div>
</template>

<script setup>
import IconMoreBtn from '@/assets/images/moreBtn.svg'
import IconMoreBtnW from '@/assets/images/moreBtnW.svg'

defineProps({
  items: Array
})
</script>