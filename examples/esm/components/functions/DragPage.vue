<template>
  <div class="drag-page">
    <h2>EMFE 拖拽组件</h2>
    <br>
    <h3>基本示例</h3>
    <br>
    <div class="drag0">
      <emfe-drag className="no1"></emfe-drag>
    </div>
    <pre>
      &lt;emfe-drag className="no1"&gt;&lt;/emfe-drag&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>限制范围示例</h3>
    <br>
    <div class="drag1">
      <emfe-drag className="no1" limit="true"></emfe-drag>
    </div>
    <pre>
      &lt;emfe-drag className="no1" limit="true"&gt;&lt;/emfe-drag&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>限制范围，元素超过范围在中间示例</h3>
    <br>
    <div class="drag1">
      <emfe-drag className="no1" limit="true" limitPosition="center"></emfe-drag>
    </div>
    <pre>
      &lt;emfe-drag className="no1" limit="true" limitPosition="center"&gt;&lt;/emfe-drag&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>某一方向的拖拽示例</h3>
    <br>
    <div class="drag1">
      <emfe-drag className="no1" direction="horizontal"></emfe-drag>
    </div>
    <pre>
      &lt;emfe-drag className="no1" direction="horizontal"&gt;&lt;/emfe-drag&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>父级是拖拽范围，里面的一个子元素是拖拽元素示例</h3>
    <p>1. 基本用法</p>
    <br>
    <emfe-drag className="parent" :dragEl="drag1">
      <div class="child-drag" ref="drag1"></div>
    </emfe-drag>
    <pre>
      &lt;emfe-drag className="parent" :dragEl="drag1"&gt;
        &lt;div class="child-drag" ref="drag1"&gt;&lt;/div&gt;
      &lt;/emfe-drag&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <p>2. 鼠标在拖拽元素中间</p>
    <br>
    <emfe-drag className="parent" :dragEl="drag2" :initialValue="-25">
      <div class="child-drag" ref="drag2"></div>
    </emfe-drag>
    <pre>
      &lt;emfe-drag className="parent" :dragEl="drag2" :initialValue="-25"&gt;
        &lt;div class="child-drag" ref="drag2"&gt;&lt;/div&gt;
      &lt;/emfe-drag&gt;
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
          <td>Event 对象，元素左边距离，元素上面距离， 向左(大于0)还是向右(小于0)， 向上(大于0)还是向下(小于0)</td>
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
  name: "DragPage",
  data() {
    return {
      drag1: [],
      drag2: [],
    };
  },
  mounted() {
    this.drag1.push(this.$refs.drag1);
    this.drag2.push(this.$refs.drag2);
  },
};
</script>
<style>
.drag1 {
  width: 400px;
  height: 100px;
  border: 1px solid #dcdcdc;
  position: relative;
}
.drag0 {
  width: 400px;
  height: 100px;
  border: 1px solid #dcdcdc;
  position: relative;
  z-index: 22;
}
.no1-drag {
  width: 50px;
  height: 50px;
  background: rgba(133, 10, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0
}
.parent-drag {
  width: 400px;
  height: 100px;
  border: 1px solid #dcdcdc;
  position: relative;
}
.child-drag {
  width: 50px;
  height: 50px;
  background: rgba(10, 133, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0
}
</style>
