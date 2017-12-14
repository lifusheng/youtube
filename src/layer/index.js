



import cHeader from './ytbHead.vue'
import Msg from './msg.vue'


const layer = {
    cHeader
}
//filters
const install = function (Vue, opts = {}) {
    Object.keys(layer).forEach((key) => {
        Vue.component(key, layer[key])
    });
    const msg = Vue.extend(Msg)
    const msgFn = (o = {}) => {
        var instance = new msg().$mount()
        instance.words = o.words
        document.body.appendChild(instance.$el)
        instance.show = true
        let t = setTimeout(() => {
            clearTimeout(t)
            instance.show = false
        }, o.duration || 2500)
        return instance
    };
    Vue.prototype.$msg = {
        warning (opts,callback) {
        if(callback && callback instanceof Function){
            let tt = setTimeout(() => {
                clearTimeout(tt)
                callback();
            }, 1000)
            return msgFn({ words: opts, duration:1000})
        }

        if (typeof opts == 'string') {
            return msgFn({
                words: opts
            })
        }
        return msgFn(opts)
      }
    }
};
if (window && window.Vue) {
    install(window.Vue)
}
export default install
