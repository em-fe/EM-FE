<template>
  <div class="">
    <h3>普通用法</h3>
    <emfe-steps-b :datas="stepsData" :active="1"></emfe-steps-b>
    <pre>
      &lt;emfe-steps-b :datas="stepsData" :active="1"&gt;&lt;/emfe-steps-b&gt;
    </pre>
    <pre>
      stepsData: {
        stepsText: [
          {
            text: '验证原手机号',
          },
          {
            text: '验证新手机号',
          },
          {
            text: '修改成功',
          },
        ],
        allStepsNums: 3,
      },
    </pre>
    <br>
    <br>
    <br>
    <br>
    <emfe-steps-b :datas="stepsData" :active="2"></emfe-steps-b>
    <pre>
      &lt;emfe-steps-b :datas="stepsData" :active="2"&gt;&lt;/emfe-steps-b&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>自定义用法</h3>
    <emfe-steps-b className="demo" :datas="stepsData" :active="3"></emfe-steps-b>
    <pre>
      &lt;emfe-steps-b className="demo" :datas="stepsData" :active="3"&gt;&lt;/emfe-steps-b&gt;
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
          <td>Object</td>
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
      stepsData: {
        stepsText: [
          {
            text: '验证原手机号',
          },
          {
            text: '验证新手机号',
          },
          {
            text: '修改成功',
          },
        ],
        allStepsNums: 3,
      },
    };
  },
};
</script>
<style>
.demo-steps {
  margin: 100px 0;
}
</style>
