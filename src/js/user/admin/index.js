



export default {
    data () {
        return {
            toggleFlag:'home',
        }
    },
    created () {

    } ,
    methods:{
        toggleHome(){
            this.toggleFlag='home'
        },

        toggleVideo(){
            this.toggleFlag='video'
        },
        toggleFavor(){
            this.toggleFlag='favor'
        },
        toggleSubs(){
            this.toggleFlag='subs'
        },
        submit(){
            this.ajax.ajaxPost(this.api.userLogin,{name:this.username,pass:this.pwd}).then( res => {
                if(res.code!=200){this.$msg.warning('登录失败，'+res.msg);return;}
            });
        }
    }
}