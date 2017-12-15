

<style lang="scss">
    @import "../../../../src/styles/user/index.scss";
</style>


<template>
    <div class="guideBox">
        <keep-alive>
            <c-header></c-header>
        </keep-alive>

        <div class="js-userself-admin-section">
            <div class="user-info-wrap layer-page">
                <div class="user-log">
                    <img src="/static/images/mini_logo/defaultUser.jpg" alt="">
                    <h1 class="">tianxing li</h1>
                </div>
            </div>
            <div class="admin-nav">
                <div class="nav">
                    <div :class="{active:this.toggleFlag=='home'}"  @click="toggleHome()">首页</div>
                    <div :class="{active:this.toggleFlag=='video'}" @click="toggleVideo()">视频</div>
                    <div :class="{active:this.toggleFlag=='favor'}"  @click="toggleFavor()">收藏</div>
                    <div :class="{active:this.toggleFlag=='subs'}"   @click="toggleSubs()">订阅</div>
                </div>
            </div>
            <div class="item-wrap">
                <div class="layer-page" v-if="this.toggleFlag=='home'">
                    <div class="file-wrap">
                        <div class="edit">
                            <div class="avatar">
                                <div class="img">
                                    <img :src="avatar" @click="setAvatar">
                                    <span>修改头像</span>
                                    <p><span>注：头像大小不得超过2M</span></p>
                                    <p>
                                        <span>支持</span>
                                        <span class="ui-color-red">*jpg、jpeg、png</span>
                                    </p>
                                    <button type="button" @click="edit"><i class="fa fa-upload" aria-hidden="true"></i></button>
                                </div>
                                <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="avatarInput">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="layer-page" v-if="this.toggleFlag=='video'">
                video
            </div> <div class="layer-page" v-if="this.toggleFlag=='favor'">
                 favor
            </div> <div class="layer-page" v-if="this.toggleFlag=='subs'">
                subs
            </div>

        </div>
    </div>
</template>

<script>
    import admin from 'js/user/admin/index'
    export default admin

</script>
