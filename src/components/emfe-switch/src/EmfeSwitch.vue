<template>
  <span :class="switchName" :disabled="disabled" @click="toggle">
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
    disabled: {
      type: Boolean,
      default: false,
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
          [`${prefixCls}-${this.className}`]: !!this.className,
          [`${prefixCls}-checked`]: !!this.currentValue,
          [`${prefixCls}-disabled`]: !!this.disabled,
        },
      ];
    },
    innerClass() {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-${this.className}-inner`]: !!this.className,
        },
      ];
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
    },
  },
};
</script>
