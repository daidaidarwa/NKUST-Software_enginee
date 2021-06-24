import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Picture from '@/components/Picture'
// import Store from '@/components/Store'
import Goods from '@/components/Goods'
// import Shopping_cart from '@/components/Shopping_cart'
import Ad from '@/components/Ad'
import CheckBuy from '@/components/CheckBuy'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router ({
    routes: [
        {
          path: '/',
          components: {
            default: Home,
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
          path: '/cart',
          name: 'cart',
          component: Cart,
            // checkbuy: CheckBuy
          children:[
            {
              path:'checkbuy',
              name: 'checkbuy',
              components: {
                checkbuy: CheckBuy
              }
            }
          ]
        },

    ]
})

