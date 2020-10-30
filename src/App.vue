<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-button type="primary">主要按钮</van-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { Button } from "vant";
export default {
  name: 'App',
  components: {
    [Button.name]:Button
    // HelloWorld,
 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
