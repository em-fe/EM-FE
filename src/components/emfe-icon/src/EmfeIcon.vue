<template>
  <i :class="name"></i>
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
  },
  computed: {
    name() {
      const icon = `${prefixCls}-${this.type}`;
      const newName = this.className ? ` ${this.className}` : '';
      return `${icon}${newName}`;
    },
  },
};
</script>
