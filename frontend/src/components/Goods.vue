<template>
  <v-container>
  {{show()}}
    <v-tabs-items v-model="tab">
    <v-row no-gutters align="center">
      <v-col v-model="item_data" cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile align="center">
          <img :src="item_data.images[0]" class="white--text align-end" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)" height="426px">
        </v-card>
      </v-col>
      <v-col v-model="item_data" cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <v-container fluid>
            <v-row align="center">
              <v-card-title>{{ item_data.title }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0" >
                  NT$ {{ item_data.price }}
                </v-row>
              </v-card-text>
              <v-responsive min-height="10vh"></v-responsive>
              <v-select :items="size" filled label="選擇商品規格" dense small ></v-select>
              <v-select :items="amount(20)" filled label="數量" dense small></v-select>
              <v-btn dark block @click="putin(item_data.id)">
                <v-icon left>mdi-cart</v-icon>
                放入購物車
               </v-btn>
              <v-responsive min-height="5vh"></v-responsive>
              <v-btn block  @click="exit"> 
                <v-icon left color="error">mdi-heart</v-icon>
                收藏商品
              </v-btn>
              <v-responsive min-height="10vh"></v-responsive>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    </v-tabs-items>


  </v-container>

  
</template>

<script>
  export default ({
    name : 'Good',

    data () {
      return {
        size: ["small", 'middle', 'large'],
        buy_stats: false,
        tab: null,
        item_data: null,
        goods: null
        // item_data: {},
        }
      },
    computed:{
        buy_status(){
            return !this.$store.state.buy_status
        }
      },
    mounted() {
      this.$axios.get(`http://yumedesign.net:8000/api/v1/goods/${this.$route.params.id}`)
      .then(
        response =>{
          this.item_data = response.data.data
          console.log(this.item_data)
        }
      )
    }, 
    // mounted() {
    //   this.item_data=this.$route.query.value
    //   console.log(this.$route.query)
    // },
    methods: {
      amount: function(i) {
          var am = []
          for (var k = 0 ; k < i ; k++){
              am.push(k+1) ;
          }
          return am;
      },
      exit(){
        return this.$router.go(-1)
      },
      show(){
        console.log(this.item_data)
      },
      putin(){
        if(this.$store.state.auth.status){
          this.goods = {goods_id: this.item_data.id, quantity: 2}
          this.$axios.post('http://yumedesign.net:8000/api/v1/cart', this.goods, {headers: {'Authorization': `Bearer ${this.$store.state.auth.access}`}} )
          .then(
            response =>{
              alert('已加入購物車')
              console.log(response)
              
          })
          .catch(error => console.log(error))
        }else{
          alert("尚未登入")
        }
      }
    },
    
})
</script>
