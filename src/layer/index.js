



import cHeader from './ytbHead.vue'
// import cHeader from './head.vue'
const layer = {
    cHeader
}
//filters
const install = function (Vue, opts = {}) {
    Object.keys(layer).forEach((key) => {
        Vue.component(key, layer[key])
    })
}
if (window && window.Vue) {
    install(window.Vue)
}
export default install
