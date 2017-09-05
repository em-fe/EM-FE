<template>
  <i :class="name" @click.stop="clickFn"></i>
</template>
<script>
const prefixCls = 'emfe-icon';

export default {
  name: 'EmfeIcon',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: String,
    click: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    name() {
      const icon = `${prefixCls}-${this.type}`;
      const newName = this.className ? ` ${this.className}-icon` : '';
      return `${icon}${newName}`;
    },
  },
  methods: {
    clickFn() {
      this.$emit('icon-click');
      this.click();
    },
  },
};
</script>
