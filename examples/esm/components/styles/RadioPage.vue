<template>
  <div class="radio-page">
    <emfe-radio index="0" name="group1" :disabled="true">文字</emfe-radio>
    <emfe-radio-group>
      <emfe-radio index="0" name="group2">文字</emfe-radio>
      <emfe-radio index="1" name="group2">文字</emfe-radio>
    </emfe-radio-group>
    <pre>
      <code>
        <span>&lt;emfe-radio</span> <span>index</span><span>=</span><span>"0"</span> <span>name</span><span>=</span><span>"group1"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>文字<span>&lt;/emfe-radio&gt;</span>
      </code>
      <code>
        <span>&lt;emfe-radio-group&gt;</span>
          <span>&lt;emfe-radio</span> <span>index</span><span>=</span><span>"0"</span> <span>name</span><span>=</span><span>"group2"</span><span>&gt;</span>文字<span>&lt;/emfe-radio&gt;</span>
          <span>&lt;emfe-radio</span> <span>index</span><span>=</span><span>"1"</span> <span>name</span><span>=</span><span>"group2"</span><span>&gt;</span>文字<span>&lt;/emfe-radio&gt;</span>
        <span>&lt;/emfe-radio-group&gt;</span>
      </code>
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="25%">属性</th>
          <th width="30%">说明</th>
          <th width="20%">类型</th>
          <th width="25%">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>index</td>
          <td>必须填写</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>具有相同名称的单选按钮 属于同一组</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>“禁止”状态添加disabled</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
  };
</script>