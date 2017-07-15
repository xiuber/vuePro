<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'

}
</script>

<style>
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;color: #2c3e50;}
#app p{line-height: 50px;text-align: center;}
#app p input{border: 1px solid #ddd;height:25px;padding: 5px;}
.btn{width:100px;height:30px;border: none;background-color: dodgerblue;color:#ffffff;border-radius: 2px;}
</style>
