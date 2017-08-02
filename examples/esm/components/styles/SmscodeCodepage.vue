<template>
  <div class="smscodeCodepage">
    <h3>普通用法</h3>
    <emfe-smscode v-model="model"></emfe-smscode>
    当前： {{ model }}
    <br>
    <br>
    <br>
    <br>
    <h3>自定义用法</h3>
    <emfe-smscode className="demo" v-model="model" times="2" @click="click"></emfe-smscode>
    点击次数: {{ num }}
    <br>
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
          <td>className</td>
          <td>需要修改的样式</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>文案</td>
          <td>String</td>
          <td>获取验证码</td>
        </tr>
        <tr>
          <td>times</td>
          <td>倒计时时间。</td>
          <td>Number, String</td>
          <td>60</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>默认提示文字</td>
          <td>String</td>
          <td>请输入验证码</td>
        </tr>
      </tbody>
    </table>
    <h3>注册的方法</h3>
    <table style="width: 100%;text-align: center;">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>输入时触发</td>
          <td>当前验证码</td>
        </tr>
        <tr>
          <td>click</td>
          <td>点击验证码</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'imgcodepage',
  data() {
    return {
      model: 111111,
      num: 0,
    };
  },
  methods: {
    click() {
      this.num++;
    }
  }
};
</script>
<style lang="scss">
.demo-smscode {
  width: 394px;
  height: 42px;

  &-code {
    height: 40px;
    line-height: 40px;
  }
}
</style>
