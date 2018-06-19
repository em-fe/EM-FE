<template>
  <div class="emfe-smscode-s" :class="[smscodeName, {'emfe-smscode-s-input-error': errOk}]">
    <emfe-icon v-if="icon" className="emfe-smscode-s" :type="icon"></emfe-icon>
    <slot name="smsInput"></slot>
    <slot name="smsButton"></slot>
    <div v-if="errOk" class="emfe-smscode-s-error" :class="ErrName" >
      <slot name="error"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeSmscode',
  data() {
    return {
      newDisabled: this.disabled,
    };
  },
  props: {
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试',
    },
    className: String,
    errOk: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    smscodeName() {
      return [
        {
          [`${this.className}-smscode-s`]: !!this.className,
          'emfe-smscodeicon': this.icon,
        },
      ];
    },
    ErrName() {
      return [
        {
          [`${this.className}-smscode-s-error`]: !!this.className,
          'emfe-smscodeicon': this.icon,
        },
      ];
    },
  },
  watch: {
    disabled(val, oldVal) {
      if (val !== oldVal) {
        this.newDisabled = val;
      }
    },
  },
};
</script>
