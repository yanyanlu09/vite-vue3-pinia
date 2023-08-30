import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router'

 // 创建vue实例
 const app = createApp(App)
 // 挂载pinia
 app.use(store)
    .use(router)
    .mount('#app')

// App.use(store)
// createApp(App).mount('#app')



