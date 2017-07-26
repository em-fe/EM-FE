<template>
  <div class="barpage">
    <emfe-bar :datas="bars" :title="title" className="page"></emfe-bar>
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
          <td>数据。必须</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题。必须</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>fullpath</td>
          <td>当前页面的地址。用作刷新定位。必须</td>
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
  name: "barpage",
  data() {
    return {
      title: '例子',
      bars: [
        {
          title: '提示组件',
          icon: 'hotel',
          children: [
            {
              title: '文字提示',
              routers: {
                path: '/tips/tooltippage',
              },
            },
            {
              title: '全局提示',
              routers: {
                path: '/tips/message',
              },
            },
          ],
        },
        {
          title: '提示组件',
          icon: 'hotel',
          children: [
            {
              title: '文字提示',
              routers: {
                path: '/tips/tooltippage',
              },
            },
            {
              title: '全局提示',
              routers: {
                path: '/tips/message',
              },
            },
          ],
        },
      ],
    }
  }
}
</script>
<style>
.page-bar {
  position: static;
}
</style>
