<template>
  <div class="button-page">
    <h3>基本示例</h3>
    <br>
    <br>
    <br>
    <p>选择的是 {{ defaultStatus }}</p>
    <emfe-button-c theme="default" className="ddd" :disabled="false" @click="defaultClick">白底</emfe-button-c>
    <emfe-button-c theme="default" :disabled="true">白底禁用</emfe-button-c>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="default"</span> <span>className</span><span>=</span><span>"ddd"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>白底<span>&lt;/emfe-button-c&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="default"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>白底禁用<span>&lt;/emfe-button-c&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button-c theme="primary" className="ddd" :disabled="false">蓝底</emfe-button-c>
    <emfe-button-c theme="primary" :disabled="true">蓝底禁用</emfe-button-c>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="primary"</span> <span>className</span><span>=</span><span>"ddd"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>蓝底<span>&lt;/emfe-button-c&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="primary"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>蓝底禁用<span>&lt;/emfe-button-c&gt;</span>
      </code>
    </pre>
    <br>
    <br>
    <emfe-button-c theme="secondary" className="ddd" :disabled="false">红底</emfe-button-c>
    <emfe-button-c theme="secondary" :disabled="true">红底禁用</emfe-button-c>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="secondary"</span> <span>className</span><span>=</span><span>"ddd"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>红底<span>&lt;/emfe-button-c&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="secondary"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>红底禁用<span>&lt;/emfe-button-c&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button-c theme="default" type="hint">带有图标</emfe-button-c>
    <emfe-button-c theme="default" type="site" :disabled="true">带有图标禁用</emfe-button-c>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="default"</span> <span>className</span><span>=</span><span>"ddd"</span> <span>type</span><span>=</span><span>"hint"</span><span>&gt;</span>带有图标<span>&lt;/emfe-button-c&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button-c</span> <span> theme="default"</span> <span>type</span><span>=</span><span>"site"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>带有图标禁用<span>&lt;/emfe-button-c&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button-group-c>
      <emfe-button-c className="ddd" :group="true" index="0" statu='true'>上下布局</emfe-button-c>
      <emfe-button-c className="ddd" :group="true" index="1">左右布局</emfe-button-c>
    </emfe-button-group-c>
    <pre>
      <code>
        <span>&lt;emfe-button-group-c&gt;</span>
          <span>&lt;</span><span>emfe-button-c</span><span> :group="true"</span> <span>index</span><span>=</span><span>"0"</span> <span>statu</span><span>=</span><span>"true"</span><span>&gt;</span>上下布局<span>&-clt;/emfe-button-c&gt;</span>
        -c  <span>&lt;</span><span>emfe-button-c</span><span> :group="true"</span> <span>index</span><span>=</span>-c<span>"1"</span><span>&gt;</span>左右布局<span>&lt;/emfe-button-c&gt;</span>
        <span>&lt;/emfe-button-group-c&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button-group-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="0" statu='true'>1</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="1">20</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="2">30</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="3">40</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="4">50</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="5">60</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="6">70</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="7">80</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="8">90</emfe-button-c>
      <emfe-button-c :group="true" class="btnpage-button-w32" index="9">100</emfe-button-c>
    </emfe-button-group-c>
    <pre>
      <code>
        <span>&lt;emfe-button-group-c&gt;</span>
          <span>&lt;</span><span>emfe-button-c</span><span> :group="true"</span> <span>class</span><span>=</span><span>"btnpage-button-w32"</span> <span>index</span><span>=</span><span>"0"</span> <span>statu</span><span>=</span><span>"true"</span><span>&gt;</span>1<span>&lt;/emfe-button-c&gt;</span>
          <span>&lt;</span><span>emfe-button-c</span><span> :group="true"</span> <span>class</span><span>=</span><span>"btnpage-button-w32"</span> <span>index</span><span>=</span><span>"1"</span><span>&gt;</span>20<span>&lt;/emfe-button-c&gt;</span>
          <span>...</span>
          <span>&lt;</span><span>emfe-button-c</span><span> :group="true"</span> <span>class</span><span>=</span><span>"btnpage-button-w32"</span> <span>index</span><span>=</span><span>"9"</span><span>&gt;</span>100<span>&lt;/emfe-button-c&gt;</span>
        <span>&lt;/emfe-button-group-c&gt;</span>
      </code>
    </pre>
    <br>
    <br>
    <h3>API</h3>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="25%">属性</th>
          <th width="30%">说明</th>
          <th width="20%">类型</th>
          <th width="25%">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>theme</td>
          <td>主题颜色default，primary。</td>
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
          <td>type</td>
          <td>按钮需要添加图标时，type=“ 图标唯一的标识（如：hint） ”</td>
          <td>String</td>
          <td>默认没有</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>disabled为 ‘true’时按钮禁用，disabled为‘false’时按钮可用，</td>
          <td>Boolean</td>
          <td>默认是‘false’  可用</td>
        </tr>
        <tr>
          <td>statu</td>
          <td>再组合按钮中，有当前选中按钮需要添加  statu=“true”</td>
          <td>Boolean</td>
          <td>默认没有选中按钮</td>
        </tr>
        <tr>
          <td>index</td>
          <td>再组合按钮中，必须添加</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
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
          <td>点击触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'button-page',
  data() {
    return {
      defaultStatus: false,
    };
  },
  methods: {
    defaultClick() {
      this.defaultStatus = !this.defaultStatus;
    },
  },
};
</script>
<style>
  pre{
    padding: 0;
    margin: 0;
  }

  .table td {
    border-top: 1px solid #dcdcdc;
    padding: 10px 0;
  }

  .btnpage-button-w32 {
    width: 32px;
    height: 32px;
    padding: 0;
    text-align: center;
    line-height: 32px;
  }
</style>
