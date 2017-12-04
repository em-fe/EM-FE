<template>
  <header class="emfe-header-c">
    <div class="emfe-header-c-main">
      <div class="emfe-header-c-eye">
        <img :src="imgLogo" class="emfe-header-c-eye-img">
      </div>
      <div class="emfe-header-c-info">
        <span class="emfe-header-c-account">你好，
          <span v-if="loginFlg">{{ user }}</span>
          <emfe-link class="emfe-header-c-logout" :routers="{}" @click="login" v-if="!loginFlg">请登录</emfe-link>
        </span>
        <emfe-link  v-if="integral.state > 0" className="emfe-header-c" :routers="{}" @click="integralClick">积分({{integral.value}})</emfe-link>
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
    imgLogo: {
      type: String,
    },
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
    integral: {
      type: Object,
      required: true,
    },
    // shoppingNumber: {
    //   type: Number,
    //   required: true,
    // },
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
    integralClick() {
      this.$emit('integralClick');
    },
    login() {
      this.$emit('login');
    },
  },
};
</script>
