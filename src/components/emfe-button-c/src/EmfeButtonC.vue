<template>
  <button :disabled="disabled" @click.stop="change" :class="buttonName">
   <emfe-icon v-if="type" :type="type" class="emfe-button-icon"></emfe-icon>
    <span class="emfe-button-c-text" :class="textName">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import _ from '../../../tools/lodash';

export default {
  name: 'EmfeButtonC',
  data() {
    return {
      status: false,
    };
  },
  props: {
    theme: {
      validator(value) {
        return _.has(value, ['default', 'primary']);
      },
    },
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    index: {
      tyep: String,
    },
    statu: {
      tyep: Boolean,
    },
    group: Boolean,
  },
  created() {
    this.status = this.statu;
  },
  computed: {
    buttonName() {
      const group = this.group ? '-group-button' : '';
      const btnName = this.className ? group : '-button';
      return [
        `emfe-button-c${group}`,
        {
          [`emfe-button-c-${this.theme}`]: !!this.theme,
          [`${this.className}-button-c${btnName}`]: !!this.className,
          [`emfe-button-c${group}-on`]: !!this.status,
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
  methods: {
    change() {
      const index = this.index ? this.index : 0;
      this.$parent.$children.forEach((element) => {
        if (this.index) {
          element.status = this.index === element.index;
        }
      });
      this.$emit('click', index);
    },
  },
  watch: {
    statu(val, oldVal) {
      if (val !== oldVal) {
        this.status = val;
      }
    },
  },
};
</script>
