<template>
  <div class="smscodecCodepage">
    <h3>普通用法</h3>
    <emfe-smscode-c v-model="model" className="ddd"></emfe-smscode-c>
    当前： {{ model }}

    <pre>
      &lt;emfe-smscode-c v-model="model"&gt;&lt;/emfe-smscode-c&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>icon用法</h3>
    <emfe-smscode-c :iconFlg='flg' icon="qr" v-model="model"></emfe-smscode-c>
    {{ model }}
    <br>
    <pre>
      &lt;emfe-smscode-c icon="qr" v-model="model"&gt;&lt;/emfe-smscode-c&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>自定义用法</h3>
    <emfe-smscode-c className="demo" v-model="model" times="6" @blur="blur" @click="click" :timeStart="start" :end="timeEnd"></emfe-smscode-c>
    点击次数: {{ num }}
    {{ model }}
    <pre>
      &lt;emfe-smscode-c className="demo" v-model="model" times="2" @click="click"&gt;&lt;/emfe-smscode-c&gt;
    </pre>
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
          <td>timeStart</td>
          <td>控制是否开启定时器</td>
          <td>Boolean</td>
          <td>false</td>
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
        <tr>
          <td>blur</td>
          <td>文本框失去焦点</td>
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
      start: false,
      flg: true,
    };
  },
  watch: {
    start(val, oldVal) {
      if (val !== oldVal) {
        this.start = val;
      }
    },
  },
  methods: {
    click() {
      this.start = true;
      this.num++;
    },
    timeEnd(val) {
      this.start = val;
    },
    blur() {
      console.log('失去焦点');
    },
  },
};
</script>
<style lang="scss">
.demo-smscode {
  width: 394px;
  height: 36px;
}
</style>
