<template>
  <div class="transition-page">
    <button @click="showBlock">点击有惊喜</button>
    <emfe-transition name="fade">
      <ul v-show="blockStatus">
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
      </ul>
    </emfe-transition>
    <br>
    <button @click="showGradual">点击有惊喜</button>
    <emfe-transition name="gradual">
      <ul v-show="gradualStatus">
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
        <li>显示出来喽</li>
      </ul>
    </emfe-transition>
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
          <td>name</td>
          <td>动画的名称。内置 fade(淡入淡出) | gradual(下拉收起)</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>mode</td>
          <td>过渡模式。in-out：新元素先过渡进入(transition in)，过渡完成之后，当前元素过渡离开(transition out)。out-in：当前元素先过渡离开(transition out)，过渡完成之后，新元素过渡进入(transition in)。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>动画的类型。transitionend | animationend</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>2.2.0 新增 过度时间（以毫秒为单位）</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TransitionPage",
  data() {
    return {
      blockStatus: false,
      gradualStatus: false,
    };
  },
  methods: {
    showBlock() {
      this.blockStatus = !this.blockStatus;
    },
    showGradual() {
      this.gradualStatus = !this.gradualStatus;
    },
  },
};
</script>
<style scoped>
ul {
  background: rgba(123, 0, 9, 0.3);
}
</style>
