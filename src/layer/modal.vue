<template>
  <transition name="bounceIn"  @leave="transitionComplete">
    <div v-if="show" class="modal">
      rtyreyer

    </div>
  </transition>
</template>
<script>
  const f = e => e.preventDefault()
  export default {
    data () {
      return {
        show: true,
        isloading: false,
        disabled: false,
        comfirmText: '确定'
      }
    },
    watch: {
      autoLoading(v){
        this.isloading=v;
        this.disabled = v
        this.comfirmText = v?'正在提交':'确定'
      }
    },
    methods: {
      cancel () {
        if (this.isloading) {
          return
        }
        this.show = false
        this.onCancel.call(this.$parent)
      },
      ok () {
        if (this.autoLoading) {
          this.isloading = this.loading
        }
        if (this.autoLoading && !this.isloading) {
          this.show = false
        } else if (this.isloading) {
          this.disabled = true
          this.comfirmText = '正在提交'
        }
        this.onOk.call(this.$parent)
      },
      close () {
        this.isloading = this.loading = this.show = false
      }
      ,
      transitionComplete: function (el) {
        let t=setTimeout(()=>{
          clearTimeout(t)
          this.instance && (el&&document.body.removeChild(el))
        },300)
      },
      toggle (boo) {
        this.show = boo
        if (!boo) {
          this.isloading = this.disabled = boo
          this.comfirmText = '确定'
        }
      }
    }
  }
</script>
