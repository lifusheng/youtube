

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

            <div class="layer-page" v-if="this.toggleFlag=='home'">
                <div class="file-wrap">
                    <i class="fa fa-upload" aria-hidden="true"></i>
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
        <!--<div className="">-->
            <!--<div className="ui-edit-icon-div">-->
                <!--<img src= ""/>-->
            <!--</div>-->
            <!--<div className="ui-edit-notes-div">-->
                <!--<span>注：头像大小不得超过2M</span>-->
            <!--</div>-->
            <!--<div className="ui-edit-notes-div">-->
                <!--<span>支持</span>-->
                <!--<span className="ui-color-red">*jpg、jpeg、png</span>-->
                <!--<span>格式的图片上传</span>-->
            <!--</div>-->
            <!--<form className="ui-display-none" action="/note/uploadIcon" method="post" encType="multipart/form-data" target="userImage">-->
                <!--<input id="edit_file"  type="file" accept="image/*" name="image">-->
                <!--<input id="edit_upload" type="submit" value="上传头像"> -->
            <!--</form>-->
            <!--<iframe id="edit_iframe" name="userImage" className="ui-display-none"></iframe>-->
        <!--</div>-->
    </div>
</template>

<script>
    import admin from 'js/user/admin/index'
    export default admin

</script>
