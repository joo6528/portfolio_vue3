<template>
  <article class="card">
    <div class="card_top">
      <p class="card-title">{{ title }}</p>
      <p class="card-sub-title">{{ subTitle }}</p>
    </div>

    <div class="card_bottom">
      <button
        @click="goDetail">
        자세히보기
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  id: Number,
  year: Number,
  title: String,
  subTitle: String,
})

const emit = defineEmits(['click'])

const goDetail = () => {
  emit('click', {
    id: props.id,
    year: props.year
  })
}
</script>