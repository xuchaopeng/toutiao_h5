<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    deforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    //确保dom渲染完毕才初始化
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      let options = {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      };
      //better-scroll初始化
      this.scroll = new BScroll(this.$refs.wrapper, options);
      //是否派发滚动事件
      if (this.listenScroll) {
        let me = this;
        this.scroll.on('scroll', pos => {
          me.$emit('scroll', pos);
        });
      }

      if (this.pullDownRefresh) {
        this._initPullDownRefresh();
      }
      if (this.pullUpLoad) {
        this._initPullUpLoad();
      }
      //是否派发列表滚动开始事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('boforeScroll');
        });
      }
    },
    _initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.isPullUpLoad = true;
        this.$emit('pullingUp');
      });
    },
    _initPullDownRefresh() {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false;
        this.isPullingDown = true;
        this.$emit('pullingDown');
      });
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    //监听数据的变化,延时后调用refresh,重新计算
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>
