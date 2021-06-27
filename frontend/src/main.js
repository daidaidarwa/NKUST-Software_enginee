import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import axios from 'axios'
// import AxiosPlugin from 'vue-axios-cors'
import 'vuetify/dist/vuetify.min.css'

 
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(axios)
Vue.use(Vuetify)
Vue.use(Vuex)
// Vue.use(AxiosPlugin)


export default new Vuetify({
  theme: { dark: true },
})

const store = new Vuex.Store({
    state: {
      auth:{
        status: false,
        access: null,
        refresh: null,
      },
      buy_status: false,
    },

    

  mutations: {
    login(state, res) {
      // console.log(auth)
      // console.log(res.access)
      // console.log(res.refresh)
      state.auth.status = true
      state.auth.access = res.access
      state.auth.refresh = res.refresh
    },
    logout(state){
      state.auth.status = false
      state.auth.access = null
      state.auth.refresh = null
    },
  }
})

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h=> h(App),
  router,
  store,
})