import VueRouter from 'vue-router';
import Vue from 'vue';

import Main from './views/main';

Vue.use(VueRouter);

/*const Main = resolve =>{
 require.ensure(['./views/main'], () => {
 resolve(require('./views/main'));
 });
 };*/


const routes = [
  {
    path: '/',
    name: 'main',
    meta: {title: '首页', keepAlive: true},
    component: Main
  },
  {
    path: '*',
    meta: {title: 'ctrip', keepAlive: true},
    component: Main
  }
];

let router = new VueRouter({
  routes
});

export default router;
