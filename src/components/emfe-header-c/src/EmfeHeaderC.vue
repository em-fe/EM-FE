<template>
  <header class="emfe-header-c">
    <div class="emfe-header-c-main">
      <div class="emfe-header-c-eye">
        <img :src="logo" height="100%">
      </div>
      <div class="emfe-header-c-info">
        <span class="emfe-header-c-account">活动易首页 你好，{{ user }}</span>
        <emfe-link className="emfe-header-c" :routers="orderRouter" @click="orderClick">我的订单</emfe-link>
        <span>
          <emfe-icon className="emfe-header-c" type="hint"></emfe-icon>
          <emfe-link className="emfe-header-c" :routers="followRouter" @click="followClick">我的关注</emfe-link>
        </span>
        <span>
          <emfe-icon className="emfe-header-c" type="hint"></emfe-icon>
          <emfe-link className="emfe-header-c" :routers="followRouter" @click="followClick">购物车 ({{ followNum }})</emfe-link>
        </span>
        <emfe-link class="emfe-header-c-logout" :routers="{}" @click="logout">退出</emfe-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'EmfeHeaderC',
  props: {
    logo: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    orderRouter: {
      type: [Object, String],
      required: true,
    },
    followRouter: {
      type: [Object, String],
      required: true,
    },
    followNum: {
      type: Number,
      required: true,
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
  },
};
</script>
