<template>
  <div class="emfe-login-c" v-if="show" :class="loginName">
    <div class="emfe-login-c-mask"></div>
    <div class="emfe-login-c-wrap">
      <div class="emfe-login-c-header">
        <div class="emfe-login-c-header-inner">{{ title }}</div>
        <div class="emfe-login-c-header-close" @click="close">＋</div>
      </div>
      <div class="emfe-login-c-main">
        <emfe-tel :errOk="phoneErrorFlg" :datas="data1" v-model="now" placeholder="请输入手机号" className="emfe-login-c" @blur="phoneBlur">
          <div slot="error">{{phoneError}}</div>
        </emfe-tel>
        <emfe-smscode-c :errOk="codeErrorFlg" v-model="model" className="emfe-login-c" :timeStart="start" :end="timeEnd" :click="sendCode" @blur="codeBlur" :disabled='false'>
          <div slot="error">{{codeError}}</div>
        </emfe-smscode-c>
        <p class="emfe-login-c-main-tipsText">首次登录的手机号会自动为您创建账号</p>
        <emfe-button-c theme="primary" className="emfe-login-c" :disabled="false" @click="login">登录</emfe-button-c>
        <emfe-titleline title="微信登录"></emfe-titleline>
        <div class="emfe-login-c-type">
          <emfe-icon type="weixin" className="emfe-login-c-type-weixin" :click="weixinLogin"></emfe-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ajax from './ajax';
import loginedpc from './loginedpc';
import CONSTANT from '../../../contant';

export default {
  name: 'EmfeLoginC',
  data() {
    return {
      title: '登录',
      now: {
        name: '中国',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      data1: [
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
      sendData: {
        country_code: '',
        mobile: '',
        origin: 'c-login',
      },
      loginData: {
        org_id: '',
        code: '',
        phone: '',
        moudle_name: 'c-login',
        sms_code: '',
      },
      model: '',
      start: false,
      phoneError: '',
      phoneErrorFlg: false,
      phoneFlg: false,
      codeError: '',
      codeErrorFlg: false,
      codeFlg: false,
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
    orgid: {
      type: Number,
      required: true,
    },
    loginAction: {
      type: String,
      required: true,
    },
    sendAction: {
      type: String,
      required: true,
    },
    weixinAction: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default() {
        return {};
      },
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
  created() {
    this.loginData.org_id = this.orgid;
  },
  methods: {
    close() {
      this.loginClose(false);
    },
    phoneBlur() {
      if (this.now.tel === '') {
        this.phoneError = '请输入手机号';
        this.phoneFlg = false;
        this.phoneErrorFlg = true;
      } else if (this.$EmfeFormTest.phone(this.now.tel)) {
        this.phoneError = '';
        this.phoneFlg = true;
        this.phoneErrorFlg = false;
        this.sendData.mobile = this.now.tel;
        this.sendData.country_code = this.now.prefix;
        this.loginData.phone = this.now.tel;
        this.loginData.code = this.now.prefix;
      } else {
        this.phoneError = '请输入正确手机号';
        this.phoneFlg = false;
        this.phoneErrorFlg = true;
      }
    },
    codeBlur() {
      if (this.model === '') {
        this.codeFlg = false;
        this.codeErrorFlg = true;
        this.codeError = '请输入验证码';
      } else {
        this.codeFlg = true;
        this.codeError = '';
        this.codeErrorFlg = false;
        this.loginData.sms_code = this.model;
      }
    },
    sendCode() {
      if (this.phoneFlg) {
        this.start = true;
        ajax({
          headers: this.headers,
          type: 'POST',
          data: JSON.stringify(this.sendData),
          action: this.sendAction,
          onSuccess: (res) => {
            if (res.code === CONSTANT.AJAX_SUCCESS) {
              this.phoneError = '';
            } else {
              this.phoneError = res.message;
            }
          },
          onError: (err, response) => {
            console.log(err, response);
          },
        });
      } else {
        this.phoneBlur();
      }
    },
    login() {
      if (this.codeFlg && this.phoneFlg) {
        ajax({
          headers: this.headers,
          type: 'POST',
          data: JSON.stringify(this.loginData),
          action: this.loginAction,
          onSuccess: (res) => {
            if (res.code === CONSTANT.AJAX_SUCCESS) {
              loginedpc(res, res.data.org_id, this, () => {
                this.$emit('loginSuccess');
              });
            } else {
              this.phoneError = res.message;
              this.phoneErrorFlg = true;
            }
          },
          onError: (err, response) => {
            console.log(err, response);
          },
        });
      } else {
        this.phoneBlur();
        this.codeBlur();
      }
    },
    timeEnd(val) {
      this.start = val;
    },
    weixinLogin() {
      ajax({
        headers: this.headers,
        type: 'GET',
        action: `${this.weixinAction}/member/user/getWechatLoginUrl?scope=pc&state=${this.loginData.org_id}`,
        onSuccess: (res) => {
          if (res.code === CONSTANT.AJAX_SUCCESS) {
            window.location.href = res.data.url;
          }
        },
        onError: (err, response) => {
          console.log(err, response);
        },
      });
    },
  },
};
</script>
