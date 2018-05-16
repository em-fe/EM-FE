<template>
  <div class="emfe-opations-page">
    <emfe-opations v-model="opationsData" :other="hasOther"></emfe-opations>
    <br>
    <pre>
      &lt;emfe-opations :opationsData="opationsData" :other="hasOther"&gt;&lt;/emfe-opations&gt;
    </pre>
    <pre>
      opationsData: ['1', '2', ''],
      hasOther: true,
    </pre>
    <br>
    <br>
    <br>
    <p>相关数据</p>
    <div v-for="dd in opationsData">{{ dd }}</div>
    <br>
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
          <td>dataPlaceholder</td>
          <td>选项默认提示</td>
          <td>String</td>
          <td>'选项</td>
        </tr>
        <tr>
          <td>otherPlaceholder</td>
          <td>其他默认提示</td>
          <td>String</td>
          <td>'其他</td>
        </tr>
        <tr>
          <td>opationsData</td>
          <td>数据</td>
          <td>Array</td>
          <td>其他</td>
        </tr>
        <tr>
          <td>other</td>
          <td>数据中是否包含其他</td>
          <td>Boolean</td>
          <td>true</td>
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
          <td>plus</td>
          <td>添加触发</td>
          <td>当前数据，当前索引</td>
        </tr>
        <tr>
          <td>minus</td>
          <td>减少触发</td>
          <td>当前数据，当前索引</td>
        </tr>
        <tr>
          <td>otherplus</td>
          <td>其他添加触发</td>
          <td>当前数据，当前索引</td>
        </tr>
        <tr>
          <td>swap</td>
          <td>交换触发</td>
          <td>当前数据，目标索引，当前索引</td>
        </tr>
        <tr>
          <td>down</td>
          <td>拖拽按下触发</td>
          <td>当前数据</td>
        </tr>
        <tr>
          <td>move</td>
          <td>拖拽移动触发</td>
          <td>当前数据</td>
        </tr>
        <tr>
          <td>up</td>
          <td>拖拽抬起触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'opationsPage',
  data() {
    return {
      opationsData: ['1', '2', ''],
      hasOther: true,
    };
  },
};
</script>
