<template>
  <span :class="switchName" @click="toggle">
    <span :class="innerClass">
      <slot name="open" v-if="currentValue"></slot>
      <slot name="close" v-if="!currentValue"></slot>
    </span>
  </span>
</template>
<script>
const prefixCls = 'emfe-switch';
export default {
  name: 'EmfeSwitch',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    switchName() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: !!this.currentValue,
          [`${prefixCls}-${this.size}`]: !!this.size,
        },
      ];
    },
    innerClass() {
      return `${prefixCls}-inner`;
    },
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return false;
      }
      const checked = !this.currentValue;
      this.currentValue = checked;
      this.$emit('toggle', checked);
      return this.disabled;
    },
  },
};
</script>
