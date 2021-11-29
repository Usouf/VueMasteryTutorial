import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css' //Vuesax styles

createApp(App)
  .use(store)
  .use(router)
  // .use(Vuesax)
  .mount('#app')
