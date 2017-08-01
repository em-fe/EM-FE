<template>
  <div>
    <div class="dataPanelPage">
      <emfe-datapanel title="总收集量" contentText="1234">
        <div slot="tipText">aaaaaaaaa</div>
      </emfe-datapanel>
    </div>
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
          <td>需要修改的样式名</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>数据模板的标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>contentText</td>
          <td>数据模板的内容文字</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'datapanelPage',
}
</script>
<style>
  .dataPanelPage {
    width: 300px;
  }
</style>
