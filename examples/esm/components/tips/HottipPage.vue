<template>
  <div class="page-hottip">
    <h2>特别提示组件</h2><br>
    {{ status }}
    <emfe-hottip @change="change">
      <div slot="no1">注册设置：默认注册方式为手机号、验证码，即用户只需填写手机号和验证码即可注册成功。</div>
      <div slot="no2">注册设置：默认注册方式为手机号、验证码，即用户只需填写手机号和验证码即可注册成功。其他字段默认完善信息，如果您想收集用户的更多信息，可以编辑字段类型设置为“注册时必填”，即用户在注册时必须填写该字段才能完成注册。</div>
    </emfe-hottip>
    <br><br><h2>API:</h2><br>
    no1: 简介数据<br>
    no2: 展开后的数据<br>
    data里 status 是默认状态 false是默认展开 设为true 是默认收起
  </div>
</template>

<script>
export default {
  name: 'HottipPage',
  data() {
    return {
      status: 'false',
    };
  },
  methods: {
    change(status) {
      this.status = status;
    },
  },
};
</script>
