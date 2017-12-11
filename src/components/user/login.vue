

<template>
    <div class="js-login-section">
        <c-header></c-header>
        <div class="layer-page">
           <div class="account flex">
               <i class="fa fa-user-o" aria-hidden="true"></i>
               <div class="account-input flex">
                   <label for="inputid1" class="c-input">
                       <input type="text" placeholder="请输入用户账号" id="inputid1">
                   </label>
               </div>
           </div>
            <div class="account flex">
                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
               <div class="account-input flex">
                   <label for="inputid2" class="c-input">
                       <input type="text" placeholder="请输入密码" id="inputid2">
                   </label>
               </div>
           </div>
            <div class="user-forget flex">
                <div class="Online">
                    在线客服
                </div>
                <div class="forget-paw">
                    忘记密码
                </div>
            </div>
            <div class="loading-x">
                <button class="btn error big" style="width: 100%;">
                    登录
                </button>
                <a href="#/register">
                    <button class="btn big register" style="width: 100%;">
                        去注册
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>