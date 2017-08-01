<template>
  <div class="numberpage">
    <h2>EMFE 数字组件</h2>
    <br>
    <h3>基本示例</h3>
    <br>
    <div>当前值： {{ val }}， 之前值： {{ old }}</div>
    <pre>
&lt;emfe-number @change="change" v-model="val"&gt;&lt;/emfe-number&gt;
    </pre>
    <emfe-number @change="change" v-model="val"></emfe-number>
    <br>
    <h3>自定义单位示例</h3>
    <pre>
&lt;emfe-number unit="%"&gt;&lt;/emfe-number&gt;
    </pre>
    <br>
    <emfe-number unit="%"></emfe-number>
    <br>
    <h3>自定义最大最小示例</h3>
    <pre>
&lt;emfe-number :min="-1" :max="10"&gt;&lt;/emfe-number&gt;
    </pre>
    <br>
    <emfe-number :min="-1" :max="10"></emfe-number>
    <br>
    <h3>可编辑示例</h3>
    <p>当前值： {{ edit }}</p>
    <pre>
&lt;emfe-number :disabled="false" v-model="edit"&gt;&lt;/emfe-number&gt;
    </pre>
    <br>
    <emfe-number :disabled="false" v-model="edit"></emfe-number>
    <br>
    <h3>自定义步伐示例</h3>
    <pre>
&lt;emfe-number :step="0.22"&gt;&lt;/emfe-number&gt;
    </pre>
    <br>
    <emfe-number :step="0.22"></emfe-number>
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
          <td>value</td>
          <td>当前值，可以使用 v-model 双向绑定数据</td>
          <td>String</td>
          <td>0</td>
        </tr>
        <tr>
          <td>unit</td>
          <td>自定义单位</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>max</td>
          <td>最大值</td>
          <td>Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>min</td>
          <td>最小值</td>
          <td>Number</td>
          <td>-Infinity</td>
        </tr>
        <tr>
          <td>step</td>
          <td>每次改变的步伐，可以是小数</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>可否自定义数值。 true -> 不可以</td>
          <td>Boolean</td>
          <td>true</td>
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
          <td>change</td>
          <td>数值改变时的回调，返回当前值</td>
          <td>当前数值, 之前数值</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: 4,
      old: -1,
      edit: 76,
    };
  },
  methods: {
    change(val, oldval) {
      this.old = oldval;
    },
  },
};
</script>
