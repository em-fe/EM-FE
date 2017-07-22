 <template>
  <div>
    <h4>填写设置</h4>
    <emfe-checkout title="这是一个必填项">
    </emfe-checkout>
    <emfe-checkout :slideShow="slideShow" title="限定可选日期范围">
      <div slot="slide">
        <emfe-checkout title="周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一"></emfe-checkout>
        <emfe-checkout title="周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一"></emfe-checkout>
        <emfe-checkout title="周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一周一"></emfe-checkout>
      </div>
    </emfe-checkout>
    <emfe-checkout :slideShow="slideShow" title="限定一周内可选日期">
      <div slot="slide">
        <emfe-checkout title="周一" inline="true"></emfe-checkout>
        <emfe-checkout title="周二" inline="true"></emfe-checkout>
        <emfe-checkout title="周三" inline="true"></emfe-checkout>
        <emfe-checkout title="周四" inline="true"></emfe-checkout>
        <emfe-checkout title="周五" inline="true"></emfe-checkout>
        <emfe-checkout title="周六" inline="true"></emfe-checkout>
        <emfe-checkout title="周日" inline="true"></emfe-checkout>
      </div>
    </emfe-checkout>
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
          <td>slideShow</td>
          <td>选中后是否有展示内容</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disable</td>
          <td>是否禁用此多选框</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>多选框的描述标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>inline</td>
          <td>复选框是否一行显示</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <br>
  </div>
</template>
<script>
export default {
  name: 'checkout-page',
  data() {
    return {
      slideShow: true,
    }
  },
}
</script>
