<template>
  <div class="datepage">
    <h3>基本示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo1 }}</p>
    <emfe-date className="diy" @ok="demo1ok" @cancel="demo1cancel" @close="demo1close"></emfe-date>
    <br>
    <br>
    <h3>固定宽度示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo5 }}</p>
    <div style="width: 300px;">
      <emfe-date @ok="demo5ok" @cancel="demo5cancel"></emfe-date>
    </div>
    <br>
    <br>
    <h3>没有确认按钮示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo2 }}</p>
    <emfe-date :confirm="false" @ok="demo2ok" @cancel="demo2cancel"></emfe-date>
    <br>
    <br>
    <h3>直接显示示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo3 }}</p>
    <emfe-date :open="true" :confirm="false" @ok="demo3ok" @cancel="demo3cancel"></emfe-date>
    <br>
    <br>
    <br>
    <br>
    <h3>可用筛选禁用示例</h3>
    <br>
    <br>
    <p>当前日期： {{ demo4 }}</p>
    <div style="width: 210px;">
      <emfe-date :open="true" :confirm="false" @ok="demo4ok" @cancel="demo4cancel" :disabledDate="demo4opts"></emfe-date>
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
      <emfe-date v-model="demo6"></emfe-date>
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
          <td>中间连接的符号</td>
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
          <td>disabledDate</td>
          <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td>
          <td>Function</td>
          <td>-</td>
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
  name: 'EmfeDatePage',
  data() {
    return {
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '2017/08/09',
      demo4opts: (date) => {
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
    demo4ok(date) {
      this.demo4 = date;
    },
    demo4cancel(date) {
      this.demo4 = '';
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
<style>
.diy-date {
  width: 90%;
}
</style>
