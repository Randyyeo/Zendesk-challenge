import Vue from 'vue'
import App from './App.vue'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from "vue-router";
import router from "./router/index";
import Spinner from 'vue-simple-spinner'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component('vue-simple-spinner', Spinner)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
