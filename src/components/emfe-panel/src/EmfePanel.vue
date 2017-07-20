<template>
  <div class="emfe-panel" :class="classList">
    <div class="emfe-panel-box" :class="boxName" v-for='(key, value) in data'>
      <div class="emfe-panel-box-left" :class="leftName">{{value}}</div>
      <div class="emfe-panel-box-right" :class="rightName">{{key.cont}}<emfe-icon v-if="!!type" :type="type" className="emfe-panel-box" @icon-click="iconClick"></emfe-icon>
      <emfe-switch v-if="!!switchType&&key.switchOk" @toggle="toggle">
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
      type: Object,
      default() {
        return {};
      },
    },
    type: {
      type: String,
      default: '',
    },
    switchType: {
      type: [String, Boolean],
      default: false,
    },
  },
  methods: {
    toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick() {
      this.$emit('icon-click');
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

