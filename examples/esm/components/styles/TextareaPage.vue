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
