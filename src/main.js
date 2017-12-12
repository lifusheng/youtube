// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layer from './layer'

import ajax from "./axios";
import api from "../server/api"


Vue.use(layer)

Vue.prototype.api = api;
Vue.prototype.ajax = ajax;
Vue.prototype.isLogin = false;  //是否登录
Vue.config.productionTip = false

console.log(ajax)
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
