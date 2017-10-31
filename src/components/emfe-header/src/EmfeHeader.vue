<template>
  <header class="emfe-header">
    <div class="emfe-header-eye">
      <img :src="logo" height="100%" @click="goHome">
    </div>
    <div class="emfe-header-info">
      <div class="emfe-header-account">
        <emfe-link :routers="{}" @click="goIndex">控制台首页</emfe-link>
        <span>&nbsp;你好，<span class="emfe-header-account-text" @click="goAccount">{{ user }}</span></span>
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
    goIndex() {
      this.$emit('goIndex');
    },
    goAccount() {
      this.$emit('goAccount');
    },
    goHome() {
      window.open('https://www.evente.cn/');
    },
  },
};
</script>
