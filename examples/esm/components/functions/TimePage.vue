<template>
  <div class="time-page">
    <h3>基本示例</h3>
    <br>
    <br>
    <p>当前时间： {{ demo1 }}</p>
    <emfe-time className="diy" @ok="demo1ok" @cancel="demo1cancel" @close="demo1close"></emfe-time>
    <br>
    <br>
    <h3>固定宽度示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo5 }}</p>
    <div style="width: 300px;">
      <emfe-time @ok="demo5ok" @cancel="demo5cancel"></emfe-time>
    </div>
    <br>
    <br>
    <h3>没有确认按钮示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo2 }}</p>
    <emfe-time :confirm="false" @choice="demo2choice" @cancel="demo2cancel"></emfe-time>
    <br>
    <br>
    <h3>直接显示示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo3 }}</p>
    <emfe-time :open="true" :confirm="false" @choice="demo3choice"></emfe-time>
    <br>
    <br>
    <br>
    <br>
    <h3>可用筛选示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo4 }}</p>
    <div style="width: 210px;">
      <emfe-time :open="true" :confirm="false" @choice="demo4choice" :disabledHours="[1, 7]" :disabledMinutes="[0, 22, 58]" :disabledSeconds="[3, 22, 30]"></emfe-time>
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
      <emfe-time v-model="demo6"></emfe-time>
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
  name: 'time-page',
  data() {
    return {
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '03:00:02',
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
};
</script>
