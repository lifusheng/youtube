<template>
  <div id="app">
    <transition name="pageAnimate" >
      <router-view class="content-view"/>
    </transition>
  </div>
</template>
<style lang="scss">
  @import "styles/common.scss";
  @import "styles/play.scss";
  @import "../static/scss/font-awesome.scss";
</style>