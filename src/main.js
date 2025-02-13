import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'

// Router
import router from './router'

// Components
import App from './App.vue'


createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
