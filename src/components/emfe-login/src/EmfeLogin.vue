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

export default {
  name: 'emfe-login',
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
      weixinLogo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDQwIDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NS4xICg0MzUwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i55m75b2VLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzOC4wMDAwMDAsIC02MjcuMDAwMDAwKSIgZmlsbD0iIzRDQkQ2MyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05NjAuNjM5MzcyLDY0Ni45ODM2NDYgQzk2MC4xODM0MTUsNjQ2Ljk4MzY0NiA5NTkuNzI3MTc3LDY0Ny40MDcxNzUgOTU5LjcyNzE3Nyw2NDcuOTI4NjkgQzk1OS43MjcxNzcsNjQ4LjM1MjA3OSA5NjAuMTgzMTM0LDY0OC43NzU0NjggOTYwLjYzOTM3Miw2NDguNzc1NDY4IEM5NjEuMzI0MDEsNjQ4Ljc3NTQ2OCA5NjEuODEyNjc2LDY0OC4zNTE5MzggOTYxLjgxMjY3Niw2NDcuOTI4NjkgQzk2MS44MTI2NzYsNjQ3LjQwNzMxNSA5NjEuMzI0MDEsNjQ2Ljk4MzY0NiA5NjAuNjM5MzcyLDY0Ni45ODM2NDYgTDk2MC42MzkzNzIsNjQ2Ljk4MzY0NiBaIE05NTcuNjQxODE4LDY0Mi41ODQ1MjkgQzk1OC4zNTg3NDMsNjQyLjU4NDUyOSA5NTguODE0ODQxLDY0Mi4xMjg1NzEgOTU4LjgxNDg0MSw2NDEuNDQ0MDc0IEM5NTguODE0ODQxLDY0MC43Mjc0MjkgOTU4LjM1ODc0Myw2NDAuMzAzNjE5IDk1Ny42NDE4MTgsNjQwLjMwMzYxOSBDOTU2Ljk1NzQ2MSw2NDAuMzAzNjE5IDk1Ni4zMDU2NzIsNjQwLjcyNzQyOSA5NTYuMzA1NjcyLDY0MS40NDQwNzQgQzk1Ni4zMDU2NzIsNjQyLjEyODcxMiA5NTYuOTU3NDYxLDY0Mi41ODQ1MjkgOTU3LjY0MTgxOCw2NDIuNTg0NTI5IEw5NTcuNjQxODE4LDY0Mi41ODQ1MjkgWiBNOTU4LjAwMDIxMSw2MjcgQzk0Ni45NTQ2MTgsNjI3IDkzOCw2MzUuOTU0MTk3IDkzOCw2NDYuOTk5Nzg5IEM5MzgsNjU4LjA0NTgwMyA5NDYuOTU0NjE4LDY2NyA5NTguMDAwMjExLDY2NyBDOTY5LjA0NTgwMyw2NjcgOTc4LDY1OC4wNDU4MDMgOTc4LDY0Ni45OTk3ODkgQzk3OC4wMDAxNCw2MzUuOTU0MTk3IDk2OS4wNDYwODQsNjI3IDk1OC4wMDAyMTEsNjI3IEw5NTguMDAwMjExLDYyNyBaIE05NTQuMjIwMTczLDY1Mi4wNjcxMiBDOTUzLjAxNDU4Miw2NTIuMDY3MTIgOTUyLjEzNDY3NCw2NTEuODcxNTY5IDk1MC45OTM5MzksNjUxLjU0NTMyNCBMOTQ3LjcwMjg0OSw2NTMuMjA3NTc0IEw5NDguNjQ4MTc0LDY1MC40MDUxNSBDOTQ2LjMzNDQxNSw2NDguNzc2MTcgOTQ0Ljk2NTg0Miw2NDYuNzIzMDk5IDk0NC45NjU4NDIsNjQ0LjIxMzc5IEM5NDQuOTY1ODQyLDYzOS43ODIyNDUgOTQ5LjEzNjg0LDYzNi4zOTM0NDkgOTU0LjIyMDE3Myw2MzYuMzkzNDQ5IEM5NTguNzE2ODU1LDYzNi4zOTM0NDkgOTYyLjcyNTQzMiw2MzkuMDY1MzE5IDk2My41MDcyMTQsNjQyLjg0NTc3NyBDOTYzLjE4MTM5LDY0Mi43ODAwNzkgOTYyLjg4Nzk5NCw2NDIuNzQ3NjUxIDk2Mi42Mjc0NDcsNjQyLjc0NzY1MSBDOTU4LjE5NTYyMSw2NDIuNzQ3NjUxIDk1NC43NzQyNTcsNjQ2LjA3MTQ1IDk1NC43NzQyNTcsNjUwLjA3OTMyNiBDOTU0Ljc3NDI1Nyw2NTAuNzYzODIzIDk1NC44NzE5NjIsNjUxLjM4Mjc2MyA5NTUuMDM0ODA0LDY1Mi4wMzQ4MzIgQzk1NC43NzQzOTcsNjUyLjA2NzEyIDk1NC40ODEwMDEsNjUyLjA2NzEyIDk1NC4yMjAxNzMsNjUyLjA2NzEyIEw5NTQuMjIwMTczLDY1Mi4wNjcxMiBaIE05NjcuODA4NjI2LDY1NS4yNjAzNjQgTDk2OC40NjAyNzQsNjU3LjYwNjY5MSBMOTY1Ljk4MzUzMyw2NTYuMjA1NjkgQzk2NS4wMzg3Nyw2NTYuNDAwOTU5IDk2NC4xMjYyOTQsNjU2LjY5NDIxNSA5NjMuMTgxMzksNjU2LjY5NDIxNSBDOTU4LjgxNDg0MSw2NTYuNjk0MjE1IDk1NS4zNjA5MDksNjUzLjY5NjUyMSA5NTUuMzYwOTA5LDY0OS45ODE3NjEgQzk1NS4zNjA5MDksNjQ2LjI2NzAwMSA5NTguODE0ODQxLDY0My4yNjkxNjYgOTYzLjE4MTM5LDY0My4yNjkxNjYgQzk2Ny4zMTk4MTksNjQzLjI2OTE2NiA5NzEuMDM0Mjk5LDY0Ni4yNjcwMDEgOTcxLjAzNDI5OSw2NDkuOTgxNzYxIEM5NzEuMDM0NDM5LDY1Mi4wNjcxMiA5NjkuNjMzMTU3LDY1My45MjQzNTkgOTY3LjgwODYyNiw2NTUuMjYwMzY0IEw5NjcuODA4NjI2LDY1NS4yNjAzNjQgWiBNOTUxLjE4OTc3LDY0MC4zMDM0NzkgQzk1MC41MDU0MTMsNjQwLjMwMzQ3OSA5NDkuNzg4NzY5LDY0MC43MjcyODkgOTQ5Ljc4ODc2OSw2NDEuNDQzOTM0IEM5NDkuNzg4NzY5LDY0Mi4xMjg0MzEgOTUwLjUwNTQxMyw2NDIuNTg0ODA5IDk1MS4xODk3Nyw2NDIuNTg0ODA5IEM5NTEuODQxNTU5LDY0Mi41ODQ4MDkgOTUyLjM2Mjc5Myw2NDIuMTI4NDMxIDk1Mi4zNjI3OTMsNjQxLjQ0MzkzNCBDOTUyLjM2Mjc5Myw2NDAuNzI3Mjg5IDk1MS44NDE1NTksNjQwLjMwMzQ3OSA5NTEuMTg5NzcsNjQwLjMwMzQ3OSBMOTUxLjE4OTc3LDY0MC4zMDM0NzkgWiBNOTY1Ljc1NTQxNCw2NDYuOTgzNjQ2IEM5NjUuMjY2NzQ4LDY0Ni45ODM2NDYgOTY0Ljg0MzA3OSw2NDcuNDA3MTc1IDk2NC44NDMwNzksNjQ3LjkyODY5IEM5NjQuODQzMDc5LDY0OC4zNTIwNzkgOTY1LjI2Njc0OCw2NDguNzc1NDY4IDk2NS43NTU0MTQsNjQ4Ljc3NTQ2OCBDOTY2LjQwNzIwMyw2NDguNzc1NDY4IDk2Ni44OTU4NjksNjQ4LjM1MTkzOCA5NjYuODk1ODY5LDY0Ny45Mjg2OSBDOTY2Ljg5NTg2OSw2NDcuNDA3MzE1IDk2Ni40MDcyMDMsNjQ2Ljk4MzY0NiA5NjUuNzU1NDE0LDY0Ni45ODM2NDYgTDk2NS43NTU0MTQsNjQ2Ljk4MzY0NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
      accountLogo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDQwIDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NS4xICg0MzUwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlvq7kv6HmiavnoIEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzguMDAwMDAwLCAtNjY2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NC4wMDAwMDAsIDYzNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzQuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTQiIGZpbGw9IiMxOTk2RjkiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjQ3MjM2MTgsMTAgQzIyLjI3OTczMiwxMCAyNC41NTQ0Mzg4LDEyLjIzNzg1NTkgMjQuNTU0NDM4OCwxNC45OTgzMjUgQzI0LjU1NDQzODgsMTcuNzU4Nzk0IDIyLjI3OTczMiwxOS45OTY2NDk5IDE5LjQ3MjM2MTgsMTkuOTk2NjQ5OSBDMTYuNjY0OTkxNiwxOS45OTY2NDk5IDE0LjM5MDI4NDcsMTcuNzU4Nzk0IDE0LjM5MDI4NDcsMTQuOTk4MzI1IEMxNC4zOTAyODQ3LDEyLjIzNzg1NTkgMTYuNjY0OTkxNiwxMCAxOS40NzIzNjE4LDEwIFogTTE3LjU2NjE2NDEsMjEuNjY0OTkxNiBMMjEuODAwNjcsMjEuNjY0OTkxNiBDMjUuNDI1NDYwNiwyMS42NjQ5OTE2IDI4LjM2NjgzNDIsMjQuNTU2MTEzOSAyOC4zNjY4MzQyLDI4LjEyMzk1MzEgTDI4LjM2NjgzNDIsMjguNTM5MzYzNSBDMjguMzY2ODM0MiwyOS45NDYzOTg3IDI1LjQyNTQ2MDYsMzAgMjEuODAwNjcsMzAgTDE3LjU2NjE2NDEsMzAgQzEzLjk0MTM3MzUsMzAgMTEsMzAgMTEsMjguNTM5MzYzNSBMMTEsMjguMTIzOTUzMSBDMTEsMjQuNTU2MTEzOSAxMy45NDEzNzM1LDIxLjY2NDk5MTYgMTcuNTY2MTY0MSwyMS42NjQ5OTE2IEwxNy41NjYxNjQxLDIxLjY2NDk5MTYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
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
