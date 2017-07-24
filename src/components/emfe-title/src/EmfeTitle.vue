<template>
  <div class="emfe-title" :class="titleName">
    <div class="emfe-title-panel">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = 'emfe-title';

export default {
  name: 'EmfeTitle',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    titleName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
        },
      ];
    },
  },
};
</script>
