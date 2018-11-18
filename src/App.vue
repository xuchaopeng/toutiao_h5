<template>
  <div id="app" class="app-content">
    <Header ref="indexHeader"></Header>
    <Navigation ref="navigation"></Navigation>
    <NewsList ref="newsList" :scrollHeight="scrollHeight"></NewsList>
  </div>
</template>

<script type="text/javascript">
import Header from 'components/header/header';
import Navigation from 'components/navigation/navigation';
import NewsList from 'components/newslist/newslist';

export default {
  data(){
    return {
      scrollHeight:0
    }
  },
  mounted(){
    this._setNewsListHeight()
  },
  methods:{
     _setNewsListHeight(){
      const headHeight = this.$refs.indexHeader.$el.clientHeight ;
      const navHeight = this.$refs.navigation.$el.clientHeight ;
      const wh = document.body.clientHeight;
      this.scrollHeight = wh - headHeight - navHeight;
      this.$refs.newsList.$el.style.height = this.scrollHeight + 'px';
    }
  },
  components: {
    Header,
    Navigation,
    NewsList
  }
};
</script> 