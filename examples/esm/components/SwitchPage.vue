<template>
  <div class="switch-page">
    <emfe-switch>
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </emfe-switch>
    <br>
    <emfe-switch size="small">
    </emfe-switch>
  <pre>
    <code>
      <span>&lt;emfe-switch&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>ON<span>&lt;/span&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>OFF<span>&lt;/span&gt;</span>
      <span>&lt;/emfe-switch&gt;</span>
    </code>
    <code>
      <span>&lt;emfe-switch</span> <span>size</span><span>=</span><span>"small"</span><span>&gt;</span>
      <span>&lt;/emfe-switch&gt;</span>
    </code>
  </pre>
    <br>
    <emfe-switch>
      <span slot="open">开启</span>
      <span slot="close">关闭</span>
    </emfe-switch>
  <pre>
    <code>
      <span>&lt;emfe-switch&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>开启<span>&lt;/span&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>关闭<span>&lt;/span&gt;</span>
      <span>&lt;/emfe-switch&gt;</span>
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
          <td>size</td>
          <td>定义size的值来改变开关的大小</td>
          <td>String</td>
          <td>默认没有</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="25%">事件</th>
          <th width="30%">说明</th>
          <th width="20%"></th>
          <th width="25%">返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>toggle</td>
          <td>
            默认开关是false（关闭）状态，<br>
            点击时会切换到true（开启）状态，<br>
            通过false/true来控制开关的状态
          </td>
          <td></td>
          <td>false/true</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'switch-page',
};
</script>
<style>
  .emfe-switch-checked.emfe-switch-small:after {
     left: 21px;
  }
  pre {
    padding: 0;
    margin: 0 !important;
  }
</style>
