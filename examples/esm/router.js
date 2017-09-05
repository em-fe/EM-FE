import VueRouter from 'vue-router';

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/tips',
      name: 'Tips',
      children: [
        {
          path: '/tips/tooltippage',
          name: 'tooltippage',
          component: require('./components/tips/TooltipPage.vue'),
        },
        {
          path: '/tips/message',
          name: 'message',
          component: require('./components/tips/MessagePage.vue'),
        },
        {
          path: '/tips/iconpage',
          name: 'iconpage',
          component: require('./components/tips/IconPage.vue'),
        },
        {
          path: 'hottip',
          name: 'hottippage',
          component: require('./components/tips/HottipPage.vue'),
        },
      ],
      component: require('./components/tips/Index.vue'),
    },
    {
      path: '/styles',
      name: 'Styles',
      children: [
        {
          path: '/styles/tag',
          name: 'tag',
          component: require('./components/styles/TagPage.vue'),
        },
        {
          path: '/styles/tel',
          name: 'tel',
          component: require('./components/styles/TelPage.vue'),
        },
        {
          path: '/styles/imgCodepage',
          name: 'imgCodepage',
          component: require('./components/styles/ImgCodepage.vue'),
        },
        {
          path: '/styles/smscodeCodepage',
          name: 'smscodeCodepage',
          component: require('./components/styles/SmscodeCodepage.vue'),
        },
        {
          path: '/styles/panel',
          name: 'panel',
          component: require('./components/styles/PanelPage.vue'),
        },
        {
          path: '/styles/panelc',
          name: 'panelc',
          component: require('./components/styles/PanelCPage.vue'),
        },
        {
          path: '/styles/steps',
          name: 'steps',
          component: require('./components/styles/StepsPage.vue'),
        },
        {
          path: '/styles/crumbs',
          name: 'crumbspage',
          component: require('./components/styles/CrumbsPage.vue'),
        },
        {
          path: '/styles/crumbsc',
          name: 'crumbscpage',
          component: require('./components/styles/CrumbsCPage.vue'),
        },
        {
          path: '/styles/menu',
          name: 'menu',
          component: require('./components/styles/MenuPage.vue'),
        },
        {
          path: '/styles/bar',
          name: 'bar',
          component: require('./components/styles/BarPage.vue'),
        },
        {
          path: '/styles/title',
          name: 'title',
          component: require('./components/styles/TitlePage.vue'),
        },
        {
          path: '/styles/button',
          name: 'button',
          component: require('./components/styles/ButtonPage.vue'),
        },
        {
          path: '/styles/switch',
          name: 'switch',
          component: require('./components/styles/SwitchPage.vue'),
        },
        {
          path: '/styles/radio',
          name: 'radio',
          component: require('./components/styles/RadioPage.vue'),
        },
        {
          path: '/styles/pagination',
          name: 'pagination',
          component: require('./components/styles/PaginationPage.vue'),
        },
        {
          path: '/styles/checkout',
          name: 'checkout',
          component: require('./components/styles/checkoutPage.vue'),
        },
        {
          path: '/styles/textarea',
          name: 'textarea',
          component: require('./components/styles/TextareaPage.vue'),
        },
        {
          path: '/styles/grid',
          name: 'grid',
          component: require('./components/styles/grid.vue'),
        },
        {
          path: '/styles/linkpage',
          name: 'linkpage',
          component: require('./components/styles/LinkPage.vue'),
        },
        {
          path: '/styles/headerpage',
          name: 'headerpage',
          component: require('./components/styles/HeaderPage.vue'),
        },
        {
          path: '/styles/headercpage',
          name: 'headercpage',
          component: require('./components/styles/HeaderCPage.vue'),
        },
        {
          path: '/styles/footerpage',
          name: 'footerpage',
          component: require('./components/styles/FooterPage.vue'),
        },
        {
          path: '/styles/input',
          name: 'input',
          component: require('./components/styles/Inputpage.vue'),
        },
        {
          path: '/styles/inputmore',
          name: 'inputmore',
          component: require('./components/styles/Inputmorepage.vue'),
        },
        {
          path: '/styles/table',
          name: 'table',
          component: require('./components/styles/TablePage.vue'),
        },
        {
          path: '/styles/datapanel',
          name: 'datapanel',
          component: require('./components/styles/DatapanelPage.vue'),
        },
        {
          path: '/styles/edit',
          name: 'edit',
          component: require('./components/styles/EditPage.vue'),
        },
      ],
      component: require('./components/styles/Index.vue'),
    },
    {
      path: '/functions',
      name: 'Functions',
      children: [
        {
          path: '/functions/countdown',
          name: 'countdown',
          component: require('./components/functions/Countdownpage.vue'),
        },
        {
          path: '/functions/formtest',
          name: 'formtest',
          component: require('./components/functions/FormTestPage.vue'),
        },
        {
          path: '/functions/datepage',
          name: 'datepage',
          component: require('./components/functions/DatePage.vue'),
        },
          {
            path: '/functions/datempage',
            name: 'datempage',
            component: require('./components/functions/DateMPage.vue'),
          },
        {
          path: '/functions/number',
          name: 'number',
          component: require('./components/functions/NumberPage.vue'),
        },
        {
          path: '/functions/timepage',
          name: 'timepage',
          component: require('./components/functions/TimePage.vue'),
        },
        {
          path: '/functions/datetimepage',
          name: 'datetimepage',
          component: require('./components/functions/DatetimePage.vue'),
        },
        {
          path: '/functions/datetimempage',
          name: 'datetimempage',
          component: require('./components/functions/DatetimeMPage.vue'),
        },
        {
          path: '/functions/timempage',
          name: 'timempage',
          component: require('./components/functions/TimeMPage.vue'),
        },
        {
          path: '/functions/drag',
          name: 'drag',
          component: require('./components/functions/DragPage.vue'),
        },
        {
          path: '/functions/color',
          name: 'color',
          component: require('./components/functions/ColorPage.vue'),
        },
        {
          path: '/functions/copy',
          name: 'copy',
          component: require('./components/functions/CopyPage.vue'),
        },
        {
          path: '/functions/modal',
          name: 'modal',
          component: require('./components/functions/modal.vue'),
        },
        {
          path: '/functions/upload',
          name: 'upload',
          component: require('./components/functions/Uploadpage.vue'),
        },
        {
          path: '/functions/selectPage',
          name: 'selectpage',
          component: require('./components/functions/SelectPage.vue'),
        },
        {
          path: '/functions/drop',
          name: 'drop',
          component: require('./components/functions/DropPage.vue'),
        },
        {
          path: '/functions/slide',
          name: 'slide',
          component: require('./components/functions/SlidePage.vue'),
        },
        {
          path: '/functions/opations',
          name: 'opations',
          component: require('./components/functions/OpationsPage.vue'),
        },
      ],
      component: require('./components/functions/Index.vue'),
    },
  ],
});

export default router;
