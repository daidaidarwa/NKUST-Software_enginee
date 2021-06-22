import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuex)

export default new Vuetify({
  theme: { dark: true },
})

const store = new Vuex.Store({
  state: {
    login_status: false,
    buy_status: false,
  },
  mutations: {
    login(state) {
      state.login_status = !state.login_status
    },
    buy(state) {
      state.buy_status = !state.buy_status
    }
  }
})

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h=> h(App),
  router,
  store
})