<template>
  <button class="emfe-button" :class="buttonName">
    <span class="emfe-button-text" :class="textName">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'EmfeButton',
  props: {
    className: String,
  },
  computed: {
    buttonName() {
      return [
        {
          [`${this.className}-button`]: !!this.className,
        },
      ];
    },
    textName() {
      return [
        {
          [`${this.className}-button-text`]: !!this.className,
        },
      ];
    },
  },
};
</script>
