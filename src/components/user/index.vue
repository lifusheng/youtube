



<template>
    <div class="js-user-section">
        <c-header></c-header>
        <div class="user-section">
            <div class="user-info-wrap layer-page">
                <div class="user-log">
                    <img src="/static/images/mini_logo/defaultUser.jpg" alt="">
                </div>
                <div class="user-txt">
                    <span>litianxing</span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </div>

            <div class="user-set-wrap layer-page">
                <div class="user-item">
                    <a  href="#/history" >
                        <i class="fa fa-history" aria-hidden="true"></i>
                        <span class="">历史记录</span>
                    </a>
                </div>
                <div class="user-item">
                    <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
                    <span class="">我的视频</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
    }
</script>