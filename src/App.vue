<template>
  <div class="app-nav-view">
    <view-box ref="viewBox">

      <!--<transition :name="transitionName">-->
        <keep-alive>
            <router-view class="child-view"></router-view>
        </keep-alive>
      <!--</transition>-->

    </view-box>
  </div>
</template>

<script type="text/ecmascript-6">
  import {ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'
  import {mapState, mapActions} from 'vuex'

  export default {
    components: {
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    },
    methods: {
      scrollTop () {
        this.$refs.viewBox.scrollTop(0)
      },
      ...mapActions([
        'updateDemoPosition'
      ])
    },
    data() {
        return{
          transitionName: 'slide-left'
        }
    },
    mounted () {
    },
    beforeDestroy () {
      this.box.removeEventListener('scroll', this.handler, false)
    },
    watch: {
      path (path) {
        console.log('watch.path.this.path... ' + path);
      },
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        demoTop: state => state.vux.demoScrollTop
      }),
      isMainTabBar() {
        console.log('computed.isTabbarDemo.this.route.path...');
        if (this.route) {
          console.log('computed.isTabbarDemo.this.route.path...' + this.route.path);
        }
        if (this.route.path == '/' || this.route.path == '/workflow-list' || this.route.path == '/main' || this.route.path == '/myInfo') {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' + ' type="text/javascript"><' + '/script>');
  }

  getScript('http://map.qq.com/api/js?v=2.exp&key=E5XBZ-LWVWJ-2TUFJ-F73PP-VS5LS-W3FUM&libraries=drawing,geometry,autocomplete,convertor');
  getScript('https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js');
  getScript('https://unpkg.com/tween.js@16.3.4');

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';


  .slide-left-enter, .slide-right-leave-active {
    position: absolute;
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    position: absolute;
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

  .child-view {
    width: 100vw;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }

  body {
    background-color: #fbf9fe;
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -ms-content-zooming: none;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .app-nav-view {
    height: 100%;
    background: #F1F6F9;

    .huilinayi-main-tabbar {
      background: white;
    }
  }
</style>
