<template>
  <div class="main-home">
    Vue Demo
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem} from 'vux'

  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        mainMenuList: []
      }
    },
    methods: {
    },
    mounted(){
    }
  }

</script>

<style lang="scss">
  .main-home {
    margin-top: 120px;
    text-align: center;
  }
</style>
