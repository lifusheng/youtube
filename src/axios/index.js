
import axios from "axios";

export default {
    ajaxGet (api, cb) {
        axios.get(api).then(res=>{
            const data = res.data;
            if (data.code == 200) {
                return data.data
            }else {
                return {code:data.code,msg:data.msg}
            }
        })
        .catch(err => {
            console.log(err);
        })
    },
    ajaxPost (api, post, cb) {
       return axios.post(api, post, {
           headers: {
               "Content-Type": "multipart/form-data"
           }
       }).then(res=>{
                const data = res.data;
                if (data.code == 200) {
                    return data;
                }else {
                    return {code:data.code,msg:data.msg}
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}