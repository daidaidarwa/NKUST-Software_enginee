<template>
  <v-card elevation="24" width="1200" class="mx-auto">
    <v-carousel cycle interval="5000">
      <v-carousel-item v-for="i in 9" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img :src="goods(i)" height="100%" width="90%" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>    
  </v-card>
</template>

<script>
export default ({  
    name: 'Ad',
    data () {
      return {
        items: [
          '首頁','配件飾品', '居家用品', '衣著提袋', '文具周邊', '創意美食', '其他類別', 
        ]
        }
    },
    
    methods: {
    goods: function(i) {
        return require(`@/assets/goods${i}.jpg`);
    }
    }

})
</script>
