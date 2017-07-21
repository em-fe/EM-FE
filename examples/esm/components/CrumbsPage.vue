<template>
  <div class="crumb-page">
    <h2>面包屑导航组件：</h2><br>
    <div class="demo1">
      <emfe-crumb :routers="{}" @click="clickNoLink" :linkText="clicked"></emfe-crumb>
      <br>
      <br>
      <br>
      <br>
      <emfe-crumb :routers="{url: 'http://baidu.com'}" linkText="这个是超链2"></emfe-crumb>
      <br>
      <br>
      <br>
      <br>
      <emfe-crumb :routers="{name: 'grid', query: { main: 3}}" linkText="去栅格"></emfe-crumb>
      <br>
      <br>
      <br>
      <br>
      <emfe-crumb :routers="{}" linkText="这是测试连接文字" title="这是测试标题">test</emfe-crumb>
      <br>
      <br>
      <br>
      <br>
      <emfe-crumb :routers="{}" linkText="这是测试连接文字" title="这是测试标题">
        <div class="red">这是测试的 html 内容</div>
      </emfe-crumb>
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
            <td>linkText</td>
            <td>链接文字。必须</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>链接右边的标题。必须</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>routers</td>
            <td>必填。当有url属性的时候，会是一个外跳的超链。如果是正常的vue的Router跳转属性，那么会渲染router-link。</td>
            <td>Object</td>
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
            <td>click</td>
            <td>点击触发</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clicked: '我还没点过',
    };
  },
  methods: {
    clickNoLink() {
      this.clicked = '我点击过';
    },
  },
};
</script>
<style>
.crumb-page {
  padding: 32px 0;
  background: #f4f4f4;
}
.demo1 {
  width: 100%;
}
.red {
  color: #f00;
}
</style>
