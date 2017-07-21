<template>
  <div>
    <button @click="formBtn">我是表单弹出框，点我呀！</button>
    <emfe-modal :show="formShow" :title="copyTitle" :width="width" @close="formClose" @cancel="formCancel" @ok="formOk">
      <div slot="modal-main" className="form">
        <div class="emfe-modal-main-input">
          <h6 class="emfe-modal-main-input-title">标题</h6>
          <emfe-input placeholder="表单标题"></emfe-input>
        </div>
      </div>
    </emfe-modal>
    <button @click="promptBtn">我是提示弹出框，点我呀！</button>
    <emfe-modal :show="promptShow" :title="deteleTitle" @close="promptClose" @cancel="promptCancel" @ok="promptOk">
        <div slot="modal-main" class="emfe-modal-main-prompt">
          确认删除表单数据？
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
      formShow: false,
      promptShow: false,
      deteleTitle: '删除确认',
      copyTitle: '复制表单',
      width: 691,
    };
  },
  methods: {
    formBtn() {
      this.formShow = true;
    },
    formClose() {
      this.formShow = false;
    },
    formCancel() {
      this.formShow = false;
    },
    formOk() {
      this.formShow = false;
    },
    promptBtn() {
      this.promptShow = true;
    },
    promptClose() {
      this.promptShow = false;
    },
    promptCancel() {
      this.promptShow = false;
    },
    promptOk() {
      this.promptShow = false;
    },
  },
}
</script>
