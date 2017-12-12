

export default {
    data () {
        return {
            username:'',
            pwd:''
        }
    },
    created () {
        this.isLogin=true;
    },
    methods:{
        submit(){
            if(!this.username){this.$msg.warning('用户名不能为空！');return;}
            if(!this.pwd){this.$msg.warning('密码不能为空！');return;}

            this.ajax.ajaxPost(this.api.userLogin,{name:this.username,pass:this.pwd}).then( res => {
                if(res.code!=200){this.$msg.warning('登录失败，'+res.msg);return;}

                window.localStorage["tk"]=res.data.userid                       //token存储
                window.localStorage["userName"]=res.data.username        //用户名
                window.localStorage["userPic"]=res.data.pic        //用户名
                this.$msg.warning('登录成功！',()=>{ this.$router.push("/home")});

            });
        }
    }
}