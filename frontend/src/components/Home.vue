<template>
<v-app>
<div class="d-inline-flex justify-space-around">
    <div class="d-flex">
        <v-img class='mt-8' :src="require('@/assets/logo.png')" width="155" height="75"></v-img>
        <v-col class="pt-15" md="10" sm='5'>
        <v-text-field label="Search" solo></v-text-field>
        </v-col>
        <v-btn class="mt-15 ml-n5" height="48" width="0" color="#BDBDBD" >
            <v-icon large> mdi-magnify</v-icon>
        </v-btn>
    </div>
    <div class="d-flex align-center">
        <div class="d-flex mt-5 ">
        <v-row>
            <v-dialog v-model="login" persistent max-width="500px">
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
                        <v-text-field  label="Yume Design帳號" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center">
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field type="password" label="密碼"  required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center">
                        <v-btn  color="blue darken-1" text @click="login = false">
                        登入
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="login = false">
                        忘記密碼
                        </v-btn>
                    </v-row>
                    </v-container>
                </v-card>
                </v-card>
            </v-dialog>
            </v-row>
        </div>
        <div class="d-flex ml-16  mt-5">
            <Login />
        </div>
    </div>
</div>
<router-view />
</v-app>
</template>

<script>
import Login from './Login.vue'
export default ({
    name: "Home",
    components:{
        Login,
    },
    data () {
      return {
        login: false,
        sign: false,
        model: 0,
        }
    }
})
</script>
