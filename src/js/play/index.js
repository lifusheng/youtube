



export default {
    data () {
        return {
            videoUrl:'',
            videoDir:'/static/video/'
        }
    },
    mounted () {
        // //鼠标进入#container则显示按钮，移除则隐藏
        container.onmouseenter = function(){
            btn.style.display = 'block';
        }
        container.onmouseleave = function(){
            btn.style.display = 'none';
        }
        //视频一播放就隐藏广告，一暂停就显示广告
        v7.onplay = function(){
            ad.style.display = 'none';
            btn.src = '/static/images/video/pause.png';
            let t=setTimeout(()=>{
                clearTimeout(t);
                btn.style.display = 'none';
            },1000)
        }
        v7.onpause = function(){
            ad.style.display = 'block';
            btn.style.display = 'block';
            btn.src = '/static/images/video/play.png';
        }
        this.ajax.ajaxPost(this.api.palyVideoUrl,{vid:'124345456475672'}).then( res => {
            // if(res.code!=200){this.$msg.warning('获取视频失败，'+res.msg);return;}
            this.videoUrl=this.videoDir+res.data.url;
        });


    },
    methods:{
        palyBtn(){ //点击btn则播放/暂停视频
            if(v7.paused){    //视频当前处于暂停状态
                v7.play();
                btn.src = '/static/images/video/pause.png';
            }else {           //视频当前处于播放状态
                v7.pause();
                btn.src = '/static/images/video/play.png';
            }
        }
    }
}