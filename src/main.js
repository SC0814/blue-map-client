import Vue from 'vue'
import App from './App.vue'
// import { Button } from "vant";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Vue.use(Button);