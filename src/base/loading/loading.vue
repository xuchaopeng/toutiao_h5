<template>
  <div class="loading">
    <img src="./loading.gif"
         alt=""
         width="32"
         height="32">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '新闻加载中...'
    }
  }
}
</script>

<style lang="less">
@import "~common/less/variable.less";
.loading {
  text-align: center;
  width: 100%;
  line-height: 0;
  .desc {
    line-height: 0.4rem;
    font-size: 0.24rem;
    color: @color-text-i;
  }
  .xcp {
    text-align: center;
  }
}
</style>

