<template>
  <id id='app'>
      <router-view />
  </id>
</template>
  

<script>

export default {
  name: 'App',
    data () {
      return {
        items: [
          '推薦商品','配件飾品', '居家用品', '衣著提袋', '文具周邊', '創意美食', '其他類別', 
        ],
      }    
    },
}
</script>

