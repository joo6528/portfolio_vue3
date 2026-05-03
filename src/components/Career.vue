<template>
  <div data-aos="fade-up" data-aos-duration="1600">
		<div class="cnt-header-title" data-aos="fade-right" data-aos-duration="1400">
			<span>경력</span>
		</div>

		<section
      class="career-list before_deco before:content-['CAREER']">
      <article
        v-for="(item, index) in items"
        :key="index">
        <span class="text text_divider">{{ item.date }}</span>
        <span class="text font-normal">{{ item.company }}</span>
        <span
          v-for="task in item.tasks"
          class="desc">{{ task }}</span>
      </article>
    </section>
	</div>
</template>

<script setup>
defineProps({
  items:Array
})
</script>