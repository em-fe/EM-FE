<template>
  <div class="">
    <h3>普通用法</h3>
    <emfe-steps :datas="data1" :active="0"></emfe-steps>
    <pre>
      &lt;emfe-steps :datas="data1" :active="0"&gt;&lt;/emfe-steps&gt;
    </pre>
    <pre>
      data1: [
        {
          title: '账户信息',
          icon: 'fabu',
        },
        {
          title: '账户1信息',
          icon: 'fabu',
        },
        {
          title: '账户4信息',
          icon: 'fabu',
        },
        {
          title: '账户2信息',
          icon: 'fabu',
        }
      ],
    </pre>
    <br>
    <br>
    <br>
    <br>
    <emfe-steps :datas="data1" :active="1"></emfe-steps>
    <pre>
      &lt;emfe-steps :datas="data1" :active="1"&gt;&lt;/emfe-steps&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>自定义用法</h3>
    <emfe-steps className="demo" :datas="data1" :active="2"></emfe-steps>
    <pre>
      &lt;emfe-steps className="demo" :datas="data1" :active="2"&gt;&lt;/emfe-steps&gt;
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
          <td>datas</td>
          <td>数据。必须</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>active</td>
          <td>当前选中。必须</td>
          <td>Number</td>
          <td>-</td>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [
        {
          title: '账户信息',
          icon: 'fabu',
        },
        {
          title: '账户1信息',
          icon: 'fabu',
        },
        {
          title: '账户4信息',
          icon: 'fabu',
        },
        {
          title: '账户2信息',
          icon: 'fabu',
        }
      ],
    };
  },
};
</script>
<style>
.demo-steps {
  margin: 100px 0;
}
</style>
