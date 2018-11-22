import Vue from 'vue';
import App from './App';
import store from './store/index';
import fastclick from 'fastclick';
import vueLazyload from 'vue-lazyload';
import 'common/less/index.less';

fastclick.attach(document.body);
Vue.use(vueLazyload, {
  loading: require('common/image/default.png')
});
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
