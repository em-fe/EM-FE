<template>
  <div>
    <h2>EMFE 倒计时组件</h2>
    <br>
    <h3>示例</h3>
    <emfe-countdown className="demo" time="2017-10-05 10:20:30"></emfe-countdown>
    <br>
    <pre>
      &lt;emfe-countdown className="demo" time="2017-10-05 10:20:30"&gt;&lt;/emfe-countdown&gt;
    </pre>
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
          <td>time</td>
          <td>倒计时截止时间，必填，结构必须是2017-10-05 10:20:30</td>
          <td>String</td>
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
  </div>
</template>
