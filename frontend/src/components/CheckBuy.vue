<template>
<div id="checkbuy">
<div class="d-flex justify-center mt-15" >
    <div class="d-flex mt-5 ">
        <v-list
        flat
        subheader
        width="900"
        >
        <v-subheader>
          <v-col class="pt-15" md="0" sm='1'>
          </v-col>
          商品
          <v-col class="pt-15" md="0" sm='5'>
          </v-col>
          單價
          <v-col class="pt-15" md="0" sm='0'>
          </v-col>
          數量
          <v-col class="pt-15" md="0" sm='0'>
          </v-col>
          總計
          <v-col class="pt-15" md="0" sm='1'>
          </v-col>
        </v-subheader>
        <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
        >
        <v-list-item
          v-for="item in items"
          :key="item.title">
          <template>
            <v-list-item-avatar tile size="90">
              <v-img :src="item.imgUrl"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-container>
                <v-row no-gutters>
                  <v-col
                    cols="2"
                    sm="5"
                  >
                    <v-card
                      class="pa-2"
                      tile
                    >
                      <v-list-item-title v-text="item.itemName"></v-list-item-title>
                    </v-card>
                  </v-col>
                  
                  <v-col
                    cols="4"
                    sm="3"
                  >
                    <v-card
                      class="pa-2"
                      tile
                    >
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.price}}
                    </v-card>
                  </v-col>
                  
                  <v-col
                    cols="4"
                    sm="2"
                  >
                    <v-card
                      class="pa-2"
                      tile
                    >
                      &nbsp;{{item.count}}
                    </v-card>
                  </v-col>
                  
                  <v-col
                    cols="4"
                    sm="2"
                  >
                    <v-card
                      class="pa-2"
                      tile
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>$</span>{{item.price * item.count}}
                    </v-card>
                  </v-col> 
                </v-row>
              </v-container>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-list-item>
          <v-row no-gutters>
            <v-col
              cols="4"
              sm="5"
            >
            <v-card
              class="pa-2"
              tile
            >
            <v-text-field label="留言"></v-text-field>
            </v-card>
            </v-col>
            <v-col
              cols="4"
              sm="6"
            >
            <v-card
              class="pa-2"
              tile
            >
            <v-text-field label="地址"></v-text-field>
            </v-card>
            </v-col>
            <v-col
              cols="4"
              sm="1"
            >
        
            <div style="font-size:14px;">運費:<span>$</span>60</div>
            
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item>
          <v-col
            cols="4"
            sm="7"
          >
          </v-col>
          
           <v-col
            cols="4"
            sm="3"
          >
          總金額&nbsp;&nbsp;:&nbsp;&nbsp;<span>$</span>1700
          </v-col>

          <v-col
            cols="5"
            sm="5"
          >
          <v-btn
            elevation="5"
            color="grey"
          >
          結帳
          </v-btn>
          </v-col>
        </v-list-item>
                  
      </v-list-item-group>
    </v-list>
    </div>
    </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        settings: [],
        items: [
           {
            id:'1',
            itemName:'聖誕特調 | 乾燥花束',
            imgUrl: require('@/assets/goods1.jpg'),
            price:'500',
            count:'1',
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
  }
</script>