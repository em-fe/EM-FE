<template>
  <div class="button-page">
    <h3>基本示例</h3>
    <br>
    <br>
    <br>
    <emfe-button class="emfe-button-default" :disabled="false">白底</emfe-button>
    <emfe-button class="emfe-button-default" :disabled="true">白底禁用</emfe-button>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>白底<span>&lt;/emfe-button&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>白底禁用<span>&lt;/emfe-button&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button class="emfe-button-primary" :disabled="false">蓝底</emfe-button>
    <emfe-button class="emfe-button-primary" :disabled="true">蓝底禁用</emfe-button>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"primary"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>蓝底<span>&lt;/emfe-button&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"primary"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>蓝底禁用<span>&lt;/emfe-button&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button class="emfe-button-default" type="hint">带有图标</emfe-button>
    <emfe-button class="emfe-button-default" type="site" :disabled="true">带有图标禁用</emfe-button>
    <pre>
      <code>
        <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>type</span><span>=</span><span>"hint"</span><span>&gt;</span>带有图标<span>&lt;/emfe-button&gt;</span>
      </code>
      <code>
        <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>type</span><span>=</span><span>"site"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>带有图标禁用<span>&lt;/emfe-button&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button-group>
      <emfe-button index="0" statu='true'>上下布局</emfe-button>
      <emfe-button index="1">左右布局</emfe-button>
    </emfe-button-group>
    <pre>
      <code>
        <span>&lt;emfe-button-group&gt;</span>
          <span>&lt;</span><span>emfe-button</span> <span>index</span><span>=</span><span>"0"</span> <span>statu</span><span>=</span><span>"true"</span><span>&gt;</span>上下布局<span>&lt;/emfe-button&gt;</span>
          <span>&lt;</span><span>emfe-button</span> <span>index</span><span>=</span><span>"1"</span><span>&gt;</span>左右布局<span>&lt;/emfe-button&gt;</span>
        <span>&lt;emfe-button-group&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button-group>
      <emfe-button class="emfe-button-w32" index="0" statu='true'>10</emfe-button>
      <emfe-button class="emfe-button-w32" index="1">20</emfe-button>
      <emfe-button class="emfe-button-w32" index="2">30</emfe-button>
      <emfe-button class="emfe-button-w32" index="3">40</emfe-button>
      <emfe-button class="emfe-button-w32" index="4">50</emfe-button>
      <emfe-button class="emfe-button-w32" index="5">60</emfe-button>
      <emfe-button class="emfe-button-w32" index="6">70</emfe-button>
      <emfe-button class="emfe-button-w32" index="7">80</emfe-button>
      <emfe-button class="emfe-button-w32" index="8">90</emfe-button>
      <emfe-button class="emfe-button-w32" index="9">100</emfe-button>
    </emfe-button-group>
    <pre>
      <code>
        <span>&lt;emfe-button-group&gt;</span>
          <span>&lt;</span><span>emfe-button</span> <span>index</span><span>=</span><span>"0"</span> <span>statu</span><span>=</span><span>"true"</span><span>&gt;</span>10<span>&lt;/emfe-button&gt;</span>
          <span>&lt;</span><span>emfe-button</span> <span>index</span><span>=</span><span>"1"</span><span>&gt;</span>20<span>&lt;/emfe-button&gt;</span>
          <span>...</span>
          <span>&lt;</span><span>emfe-button</span> <span>index</span><span>=</span><span>"9"</span><span>&gt;</span>100<span>&lt;/emfe-button&gt;</span>
        <span>&lt;emfe-button-group&gt;</span>
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
  </div>
</template>
<script>
export default {
  name: 'button-page',
  methods: {
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
</style>
