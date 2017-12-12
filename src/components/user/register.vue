
<template>
    <div class="js-register-section">
        <c-header></c-header>
        <div class="layer-page">
            <div class="sign">
                <div>
                    <div class="sign-input">
                        <div class="sign-name"><label>用户账号</label><input type="text" v-model="username" placeholder="请输入用户账号"></div>
                        <div class="sign-paw"><label>登录密码</label><input type="password" v-model="pwd" placeholder="请输入密码"></div>
                        <div class="sign-repaw"><label>重复密码</label><input type="password" v-model="repwd"  placeholder="请再次输入密码"></div>

                        <!--<div class="sign-varcode"><label>验 证 码</label><input type="text" placeholder="输入验证码">-->
                            <!--<img src="/apis/file/getCaptcha1?w=100&amp;h=30&amp;code=ab9086c8-9f24-416c-8b3f-e4b88fe5e687">-->
                        <!--</div>-->

                        <div class="sign-Check" @click="checkOk()">
                            <i class="fa fa-check-square" :class="{ok:isChecked}" aria-hidden="true"></i>
                            <span>我已年满18周岁</span>
                        </div>
                    </div>
                    <div class="loading-x">
                        <button class="btn error big" style="width: 100%;" :class="{disabled:!isChecked}" @click="submit()">
                            立即注册
                        </button>
                    </div>

                    <div class="sign-immde sign-similar"><label></label></div>

                    <div class="sign-click flex">
                        <div class="Already"><a href="#/login" class="">
                            已有账号，直接登录
                        </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import register from 'js/user/register'
    export default register
</script>