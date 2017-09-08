<template>
  <div>
    <emfe-button @click="login">点击登录</emfe-button>
    <emfe-login :show='loginShow' :loginClose="loginClose" :action="url" :referrerUrl='referrerUrl' forgotName="Forgotpassword" registerName="Type"></emfe-login>
  </div>
</template>
<script>
export default {
  name: 'loginModalPage',
  data() {
    return {
    	loginShow: false,
      url: 'http://gateway.inner.evente.cn:8000/member/org/login',
    	referrerUrl: 'https://www.baidu.com/',
    };
  },
  methods: {
  	login() {
      this.loginShow = true;
  	},
  	loginClose(val) {
      this.loginShow = val;
  	},
  },
};
</script>
