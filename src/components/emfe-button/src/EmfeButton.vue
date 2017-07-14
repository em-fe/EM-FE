<template>
  <button class="emfe-button" :class="buttonName" :disabled="disabled">
   <emfe-icon v-if="type" :type="type" className="emfe-button-icon"></emfe-icon>
    <span class="emfe-button-text" :class="textName">
      <slot></slot>
    </span>
  </button>
</template>
<script>
const prefixCls = 'emfe-button';
export default {
  name: 'EmfeButton',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  computed: {
    buttonName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
        },
      ];
    },
    textName() {
      return [
        {
          [`${this.className}-button-text`]: !!this.className,
        },
      ];
    },
  },
};
</script>
