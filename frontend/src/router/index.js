import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Select from '@/components/Select'

Vue.use(Router)

export default new Router ({
    routes: [
        {
          path: '/',
          name: 'home',
          components: {
            default: Home,
          },
          children: [
            {
              path: '',
              component: Select
            }
          ]
        },
    ]
})