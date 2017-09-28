<template>
  <header class="emfe-header-c">
    <div class="emfe-header-c-main">
      <div class="emfe-header-c-eye">
        <emfe-icon type="logo" className="emfe-header-c-eye"></emfe-icon>
      </div>
      <div class="emfe-header-c-info">
        <span class="emfe-header-c-account">活动易首页 你好，
          <span v-if="loginFlg">{{ user }}</span>
          <emfe-link class="emfe-header-c-logout" :routers="{}" @click="login" v-if="!loginFlg">请登录</emfe-link>  
        </span>
        <emfe-link className="emfe-header-c" :routers="{}" @click="orderClick">我的订单</emfe-link>
        <span>
          <emfe-icon className="emfe-header-c" type="gouwuche"></emfe-icon>
          <emfe-link className="emfe-header-c" :routers="{}" @click="followClick">购物车</emfe-link>
        </span>
        <emfe-link class="emfe-header-c-logout" :routers="{}" @click="logout" v-if="loginFlg">退出</emfe-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'EmfeHeaderC',
  props: {
    user: {
      type: String,
    },
    orderRouter: {
      type: [Object, String],
    },
    followRouter: {
      type: [Object, String],
    },
    loginFlg: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    loginFlg(val, oldVal) {
      if (val !== oldVal) {
        this.loginFlg = val;
      }
    },
  },
  methods: {
    logout() {
      this.$emit('logout');
    },
    orderClick() {
      this.$emit('orderClick');
    },
    followClick() {
      this.$emit('followClick');
    },
    login() {
      this.$emit('login');
    },
  },
};
</script>
