<template>
  <div data-aos="fade-up" data-aos-duration="1600">
		<div class="cnt-header-title" data-aos="fade-right" data-aos-duration="1400">
			<span>자격정보</span>
		</div>

		<ul class="certifications-list before_deco before:content-['CERTIFICATE']">
      <li
        v-for="(item, index) in items"
        :key="index">
        <span class="!font-medium text_divider">{{ item.date }}</span>
        <span>{{ item.name }}</span>
    </li>
    </ul>
	</div>
</template>

<script setup>
defineProps({
  items:Array
})
</script>