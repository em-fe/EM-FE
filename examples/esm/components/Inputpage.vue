<template>
  <div class="inputpage">
  	<emfe-input placeholder="请输入文a字！" v-model="value" @change="change">
    </emfe-input>
    <div>{{value}}</div>
    <br>
    <emfe-input :disabled="true" placeholder="请输入文字！">
    </emfe-input>
    <br>
    <emfe-input :autofocus="true" placeholder="请输入文字！">
    </emfe-input>
    <br>
    <emfe-input :errOk="true" placeholder="请输入文字！">
      <div slot="error">这是一个错误信息</div>
    </emfe-input>
    <br>
    <emfe-input :iconOk="true" type="site" placeholder="请输入文字！">
    </emfe-input>
    <br>
    <emfe-input :iconOk="true" :errOk="true" type="qr" placeholder="请输入文字！">
    	<div slot="error">这是一个错误信息</div>
    </emfe-input>
  </div>
</template>
<script>
export default {
  name: "inputpage",
  data() {
    return {
      value: '我是内容',
    };
  },
  methods: {
    change(val) {
      this.value = val;
    },
  },
};
</script>