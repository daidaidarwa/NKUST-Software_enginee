import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false

Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true },
})
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h=> h(App),
  router,
})