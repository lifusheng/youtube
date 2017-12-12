<template>
  <transition name="msg" @after-leave="transitionComplete">
    <div v-show="show" class="modal layer-page">
      <div class="modal-box">
        <div class="modal-main">
          <span>{{words}}</span>
        </div>
        <div class="modal-buttons loading-x">
          <button class="btn error big" @click="show=false">  确定   </button>
        </div>
      </div>

    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    props: {
      words: {
        type: String,
        default: '',
      }
    },
    methods:{
      transitionComplete: function (el) {
        document.body.removeChild(el)
      }
    }
  }
</script>
