<template>
  <div class="barpage">
    <emfe-bar :datas="bars" :header="header" className="page"></emfe-bar>
    <br>
    <br>
    <br>
    <!-- <emfe-bar :datas="bars" :header="header" className="page" fullpath="/" :disabled="true"></emfe-bar> -->
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
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disableRex</td>
          <td>禁用的筛选条件，只根据path筛选</td>
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
      header: {
        name: '例子',
        routers: {
          name: 'tag',
        },
      },
      bars: [
        {
          name: '提示2',
          routers: {
            name: 'docclick',
          },
        },
        {
          name: '提示1',
          path: 'https://vuefe.cn/v2/guide/list.html',
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
