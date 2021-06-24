<template>
<v-app id="buycar">
  <div class="d-inline-flex justify-space-around">
      <div class="d-flex">
          <v-img class='mt-5 ml-15' :src="require('@/assets/logo.png')" width="200" height="100"></v-img>
          <v-col class="pt-15" md="5" sm='5'>
          </v-col>
          <v-btn class="mt-15 ml-n5" height="48" width="0" color="#BDBDBD" >
              <v-icon large> mdi-cart-variant </v-icon> 
          </v-btn>
          <v-col class="pt-15" md="0" sm='1'>
          </v-col>
            <v-col class="ml-10" md="16" sm='3'>
                <div style="font-size:20px;position: absolute;top: 5.5%;">購物車&nbsp;&nbsp;&nbsp;&nbsp;|</div>
            </v-col>
              <v-col class="pt-15" md="16" sm='5'>
                <div style="font-size:20px;position: absolute;top: 5.5%;">選擇商品</div>
            </v-col>
          <v-divider>insert</v-divider>
      </div>
      <div class="d-flex align-center">
          <div class="d-flex mt-5 ">
        </div>
      </div>
  </div>
  <div class="d-flex justify-center mt-15" >
    <div class="d-flex mt-5 ">
      <v-list flat subheader width="900">
          <v-subheader>
              商品
            <v-col class="pt-15" md="0" sm='6' />
              單價
            <v-col class="pt-15" md="0" sm='0' />
              數量
            <v-col class="pt-15" md="0" sm='0' />
              總計
            <v-col class="pt-15" md="0" sm='1' />
          </v-subheader>
        <v-list-item-group v-model="settings" multiple active-class="">
          <v-list-item v-for="item in items" :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" value />
              </v-list-item-action>
              <v-list-item-avatar tile size="90">
                <v-img :src="item.imgUrl" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-container>
                  <v-row no-gutters>
                    <v-col cols="2" sm="5">
                      <v-card class="pa-2" tile>
                        <v-list-item-title v-text="item.itemName"></v-list-item-title>
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="3">
                      <v-card class="pa-2" tile>
                        &nbsp;{{item.price}}
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="2">
                      <v-card class="pa-2" tile>
                        {{item.count}}
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="2">
                      <v-card class="pa-2" tile>
                        &nbsp;&nbsp;&nbsp;<span>$</span>{{item.price * item.count}}
                      </v-card>
                    </v-col> 
                  </v-row>
                </v-container>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <v-col cols="4" sm="10" />
            <v-col cols="5" sm="5">
              <v-btn @click="direct" elevation="5" color="grey">
                去買單
              </v-btn>
            </v-col>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
  <router-view name="checkbuy"/>
</v-app>
</template>
<script>
  export default {
    data () {
      return {
        settings: [],
        check: false,
        items: [
           {
            id:'1',
            itemName:'聖誕特調 | 乾燥花束',
            imgUrl: require('@/assets/goods1.jpg'),
            price:'500',
            count:'1'
          },
          {
            id:'2',
            itemName:'黑白質感 | 乾燥花束',
            imgUrl: require('@/assets/goods2.jpg'),
            price:'790',
            count:'1'
          },
          {
            id:'3',
            itemName:'薰衣草藍調 | 乾燥花束',
            imgUrl: require('@/assets/goods3.jpg'),
            price:'120',
            count:'1'
          },
          {
            id:'4',
            itemName:'聖誕特調 | 乾燥花束',
            imgUrl: require('@/assets/goods4.jpg'),
            price:'230',
            count:'1'
          },
        ],
      }
    },
    methods:{
      direct(){
        return this.$router.push({name:'checkbuy'}).catch(err=>{err})
      }
    }
  }
</script>