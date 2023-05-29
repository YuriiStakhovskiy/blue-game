import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import piniaPersist from 'pinia-plugin-persist'
import { i18n } from '@/i18n'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Vuetify

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App)
// app.use(createPinia().use(piniaPersist))
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
// app.use(vuetify)
app.provide('i18n', i18n)
app.mount('#app')
