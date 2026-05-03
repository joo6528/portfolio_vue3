<template>
  <div data-aos="fade-up" data-aos-duration="1600">
		<div class="cnt-header-title" data-aos="fade-right" data-aos-duration="1400">
			<span>기술역량</span>
		</div>

		<div
			v-for="(skill, index) in items"
			:key="index"
			class="cnt-section">
			<p class="cnt-section-title">{{ skill.title }}</p>

			<ul class="skills-list">
				<li
					v-for="(item, index) in skill.items"
					:key="index">
					<span>{{ item }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
defineProps({
	items: Array
})
</script>