<template>
  <div class="newslist-box"
       ref="newslistBox">
    <div>
      <div v-for="item in recomTypes"
           :key="item.type">
        <NewslistChild :newType="item.type"></NewslistChild>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewslistChild from 'components/newslistchild/newslistchild';

export default {
  computed: {
    ...mapGetters(['currentType', 'recomTypes', 'newScrollHeight'])
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
}
</style>


