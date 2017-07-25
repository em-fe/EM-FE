<template>
  <button class="emfe-button" :disabled="disabled" @click.stop="change" :class="buttonName">
   <emfe-icon v-if="type" :type="type" class="emfe-button-icon"></emfe-icon>
    <span class="emfe-button-text" :class="textName">
      <slot></slot>
    </span>
  </button>
</template>
<script>
const prefixCls = 'button';
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
    statu: {
      tyep: Boolean,
    },
  },
  created() {
    this.status = this.statu;
  },
  computed: {
    buttonName() {
      return [
        {
          [`${this.className}-${prefixCls}`]: !!this.className,
          [`${prefixCls}-on`]: !!this.status,
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
      const index = this.index ? this.index : 0;
      this.$parent.$children.forEach((element) => {
        if (this.index) {
          element.status = this.index === element.index;
        }
      });
      this.$emit('click', index);
    },
  },
};
</script>
