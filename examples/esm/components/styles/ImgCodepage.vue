<template>
  <div class="imgcodepage">
    <h3>普通用法</h3>
    <emfe-imgcode :src="src" v-model="model"></emfe-imgcode>
    当前： {{ model }}
    <br>
    <br>
    <br>
    <br>
    <h3>自定义用法</h3>
    <emfe-imgcode className="demo" :src="src" v-model="model" @click="click"></emfe-imgcode>
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
          <td>src</td>
          <td>验证码。必须</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>默认提示文字</td>
          <td>String</td>
          <td>请输入</td>
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
          <td>choice</td>
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
      src: 'https://static.evente.cn/evente/img/flag/v1/mlxy.jpg',
    };
  },
  methods: {
    click() {
      this.src = 'https://static.evente.cn/evente/img/flag/v1/de.jpg';
    }
  }
};
</script>
<style lang="scss">
.demo-imgcode {
  width: 394px;
  height: 42px;

  &-code {
    height: 40px;
    line-height: 40px;
  }
}
</style>
