<template>
  <div>
    <div class="dataPanelPage">
      <emfe-datapanel @link='link' linkText='查看详情' title="总收集量" type="fabu" theme="light" placement="bottom" contentText="1234" companyText="人" iconFlg="true">
        <div slot="tipText">aaaaaaaaa</div>
      </emfe-datapanel>
    </div>
    <br>
    <br>
    <div class="dataPanelPage">
      <emfe-datapanel title="总收集量" type="fabu" contentText="1234" companyText="人" iconFlg="true">
        <div slot="tipText">aaaaaaaaa</div>
      </emfe-datapanel>
    </div>
    <br>
    <br>
    <br>
    <br>
    <p>自定义提示位置</p>
    <div class="dataPanelPage">
      <emfe-datapanel title="总收集量" contentText="1234" :styles="{position: 'absolute', top: 0, left: 0}">
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
          <td>theme</td>
          <td>提示框主题</td>
          <td>String</td>
          <td>""</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>提示框位置</td>
          <td>String</td>
          <td>""</td>
        </tr>
        <tr>
          <td>contentText</td>
          <td>数据模板的内容文字</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>companyText</td>
          <td>单位文字</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>iconFlg</td>
          <td>是否有图标</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>图标类型</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>linkText</td>
          <td>跳转text</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>link</td>
          <td>点击linkText跳转</td>
          <td></td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'datapanelPage',
  methods: {
    link() {
      console.log(0);
    },
  },
}
</script>
<style>
  .dataPanelPage {
    width: 300px;
  }
</style>
