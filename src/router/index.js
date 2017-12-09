import Vue from 'vue'
import Router from 'vue-router'

import routeConfig from '@/router/config.js';
Vue.use(Router)

const routes= new Router({
        routes: routeConfig
})
routes.beforeEach(function (to, from, next) {
        next()
})


// routes.beforeEach(function(to, from, next){
//     // if(to.matched[0].meta.login&&!window.localStorage.tk&&to.path!='/user/login'){
//     //     return next('/user/login')
//     // }
//     // if(window.localStorage.tk && to.path=='/user/login'){ //登录状态下，不能进入登录界面
//     //     return next('/home')
//     // }
//    next()
// })
//
routes.afterEach(function (route) {
    document.title=route.name;
})

export default routes
