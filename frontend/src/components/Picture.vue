<template>
<div id='search'>
  <div class="text-center" v-if="buy_status" :key="page">
    <v-container fluid v-model="page">
      <v-row dense >
        <v-col v-for="card in cards" :key="card.id" :cols="card.flex">
            <v-card>
              <v-card link>
                <router-link :to="`/goods/${card.id}`">
                  <v-img :src="card.src" class="white--text align-end" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)" height="350px">
                    <v-card-actions >
                      <v-spacer></v-spacer>
                    </v-card-actions>          
                  </v-img>
                </router-link>
                <div class="d-flex flex-row-reverse">
                  <v-btn class="mt-n15" icon @click="check_login(card)">
                    <v-icon v-if="!card.like">mdi-heart-plus-outline</v-icon>
                    <v-icon v-else>mdi-heart</v-icon>
                  </v-btn>
                </div>
              </v-card>
            <router-link :to="`/goods/${card.id}`">
              <v-card-title> {{card.title}} </v-card-title>
            </router-link>
            <v-card-text>
              <v-row align="center" class="mx-0"></v-row>
              <div class="d-flex justify-space-between my-4 text-h4">
                <v-btn text left class="ml-n3"><v-icon left>mdi-account-circle</v-icon>{{card.creator}}</v-btn>${{card.price}}
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
    // props: {
    //   item:{type: String},
    //   },
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
        temp:{},
        cards: [
                { id: 1, class:this.item, title: '質感配件', creator: 'leerg', price: 250 , src: require(`@/assets/1.jpg`) , flex: 4, like: false},
                { id: 2, class:this.item, title: '金環珍珠耳環', creator: 'klhff', price: 125 , src: require(`@/assets/2.jpg`), flex: 4, like: false },
                { id: 3, class:this.item, title: '成熟金調耳環', creator: 'degggzs', price: 500 , src: require(`@/assets/3.jpg`), flex: 4, like: false },
                { id: 4, class:this.item, title: '人形愛耳環', creator: 'bnggsa', price: 250 , src: require(`@/assets/4.jpg`), flex: 4, like: false },
                { id: 5, class:this.item, title: '摟金項鍊', creator: 'garr', price: 300 , src: require(`@/assets/5.jpg`), flex: 4, like: false },
                { id: 6, class:this.item, title: '繩索結戒指', creator: 'fbadga', price: 150 , src: require(`@/assets/6.jpg`), flex: 4, like: false },
                { id: 7, class:this.item, title: '情人戒指項鍊', creator: 'bnggsa', price: 200 , src: require(`@/assets/7.jpg`), flex: 4, like: false },
                { id: 8, class:this.item, title: '圈型金項鍊', creator: 'garr', price: 80 , src: require(`@/assets/8.jpg`), flex: 4, like: false },
                { id: 9, class:this.item, title: 'DIO', creator: '是我啦哈哈', price: 9999 , src: require(`@/assets/9.jpg`), flex: 4, like: false },
              ],
        }
    },
    computed:{
        buy_status(){
            return !this.$store.state.buy_status
        }
    }, 
    methods: {
      goods: function(i) {
        return require(`@/assets/goods${i}.jpg`);
      },
      check_login(card){
        if(this.$store.state.login_status){
          if(!card.like){
            alert('已收藏商品')
          }else{
            alert('已取消收藏')
          }
          card.like = !card.like
        }else{
          alert('尚未登入')
      }
    }
    }
})
</script>
