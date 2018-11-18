<template>
  <div class="index-header">
    <div class="top-bar">
      <div class="abs-m">
        <a class="refresh-title">今日头条</a>
        <div class="refresh-btn"><i class="iconfont refresh-icon">&#xe682;</i></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
.index-header {
  display: block;
  z-index: 999;
  overflow: hidden;
  .top-bar {
    width: 100%;
    height: 0.88rem;
    position: relative;
    background: #d43d3d;
    .abs-m {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2.46rem;
      height: 0.88rem;
      margin-left: -1.23rem;
      margin-top: -0.44rem;
      text-align: center;
      color: #fff;
      font-weight: bold;
      line-height: 0.88rem;
      font-size: 0.4rem;
      .refresh-title {
        display: block;
        height: 0.88rem;
        width: 1.96rem;
        padding-left: 0.3rem;
        float: left;
      }
      .refresh-btn {
        float: left;
        display: block;
        width: 0.5rem;
        height: 0.88rem;
        background-color: #d43d3d;
        .refresh-icon {
          color: #fff;
          font-weight: normal;
          line-height: 0.88rem;
          font-size: 0.48rem;
        }
      }
    }
  }
}
</style>


