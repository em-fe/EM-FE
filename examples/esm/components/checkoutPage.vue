<template>
  <div>
    <h4>填写设置</h4>
    <emfe-checkout>
      <span slot="text">这是一个必填项</span>
    </emfe-checkout>
    <emfe-checkout :slideShow="slideShow">
      <span slot="text">限定可选日期范围</span>
      <div slot="slide" class="emfe-checkout-slide-box">
        可选范围包含设定日期，留空表示不设限
        可选范围包含设定日期，留空表示不设限
        可选范围包含设定日期，留空表示不设限
      </div>
    </emfe-checkout>
    <emfe-checkout :slideShow="slideShow">
      <span slot="text">限定一周内可选日期</span>
      <div slot="slide" class="emfe-checkout-slide-box">
        <emfe-checkout>
          <span slot="text">周一</span>
        </emfe-checkout>
        <emfe-checkout>
          <span slot="text">周二</span>
        </emfe-checkout>
        <emfe-checkout>
          <span slot="text">周三</span>
        </emfe-checkout>
        <emfe-checkout>
          <span slot="text">周四</span>
        </emfe-checkout>
        <emfe-checkout>
          <span slot="text">周五</span>
        </emfe-checkout>
        <emfe-checkout>
          <span slot="text">周六</span>
        </emfe-checkout>
        <emfe-checkout>
          <span slot="text">周日</span>
        </emfe-checkout>
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
