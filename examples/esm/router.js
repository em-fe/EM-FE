import VueRouter from 'vue-router';

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/grid',
      name: 'grid',
      component: require('./components/grid.vue'),
    },
    {
      path: '/linkpage',
      name: 'linkpage',
      component: require('./components/LinkPage.vue'),
    },
    {
      path: '/datepage',
      name: 'datepage',
      component: require('./components/DatePage.vue'),
    },
    {
      path: '/timepage',
      name: 'timepage',
      component: require('./components/TimePage.vue'),
    },
    {
      path: '/datetimepage',
      name: 'datetimepage',
      component: require('./components/DatetimePage.vue'),
    },
    {
      path: '/drag',
      name: 'drag',
      component: require('./components/DragPage.vue'),
    },
    {
      path: '/color',
      name: 'color',
      component: require('./components/ColorPage.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: require('./components/Uploadpage.vue'),
    },
    {
      path: '/input',
      name: 'input',
      component: require('./components/Inputpage.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: require('./components/TablePage.vue'),
    },
    {
      path: '/iconpage',
      name: 'iconpage',
      component: require('./components/IconPage.vue'),
    },
    {
      path: '/tooltippage',
      name: 'tooltippage',
      component: require('./components/TooltipPage.vue'),
    },
    {
      path: '/transition',
      name: 'transition',
      component: require('./components/TransitionPage.vue'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: require('./components/modal.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: require('./components/MenuPage.vue'),
    },
    {
      path: '/copy',
      name: 'copy',
      component: require('./components/CopyPage.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: require('./components/ButtonPage.vue'),
    },
    {
      path: '/switch',
      name: 'switch',
      component: require('./components/SwitchPage.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: require('./components/MessagePage.vue'),
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: require('./components/PaginationPage.vue'),
    },
    {
      path: '/selectPage',
      name: 'selectpage',
      component: require('./components/SelectPage.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: require('./components/checkoutPage.vue'),
    },
    {
      path: '/drop',
      name: 'drop',
      component: require('./components/DropPage.vue'),
    },
  ],
});

export default router;
