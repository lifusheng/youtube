

<template>
    <div class="js-nologin-section">
        <c-header></c-header>

        <div class="login-nav layer-page">
            <a href="#/login" class="nu">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <span>登录</span>
            </a>
        </div>
        <div class="ou">
            <img class="mu" src="/static/images/no_sign_in.png">
            <h2 class="mu"><span>您尚未登录</span></h2>
            <div class="ku">登录后，即可上传和保存视频，并对视频发表评论。</div>
            <a href="#/login" class="nu">登录</a>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>