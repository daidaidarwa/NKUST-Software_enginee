<template>
<v-app>
    <div class="d-inline-flex justify-space-around">
      <div class="d-flex">
        <v-img class='mt-9' :src="require('@/assets/logo.png')" width="155" height="75"></v-img>
          <v-col class="pt-15" md="10" sm='5'>
            <v-text-field v-model="search_keyword" label="Search" solo></v-text-field>
          </v-col>
          <router-link :to="{name: 'search', params:{keywords: search_keyword}}">
            <v-btn @click="search" class="mt-15 ml-n5" height="48" width="0" color="#BDBDBD" >
              <v-icon large> mdi-magnify</v-icon>
            </v-btn>
          </router-link>
      </div>
      <div class="d-flex align-center">
        <div class="d-flex mt-5 ">
          <v-row v-if="login_status">
            <v-dialog v-model="login_button" persistent max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#BDBDBD" dark v-bind="attrs" v-on="on" >
                  登入
                </v-btn>
              </template>
              <v-card width="500">
                <v-card-title class="d-flex justify-center">
                  <img src='@/assets/logo.png' height="10%" width="50%">
                </v-card-title>
                <v-card  height="300" >
                  <v-container>
                    <v-row class="d-flex justify-center">
                      <v-col  cols="12" sm="6" md="4">
                        <v-text-field v-model="login_data.account.username" label="Yume Design帳號" required></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center">
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="login_data.account.password" type="password" label="密碼"  required></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center">
                      <v-btn  color="blue darken-1" text @click="login">
                        登入
                      </v-btn>
                    </v-row>
                  </v-container>
                </v-card>
              </v-card>
            </v-dialog>
          </v-row>
          <div class="text-center" v-else>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar dark v-bind="attrs" v-on="on">
                  <img :src="avatar">
                </v-avatar>
              </template>
              <v-list dense rounded>
                <v-list-item link>
                  <router-link to="/goods" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link"><v-icon left> mdi-home</v-icon>個人資料</button>
                  </router-link>
                </v-list-item>
                <v-list-item link>
                  <button text dark><v-icon left>mdi-clipboard-list-outline</v-icon>訂單查詢</button>
                </v-list-item>
                <v-list-item link>
                  <button  @click="logout"><v-icon left>mdi-logout</v-icon>登出</button>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn class="ml-8" @click="direct" elevation="5" color="grey">
              <v-icon>mdi-cart-variant</v-icon>
          </v-btn>
          </div>
        </div>
        <div class="d-flex ml-16  mt-5" v-if="login_status">
          <Sign />
        </div>
      </div>
    </div>
    <Select v-if="!search_status"/>
    <router-view name="search" :search_keyword="search_keyword" v-else/>
  </v-app>
</template>

<script>
import Sign from './Sign.vue'
import Select from './Select.vue'
// import Search from './SearchResult.vue'
// import Ad from './Ad.vue'

export default ({
    name: "Home",
    components:{
        Sign,
        Select,
        // Search
        // Ad
    },
    data () {
      return {
        info: null,
        login_button: false,
        search_status:false,
        search_keyword: null,
        sign: false,
        model: 0,
        tab: null,
        avatar: null,
        login_data:{
          type: "general",
          account:{
            username: null,
            password: null
          }
        },
        items: [
          '推薦商品','配件飾品', '居家用品', '衣著提袋', '文具周邊', '創意美食', '其他類別', 
        ],
        
      }    
    },
    computed:{
        login_status(){
          return !this.$store.state.auth.status
        }
    },
    methods: {
      direct(){
        return this.$router.push({path:'/cart'}).catch(err=>{err})
      },
      login(){
        this.$axios.post('http://yumedesign.net:8000/api/v1/auth/token', this.login_data)
        .then(
          response => {
            console.log(response.data)
            this.$store.commit('login', response.data)
            alert("登入成功")
            this.$axios.get('http://yumedesign.net:8000/api/v1/me', {headers: {'Authorization': `Bearer ${this.$store.state.auth.access}`}}            )
            .then(
              response => {
                this.avatar = response.data.avatar
                console.log(response.data)
              }
            )
          }
        )
        .catch(error => {
          alert("登入失敗")
          console.log('Error:', error)
          }
        )         
      }
      ,
      logout(){
        this.$store.commit('logout')
      },
      search(){
        this.search_status = !this.search_status 
      }
    },
})
</script>
