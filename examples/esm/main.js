// 兼容 ie
import 'es6-promise/auto';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import router from './router';
// 开发版
import emfe from '../../src/index';
import '../../src/styles/emfe.scss';

// 生产版
// import emfe from '../../dist/emfe-esm';
// import '../../dist/css/emfe.css';

Vue.use(VueRouter);
Vue.use(emfe);
// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
