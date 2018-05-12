<template>
  <textarea class="emfe-textarea" :class="textereaName" @input="changeFn" ref="textarea" @blur="blurFn" @focus="focusFn">{{ value }}</textarea>
</template>
<script>
export default {
  name: 'EmfeTextarea',
  props: {
    className: {
      type: String,
      default: '',
    },
    change: {
      type: Function,
      default: () => {},
    },
    blur: {
      type: Function,
      default: () => {},
    },
    focus: {
      type: Function,
      default: () => {},
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
    changeFn(val) {
      this.$emit('input', val.target.value.trim());
      this.$emit('change', val.target.value.trim());
      this.change(val.target.value.trim());
    },
    blurFn(val) {
      this.$emit('blur', val.target.value);
      this.blur();
    },
    focusFn(val) {
      this.$emit('focus', val.target.value);
      this.focus();
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.$refs.textarea.value = val;
      }
    },
  },
};
</script>
