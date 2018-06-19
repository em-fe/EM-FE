<template>

  <input class="emfe-smscode-input" 
        :type="type"  
        :maxlength="maxlength"
        :placeholder="placeholder" 
        :value="nowData"
        :class="codeName" 
        :disabled="newDisabled"
        @input="input"
        @blur="blur" 
        @focus="focus"
  />
</template>

<script>
export default {
  name: 'EmfeSmscodeInput',
  data() {
    const nowData = !this.value ? '' : this.value;
    return {
      nowData,
      newDisabled: this.$parent.newDisabled,
    };
  },
  props: {
    type: {
      type: String,
      default: 'number',
    },
    maxlength: {
      type: Number,
      default: Infinity,
    },
    value: {
      type: [Number, String],
    },
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    change: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    codeName() {
      return [
        {
          [`${this.$parent.className}-smscode-code`]: !!this.$parent.className,
          'emfe-smscode-input-icon': this.$parent.icon,
        },
      ];
    },
  },
  methods: {
    input(ev) {
      const val = ev.target.value;
      this.$emit('change', val);
      this.change(val);
      this.$emit('input', val);
    },
    blur() {
      this.$emit('blur');
    },
    focus() {
      this.$emit('focus');
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
  },
};
</script>