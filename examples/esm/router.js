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
    {
      path: '/tooltippage',
      component: require('./components/TooltipPage.vue'),
    },
    {
      path: '/transition',
      component: require('./components/TransitionPage.vue'),
    },
  ],
});

export default router;
