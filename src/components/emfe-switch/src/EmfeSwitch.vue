<template>
  <span :class="switchName" :disabled="disabled" @click="toggle">
    <span :class="innerClass" class="emfe-switch-inner">
      <slot name="open" v-if="currentValue"></slot>
      <slot name="close" v-if="!currentValue"></slot>
    </span>
  </span>
</template>
<script>
const prefixCls = 'switch';
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
    value: {
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
        `emfe-${prefixCls}`,
        {
          [`${this.className}-${prefixCls}`]: !!this.className,
          [`${prefixCls}-checked`]: !!this.currentValue,
          [`${prefixCls}-disabled`]: !!this.disabled,
        },
      ];
    },
    innerClass() {
      return [
        {
          [`${this.className}-${prefixCls}-inner`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        const checked = !this.currentValue;
        this.currentValue = checked;
        this.$emit('toggle', checked);
      }
    },
  },
};
</script>
