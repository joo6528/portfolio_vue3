<template>
  <div data-aos="fade-up" data-aos-duration="1600">
		<div class="cnt-header-title" data-aos="fade-right" data-aos-duration="1400">
			<span>교육</span>
		</div>

    <div class="cnt-section before_deco before:content-['EDUCATION']">
      <section
        v-for="(item, index) in items"
        :key="index"
        class="education-list">
        <p class="list-title">{{ item.title }}</p>
        <article
          v-for="(list, i) in item.lists"
          :key="i">
          <p class="text text_divider">{{ list.date }}</p>
          <p class="text font-normal max-600:hidden">{{ list.name }}</p>
          <p class="desc font-normal">{{ list.info }} <button v-if="list.pdf" @click="openPdf(list.pdf)" class="align-middle"><img :src="IconTicket" alt="수료증" class="w-[40px] max-600:w-[30px]"></button></p>
        </article>
      </section>
    </div>
	</div>
</template>

<script setup>
import IconTicket from '@/assets/images/icon_ticket.png'

defineProps({
  items:Array
})

const openPdf = (url) => {
  window.open(url, "_blank")
}
</script>