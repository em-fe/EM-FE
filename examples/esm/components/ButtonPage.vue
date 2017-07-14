<template>
  <div class="button-page">
    <h3>基本示例</h3>
   <!--  <br>
    <br>
    <br>
    <emfe-button>自定义</emfe-button>
    <h3>自定义名字示例</h3> -->
    <br>
    <br>
    <br>
    <emfe-button className="default" :disabled="false">白底</emfe-button>
    <emfe-button className="default" :disabled="true">白底禁用</emfe-button>
    <pre>
      <code>
          <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>白底<span>&lt;/emfe-button&gt;</span>
      </code>
      <code>
          <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>白底禁用<span>&lt;/emfe-button&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button className="primary" :disabled="false">蓝底</emfe-button>
    <emfe-button className="primary" :disabled="true">蓝底禁用</emfe-button>
    <pre>
      <code>
          <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"primary"</span> <span>:disabled</span><span>=</span><span>"false"</span><span>&gt;</span>蓝底<span>&lt;/emfe-button&gt;</span>
      </code>
      <code>
          <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"primary"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>蓝底禁用<span>&lt;/emfe-button&gt;</span>
      </code>
    </pre>
    <br>
    <emfe-button className="default" type="hint">带有图标</emfe-button>
    <emfe-button className="default" type="site" :disabled="true">带有图标禁用</emfe-button>
    <pre>
      <code>
          <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>type</span><span>=</span><span>"hint"</span><span>&gt;</span>带有图标<span>&lt;/emfe-button&gt;</span>
      </code>
      <code>
          <span>&lt;</span><span>emfe-button</span> <span>className</span><span>=</span><span>"default"</span> <span>type</span><span>=</span><span>"site"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>带有图标禁用<span>&lt;/emfe-button&gt;</span>
      </code>
    </pre>
    <br>
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
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'button-page',
};
</script>
<style>
  pre{
    padding: 0;
    margin: 0;
  }
</style>
