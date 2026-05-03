<template>
  <!-- <div class="text-center mt-[10vh]">
    <button class="text-[20px] font-normal">[미리보기]</button>
  </div> -->

  <div class="subView speedLink">
    <!-- 스피드 링크 -->
    <div data-aos="fade-right" data-aos-duration="1400">
      <h2 class="underbar-aos subView_title">스피드 링크</h2>
      <span v-if="data.work" class="subView_desc ml-[5px]">(최종 작업본과 다르게 노출될 수 있습니다.)</span>
    </div>

    <div data-aos="fade-up" data-aos-duration="1600" class="subView_section">
      <ul v-if="data?.speedLink">
        <li
          v-for="link in data.speedLink"
          :key="link.label">
          <a
            :href="link.url"
            target="_blank">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- // 스피드 링크 -->

  <!-- 작업 내용 -->
  <div v-if="data.description" class="subView description" data-aos="fade-up" data-aos-duration="1600">
    <div data-aos="fade-right" data-aos-duration="1400">
      <h2 class="subView_title">작업 내용</h2>
    </div>

    <div class="subView_section">
      <p>{{ data?.description }}</p>
    </div>
  </div>
  <!-- // 작업 내용 -->

  <!-- 작업 정보 -->
  <div v-if="data.detail" class="subView detail" data-aos="fade-right" data-aos-duration="1400">
    <div data-aos="fade-right" data-aos-duration="1400">
      <h2 class="subView_title">작업 정보</h2>
    </div>

    <ul class="subView_section">
      <li
        v-for="(info, key) in data.detail"
        :key="key">
        <span class="title">{{ labelMap[key] }}</span>
        <span class="desc">{{ info }}</span>
      </li>
    </ul>
  </div>
  <!-- // 작업 정보 -->

  <!-- 컬러 -->
  <div v-if="data.colors" class="subView colors" data-aos="fade-right" data-aos-duration="1400">
    <div data-aos="fade-right" data-aos-duration="1400">
      <h2 class="subView_title">컬러</h2>
    </div>

    <ul class="subView_section">
      <li v-if="data.colors.gradient" class="gradient">
        <div
          :style="{
            background: `linear-gradient(310deg,${data.colors.gradient.join(',')})`}" >
        </div>

        <p>{{ data.colors.gradient.join(',') }}</p>
      </li>

      <li
        v-for="item in data.colors.base" class="base">
        <div
          :style="{ backgroundColor: item }"></div>
        <p>{{ item }}</p>
      </li>
    </ul>
  </div>
  <!-- // 컬러 -->

  <!-- 폰트 -->
  <div v-if="data.fonts" class="subView fonts" data-aos="fade-right" data-aos-duration="1400">
    <div data-aos="fade-right" data-aos-duration="1400">
      <h2 class="subView_title">폰트</h2>
    </div>

    <div class="subView_section">
      <p class="font_title" v-if="data.fonts" :style="{ fontFamily: data.fonts.font }">{{ data?.fonts?.font }}</p>
      
      <ul class="font_box">
        <li
          v-for="item in data?.fonts?.types"
          :style="{
            fontWeight: item.weight,
            fontFamily: data.fonts.font
            }">
          <span class="box_title">{{ item.type }}</span>
          <span class="box_text">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- // 폰트 -->

  <!-- 업무 성과 -->
  <div v-if="data.performance" class="subView performance" data-aos="fade-right" data-aos-duration="1600">
    <div data-aos="fade-right" data-aos-duration="1400">
      <h2 class="subView_title">업무 성과</h2>
    </div>

    <div class="subView_section">
      <p class="title">{{ data?.performance?.task }}</p>
      <p class="desc">{{ data?.performance?.result }}</p>
    </div>
  </div>
  <!-- // 업무 성과 -->

  <div class="h-[120px]"></div>
</template>

<script setup>
import { computed } from 'vue'

import { useRoute } from 'vue-router'
import { portfolioData } from "@/data/portfolio"

const route = useRoute()
const id = Number(route.params.id)
const year = Number(route.params.year)

const data = computed(() => {
  return portfolioData
    .find(group => group.year === year)
    ?.items
    .find(item => item.id === id)
})

const labelMap = {
  solution: "솔루션",
  period: "제작기간",
  members: "작업자",
  role: "제작영역",
  tools: "사용 툴",
  framework: "프레임워크",
  contribution: "참여도",
  responsive: "반응형웹",
}
</script>