import './assets/main.css'
import '@/plugins/bootstrap'
import 'vue-tel-input/dist/vue-tel-input.css'

import VueTelInput from 'vue-tel-input'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTelInput)

app.mount('#app')
