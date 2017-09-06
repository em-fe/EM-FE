<template>
  <div class="crumb-page">
    <h2>面包屑导航 C 端组件：</h2><br>
    <div class="demo1">
      <emfe-crumb-c :datas="['表单', '会员']" :routers="{}" @click="clickNoLink" :linkText="clicked"></emfe-crumb-c>
      <pre>
        &lt;emfe-crumb-c :datas="['表单', '会员']" :routers="{}" @click="clickNoLink" :linkText="clicked"&gt;&lt;/emfe-crumb-c&gt;
      </pre>
      <br>
      <br>
      <emfe-crumb-c :datas="[]" :routers="{}" :linkText="clicked"></emfe-crumb-c>
      <pre>
        &lt;emfe-crumb-c :datas="[]" :routers="{}" :linkText="clicked"&gt;&lt;/emfe-crumb-c&gt;
      </pre>
      <br>
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
