<template>
  <div class="button-page">
    <h3>基本示例</h3>
    <br>
    <br>
    <br>
    <emfe-button>基本用法</emfe-button>
    <h3>自定义名字示例</h3>
    <br>
    <br>
    <br>
    <emfe-button className="page">自定义样式</emfe-button>
    <br>
    <br>
    <br>
    <h3>API</h3>
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
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'button-page',
};
</script>
<style>
.page-button {
  background: rgba(123, 0, 0, 0.5);
}
</style>
