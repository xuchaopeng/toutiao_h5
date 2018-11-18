<template>
  <div class="newslist-box" ref="newslistBox">
    <Scroll ref="scroll">
      <div>
        <div v-for="item in recomTypes" :key="item.name">
            <NewslistChild :newType="item.type"></NewslistChild>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewslistChild from 'components/newslistchild/newslistchild';
import Scroll from 'base/scroll/scroll';

export default {
  props: {
    scrollHeight: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this._initScroll();
  },
  methods: {
    _initScroll() {
      this._setScrollHeight();
      this.$refs.scroll.refresh();
    },
    _setScrollHeight() {
      this.$refs.scroll.$el.style.height = this.scrollHeight + 'px';
    }
  },
  computed: {
    ...mapGetters(['currentType', 'recomTypes'])
  },
  watch: {
    scrollHeight() {
      console.log(this.scrollHeight);
      this._initScroll();
    }
  },
  components: {
    Scroll,
    NewslistChild
  }
};
</script>

<style lang="less" scoped>
.newslist-box {
  width: 100%;
  overflow: hidden;
  // overflow-y: auto;
  // overflow-y: hidden\0;
  // overflow-x: hidden;
}
</style>


