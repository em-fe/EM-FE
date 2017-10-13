<template>
  <div>
    <emfe-button @click="loginB">点击B端登录</emfe-button>
    <emfe-login :show='loginShowB' :loginClose="loginCloseB" :action="url" :referrerUrl='referrerUrl' forgotName="Forgotpassword" registerName="Type"></emfe-login>
    <emfe-button @click="loginC">点击C端登录</emfe-button>
    <emfe-login-c :show='loginShowC' :loginClose="loginCloseC" :loginAction="url" sendAction='' weixinAction=""></emfe-login-c>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table style="width: 100%;text-align: center;">
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show</td>
          <td>是否显示弹出框（必填）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loginClose</td>
          <td>点击关闭弹出框（必填）</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>loginAction</td>
          <td>登录请求的地址（必填）C端</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>sendAction</td>
          <td>发送验证码的地址（必填）C端</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>weixinAction</td>
          <td>微信登录请求的地址（必填）C端</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>登录请求的地址（必填）B端</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>forgotName</td>
          <td>忘记密码跳转地址（必填）B端</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>registerName</td>
          <td>注册跳转地址（必填）B端</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>headers</td>
          <td>ajax请求头</td>
          <td>Object</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>className</td>
          <td>需要添加的class样式名</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3>注册的方法</h3>
    <table style="width: 100%;text-align: center;">
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>loginSuccess</td>
          <td>登录成功之后的操作</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'loginModalPage',
  data() {
    return {
      loginShowB: false,
      loginShowC: false,
      url: 'http://gateway.inner.evente.cn:8000/member/org/login',
      referrerUrl: 'https://www.baidu.com/',
    };
  },
  methods: {
    loginB() {
      this.loginShowB = true;
    },
    loginC() {
      this.loginShowC = true;
    },
    loginCloseB(val) {
      this.loginShowB = val;
    },
    loginCloseC(val) {
      this.loginShowC = val;
    },
  },
};
</script>
