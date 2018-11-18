import Vue from 'vue';
import App from './App';
import store from './store/index';
import fastclick from 'fastclick';
import 'common/less/index.less';

fastclick.attach(document.body);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
