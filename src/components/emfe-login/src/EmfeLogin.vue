<template>
  <div class="emfe-login" v-if="show" :class="loginName">
    <div class="emfe-login-mask"></div>
    <div class="emfe-login-wrap">
      <div class="emfe-login-header">
        <div class="emfe-login-header-inner">{{ title }}</div>
        <div class="emfe-login-header-close" @click="close">＋</div>
      </div>
      <div class="emfe-login-main" v-show="!weixin">
        <emfe-tel className="emfe-login" :datas="telsData" v-model="telNow" placeholder="请输入手机号"></emfe-tel>
        <div class="emfe-login-main-tips">{{telError}}</div>
        <emfe-input className="emfe-login" v-model="data.password" type="password" placeholder="请输入密码"></emfe-input>
        <div class="emfe-login-main-tips emfe-login-main-tips-two">{{pwdError}}</div>
        <emfe-imgcode v-show="codeNow" className="emfe-login" :src="imgSrc" v-model="imgNow" @click="imgClick"></emfe-imgcode>
        <emfe-button theme="primary" className="emfe-login" @click="login">登录</emfe-button>
        <div class="emfe-login-handle">
          <emfe-checkout className="emfe-login-handle" v-model="autoLogin" title="下次自动登录"></emfe-checkout>
          <emfe-link className="emfe-login-handle" :routers="{}" @click="forgot">忘记密码？</emfe-link>
          <emfe-link className="emfe-login-handle-child" :routers="{}" @click="register">注册登录</emfe-link>
        </div>
        <emfe-titleline title="微信登录"></emfe-titleline>
        <div class="emfe-login-type">
          <img :src="weixinLogo" alt="微信" @click="toggleType">
        </div>
      </div>
      <div class="emfe-login-weixin" v-show="weixin">
        <div class="emfe-login-weixin-code" id="login_weixin">
          <img class="emfe-login-weixin-code-img" src="https://static.evente.cn/evente/img/flag/v1/zg.jpg" alt="微信登录">
        </div>
        <emfe-titleline title="账户登录"></emfe-titleline>
        <div class="emfe-login-type">
          <img :src="accountLogo" alt="账号登录" @click="toggleType">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ajax from './ajax';
import weixinLogo from '../../../assets/images/weixin.svg';
import accountLogo from '../../../assets/images/account.svg';

export default {
  name: 'EmfeLogin',
  data() {
    return {
      title: '登录',
      telNow: {
        name: ' ',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      telsData: [
        {
          name: '中国',
          tel: '',
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: '',
          prefix: '852',
          url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
        },
      ],
      data: {
        code: '',
        phone: '',
        password: '',
        auto_login: 1,
      },
      telError: '',
      pwdError: '',
      telFlg: false,
      pwdFlg: false,
      imgNow: '',
      imgSrc: 'https://static.evente.cn/evente/img/flag/v1/mlxy.jpg',
      codeNow: false,
      autoLogin: false,
      weixinLogo,
      accountLogo,
      weixin: false,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    show: {
      type: [Boolean, String],
      default: false,
    },
    referrerUrl: {
      type: String,
    },
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default() {
        return {};
      },
    },
    forgotName: {
      type: String,
      required: true,
    },
    registerName: {
      type: String,
      required: true,
    },
    loginClose: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    loginName() {
      return this.className ? `${this.className}-login` : '';
    },
  },
  methods: {
    close() {
      this.loginClose(false);
    },
    imgClick() {
      this.imgSrc = 'https://static.evente.cn/evente/img/flag/v1/de.jpg';
    },
    login() {
      if (this.autoLogin) {
        this.data.auto_login = 2;
      }
      this.data.phone = this.telNow.tel;
      this.data.code = this.telNow.prefix;
      if (this.data.phone === '') {
        this.telFlg = false;
        this.telError = '请输入手机号';
      } else if (this.$EmfeFormTest.phone(this.data.phone)) {
        this.telError = '';
        this.telFlg = true;
      } else {
        this.telFlg = false;
        this.telError = '请输入正确手机号';
      }
      if (this.data.password === '') {
        this.pwdError = '请输入密码';
        this.pwdFlg = false;
      } else if (this.$EmfeFormTest.password(this.data.password)) {
        this.pwdError = '';
        this.pwdFlg = true;
      } else {
        this.pwdError = '账号密码不匹配';
        this.pwdFlg = false;
      }
      if (this.telFlg && this.pwdFlg) {
        ajax({
          headers: this.headers,
          type: 'POST',
          data: JSON.stringify(this.data),
          action: this.action,
          onSuccess: (res) => {
            if (res.code === 10000) {
              window.location.href = this.referrerUrl;
              const Rtoken = res.data.token;
              const autoData = `Bearer ${Rtoken}`;
              const callBack = res.data.call_back_url;
              callBack.forEach((url) => {
                ajax({
                  headers: this.headers,
                  type: 'GET',
                  action: url,
                });
              });
              window.$cookie.set('Authorization', autoData, res.data.expires);
            } else if (res.code === 2012023) {
              this.telError = res.message;
              this.codeNow = true;
            } else {
              this.telError = res.message;
            }
          },
          onError: (err, response) => {
            console.log(err, response);
          },
        });
      }
    },
    forgot() {
      this.$router.push({ name: this.forgotName });
    },
    register() {
      this.$router.push({ name: this.registerName });
    },
    toggleType() {
      this.weixin = !this.weixin;
      if (this.weixin) {
        const obj = new window.WxLogin({
          id: 'login_weixin',
          appid: 'wx0fc7f448c3ed4e4e',
          scope: 'snsapi_login',
          redirect_uri: 'http%3a%2f%2f192.168.1.184%3a8180%2fweixin',
          state: 'login',
          style: '',
          href: '',
        });
        console.log(obj);
      }
    },
  },
};
</script>
