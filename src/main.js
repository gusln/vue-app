// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import FastClick from 'fastclick';

import { sync } from 'vuex-router-sync';

import store from './vuex/store';

import './i18n/i18n';

Vue.config.devtools = true;

sync(store, router);

FastClick.attach(document.body);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

