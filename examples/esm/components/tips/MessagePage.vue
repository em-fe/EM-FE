<template>
  <div class="message-page">
    <h3>基本示例</h3>
    <p>简单应用，附加个性化定制</p>
    <div class="msg-demo-box">
      <button class="msg-demo" @click="demo1">info {{ infoClose }}</button>
      <button class="msg-demo" @click="demo2">success</button>
      <button class="msg-demo" @click="demo3">warning 200ms 消失</button>
      <button class="msg-demo" @click="demo4">error top: 300px</button>
    </div>
    <h3>全局提示设置示例</h3>
    <p>您可以在每个方法中自行定义时间，样式，也可以全局定义</p>
    <div class="msg-demo-box">
      <button class="msg-demo" @click="configDelayTime">消失时间为 800ms</button>
      <button class="msg-demo" @click="configStyle">样式: top: 200px</button>
      <button class="msg-demo" @click="configClose">全局关闭事件 {{ closeFn }}</button>
    </div>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <p>通过直接调用以下方法来使用组件：</p>
    <br>
    <br>
    <p>this.$EmfeMessage.info(params)</p>
    <p>this.$EmfeMessage.success(params)</p>
    <p>this.$EmfeMessage.warning(params)</p>
    <p>this.$EmfeMessage.error(params)</p>
    <br>
    <br>
    <br>
    <p>以上方法隐式的创建及维护 Vue 组件。参数 params 是对象，具体说明如下：</p>
    <table>
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
          <td>content</td>
          <td>提示内容。目前不支持标签渲染，只支持纯字符串。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>delayTime</td>
          <td>延时几毫秒关闭提示。默认 5000 毫秒</td>
          <td>Number</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭时的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>style</td>
          <td>提示框的样式。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p>另外提供了 <strong>全局配置</strong> 的方法：</p>
    <br>
    <br>
    <br>
    <p>this.$EmfeMessage.config(params)</p>
    <br>
    <br>
    <br>
    <p>注： <strong>配置了每个方法的私有参数，那么全局参数将失效</strong>。参数 params 是对象，具体说明如下：</p>
    <br>
    <br>
    <br>
    <table>
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
          <td>delayTime</td>
          <td>延时几毫秒关闭提示。默认 5000 毫秒</td>
          <td>Number</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭时的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>style</td>
          <td>提示框的样式。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'MessagePage',
  data() {
    return {
      infoClose: '',
      closeFn: 0,
    };
  },
  created() {
    console.log(this.$EmfeMessage, 2);
  },
  methods: {
    demo1() {
      console.log(this.$EmfeMessage, 1);
      this.$EmfeMessage.info({
        content: '这是一个info提示',
        close: () => {
          this.infoClose = '提示打开过，关闭过';
        },
      });
    },
    demo2() {
      this.$EmfeMessage.success({
        content: '这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示',
      });
    },
    demo3() {
      this.$EmfeMessage.warning({
        content: '这是一个warning提示， 200ms消失',
        delayTime: 200,
      });
    },
    demo4() {
      this.$EmfeMessage.error({
        content: '这是一个error提示',
        style: 'top: 300px',
      });
    },
    configDelayTime() {
      this.$EmfeMessage.config({
        delayTime: 800,
      });
    },
    configStyle() {
      this.$EmfeMessage.config({
        style: 'top: 200px',
      });
    },
    configClose() {
      this.$EmfeMessage.config({
        close: () => {
          this.closeFn++;
        },
      });
    },
  },
};
</script>
<style>
.msg-demo-box {
  margin: 100px auto;
  text-align: center;
}
.msg-demo {
  border: 1px solid #dcdcdc;
  padding: 24px;
  margin: 0 24px;
  cursor: pointer;
  display: inline-block;
}
</style>
