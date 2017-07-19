<template>
  <div class="link-page">
    <h2>EMFE 超链</h2>
    <h3>示例</h3>
    <br>
    <emfe-link :routers="{}" @click="clickNoLink">这个链接没有跳转，但是 {{ clicked }}</emfe-link>
    <br>
    <emfe-link :routers="{url: 'http://baidu.com'}">这个是超链2</emfe-link>
    <br>
    <emfe-link :routers="{name: 'grid', query: { main: 3}}">去栅格</emfe-link>
    <br>
    <emfe-link className="page" :routers="{name: 'grid', query: { main: 3}}">自定义样式</emfe-link>
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
          <td>tag</td>
          <td>必须结合routers使用。如果是正常的vue的Router跳转属性，才能正常渲染tag设置的标签</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>routers</td>
          <td>必填。当有url属性的时候，会是一个外跳的超链。如果是正常的vue的Router跳转属性，那么会渲染router-link。</td>
          <td>Object</td>
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
          <td>click</td>
          <td>点击触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Linkpage',
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
<style lang="scss">
.page-link {
  font-size: 20px;
  color: #f00;

  &:visited {
    color: #0f0;
  }
}
</style>
