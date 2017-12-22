<template>
  <div class="emfe-panel" :class="classList">
    <div class="emfe-panel-box" :class="boxName" v-for='(item, index) in data'>
      <div class="emfe-panel-box-left" :class="leftName">{{item.text}}</div>
      <div class="emfe-panel-box-right" :class="rightName">
        <span class="emfe-panel-box-right-text">{{item.cont}}</span>
        <emfe-icon v-if="!!item.type || !!type" :type="item.type || type" className="emfe-panel-box" @icon-click="iconClick(index, item)"></emfe-icon>
        <emfe-switch class="emfe-panel-box-switch" :value="item.switchState || item.switchType || switchState || switchType" v-if="item.switchOk || switchOk" :change="toggle.bind(this, index, item)">
          <span slot="open">ON</span>
          <span slot="close">OFF</span>
        </emfe-switch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'panel',
  props: {
    className: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    type: {
      type: String,
      default: '',
    },
    switchOk: {
      type: [String, Boolean],
      default: false,
    },
    switchType: {
      type: Boolean,
      default: false,
    },
    switchState: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle(index, item, status) {
      this.$emit('switch-toogle', status, index, item);
      this.$emit('change', status, index, item);
    },
    iconClick(index, item) {
      this.$emit('icon-click', index, item);
      this.$emit('click', index, item);
    },
  },
  computed: {
    classList() {
      return [
        {
          [`${this.className}-panel`]: !!this.className,
        },
      ];
    },
    boxName() {
      return [
        {
          [`${this.className}-panel-box`]: !!this.className,
        },
      ];
    },
    leftName() {
      return [
        {
          [`${this.className}-panel-box-left`]: !!this.className,
        },
      ];
    },
    rightName() {
      return [
        {
          [`${this.className}-panel-box-right`]: !!this.className,
        },
      ];
    },
  },
};
</script>
