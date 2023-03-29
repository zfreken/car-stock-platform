import { createApp } from 'vue'
import Vue3Toasity, { toast } from 'vue3-toastify'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue3-toastify/dist/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: 'colored',
  position: toast.POSITION.BOTTOM_RIGHT
})
app.mount('#app')
