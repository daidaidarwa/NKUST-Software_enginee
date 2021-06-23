<template>
  <div class="d-flex justify-center mt-10" >
    <v-card dark>
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs> 
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card color="basil" flat>
            <v-card v-if="item==='推薦商品'">
              <router-view name="ad" />
            </v-card> 
            <v-card v-else elevation="24" width="1200" class="mx-auto">
              <router-view name="picture" :item="item"/>
            </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div> 
</template>

<script>
// import Ad from './Ad.vue'
// import Picture from './Picture.vue'

export default ({
    name: "Select",
    components: {
        // Ad,
        // Picture
    },
    props:{
        login: {
            type: Boolean
        }
    },
    data () {
      return {
        tab: null,
        items: [
          '推薦商品','配件飾品', '居家用品', '衣著提袋', '文具周邊', '創意美食', '其他類別', 
        ],      
        }
    }
})
</script>
