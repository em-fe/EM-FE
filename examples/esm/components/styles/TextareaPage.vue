<template>
  <div>
    <emfe-textarea className="main" v-model="des" @blur="blur"></emfe-textarea>
    支持 v-model {{ des }}
    <br>
    <br>
    <br>
    <emfe-button @click="click">改变值</emfe-button>
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
          <td>blur</td>
          <td>失去焦点</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>触发焦点</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="33%">事件名</th>
          <th width="33%">说明</th>
          <th width="33%">返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>input变化触发</td>
          <td>input的val值</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>input失去焦点</td>
          <td></td>
        </tr>
        <tr>
          <td>focus</td>
          <td>input触发焦点</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'textareaPage',
  data() {
    return {
      des: '11',
    };
  },
  methods: {
    click() {
      this.des = '点击变了';
    },
    blur() {
      this.des = '失去焦点';
    },
  },
}
</script>
