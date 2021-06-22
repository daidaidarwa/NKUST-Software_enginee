import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Select from '@/components/Select'
import Store from '@/components/Store'
import Goods from '@/components/Goods'

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
              components: {
                default: Select,
              }
            }
          ]
        },
        {
          path: '/store',
          name: 'store',
          components: {
            default: Store,
          }
        },
        {
          path: '/goods',
          name: 'goods',
          components: {
            default: Goods
          }
        }
    ]
})

