<template>
<div id='search'>
{{show()}}
  <div class="text-center" v-if="buy_status" :key="page">
    <v-container fluid v-model="page">
      <v-row dense >
        <v-col v-for="i in goods" :key="goods.indexOf(i)" :cols="4">
            <v-card>
              <v-card link>
                <router-link :to="{name: 'goods', params:{id: i.id}}">
                  <v-img :src="i.images[0]" class="white--text align-end" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)" height="350px">
                    <v-card-actions >
                      <v-spacer></v-spacer>
                    </v-card-actions>          
                  </v-img>
                </router-link>
                <div class="d-flex flex-row-reverse">
                  <v-btn class="mt-n15" icon @click="check_login(i)">
                    <v-icon v-if="!i.like">mdi-heart-plus-outline</v-icon>
                    <v-icon v-else>mdi-heart</v-icon>
                  </v-btn>
                </div>
              </v-card>
            <v-card-title> {{i.title}} </v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0"></v-row>
              <div class="d-flex justify-space-between my-4 text-h4">
                <v-btn text left class="ml-n3"><v-icon left>mdi-account-circle</v-icon>{{i.creator.name}}</v-btn>${{i.price}}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      <v-pagination v-model="page" :length="4" circle></v-pagination>
  </div>
</div>
</template>

<script>
// import Goods from './Goods'

export default ({
    name: "Select",
    props: {
      item:{type: String},
      },
    // components:{
    //     // Goods v-bind:item_data="temp" />

    //   Goods,
    // },
    data () {
      return {
        page: 1,
        buy_state: false,
        // item: this.$router.params.value,
        tab: null,
        class: null,
        temp:{},
        goods: null
        }
    },
    computed:{
        buy_status(){
            return !this.$store.state.buy_status
        }
    }, 
    mounted() {
      this.class = {
        category: this.item
      }
      this.$axios.post('http://yumedesign.net:8000/api/v1/goods', this.class)
      .then(
        response =>{
          this.goods = response.data.data
          console.log(this.goods)
        }
      )
    },
    methods: {
      check_login(card){
        if(this.$store.state.auth.status){
          if(!card.like){
            alert('已收藏商品')
          }else{
            alert('已取消收藏')
          }
          card.like = !card.like
        }else{
          alert('尚未登入')
      }
    },
    show(){
      console.log(this.class)
    }
  }
})
</script>
