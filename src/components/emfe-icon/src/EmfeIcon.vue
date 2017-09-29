<template>
  <i :class="name" @click="clickFn($event)"></i>
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
    stop: {
      type: Boolean,
      default: true,
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
    clickFn(event) {
      this.$emit('icon-click');
      this.click();
      if (this.stop && event) {
        event.stopPropagation();
      }
    },
  },
};
</script>
