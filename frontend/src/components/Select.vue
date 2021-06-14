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
                    <v-card v-if="item==='首頁'">
                        <Ad />
                    </v-card>
                    <v-card v-else elevation="24" width="1000" class="mx-auto">
                        <v-row>
                            <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
                                <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" class="grey lighten-2">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</div>    
</template>

<script>
import Ad from './Ad.vue'

export default ({
    name: "Select",
    components: {
        Ad,
    },
    data () {
      return {
        tab: null,
        items: [
          '首頁','配件飾品', '居家用品', '衣著提袋', '文具周邊', '創意美食', '其他類別', 
        ],      
        cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
              ],
        }
    }
})
</script>
