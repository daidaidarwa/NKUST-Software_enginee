import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Picture from '@/components/Picture'
// import Store from '@/components/Store'
import Goods from '@/components/Goods'
// import Shopping_cart from '@/components/Shopping_cart'
import Search from '@/components/Search'
import Ad from '@/components/Ad'
import Select from '@/components/Select'

Vue.use(Router)

export default new Router ({
    routes: [
        {
          path: '/',
          components: {
            home: Home,
            select: Select
          },
            children:[
              {
                path:'',
                components:{
                  ad: Ad,
                  picture: Picture
                },
              },
              
              {
                path: '/goods',
                name: 'goods',
                components: {
                  default: Goods
                }
              },      
            ]
        },
        {
          path: '/search',
          name: 'search',
          components: {
            default: Search
          }
        },
    ]
})

