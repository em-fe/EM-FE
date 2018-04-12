<template>
  <header class="emfe-header" :class="headerName">
    <div class="emfe-header-eye">
      <img class="emfe-header-eye-img" :src="logo" height="100%" @click="goHome">
    </div>
    <div class="emfe-header-controller">
      <span class="emfe-header-controller-text">专注数据的娱乐电商平台</span>
    </div>
    <div class="emfe-header-info">
      <div class="emfe-header-index">
        <!-- <span class="emfe-header-info-text" @click="goIndex">控制台首页</span> -->
        <emfe-button theme="primary" @click="goIndex">快速发布活动</emfe-button>
      </div>
      <div class="emfe-header-account">
        <span class="emfe-header-info-hello">&nbsp;你好，<span class="emfe-header-info-text" @click="goAccount">{{ user }}</span></span>
      </div>
      <span class="emfe-header-info-text emfe-header-signout" @click="logout">退出</span>
    </div>
  </header>
</template>
<script>
export default {
  name: 'EmfeHeader',
  props: {
    logo: {
      type: String,
      default: 'https://static2.evente.cn/static/img/logo2017.svg',
    },
    user: {
      type: String,
      required: true,
    },
    className: String,
    home: Function,
  },
  computed: {
    headerName() {
      return [
        {
          [`${this.className}-header`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    logout() {
      this.$emit('logout');
    },
    goIndex() {
      this.$emit('goIndex');
    },
    goAccount() {
      this.$emit('goAccount');
    },
    goHome() {
      if (this.home) {
        this.home();
      } else {
        window.open('https://www.evente.cn/');
        this.$emit('goHome');
      }
    },
  },
};
</script>
