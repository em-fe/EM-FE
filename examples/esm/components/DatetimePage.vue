<template>
  <div class="datetime-page">
    <h3>基本示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo1 }}</p>
    <emfe-datetime @ok="demo1ok" @cancel="demo1cancel" @close="demo1close"></emfe-datetime>
    <br>
    <br>
    <h3>固定宽度示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo2 }}</p>
    <div style="width: 300px;">
      <emfe-datetime @ok="demo2ok" @cancel="demo2cancel"></emfe-datetime>
    </div>
    <br>
    <br>
    <h3>可用筛选示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo3 }}</p>
    <div style="width: 210px;">
      <emfe-datetime @ok="demo3ok" @cancel="demo3cancel" :disabledDate="demo3opts" :disabledHours="[0, 1, 2]" :disabledMinutes="[1, 2]" :disabledSeconds="[0, 2, 44, 55]"></emfe-datetime>
    </div>
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
          <td>format</td>
          <td>日期中间连接的符号</td>
          <td>String</td>
          <td>/</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>默认文案</td>
          <td>String</td>
          <td>选择日期</td>
        </tr>
        <tr>
          <td>disabledDate</td>
          <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td>
          <td>Function</td>
          <td>-</td>
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
          <td>choice-date</td>
          <td>选中日期触发</td>
          <td>日期</td>
        </tr>
        <tr>
          <td>choice-time</td>
          <td>选中时间触发</td>
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
  name: 'DatetimePage',
  data() {
    return {
      demo1: '',
      demo2: '',
      demo3: '',
      demo3opts: (date) => {
        return date && date.valueOf() < Date.now() - 86400000;
      },
    };
  },
  methods: {
    demo1ok(date) {
      this.demo1 = date;
    },
    demo1cancel(date) {
      this.demo1 = '';
    },
    demo1close(date) {
      this.demo1 = '关闭了';
    },
    demo2ok(date) {
      this.demo2 = date;
    },
    demo2cancel(date) {
      this.demo2 = '';
    },
    demo3ok(date) {
      this.demo3 = date;
    },
    demo3cancel(date) {
      this.demo3 = '';
    },
  },
};
</script>
