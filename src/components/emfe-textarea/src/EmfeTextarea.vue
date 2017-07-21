<template>
  <div class="emfe-textarea">
    <textarea class="emfe-textarea-wrap" :class="textereaName"></textarea>
  </div>
</template>
<script>
const prefixCls = 'emfe-textarea';
export default {
  name: 'EmfeTextarea',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    textereaName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
        },
      ];
    },
  },
};
</script>
