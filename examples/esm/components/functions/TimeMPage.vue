<template>
  <div class="time-m-page">
    <h3>手机时间组件</h3>
    <emfe-time-m v-model="aaa" timeChoices="10:10:10|12:12:12"></emfe-time-m>
    <pre>
      &lt;emfe-time-m v-model="aaa" timeChoices="10:10:10|12:12:12"&gt;&lt;/emfe-time-m&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>手机时间组件</h3>
    {{ bbb }}
    <emfe-time-m v-model="bbb" exact="minute"></emfe-time-m>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <br>
    <br>
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
          <td>placeholder</td>
          <td>默认文案</td>
          <td>String</td>
          <td>选择日期</td>
        </tr>
        <tr>
          <td>confirm</td>
          <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭。需要选择日期关闭，或者点击其他地方关闭</td>
          <td>String</td>
          <td>true</td>
        </tr>
        <tr>
          <td>open</td>
          <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 confirm 和相关事件一起使用</td>
          <td>String</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabledHours</td>
          <td>设置不可选择的小时。组合禁止用户选择某个小时</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>disabledMinutes</td>
          <td>设置不可选择的分钟。组合禁止用户选择某个分钟</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>disabledSeconds</td>
          <td>设置不可选择的秒数。组合禁止用户选择某个秒数</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>exact</td>
          <td>筛选， hour ， minute ， second</td>
          <td>String</td>
          <td>second</td>
        </tr>
        <tr>
          <td>timeChoices</td>
          <td>可选时间，必须|间隔</td>
          <td>String</td>
          <td>00:00:00|23:59:59</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <h3>注册的方法</h3>
    <br>
    <br>
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
          <td>change(choice 依然能用)</td>
          <td>选中日期触发</td>
          <td>日期</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>确定触发</td>
          <td>日期</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭触发</td>
          <td>日期</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>关闭触发</td>
          <td>日期</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: '',
      bbb: '',
    };
  },
}
</script>
<style lang="scss" scoped>
</style>
