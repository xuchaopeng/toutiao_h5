<template>
  <div id="app"
       class="app-content">
    <Header ref="indexHeader"></Header>
    <Navigation ref="navigation"></Navigation>
    <NewsList ref="newsList"></NewsList>
  </div>
</template>

<script type="text/javascript">
import Header from 'components/header/header';
import Navigation from 'components/navigation/navigation';
import NewsList from 'components/newslist/newslist';
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      scrollHeight: 0
    }
  },
  mounted() {
    this._setNewsListHeight()
  },
  computed: {
    ...mapGetters([
      'newScrollHeight'
    ])
  },
  methods: {
    _setNewsListHeight() {
      const headHeight = this.$refs.indexHeader.$el.clientHeight;
      const navHeight = this.$refs.navigation.$el.clientHeight;
      const wh = document.body.clientHeight;
      const nsh = wh - headHeight - navHeight;
      this._newScrollHeight(nsh)
      this.$refs.newsList.$el.style.height = nsh + 'px';
    },
    ...mapMutations({
      _newScrollHeight: 'SET_SCROLL_HEIGHT'
    })
  },
  components: {
    Header,
    Navigation,
    NewsList
  }
};
</script> 