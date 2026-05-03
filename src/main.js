import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import '@/assets/css/base.css'
import 'aos/dist/aos.css'
// import AOS from 'aos'
import App from '@/App.vue'
import router from '@/router'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')

// AOS 초기화
// AOS.init({
//   duration: 400, // 애니메이션 시간
// })