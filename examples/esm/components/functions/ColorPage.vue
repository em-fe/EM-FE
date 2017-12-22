<template>
  <div id="colorpage">
    <h3>基本示例</h3>
    选中的颜色是：{{ color }} {{ status }}
    <br>
    <br>
    <emfe-color className="my" v-model="color"></emfe-color>
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
          <td>limit</td>
          <td>是否限制范围</td>
          <td>String | Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>limitPosition</td>
          <td>限制范围时候元素的位置。center(居中) | top(居上)</td>
          <td>String</td>
          <td>top</td>
        </tr>
        <tr>
          <td>dragEl</td>
          <td>设定某一个拖拽元素</td>
          <td>Array&lt;Element&gt;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>initialValue</td>
          <td>拖拽元素初始值</td>
          <td>String | Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>某一方向的拖拽。可选值：vertical, horizontal, all</td>
          <td>String</td>
          <td>all</td>
        </tr>
        <tr>
          <td>borderSize</td>
          <td>拖拽元素的边框 | 描边</td>
          <td>Number</td>
          <td>0</td>
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
          <td>beforeDrag</td>
          <td>拖拽之前触发</td>
          <td>Event 对象</td>
        </tr>
        <tr>
          <td>drag</td>
          <td>拖拽时触发</td>
          <td>Event 对象，元素左边距离，元素上面距离</td>
        </tr>
        <tr>
          <td>afterDrag</td>
          <td>拖拽之后触发</td>
          <td>Event 对象</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'colorpage',
  data() {
    return {
      color: '00ff00',
      status: '',
    };
  },
  methods: {
    ok(color) {
      this.color = color;
      this.status = '确定';
    },
    cancel() {
      this.status = '取消';
    },
    change(color) {
      this.ok(color);
      this.status = '移动中';
    },
  },
};
</script>
<style>
.color-page-btn {
  width: 100px;
  height: 100px;
  display: block;
  border: 1px solid #000;
}
</style>
