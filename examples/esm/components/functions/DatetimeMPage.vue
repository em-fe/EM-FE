<template>
  <div class="datetime-page">
    <h3>基本示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo1 }}</p>
    <emfe-datetime-m v-model="demo1"></emfe-datetime-m>
    <pre>
      &lt;emfe-datetime-m v-model="demo1"&gt;&lt;/emfe-datetime-m&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>当前日期： {{ demo2 }}</p>
    <emfe-datetime-m @ok="demo2ok" @cancel="demo2cancel" @close="demo2close"></emfe-datetime-m>
    <pre>
      &lt;emfe-datetime-m @ok="demo2ok" @cancel="demo2cancel" @close="demo2close"&gt;&lt;/emfe-datetime-m&gt;
    </pre>
    <br>
    <br>
    <h3>固定宽度示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo2 }}</p>
    <div style="width: 300px;">
      <emfe-datetime-m @ok="demo2ok" @cancel="demo2cancel"></emfe-datetime-m>
    </div>
    <pre>
      &lt;div style="width: 300px;"&gt;
        &lt;emfe-datetime-m @ok="demo2ok" @cancel="demo2cancel"&gt;&lt;/emfe-datetime-m&gt;
      &lt;/div&gt;
    </pre>
    <br>
    <br>
    <h3>筛选禁用示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo3 }}</p>
    <div style="width: 210px;">
      <emfe-datetime-m @ok="demo3ok" @cancel="demo3cancel" :disabledDate="demo3opts" :disabledHours="[0, 1, 2]" :disabledMinutes="[1, 2]" :disabledSeconds="[0, 2, 44, 55]" :disabledYears="[1920, 1999]" :disabledMonths="[0, 2, 3]" :disabledDays="[3, 22, 30]"></emfe-datetime-m>
    </div>
    <pre>
      &lt;div style="width: 210px;"&gt;
        &lt;emfe-datetime-m @ok="demo3ok" @cancel="demo3cancel" :disabledDate="demo3opts" :disabledHours="[0, 1, 2]" :disabledMinutes="[1, 2]" :disabledSeconds="[0, 2, 44, 55]" :disabledYears="[1920, 1999]" :disabledMonths="[0, 2, 3]" :disabledDays="[3, 22, 30]"&gt;&lt;/emfe-datetime-m&gt;
      &lt;/div&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>双向绑定示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo4 }}</p>
    <emfe-datetime-m v-model="demo4"></emfe-datetime-m>
    <pre>
      &lt;emfe-datetime-m v-model="demo4"&gt;&lt;/emfe-datetime-m&gt;
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
          <td>yearStart</td>
          <td>开始天数</td>
          <td>Number</td>
          <td>1920</td>
        </tr>
        <tr>
          <td>yearEnd</td>
          <td>结束天数</td>
          <td>Number</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>disabledYears</td>
          <td>设置不可选择的年。组合禁止用户选择某个年</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>disabledMonths</td>
          <td>设置不可选择的月。组合禁止用户选择某个月</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>disabledDays</td>
          <td>设置不可选择的天。组合禁止用户选择某个天</td>
          <td>Array</td>
          <td>[]</td>
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
          <td>choice</td>
          <td>选中触发</td>
          <td>日期时间</td>
        </tr>
        <tr>
          <td>choice-date</td>
          <td>选中日期触发</td>
          <td>日期时间</td>
        </tr>
        <tr>
          <td>choice-time</td>
          <td>选中时间触发</td>
          <td>日期时间</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>确定触发</td>
          <td>日期时间</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭触发</td>
          <td>日期时间</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>关闭触发</td>
          <td>日期时间</td>
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
      demo4: '2017/08/09 01:20:28',
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
    demo2close(date) {
      this.demo2 = '关闭了demo2';
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
