// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layer from './layer'

import ajax from "./axios/index";
import api from "./axios/api"
import axios from "axios";

Vue.use(layer)
// Vue.use(ajax)
// Vue.use(api)
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.prototype.ajax = ajax;
Vue.config.productionTip = false

console.log(ajax)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
