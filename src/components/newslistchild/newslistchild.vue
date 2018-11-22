<template>
  <div class="newslist"
       v-show="newType === currentType.type"
       ref="newslist">
    <Scroll ref="scroll"
            :data="dataList"
            :listenScroll="listenScroll"
            :probeType="probeType"
            :pullDownRefresh="pullDownRefresh"
            :pullUpLoad="pullUpLoad"
            @pullingUp="pullingUp"
            @pullingDown="pullingDown"
            @scroll="scroll">
      <div class="news-list-wrap">
        <template v-for="(list,pidx) in dataList">
          <section v-for="(item,idx) in list"
                   class="news-item"
                   :key="pidx+'_'+idx">
            <a v-if="item.imgurl.length>=3"
               class="J-news news-item-s2"
               href="/">
              <div class="news-warp">
                <h3 v-html="item.title"></h3>
                <div class="item-img">
                  <div class="img">
                    <img class="lazy"
                         v-lazy="item.imgurl[0].url" />
                  </div>
                  <div class="img">
                    <img class="lazy"
                         v-lazy="item.imgurl[1].url" />
                  </div>
                  <div class="img">
                    <img class="lazy"
                         v-lazy="item.imgurl[2].url" />
                  </div>
                </div>
                <div class="item-info">
                  <span v-html="item.author=='Peng.c'?'东方网':item.author"></span>
                </div>
              </div>
            </a>
            <a v-if="item.imgurl.length>=1&&item.imgurl.length<3"
               class="J-news news-item-s1"
               href="/">
              <div class="news-wrap">
                <div class="item-text">
                  <h3 v-html="item.title"></h3>
                  <p class="item-info"><span v-html="item.author=='Peng.c'?'东方网':item.author"></span></p>
                </div>
                <div class="item-img">
                  <img v-lazy="item.imgurl[0].url" />
                </div>
              </div>
            </a>
            <a v-if="item.imgurl.length===0"
               class="J-news news-item-s0"
               href="/"
               target="_blank">
              <h3 v-html="item.title"></h3>
              <p class="item-info"><span v-html="item.author=='Peng.c'?'东方网':item.author"></span></p>
            </a>
          </section>
        </template>
        <div v-show="loading">
          <Loading></Loading>
        </div>
        <div v-show="nomoreData"
             class="no-more-data">
          <p>没有更多数据</p>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Scroll from 'base/scroll/scroll';
import Loading from 'base/loading/loading';
import { getArtilceData } from 'api/api';

