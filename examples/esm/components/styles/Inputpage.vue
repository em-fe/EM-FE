<template>
  <div class="inputpage">
  	<emfe-input placeholder="请输入文a字！" className="add" v-model="value">
    </emfe-input>
    <div>支持v-model： {{value}}</div>
    <pre>
      &lt;emfe-input placeholder="请输入文a字！" className="add" v-model="value"&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br>
    <emfe-input :disabled="true" placeholder="请输入文字！">
    </emfe-input>
    <pre>
      &lt;emfe-input :disabled="true" placeholder="请输入文字！"&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br>
    <emfe-input :autofocus="true" placeholder="请输入文字！">
    </emfe-input>
    <pre>
      &lt;emfe-input :autofocus="true" placeholder="请输入文字！"&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br>
    <emfe-input :errOk="true"  className="add" placeholder="请输入文字！">
      <div slot="error">这是一个错误信息</div>
    </emfe-input>
    <pre>
      &lt;emfe-input :errOk="true"  className="add" placeholder="请输入文字！"&gt;
        &lt;div slot="error"&gt;这是一个错误信息&lt;/div&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br>
    <emfe-input :iconOk="true" iconType="site" placeholder="请输入文字！">
    </emfe-input>
    <pre>
      &lt;emfe-input :iconOk="true" iconType="site" placeholder="请输入文字！"&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br>
    <emfe-input :iconOk="true" :errOk="true" iconType="qr" placeholder="请输入文字！">
    	<div slot="error">这是一个错误信息</div>
    </emfe-input>
    <pre>
      &lt;emfe-input :iconOk="true" :errOk="true" iconType="qr" placeholder="请输入文字！"&gt;
      	&lt;div slot="error"&gt;这是一个错误信息&lt;/div&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br>
    <emfe-input type="number" placeholder="请输入数字！" classAdd="add">
    </emfe-input>
    <pre>
      &lt;emfe-input type="number" placeholder="请输入数字！" classAdd="add"&gt;
      &lt;/emfe-input&gt;
    </pre>
    <br><br>
    <br><br>
    <br><br>
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
          <td>className</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>默认为 ''</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>placeholder的值</td>
          <td>String</td>
          <td>默认为 ''</td>
        </tr>
        <tr>
          <td>type</td>
          <td>type是定义输入框类型</td>
          <td>String</td>
          <td>默认为 'text'</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>disabled为 ‘true’时input输入框禁用，disabled为‘false’时input输入框可用</td>
          <td>Boolead,String</td>
          <td>默认为'fasle'</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>autofocus为 ‘true’时input输入框自动获取输入框，</td>
          <td>Boolead,String</td>
          <td>默认为'fasle'</td>
        </tr>
        <tr>
          <td>iconOk</td>
          <td>iconOk为 ‘true’时input输入框前面带有icon图标</td>
          <td>Boolead,String</td>
          <td>默认为'fasle'</td>
        </tr>
        <tr>
          <td>iconType</td>
          <td>iconType 是icon图标的类型</td>
          <td>String</td>
          <td>默认为''</td>
        </tr>
        <tr>
          <td>errOk</td>
          <td>errOk 是判断输入是否正确，为'true'时，边框为红色，提示错误信息</td>
          <td>Boolead,String</td>
          <td>默认为'false'</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="33%">事件名</th>
          <th width="33%">说明</th>
          <th width="33%">返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>input变化触发</td>
          <td>input的val值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "inputpage",
  data() {
    return {
      value: '我是内容',
    };
  },
  methods: {
    change(val) {
      console.log(val);
    },
  },
};
</script>
