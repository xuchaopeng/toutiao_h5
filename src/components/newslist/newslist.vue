<template>
  <div class="newslist">
      <div class="news-list-wrap">
        <section class="news-item news-item-s2">
            <a class="J-news" href="/">
              <div class="news-warp">
                <h3>49岁大衣哥近照，准儿媳长相漂亮像明星，女儿颜值一言难尽</h3>
                <div class="item-img">
                  <div class="img">
                    <img class="lazy" src="https://02imgmini.eastday.com/mobile/20181116/20181116_6fb50f83f34220bba20c04b6381e2ad0_cover_mwpm_03200403.jpg" />>
                  </div>
                  <div class="img">
                    <img class="lazy" src="https://02imgmini.eastday.com/mobile/20181116/20181116_6fb50f83f34220bba20c04b6381e2ad0_cover_mwpm_03200403.jpg" />>
                  </div>
                  <div class="img">
                    <img class="lazy" src="https://02imgmini.eastday.com/mobile/20181116/20181116_6fb50f83f34220bba20c04b6381e2ad0_cover_mwpm_03200403.jpg" />>
                  </div>
                </div>
                <div class="item-info">
                  <span>军凯西</span>
                </div>
              </div>
            </a>
        </section>
        <section class="news-item news-item-s1">
          <a class="J-news" href="/">
            <div class="news-wrap">
              <div class="item-text">
                <h3>与《延禧攻略》班底拍新剧 佘诗曼：这次演好人</h3>
                <p class="item-info"><span>北青网</span></p>
              </div> 
              <div class="item-img">
                <img 
                src="https://02imgmini.eastday.com/mobile/20181117/20181117153219_a3d246cef89fb57accb0aebaf1308955_1_mwpm_03200403.jpg" />
              </div> 
            </div>
          </a>
        </section>
        <section class="news-item news-item-s0">
          <a class="J-news" href="/" target="_blank">
            <h3>长篇小说：武侠之至尊剑客长篇小说：武侠之至尊剑客长篇小说：武侠之至尊剑客长篇小说：武侠之至尊剑客</h3>
            <p class="item-info"><span>武侠</span><span>武侠</span></p>
          </a>
        </section>
      </div>
  </div>
</template>

<script>
export default {};
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
    .J-news {
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
          // margin-right: 0.1rem;
          vertical-align: middle;
          font-size: 0.2rem;
        }
      }
    }
  }
  .news-item-s1{
    .J-news{
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
  }
  .news-item-s0{
    .J-news{
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
}
</style>


