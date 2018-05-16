<template>
  <div class="switch-page">
  <h3>基本用法</h3>
  <emfe-switch className="aaa" :value="status" @toggle="toggle">
    <span class="aaa" slot="open">ON</span>
    <span class="aaa" slot="close">OFF</span>
  </emfe-switch>
  当前状态 status: {{ status }}
  <br>
  <pre>
    &lt;emfe-switch className="aaa" :value="status" @toggle="toggle"&gt;
      &lt;span class="aaa" slot="open"&gt;ON&lt;/span&gt;
      &lt;span class="aaa" slot="close"&gt;OFF&lt;/span&gt;
    &lt;/emfe-switch&gt;
  </pre>
    <br>
    <emfe-switch className="aaa" value="true">
      <span class="aaa" slot="open">ON</span>
      <span class="aaa" slot="close">OFF</span>
    </emfe-switch>
    <pre>
    <code>
      <span>&lt;emfe-switch</span> <span>value</span><span>=</span><span>'true'</span><span>&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>ON<span>&lt;/span&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>OFF<span>&lt;/span&gt;</span>
      <span>&lt;/emfe-switch&gt;</span>
    </code>
  </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>禁用</h3>
    <emfe-switch :disabled="true">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </emfe-switch>
  <pre>
    <code>
      <span>&lt;emfe-switch</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>ON<span>&lt;/span&gt;</span>
        <span>&lt;span</span> <span>slot</span><span>=</span><span>"open"</span><span>&gt;</span>OFF<span>&lt;/span&gt;</span>
      <span>&lt;/emfe-switch&gt;</span>
    </code>
  </pre>
  <br>
  <br>
  <br>
  <h3>拦截器</h3>
  <emfe-switch className="aaa" :interceptor="interceptor" @toggle="interceptorChange"></emfe-switch>
  <pre>
    switch代码
    &lt;emfe-switch className="aaa" :interceptor="interceptor" @toggle="interceptorChange"&gt;
      &lt;span class="aaa" slot="open"&gt;ON&lt;/span&gt;
      &lt;span class="aaa" slot="close"&gt;OFF&lt;/span&gt;
    &lt;/emfe-switch&gt;
  </pre>
  <br>
  <pre>
    提示框代码
    &lt;emfe-modal :show="modal" title="拦截一下" @close="modalCancel" @cancel="modalCancel" @ok="modalOk"&gt;
      &lt;div slot="modal-main"&gt;吃了么？&lt;/div&gt;
    &lt;/emfe-modal&gt;
  </pre>
  <br>
  <br>
  <br>
  <br>
  <br>
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
          <td>disabled</td>
          <td>禁止”状态添加disabled</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>value</td>
          <td>初始状态为开启时，添加value="true"</td>
          <td>String</td>
          <td>-</td>
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
          <td>change(toggle 依然能用)</td>
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
    <emfe-modal :show="modal" title="拦截一下" @close="modalCancel" @cancel="modalCancel" @ok="modalOk">
      <div slot="modal-main">吃了么？</div>
    </emfe-modal>
  </div>
</template>
<script>
export default {
  name: 'switch-page',
  data() {
    return {
      interceptor: false,
      modal: false,
      status: false,
    };
  },
  methods: {
    toggle(status) {
      this.status = status;
    },
    interceptorChange(status) {
      this.openModal();
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    modalCancel() {
      this.interceptor = false;
      this.closeModal();
    },
    modalOk() {
      this.interceptor = true;
      this.closeModal();

      setTimeout(() => {
        this.interceptor = false;
      }, 201);
    },
  },
};
</script>
<style>
  pre {
    padding: 0;
    margin: 0 !important;
  }
</style>
