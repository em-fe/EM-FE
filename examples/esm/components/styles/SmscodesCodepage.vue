<template>
  <div class="smscodeCodepage">
    <h3>普通用法</h3>
    <emfe-smscode-s>
      <emfe-smscode-input-s v-model="model1" slot="smsInput"></emfe-smscode-input-s>
      <emfe-smscode-button-s @click="click1" slot="smsButton" times="3" :timeStart="start1" :end="timeEnd1"></emfe-smscode-button-s>
    </emfe-smscode-s>
    当前： {{ model1 }}
    <pre>
      &lt;emfe-smscode v-model="model"&gt;
        &lt;emfe-smscode-input-s  slot="smsInput"&gt;&lt;/emfe-smscode-input-s&gt;
        &lt;emfe-smscode-button-s times="3" :timeStart="start1" :end="timeEnd1" slot="smsButton"&gt;&lt;/emfe-smscode-button-s&gt;
      &lt;/emfe-smscode&gt;
    </pre>
    <!-- <br>
    <br>
    <br>
    <br>
    <br>
    <h3>icon用法</h3>
    <emfe-smscode icon="fabu" :timeStart="start" @end="timeEnd" v-model="model"></emfe-smscode>
    {{ model }}
    <br>
    <pre>
      &lt;emfe-smscode icon="fabu" v-model="model"&gt;&lt;/emfe-smscode&gt;
    </pre>
    <br>
    <br>
    <br>
    <br> -->
    <h3>自定义用法</h3>
    <emfe-smscode-s className="demo" :errOk="true">
      <emfe-smscode-input-s :placeholder="placeholder" v-model="model" slot="smsInput"></emfe-smscode-input-s>
      <emfe-smscode-button-s @click="click" :title="title" :timeStart="start" :end="timeEnd" :times="5" slot="smsButton"></emfe-smscode-button-s>
       <div slot="error">这是错误提示</div>
    </emfe-smscode-s>
    点击次数: {{ num }}
    {{ model }}
    <pre>
      &lt;emfe-smscode className="demo" :errOk="true" &gt; 
        &lt;emfe-smscode-input-s :placeholder="placeholder" v-model="model" slot="smsInput"&gt;&lt;/emfe-smscode-input-s&gt;
        &lt;emfe-smscode-button-s @click="click" :title="title" :timeStart="start" :end="timeEnd" :times="5" slot="smsButton"&gt;&lt;/emfe-smscode-button-s&gt;
      &lt;/emfe-smscode&gt;
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
        <tr>
          <td>icon</td>
          <td>icon 的类型</td>
          <td>String</td>
          <td>-</td>
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
        <tr>
          <td>focus</td>
          <td>文本框获取焦点</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SmscodesCodepage',
  data() {
    return {
      model: 1314,
      model1: 520,
      num: 0,
      placeholder:'爱输入啥输入啥',
      title:'获取big晒',
      start: false,
      start1: false,
      abc:true,
    };
  },
  watch: {
    start(val, oldVal) {
      if (val !== oldVal) {
        this.start = val;
      }
    },
    start1(val, oldVal) {
      if (val !== oldVal) {
        this.start1 = val;
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
    click1() {
      this.start1 = true;
    },
    timeEnd1(val) {
      this.start1 = val;
    },
  },
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
