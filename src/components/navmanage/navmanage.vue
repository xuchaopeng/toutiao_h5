<template>
  <transition name="navslide">
    <div class="nav-manage">
      <div class="toobar">
        <span class="title">频道管理</span>
        <span class="back iconfont"
              @click="back">&#xe601;</span>
      </div>
      <div class="delete-type">
        <p class="controlTitle">点击删除以下频道<span class="save-btn"
                @click="confirm">保存</span></p>
        <ul class="controlDetail"
            v-if="recomlist.length">
          <li class="item"
              v-for="(item,index) in recomlist"
              :data-type="item.type"
              :data-name="item.name"
              :key="item.name"
              @click="removeItem(index)">
            <a :class="{active:item.type===currentType.type}">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="add-type">
        <p class="controlTitle">点击添加以下频道</p>
        <ul class="controlDetail"
            v-if="otherList.length">
          <li class="item"
              v-for="(item,idx) in otherList"
              :data-type="item.type"
              :data-name="item.name"
              :key="item.name"
              @click.prevent.stop="addItem(idx)">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      recomlist: [],
      otherList: []
    };
  },
  created() {
    this.recomlist = this.recomTypes.slice();
    this.otherList = this.otherTypes.slice();
  },
  methods: {
    removeItem(idx) {
      if (this.recomlist.length <= 1) return;
      const rem = this.recomlist.splice(idx, 1);
      this.otherList.push(rem[0]);
    },
    addItem(idx) {
      const add = this.otherList.splice(idx, 1);
      this.recomlist.push(add[0]);
    },
    confirm() {
      this.saveRecomTypes(this.recomlist);
      this.saveOtherTypes(this.otherList);
      this.$emit('resetTypes');
      this.$emit('hideNavManage');
    },
    back() {
      this.$emit('hideNavManage');
    },
    ...mapActions(['saveRecomTypes', 'saveOtherTypes'])
  },
  computed: {
    ...mapGetters(['recomTypes', 'otherTypes', 'currentType'])
  }
};
</script>

<style lang="less" scoped>
@import '~common/less/variable.less';

.nav-manage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  transform: translate(0);
  z-index: 999;
  &.navslide-enter-active,
  &.navslide-leave-active {
    transition: all 0.3s;
  }
  &.navslide-enter,
  &.navslide-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .toobar {
    width: 100%;
    height: 0.88rem;
    position: relative;
    background-color: @color-background;
    .title {
      display: block;
      text-align: center;
      line-height: 0.88rem;
      font-size: 0.42rem;
      color: #fff;
      height: 100%;
      font-weight: bold;
      a {
        color: #fff;
        font-weight: bold;
      }
    }
    .back {
      width: 1rem;
      height: 0.88rem;
      position: absolute;
      left: 0;
      top: 0;
      line-height: 0.88rem;
      font-size: 0.6rem;
      text-align: center;
      font-weight: bold;
      color: #fff;
      background-color: #ae2121;
      cursor: pointer;
    }
  }
  .controlTitle {
    background-color: #f4f5f6;
    font-size: 0.28rem;
    padding: 0 0.2rem;
    line-height: 0.8rem;
    .save-btn {
      height: 0.5rem;
      line-height: 0.46rem;
      border: 1px solid rgba(212, 61, 61, 0.6);
      border-radius: 6px;
      text-align: right;
      padding: 0 0.2rem;
      float: right;
      margin-top: 0.15rem;
      color: #d43d3d;
    }
  }
  .controlDetail {
    padding: 0.3rem 0;
    overflow: hidden;
    zoom: 1;
    .item {
      width: 1.5rem;
      height: 0.68rem;
      float: left;
      text-align: center;
      margin-bottom: 0.2rem;
      -ms-touch-action: none;
      touch-action: none;
      a {
        display: block;
        line-height: 0.6rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        font-size: 0.26rem;
        border: 1px solid #ddd;
        &.active {
          border-color: @color-text-a;
        }
      }
    }
  }
}
</style>