<template>
    <div class="layer-page js-header">
        <header class="site_header">
            <div class="head-left">
                <a href="#/home">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
            </div>
            <div class="head-right">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </header>
        <nav class="site_nav">
            <div v-for="v in footNavigtor">
                <router-link  :to=v.href >
                    <i class="fa fa-home" :class='v.cl' aria-hidden="true" :ref="v.ref"></i>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                activeName: '/home',
                footNavigtor: [
                    {
                        href: '/home',
                        cl: 'fa-home',
                        fn: 'gotoHome',
                        ref: 'home'
                    },
                    {
                        href: '/hot',
                        cl: 'fa-fire',
                        ref: 'hot'
                    },
                    {
                        href: '/user',
                        cl: 'fa-user-o',
                        ref: 'user'
                    }
                ]
            }
        }
        ,
        methods:{
            clearChoosen(){
                Object.keys(this.$refs).forEach(v=>{
                    this.$refs[v].className=this.$refs[v].className.replace('active','');
                });
            },
            gotoHome(){
                this.clearChoosen();
                this.$refs.home.className += " active";
                this.$router.push("/home")
            },
            gotoHot(){
                this.clearChoosen();
                this.$refs.hot.className += " active";
                this.$router.push("/hot")
            },
            gotoUser(){
                this.clearChoosen();
                this.$refs.user.className += " active";
                this.$router.push("/user")
            },
        }
    }
</script>
