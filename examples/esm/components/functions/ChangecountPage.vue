<template>
  <div class="changecount">
    <h3>基本用法</h3>
    <br>
    当前累计：<emfe-changecount :count="count" style="display: inline-block"></emfe-changecount>次
    <br>
    <br>
    <emfe-link :routers="{}" @click="add">增加点击</emfe-link>
    <emfe-link :routers="{}" @click="reduce">减少点击</emfe-link>
    <br>
    <br>
    <pre>
&lt;emfe-changecount :count="count"&gt;&lt;/emfe-changecount&gt;
    </pre>
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
          <td>count</td>
          <td>内容</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>time</td>
          <td>运动时间</td>
          <td>Number</td>
          <td>0.3</td>
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
  name: 'changecountPage',
  data() {
    return {
      count: Math.random() * 10000 >> 0,
    };
  },
  methods: {
    add() {
      this.count = Math.random() * 100 >> 0;
    },
    reduce() {
      this.count = Math.random() * 1000 >> 0;
    },
  },
};
</script>
