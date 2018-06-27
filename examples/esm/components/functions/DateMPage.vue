<template>
  <div class="date-m-page">
    <h3>手机日期组件</h3>
    {{ aaa }}
    <emfe-date-m v-model="aaa"></emfe-date-m>
    <br>
    <br>
    <h3>手机限定可选范围组件</h3>
    {{ aaa }}
    <emfe-date-m v-model="aaa" :enabledDate="['2018/12/18', '2019/02/15']"></emfe-date-m>
    <br>
    <br>
    <h3>固定宽度示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo5 }}</p>
    <div style="width: 300px;">
      <emfe-date-m @ok="demo5ok" @cancel="demo5cancel"></emfe-date-m>
    </div>
    <br>
    <br>
    <h3>没有确认按钮示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo2 }}</p>
    <emfe-date-m :confirm="false" @choice="demo2choice" @cancel="demo2cancel"></emfe-date-m>
    <br>
    <br>
    <h3>直接显示示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo3 }}</p>
    <emfe-date-m :open="true" :confirm="false" @choice="demo3choice"></emfe-date-m>
    <br>
    <br>
    <br>
    <br>
    <h3>可用筛选示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo4 }}</p>
    <div style="width: 210px;">
      <emfe-date-m :open="true" :confirm="false" @choice="demo4choice" :disabledYears="[1920, 1999]" :disabledMonths="[0, 2, 3]" :disabledDays="[3, 22, 30]"></emfe-date-m>
    </div>
    <br>
    <br>
    <br>
    <br>
    <h3>双向绑定示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo6 }}</p>
    <div style="width: 210px;">
      <emfe-date-m v-model="demo6"></emfe-date-m>
    </div>
    <br>
    <br>
    <h3>一周之内可选</h3>
    <br>
    <br>
    <p>当前日之内可选期： {{ demo2 }}</p>
    <emfe-date-m :weekChoices="[1,2,3]"></emfe-date-m>
    <br>
    <br>
    <br>
    <br>
    <h3>起始设置示例</h3>
    <br>
    <br>
    <emfe-button @click="changeStartEnd">起始设置示例</emfe-button>
    <emfe-date-m :yearStart="yearStart" :monthStart="monthStart" :dayStart="dayStart" :yearEnd="yearEnd" :monthEnd="monthEnd" :dayEnd="dayEnd"></emfe-date-m>
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
          <td>monthStart</td>
          <td>开始月数</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>monthEnd</td>
          <td>结束月数</td>
          <td>Number</td>
          <td>13</td>
        </tr>
        <tr>
          <td>dayStart</td>
          <td>开始天数</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>dayEnd</td>
          <td>结束天数</td>
          <td>Number</td>
          <td>13</td>
        </tr>
        <tr>
          <td>format</td>
          <td>日期间隔格式</td>
          <td>String</td>
          <td>/</td>
        </tr>
        <tr>
          <td>exact</td>
          <td>筛选， hour ， minute ， second</td>
          <td>String</td>
          <td>second</td>
        </tr>
        <tr>
          <td>weekChoices</td>
          <td>一周之内可选</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>enabledDate</td>
          <td>限定可选范围, 必须是 2019/02/15 格式</td>
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
      yearStart: 1,
      monthStart: 1,
      dayStart: 1,
      yearEnd: 2020,
      monthEnd: 13,
      dayEnd: 31,
      aaa: '',
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '2017/02/02',
    };
  },
  methods: {
    changeStartEnd() {
      this.yearStart = 1999;
      this.monthStart = 3;
      this.dayStart = 12;
      this.yearEnd = 2031;
      this.monthEnd = 8;
      this.dayEnd = 19;
    },
    demo1ok(date) {
      this.demo1 = date;
    },
    demo1cancel(date) {
      this.demo1 = '';
    },
    demo1close(date) {
      this.demo1 = '关闭了';
    },
    demo2choice(date) {
      this.demo2 = date;
    },
    demo2cancel(date) {
      this.demo2 = '';
    },
    demo3choice(date) {
      this.demo3 = date;
    },
    demo4choice(date) {
      this.demo4 = date;
    },
    demo5ok(date) {
      this.demo5 = date;
    },
    demo5cancel(date) {
      this.demo5 = '';
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
