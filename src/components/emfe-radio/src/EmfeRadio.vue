<template>
  <label :class="{'emfe-radio-checked': status}" class="emfe-radio clearfix">
    <input type="radio" @change="change" :name="name" :disabled="disabled" class="emfe-radio-input">
    <span class="emfe-radio-text"><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'EmfeRadio',
    data() {
      return {
        status: false,
      };
    },
    props: {
      index: {
        tyep: String,
        required: true,
      },
      name: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
    },
    methods: {
      change() {
        this.$parent.$children.forEach((element) => {
          element.status = this.index === element.index;
        });
      },
    },
  };
</script>
