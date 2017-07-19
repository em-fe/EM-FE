<template>
  <div>
    <button @click="show = true">我是弹出框，点我呀！</button>
    <emfe-modal :show="show" :title="title" @close="close" @cancel="cancel" @ok="ok">
        <div slot="modal-main">
          我是内容内容内容内容内容
        </div>
    </emfe-modal>
    <br>
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
          <td>show</td>
          <td>控制遮罩层显示隐藏</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>width</td>
          <td>内容的宽度</td>
          <td>Number</td>
          <td>800</td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题内容文字</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
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
          <td>close</td>
          <td>点击关闭按钮触发</td>
          <td>-</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>点击取消按钮触发</td>
          <td>-</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>点击确认按钮触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "modalPage",
  data() {
    return {
      show: false,
      title: 'EM-FE项目组',
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    ok() {
      this.show = false;
    },
  },
}
</script>
