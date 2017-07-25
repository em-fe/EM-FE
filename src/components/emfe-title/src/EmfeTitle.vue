<template>
  <div class="emfe-title" :class="titleName">
    <div class="emfe-title-panel">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = 'title';

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
          [`${this.className}-${prefixCls}`]: !!this.className,
        },
      ];
    },
  },
};
</script>
