<template>
  <div class="emfe-title-c" :class="titleName">
    <div class="emfe-title-c-panel">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = 'title-c';

export default {
  name: 'EmfeTitleC',
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
