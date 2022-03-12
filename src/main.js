import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './plugins/veeValidate'

import { createI18n, useI18n  } from 'vue-i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// Create VueI18n instance with options
const i18n = createI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})
app.use(i18n)
app.config.globalProperties.$t = useI18n;
app.config.globalProperties.$tt = i18n;

app.mount('#app')
