<template>
  <i :class="name" @click.stop="click"></i>
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
  methods: {
    click() {
      this.$emit('icon-click');
    },
  },
};
</script>
