


export default {
    data () {
        return {
            username:'test01',
            pwd:''
        }
    },
    created () {

        this.ajax.ajaxPost(this.api.userLogin,{name:this.username,pass:123456}).then( res => {


        });
    },
    methods:{

    }
}