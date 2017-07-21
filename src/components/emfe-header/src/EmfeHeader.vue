<template>
  <header class="emfe-header">
    <div class="emfe-header-eye">
      <img :src="logo" height="100%">
    </div>
    <div class="emfe-header-info">
      <span class="emfe-header-account">活动易首页 你好，{{ user }}</span>
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
  },
};
</script>
