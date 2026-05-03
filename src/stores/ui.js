import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    showQuickMenu: false, // 퀵메뉴
    showScrollTop: false, // 스크롤탑버튼
    isQuickMenuHover: false, // 퀵메뉴 호버
  })
})