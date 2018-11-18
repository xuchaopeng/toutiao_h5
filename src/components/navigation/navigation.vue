<template>
<div class="top_menu_bar">
  <div class="top_menu_more">
    <a class="more_btn iconfont" @click="showNavManage">&#xe627;</a>
  </div>
  <div id="J_top_menu" class="top_menu_list">
    <div class="ml-content">
      <Scroll ref="scroll" 
              @scroll="scroll"
              :probe-type="probeType"
              :data="recomList" 
              :scrollX="scrollX"
              :listen-scroll="listenScroll"
      >
        <div ref="nav">
          <a v-for="item in recomList" 
            :class="{active:item.type === currentType.type}"
            @click="setTypeItem" 
            :data-type="item.type"
            :data-name="item.name"
            :key="item.name"
          >
          {{item.name}}
          </a>
        </div>
      </Scroll>
    </div>
  </div>
  <NavManage v-if="navmanageIsShow" 
             @resetTypes="resetTypes"
             @hideNavManage="hideNavManage"
  >
  </NavManage>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Scroll from 'base/scroll/scroll';
import NavManage from 'components/navmanage/navmanage';
import { getData } from 'common/js/dom';

export default {
  data() {
    return {
      navmanageIsShow: false,
      scrollx: -1,
      recomList: []
    };
  },
  created() {
    this.scrollX = true;
    this.listenScroll = true;
    this.probeType = 3;
    this.recomList = this.recomTypes.slice();
  },
  mounted() {
    this._initScroll();
  },
  computed: {
    ...mapGetters(['recomTypes', 'currentType'])
  },
  methods: {
    _initScroll() {
      setTimeout(() => {
        this._setNavWidth();
        this.$refs.scroll.refresh();
      }, 20);
    },
    _setNavWidth() {
      this.children = this.$refs.nav.children;
      let width = 0;
      for (var i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        width += child.clientWidth;
      }
      this.$refs.nav.style.width = width + 'px';
    },
    hideNavManage() {
      this.navmanageIsShow = false;
    },
    showNavManage() {
      this.navmanageIsShow = true;
    },
    setTypeItem(e) {
      const dataType = getData(e.target, 'type');
      const dataName = getData(e.target, 'name');
      this.setCurrentType({
        type: dataType,
        name: dataName
      });
      this._scrollTo(e);
    },
    resetTypes() {
      this.recomList = this.recomTypes.slice();
      this._initScroll();
    },
    scroll(pos) {
      this.scrollx = pos.x;
    },
    _scrollTo(e) {
      const cw = document.body.clientWidth / 2;
      const rect = e.target.getBoundingClientRect();
      const mindel = this.$refs.scroll.$el.clientWidth - this.$refs.nav.clientWidth;
      let del = cw - rect.x + this.scrollx;
      if (mindel > 0) return;
      if (del >= 0) {
        del = 0;
      }
      if (del < mindel) {
        del = mindel;
      }
      this.$refs.scroll.scrollTo(del, 0);
      this.scrollx = del;
    },
    ...mapMutations({
      setRecomTypes: 'SET_RECOM_TYPES',
      setOtherTypes: 'SET_OTHER_TYPES',
      setCurrentType: 'SET_CURRENT_TYPE'
    })
  },
  components: {
    Scroll,
    NavManage
  }
};
</script>

<style lang="less" scoped>
@import '~common/less/variable.less';
.top_menu_bar {
  width: 100%;
  height: 0.74rem;
  position: relative;
  background-color: @color-bar;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: -webkit-linear-gradient(top, transparent, transparent 40%, #ddd 40%);
    background-size: 100% 1px;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  .top_menu_more {
    float: right;
    position: relative;
    .more_btn {
      display: block;
      font-size: 0.5rem;
      line-height: 0.72rem;
      width: 0.8rem;
      height: 0.72rem;
      color: @color-text-a;
      text-align: center;
      line-height: 0.72rem;
    }
  }
  .top_menu_list {
    overflow: hidden;
    margin-right: 0.8rem;
    white-space: nowrap;
    height: 0.72rem;
    font-size: 0.34rem;
    line-height: 0.54rem;
    .ml-content {
      height: 100%;
      overflow: hidden;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      display: inline-block;
      height: 0.52rem;
      margin: 0.1rem 0 0.1rem 0;
      padding: 0 0.15rem;
      padding-left: 0.25rem;
      padding-right: 0.15rem;
      -webkit-animation: fadeout 0.4s;
      animation: fadeout 0.4s;
      vertical-align: middle;
      white-space: nowrap;
      color: @color-text-b;
      &.active {
        color: @color-text-a;
      }
    }
  }
}
</style>


