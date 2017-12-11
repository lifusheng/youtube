

const load = (path) => {return resolve => require([`@/components/${path}.vue`], resolve)}

export default [
    //首页
    {path: '/', redirect: '/home',name:"首页"},
    {
        path: '/home',
        component:load('home/index'),
        name:"首页"
    },
    {
        path: '/hot',
        component: load('hot/index'),
        name:"热门视频"
    },
    {
        path: '/nologin',
        component: load('user/nologin'),
        name:"用户中心"
    },
    {
        path: '/login',
        component: load('user/login'),
        name:"登录"
    },
    {
        path: '/register',
        component: load('user/register'),
        name:"注册"
    },
    {
        path: '/user',
        component: load('user/index'),
        name:"用户中心"
    },
    {
        path: '/history',
        component: load('user/history/index'),
        name:"历史记录"
    },
    {
        path: '/b',
        component: load('b'),
        name:"b"
    },
    {path: '*', component: load('404'), name: '404'},
]