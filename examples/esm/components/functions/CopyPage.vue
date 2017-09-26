<template>
  <div class="copy-page">
    <h2>EMFE 复制组件</h2>
    <br>
    <h3>示例</h3>
    <br>
    <emfe-copy className="pay" :copyValue="copyData" @copySuccess="copySuc" @copyFail="copyFail"></emfe-copy>
    <emfe-copy className="list" text="邀请码" :copyValue="copyData" @copySuccess="copySuc" @copyFail="copyFail" read="true"></emfe-copy>
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
          <td>copyValue</td>
          <td>复制的内容。</td>
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
          <td>copySuccess</td>
          <td>复制成功触发</td>
          <td>-</td>
        </tr>
        <tr>
          <td>copyFail</td>
          <td>复制失败触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CopyPage',
  data() {
    return {
      copyData: 'http://baidu.com',
    };
  },
  methods: {
    copySuc() {
      alert('已复制好，可贴粘。');
    },
    copyFail() {
      alert('复制失败，请手动复制');
    },
  },
};
</script>
