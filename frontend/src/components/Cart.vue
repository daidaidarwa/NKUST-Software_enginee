<template>
<v-app id="buycar">
  <div class="d-inline-flex justify-space-around">
      <div class="d-flex">
          <v-img class='mt-5 ml-15' @click="back" :src="require('@/assets/logo.png')" width="200" height="100"></v-img>
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
          <v-list-item v-for="i in carts" :key="carts.indexOf(i)">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" value></v-checkbox>
                <v-btn icon @click="del(i, i.id)">
                  <v-icon class="ml-3">
                    mdi-close-box
                  </v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-avatar tile size="90">
                <v-img :src="i.goods.images[0]" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-container>
                  <v-row no-gutters>
                    <v-col cols="2" sm="5">
                      <v-card class="pa-2" tile>
                        <v-list-item-title v-text="i.goods.title"></v-list-item-title>
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="3">
                      <v-card class="pa-2" tile>
                        &nbsp;{{i.goods.price}}
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="2">
                      <v-card class="pa-2" tile>
                        {{i.quantity}}
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="2">
                      <v-card class="pa-2" tile>
                        &nbsp;&nbsp;&nbsp;<span>$</span>{{i.goods.price * i.quantity}}
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
        carts: []
      }
    },
    mounted() {
      this.$axios.get('http://yumedesign.net:8000/api/v1/cart', {headers: {'Authorization': `Bearer ${this.$store.state.auth.access}`}} )
      .then(
        response =>{
          this.carts = response.data.data
          console.log(this.carts)
        }
      )
      .catch(error => console.log(error))
    },
    methods:{
      direct(){
        return this.$router.push({name:'checkbuy'}).catch(err=>{err})
      },
      back(){
        return this.$router.go(-1)
      },
      del(i, id){
        this.$axios.delete('http://yumedesign.net:8000/api/v1/cart', {headers: {'Authorization': `Bearer ${this.$store.state.auth.access}`}, data:{cart_id: id}})
        .then(
          response =>{
            alert('刪除成功')
            this.carts.splice(i, 1)
            console.log(response)
          }
        )
        .catch(error => console.log(error))
      }
    }
  }
</script>