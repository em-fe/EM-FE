<template>
  <div class="icon">
    <h2>emui 字体图标</h2>
    <h3>示例</h3>
    <Row gutter="8" v-for="(type, typeIndex) in types" :key="typeIndex">
      <Col span="8" v-for="(iconName, iconIndex) in type" :key="iconIndex">
        <h3>{{ iconName }}</h3>
        <p><Icon :type="iconName" className="icon-page"></Icon></p>
      </Col>
    </Row>
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
          <td>type</td>
          <td>图标的名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
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
  name: "IconPage",
  data() {
    return {
      types: [
        ['pull-down', 'hint', 'QR-code'],
        ['publish', 'list', 'start'],
        ['pause', 'stick', 'statistics'],
        ['financial-statement', 'side-bar', 'order-center'],
        ['public', 'member-center', 'customer-service'],
        ['paradise', 'commodity-management', 'sale'],
        ['marketing-center', 'site-management', 'account-management'],
        ['ihotel-management', 'eventelogo'],
      ],
    };
  },
}
</script>
<style lang="scss">
.icon {
  text-align: center;

  &-page {
    color: #19efef;
  }
}
</style>
