<template>
  <v-container>
  {{show}}
    <v-tabs-items v-model="tab">
    <v-row no-gutters align="center">
      <v-col v-model="item_data" cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile align="center">
          <img :src="item_data.src" class="white--text align-end" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)" height="426px">
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

                    <v-btn dark block @click="exit">
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
        item_data: this.$route.params.id
        // item_data: {},
        }
      },
    computed:{
        buy_status(){
            return !this.$store.state.buy_status
        }
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
           this.buy_button = false
           return this.$store.commit("buy")
        },
      show(){
        console.log(this.$route.params.value)
    }
    },
    
})
</script>
