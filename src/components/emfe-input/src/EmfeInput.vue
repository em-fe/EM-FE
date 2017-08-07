<template>
  <div class="emfe-input" :class="addClass">
    <div :class="[classList]" >
      <emfe-icon v-if="iconOk" :type="iconType" className="emfe-input-box-icon-el"></emfe-icon>
      <input :type="type" v-bind="$props" :class='addInput' :value="currentValue" v-on:input="change" class="emfe-input-box-input">
    </div>
    <div class="emfe-input-box-text" :class="addErrorText" v-if="errOk"><slot name="error"></slot></div>
  </div>
</template>
<script>

const prefixCls = 'emfe-input-box';
const error = 'error';

export default {
  name: 'input',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: [Boolean],
      default: false,
    },
    autofocus: {
      type: [Boolean],
      default: false,
    },
    errOk: {
      type: [Boolean],
      default: false,
    },
    iconOk: {
      type: [Boolean],
      default: false,
    },
    iconType: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classList() {
      return [
        {
          [`${prefixCls}-icon`]: this.iconOk,
          [`${prefixCls}`]: !this.iconOk,
          [`${this.className}-input-box`]: !!this.className,
        },
      ];
    },
    addClass() {
      return [
        {
          [`${this.className}-input`]: !!this.className,
        },
      ];
    },
    addInput() {
      return [
        {
          [`${error}`]: this.errOk,
          [`${this.className}-input-box-input`]: !!this.className,
        },
      ];
    },
    addErrorText() {
      return [
        {
          [`${this.className}-input-box-text`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    change() {
      const val = event.target.value;
      if (val === this.currentValue) return;
      this.currentValue = val;
      this.$emit('change', this.currentValue);
      this.$emit('input', this.currentValue);
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.currentValue = val;
      }
    },
  },
};
</script>
