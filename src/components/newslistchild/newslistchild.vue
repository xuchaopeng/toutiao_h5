<template>
  <div class="newslist" :data="dataList" v-show="newType === currentType.type">
      <div class="news-list-wrap">
        <template v-for="(list,index) in dataList">
          <section v-for="(item,idx) in list" class="news-item">
              <a v-if="item.imgurl.length>=3" class="J-news news-item-s2" href="/">
                <div class="news-warp">
                  <h3 v-html="item.title"></h3>
                  <div class="item-img">
                    <div class="img">
                      <img class="lazy" :src="item.imgurl[0].url" />
                    </div>
                    <div class="img">
                      <img class="lazy" :src="item.imgurl[1].url" />
                    </div>
                    <div class="img">
                      <img class="lazy" :src="item.imgurl[2].url" />
                    </div>
                  </div>
                  <div class="item-info">
                    <span v-html="item.author"></span>
                  </div>
                </div>
              </a>
              <a v-if="item.imgurl.length>=1" class="J-news news-item-s1" href="/">
                <div class="news-wrap">
                  <div class="item-text">
                    <h3 v-html="item.title"></h3>
                    <p class="item-info"><span v-html="item.author"></span></p>
                  </div> 
                  <div class="item-img">
                    <img :src="item.imgurl[0].url" />
                  </div> 
                </div>
              </a>
              <a v-if="item.imgurl.length===0" class="J-news news-item-s0" href="/" target="_blank">
                <h3 v-html="item.title"></h3>
                <p class="item-info"><span v-html="item.author"></span></p>
              </a>
          </section>
        </template>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
import {getArtilceData} from 'api/api';

export default {
  props:{
    newType:{
      type:String,
      default:'yule'
    }
  },
  data(){
    return {
      dataList:[]
    }
  },
  created(){
    this._shownewsList();
  },
  methods:{
    _shownewsList(){
      if(this.currentType.type === this.newType){
        this.param = {}
        this._initparam()
        this._getArtilceData(this.param)
      }
    },
    _initparam() {
      this.param.acc_id = '';
      this.param.type = this.newType;
      this._time = new Date().getTime();
    },
    _getArtilceData(param) {
      getArtilceData(param).then((res) => {
        if(res.status == '1'){
          const len = res.data.length;
          this.param.acc_id = res.data[len-1]._id;
          this.dataList.push(res.data)
        }
      })
    }
  },
  computed:{
    ...mapGetters([
      'currentType'
    ])
  },
  watch:{
    currentType:{
      deep:true,
      handler(){
        this._shownewsList();
      }
    }
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
  .news-item-s1{
      display: block;
      padding: 0.2rem 0;
      .news-wrap{
        display: flex;
        .item-text{
          width:67%;
          height:1.6rem;
          position:relative;
          h3{
            font-size: 0.34rem;
            color:@color-text-t;
            line-height: 0.4rem;
            overflow: hidden;
            margin-right: 0.24rem;
            height: 0.8rem;
            font-weight:normal;
          }
          .item-info{
            width:100%;
            position:absolute;
            bottom:0;
            margin-top: 0.14rem;
            color: @color-text-i;
            font-size:0;
            span{
              margin-right:0.1rem;
              display:inline-block;
              font-size:0.2rem;
            }
          }
        }
        .item-img{
          width:33%;
          height:1.6rem;
          img{
            width:100%;
            height:100%;
          }
        }
      }
  }
  .news-item-s0{
      display: block;
      padding: 0.2rem 0;
      h3{
        color: @color-text-t;
        font-size: 0.34rem;
        line-height: 0.4rem;
        font-weight: normal;
        overflow: hidden;
        width: 100%;
        max-height: 0.8rem;
      }
      .item-info{
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
</style>