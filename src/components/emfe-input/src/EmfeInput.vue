<template>
  <div class="emfe-input">
		<div :class="[classList]" >
      <emfe-icon v-if="iconOk" :type="type" className="emfe-input-box-icon-el"></emfe-icon>
      <input type="text" v-bind="$props" :class={error:errOk} :value="currentValue" v-on:input="change" class="emfe-input-box-input">
		</div>
  	<div class="emfe-input-box-text" v-if="$slots.error"><slot name="error"></slot></div>
	</div>
</template>
<script>

const prefixCls = 'emfe-input-box';

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
    type: {
      type: String,
      default: 'qr',
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classList() {
      return this.iconOk ? `${prefixCls}-icon` : `${prefixCls}`;
    },
  },
  methods: {
    change() {
      const val = event.target.value;
      if (val === this.currentValue) return;
      this.currentValue = val;
      this.$emit('change', this.currentValue);
    },
  },
};
</script>

