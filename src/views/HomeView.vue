<template>
  <p class="spec_info">spec: vue3, tailwind css, javascript, figma</p>
  <!-- cnt01 -->
  <div
    class="portfolio-intro">
    <div 
      class="text-center"
      data-aos="fade-up"
      data-aos-duration="1400">
      <h2
        class="intro-title">
        <span>열정</span>과 <span>정성</span>으로
        <br>
        완성된 <span class="underbar">나의 "작품들",</span>
        <br>
        <span>궁금</span>하지 않나요?
      </h2>

      <p class="intro-desc">지금 바로 공개합니다!</p>
    </div>

    <img :src="IconArrowDown" alt="아래 화살표" class="max-600:w-[40px]">

    <KeyWord :items="keywordData" />
  </div>

  <!-- cnt02 -->
  <div ref="quickMenu" class="intro">
    <div class="intro-title" data-aos="fade-up" data-aos-duration="1600">
      <p>만나서</p>
      <p>반가워요!</p>
    </div>

    <div class="line m-auto"></div>

    <div class="intro-desc" data-aos="fade-up" data-aos-duration="1600">
      <p>오늘보다 <span class="pointDot">내</span><span class="pointDot">일</span> 더 <span>발전</span>하는</p>
      <p><span class="underbar-aos">"퍼블리셔"</span> 빈주현 입니다:)</p>
    </div>
  </div>

  <!-- cnt03 -->
  <div ref="scrollTop" class="wd1600" id="myself">
    <SkillsData :items="skillsData" class="pb-[120px] border-b border-[var(--gray04)] max-1280:pb-[100px] max-600:pb-[80px]" />
    <Certifications :items="certificationsData" class="mt-[120px] max-1280:mt-[100px] max-600:mt-[80px]" />
    <Education :items="educationData" class="mt-[120px] max-1280:mt-[100px] max-600:mt-[80px]" />
    <Career :items="careerData" class="mt-[120px] max-1280:mt-[100px] max-600:mt-[80px]" />
  </div>

  <!-- cnt04 -->
  <div class="portfolio-wrap" id="portfolio">
    <div class="wd1600" data-aos="fade-right" data-aos-duration="1400">
      <p class="portfolio-title"><span class="underbar-aos">포트폴리오</span> 리스트</p>
      <p class="portfolio-desc">퍼블리싱&디자인 작업한 개인 포트폴리오 및 회사 작업물 입니다.</p>
    </div>

    <PortfolioList :items="portfolioData" />
  </div>

  <!-- cnt05 -->
  <div class="line m-auto"></div>

  <div class="study-intro" id="study">
    <div class="text-center" data-aos="fade-up" data-aos-duration="1600">
      <img class="intro-img" :src="IconClock" alt="시계">
      <p class="intro-title">지금은</p>
      <p class="intro-title">공부시간!</p>
    </div>
  </div>

  <div 
    class="study-wrap">
    <StudyList :items="studyListData" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useUIStore } from '@/stores/ui'

import { keywordData } from "@/data/keyword.js"
import { skillsData } from "@/data/skills.js"
import { certificationsData } from "@/data/certifications.js"
import { educationData } from "@/data/education.js"
import { careerData } from "@/data/career.js"
import { portfolioData } from "@/data/portfolio.js"
import { studyListData } from "@/data/studyList.js"
  
import KeyWord from '@/components/Keyword.vue'
import SkillsData from '@/components/SkillsData.vue'
import Certifications from '@/components/Certifications.vue'
import Education from '@/components/Education.vue'
import Career from '@/components/Career.vue'
import PortfolioList from '@/components/PortfolioList.vue'
import StudyList from '@/components/StudyList.vue'

import IconArrowDown from '@/assets/images/arrow_down_black.svg'
import IconClock from '@/assets/images/clock.png'

const ui = useUIStore()
const quickMenu = ref(null)
const scrollTop = ref(null)

let handleScroll

onMounted(() => {
  handleScroll = () => {
    const quickTop = quickMenu.value.getBoundingClientRect().top
    const scrollTopPos = scrollTop.value.getBoundingClientRect().top

    ui.showQuickMenu = quickTop <= 0
    ui.showScrollTop = scrollTopPos <= 0
  }

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>