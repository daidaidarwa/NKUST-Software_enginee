<template>
  <v-card elevation="24" width="1200" class="mx-auto">
    <v-carousel cycle interval="5000">
      <v-carousel-item v-for="i in goods" :key="goods.indexOf(i)">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="i.images[0]" height="500" width="550" />
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
          goods: [],
        }
    },
    mounted() {
      this.$axios.get('http://yumedesign.net:8000/api/v1/ad')
      .then(
        response =>{
          this.goods = response.data.data
          console.log(this.goods)
        }
      )
      .catch(error => console.log(error))
    },
})
</script>
