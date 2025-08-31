import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './assets/main.css'

import { createPinia } from 'pinia'
import router from './router/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
