<template>
  <div class="title-page">
    <emfe-title className="aa" tip="标题文本的提示">标题文本</emfe-title>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-title</span> <span>className</span><span>=</span><span>"aa"</span> <span>&gt;</span>标题文字<span>&lt;/emfe-title&gt;</span>
      </code>
    </pre>
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
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>tip</td>
          <td>问号提示</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'title-page',
  };
</script>
