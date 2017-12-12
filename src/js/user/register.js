

export default {
    data () {
        return {
            isChecked: true,
            username:'',
            pwd:'',
            repwd:''
        }
    },
    created () {
        // this.$msg.warning('hahah')
    },
    methods:{
        checkOk(){
            this.isChecked = !this.isChecked;
        },
        submit(){
            if(!this.username){this.$msg.warning('用户名不能为空！');return;}
            if(!this.pwd){this.$msg.warning('密码不能为空！');return;}
            if(this.pwd.length>15){this.$msg.warning('密码长度不得超过15个字符');return;}
            if(this.pwd!=this.repwd){this.$msg.warning('两次密码输入不相等！');return;}
            if(!this.isChecked){this.$msg.warning('您未满18周岁！');return;}
            this.ajax.ajaxPost(this.api.userRegister,{name:this.username,pass:this.pwd}).then( res => {
                if(res.code!=200){this.$msg.warning('注册失败，'+res.msg);return;}
                this.$msg.warning('注册成功！');
            });
        }
    }
}