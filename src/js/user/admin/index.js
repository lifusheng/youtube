



export default {
    data () {
        return {
            toggleFlag:'home',
            avatar: '/static/images/mini_logo/defaultUser.jpg'
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
        edit() {
            console.log(this.$refs.avatarInput.files);
            // 修改了头像
            if (this.$refs.avatarInput.files.length !== 0) {
                var image = new FormData()
                image.append('avatar', this.$refs.avatarInput.files[0])
                this.ajax.ajaxPost(this.api.userUploadPic, image).then( res => {
                     console.log(res);
                });
            }
        },
        setAvatar() {
            this.$refs.avatarInput.click()
        },
        changeImage(e) {
            var file = e.target.files[0]
            var reader = new FileReader()
            var that = this
            reader.readAsDataURL(file)
            reader.onload = function(e) {
                that.avatar = this.result
            }
        },
        // submit(){
        //     this.ajax.ajaxPost(this.api.userLogin,{name:this.username,pass:this.pwd}).then( res => {
        //         if(res.code!=200){this.$msg.warning('登录失败，'+res.msg);return;}
        //     });
        // }
    }
}