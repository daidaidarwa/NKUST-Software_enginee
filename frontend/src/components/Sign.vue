<template>
  <v-row>
    <v-dialog v-model="sign" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#BDBDBD" dark v-bind="attrs" v-on="on" >
          註冊
        </v-btn>
      </template>
      <v-card width="500">
        <v-card-title class="d-flex justify-center">
          <img src='@/assets/logo.png' height="10%" width="50%">
        </v-card-title>
        <v-card  height="350" >
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
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Email" required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-btn  color="blue darken-1" text @click="exit">
                註冊
              </v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default ({
    name: 'Sign',
    data() {
        return {
            sign: false
        }
    },    
    methods: {
        exit(){
           this.login_button = false
           return this.$store.commit("login")
        },
    },
})
</script>
