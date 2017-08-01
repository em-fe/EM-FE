<template>
  <textarea class="emfe-textarea" :class="textereaName" @input="change">{{ value }}</textarea>
</template>
<script>
export default {
  name: 'EmfeTextarea',
  props: {
    className: {
      type: String,
      default: '',
    },
    value: String,
  },
  computed: {
    textereaName() {
      return {
        [`${this.className}-textarea`]: !!this.className,
      };
    },
  },
  methods: {
    change(val) {
      this.$emit('input', val.target.value);
    },
  },
};
</script>
