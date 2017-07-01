<template>
  <div class="emfe-menu" :class="menuName">
    <button class="emfe-menu-header">
      <emfe-icon class="emfe-menu-sidebar" type="sidebar"></emfe-icon>
    </button>
  </div>
</template>
<script>
export default {
  name: 'EmfeMenu',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    menuName() {
      return this.className ? `${this.className}-menu` : '';
    },
  },
};
</script>
<style>
</style>
