import VueRouter from 'vue-router';

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/grid',
      component: require('./components/grid.vue'),
    },
    {
      path: '/iconpage',
      component: require('./components/IconPage.vue'),
    },
  ],
});

export default router;
