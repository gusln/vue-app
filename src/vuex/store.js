/**
 * Created by long on 17-2-13.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import translationsCh from '../i18n/ch.json';
import translationsEn from '../i18n/en.json';
Vue.use(Vuex);

/**
 * you can add your module here
 */
let store = new Vuex.Store({
  state: {
    token: '',
    url: '',
    travelList: [],
    travelType: '',
    isWeixin: "false",
    myInfo: {}
  },
  modules: {
    i18n: vuexI18n.store,
  },
  mutations: {
    storeToken(state, token) {
      state.token = token;
    },
    updateList(state, list) {
      state.travelList = list;
    },
    updateType(state, type) {
      state.travelType = type;
    },
  },
});

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
  },
  mutations: {
    updateDemoPosition(state, payload) {
      state.demoScrollTop = payload.top;
    },
  },
  actions: {
    updateDemoPosition({commit}, top) {
      commit({type: 'updateDemoPosition', top: top});
    },
  },
});

Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('ch', translationsCh);
Vue.i18n.add('en', translationsEn);

Vue.i18n.set('ch');

export default store;
