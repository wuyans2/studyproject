import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/computed',
      component: () => import('@/pages/index.vue'),
      // meta: {title: '首页'},
      children: [{
        path: '/computed',
        component: () => import('@/pages/vuextest/computed'),
      }]
    },
  ]
})