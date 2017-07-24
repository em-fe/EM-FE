<template>
  <div class="menu-page">
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
          <td>datas</td>
          <td>导航数据。导航路由配置只支持： name 和 path 跳转。如果需要外跳到某网站，加入url属性。详情请参考本example的导航数据。</td>
          <td>Array</td>
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
    <br>
    <h3>注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>short</td>
          <td>当点击一级导航顶部变小按钮的时候触发。请参考example的导航示例</td>
          <td>一级导航状态(是否被展开), 二级导航状态(是否被展开)</td>
        </tr>
        <tr>
          <td>column</td>
          <td>当点击一级导航中的菜单，有二级导航出现的时候触发。请参考example的导航示例</td>
          <td>一级导航状态(是否被展开), 二级导航状态(是否被展开)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "MenuPage",
};
</script>
