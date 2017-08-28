<template>
  <textarea class="emfe-textarea" :class="textereaName" @input="change" ref="textarea" @blur="blur">{{ value }}</textarea>
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
    blur(val) {
      this.$emit('blur', val.target.value);
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
