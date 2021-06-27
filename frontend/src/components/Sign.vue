<template>
  <v-row>
    <v-dialog v-model="states" persistent max-width="500px">
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
                <v-text-field v-model="sign_data.username" label="Yume Design帳號" required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="sign_data.password" type="password" label="密碼"  required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="sign_data.email" label="Email" required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-btn  color="blue darken-1" text @click="sign">
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
          states: false,
          sign_data: {
            email: null,
            username: null,
            password: null
          },
          account_data: {
            type: "general",
            account :{
              username: null,
              password: null
            }
          }
        }
    },    
    methods: {
      sign(){
        this.$axios.post('http://yumedesign.net:8000/api/v1/auth/registration', this.sign_data)
        .then(
          response => {
            console.log(response.data)
            this.account_data.account.username = this.sign_data.username
            this.account_data.account.password = this.sign_data.password
            this.$axios.post('http://yumedesign.net:8000/api/v1/auth/token', this.account_data)
            .then(response =>{
              console.log(response.data)
              this.$store.commit('login', response.data)
              }
            )
            alert("註冊成功")
            this.states = false
          }
        )
        .catch(
          error => {
            console.log(error.response)
            alert(error.response.data.detail)
            }
        ) 
      }
      },
   }
)
</script>
