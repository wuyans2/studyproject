import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/state',
      component: () => import('@/pages/index.vue'),
      // meta: {title: '首页'},
      children: [{
        path: '/state',
        component: () => import('@/pages/vuextest/state'),
      },
      {
        path: '/getter',
        component: () => import('@/pages/vuextest/getter'),
      },
      {
        path: '/mutation',
        component: () => import('@/pages/vuextest/Mutation'),
      },
      {
        path: '/action',
        component: () => import('@/pages/vuextest/Action'),
      }
    ]
    },
  ]
})