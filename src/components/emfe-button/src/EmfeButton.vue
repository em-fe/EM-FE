<template>
  <button class="emfe-button" :disabled="disabled" @click="change" :class="buttonName">
   <emfe-icon v-if="type" :type="type" class="emfe-button-icon"></emfe-icon>
    <span class="emfe-button-text" :class="textName">
      <slot></slot>
    </span>
  </button>
</template>
<script>
const prefixCls = 'emfe-button';
export default {
  name: 'EmfeButton',
  data() {
    return {
      status: false,
    };
  },
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
    index: {
      tyep: String,
    },
  },
  computed: {
    buttonName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
          [`${prefixCls}-button-on`]: !!this.status,
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
  methods: {
    change() {
      this.$parent.$children.forEach((element) => {
        element.status = this.index === element.index;
      });
    },
  },
};
</script>
