<template>
  <header class="emfe-header">
    <div class="emfe-header-eye">
      <img :src="logo" height="100%">
    </div>
    <div class="emfe-header-info">
      <div class="emfe-header-account">
        <span>活动易</span><emfe-link :routers="{}" @click="goHome">首页</emfe-link>
        <span>&nbsp;你好，{{ user }}</span>
      </div>
      <emfe-link :routers="{}" @click="logout">退出账号</emfe-link>
    </div>
  </header>
</template>
<script>
export default {
  name: 'EmfeHeader',
  props: {
    logo: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  methods: {
    logout() {
      this.$emit('logout');
    },
    goHome() {
      window.open('https://www.evente.cn/');
    },
  },
};
</script>
