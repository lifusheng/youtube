
<template>
    <div class="guideBox">
        <keep-alive>
            <c-header></c-header>
        </keep-alive>
        <div class="js-paly-section layer-page">
            <div class="video-wrap" id="container">
                <video :src="videoUrl" id="v7" preload="auto" controls>
                    您的浏览器不支持VIDEO标签！
                </video>
                <img src="/static/images/video/ad.jpg"  id='ad' class="add center">
                <img src="/static/images/video/play.png" id="btn"  class="btn center" @click="palyBtn()"/>
            </div>
        </div>
    </div>
</template>

<script>
    import play from 'js/play/index'
    export default play

</script>