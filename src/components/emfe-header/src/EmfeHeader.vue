<template>
  <header class="emfe-header">
    <div class="emfe-header-eye">
      <img class="emfe-header-eye-img" :src="logo" height="100%" @click="goHome">
    </div>
    <div class="emfe-header-info">
      <div class="emfe-header-account">
        <span class="emfe-header-info-text" @click="goIndex">控制台首页</span>
        <span class="emfe-header-info-hello">&nbsp;你好，<span class="emfe-header-info-text" @click="goAccount">{{ user }}</span></span>
      </div>
      <span class="emfe-header-info-text" @click="logout">退出账号</span>
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
