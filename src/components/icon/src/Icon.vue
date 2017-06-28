<template>
  <i :class="name"></i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: String,
  },
  computed: {
    name() {
      const icon = `icon-${this.type}`;
      const newName = this.className ? ` ${this.className}` : '';
      return `${icon}${newName}`;
    },
  },
};
</script>
