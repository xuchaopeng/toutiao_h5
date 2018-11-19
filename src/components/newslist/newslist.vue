<template>
  <div class="newslist-box"
       ref="newslistBox">
    <div>
      <div v-for="item in recomTypes">
        <NewslistChild :newType="item.type"></NewslistChild>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewslistChild from 'components/newslistchild/newslistchild';

export default {
  created() {
  },
  mounted() {
    // this._initScroll();
  },
  methods: {
    // _initScroll() {
    //   this._setScrollHeight();
    //   this.$refs.scroll.refresh();
    // },
    // _setScrollHeight() {
    //   this.$refs.scroll.$el.style.height = this.newScrollHeight + 'px';
    // },
  },
  computed: {
    ...mapGetters(['currentType', 'recomTypes', 'newScrollHeight'])
  },
  watch: {
  },
  components: {
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