export default {
  props: {
    newType: {
      type: String,
      default: 'yule'
    }
  },
  data() {
    return {
      dataList: [],
      loading: true,
      nomoreData: false
    };
  },
  created() {
    this.probeType = 2;
    this.listenScroll = false;
    this.lock = false;
    this.upPgnum = -1;
    this.downPgnum = 1;
    //測試時間監聽
    this.pullDownRefresh = {
      threshold: 50,
      stop: 20
    };
    this.pullUpLoad = {
      threshold: 50
    };

    this.param = {};
    this._shownewsList();
  },
  mounted() {
    this._initScroll();
  },
  methods: {
    _initScroll() {
      setTimeout(() => {
        this._setScrollHeight();
        this.$refs.scroll.refresh();
      }, 20);
    },
    _setScrollHeight() {
      this.$refs.scroll.$el.style.height = this.newScrollHeight + 'px';
    },
    scroll(pos) {},
    pullingUp() {
      console.log('pullingup');
      this._getArtilceData(this.param);
    },
    pullingDown() {
      console.log('pullingDown');
      this.$refs.scroll.scroll.finishPullDown();
    },
    _shownewsList() {
      if (this.currentType.type === this.newType) {
        this._initparam('down');
        this._getArtilceData(this.param);
      }
    },
    _scrollPullNewsList(param) {
      getArtilceData(param).then(res => {
        if (res.status == '1') {
          const len = res.data.length;
          console.log(len, 'up');
          this.lock = false;
        }
      });
    },
    _initparam(ud) {
      this.param.acc_id = this.param.acc_id ? this.param.acc_id : '';
      this.param.type = this.newType;
      this.param._time = new Date().getTime();
      if (ud === 'up') {
        this.param.pgnum = this.upPgnum;
      } else {
        this.param.pgnum = this.downPgnum;
      }
    },
    _getArtilceData(param) {
      if (this.nomoreData) return;
      this.loading = true;
      getArtilceData(param).then(res => {
        if (res.status == '1') {
          const len = res.data.length;
          if (len === 0) {
            this.nomoreData = true;
            this.loading = false;
            return;
          }
          this.param.acc_id = res.data[len - 1]._id;
          this.downPgnum += 1;
          this.param.pgnum = this.downPgnum;
          this.dataList.push(res.data);
          this.loading = false;
          if (res.data.length < 8) {
            this.nomoreData = true;
          }
          this.$refs.scroll.scroll.finishPullUp();
        }
      });
    }
  },
  computed: {
    ...mapGetters(['currentType', 'newScrollHeight'])
  },
  watch: {
    currentType: {
      deep: true,
      handler() {
        if (this.dataList.length === 0) {
          this._shownewsList();
        }
      }
    }
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<style lang="less" scoped>
@import '~common/less/variable.less';
.news-list-wrap {
  .news-item {
    margin: 0 0.3rem;
    position: relative;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
    padding: 0;
  }
  .news-item-s2 {
    display: block;
    padding: 0.2rem 0;
    h3 {
      color: @color-text-t;
      font-size: 0.34rem;
      line-height: 0.4rem;
      font-weight: normal;
      overflow: hidden;
      width: 100%;
      max-height: 0.8rem;
    }
    .item-img {
      margin-top: 0.12rem;
      height: 1.72rem;
      overflow: hidden;
      display: flex;
      .img {
        height: 1.72rem;
        width: 33.33%;
        padding-right: 2px;
        :last-child {
          padding-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .item-info {
      margin-top: 0.12rem;
      overflow: hidden;
      color: @color-text-i;
      font-size: 0;
      span {
        display: inline-block;
        margin-right: 0.1rem;
        vertical-align: middle;
        font-size: 0.2rem;
      }
    }
  }
  .news-item-s1 {
    display: block;
    padding: 0.2rem 0;
    .news-wrap {
      display: flex;
      .item-text {
        width: 67%;
        height: 1.6rem;
        position: relative;
        h3 {
          font-size: 0.34rem;
          color: @color-text-t;
          line-height: 0.4rem;
          overflow: hidden;
          margin-right: 0.24rem;
          height: 0.8rem;
          font-weight: normal;
        }
        .item-info {
          width: 100%;
          position: absolute;
          bottom: 0;
          margin-top: 0.14rem;
          color: @color-text-i;
          font-size: 0;
          span {
            margin-right: 0.1rem;
            display: inline-block;
            font-size: 0.2rem;
          }
        }
      }
      .item-img {
        width: 33%;
        height: 1.6rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .news-item-s0 {
    display: block;
    padding: 0.2rem 0;
    h3 {
      color: @color-text-t;
      font-size: 0.34rem;
      line-height: 0.4rem;
      font-weight: normal;
      overflow: hidden;
      width: 100%;
      max-height: 0.8rem;
    }
    .item-info {
      margin-top: 0.12rem;
      overflow: hidden;
      color: @color-text-i;
      font-size: 0;
      span {
        display: inline-block;
        margin-right: 0.1rem;
        vertical-align: middle;
        font-size: 0.2rem;
      }
    }
  }
}
.no-more-data {
  width: 100%;
  line-height: 0.6rem;
  font-size: 0.24rem;
  color: @color-text-i;
  text-align: center;

  padding: 0 0.3rem;
  p {
    border: 1px solid #f9f2f2;
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
}
</style>