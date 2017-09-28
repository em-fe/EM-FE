<template>
  <div class="emfe-smscode-c" :class="smscodeName">
    <emfe-input :errOk="errOk" :iconOk="iconFlg" :iconType="icon" :placeholder="placeholder" className="emfe-smscode-c" :value="nowData" @change="change" @blur="blur" >
      <div slot="error">
        <slot name="error"></slot>
      </div>
    </emfe-input>
    <emfe-button-c theme='primary' @click="clickFn" className="emfe-smscode-c">{{ btnText }}</emfe-button-c>
  </div>
</template>
<script>
let timer = null;
let go = true; // 是否可以继续获取

export default {
  name: 'EmfeSmscodeC',
  data() {
    const nowData = !this.value ? '' : this.value;
    return {
      nowData,
      btnText: this.title,
      allTimes: this.times,
      newDisabled: this.disabled,
      start: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    title: {
      type: String,
      default: '获取验证码',
    },
    iconFlg: {
      type: [Boolean, String],
      default: false,
    },
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试',
    },
    value: {
      type: [Number, String],
    },
    times: {
      type: [Number, String],
      default: 60,
    },
    className: String,
    timeStart: {
      type: [String, Boolean],
      default: false,
    },
    click: Function,
    end: {
      type: Function,
      default: () => {},
    },
    errOk: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    smscodeName() {
      return [
        {
          [`${this.className}-smscode`]: !!this.className,
          'emfe-smscodeicon': this.icon,
        },
      ];
    },
    codeName() {
      return [
        {
          [`${this.className}-smscode-code`]: !!this.className,
          'emfe-smscode-input-icon': this.icon,
        },
      ];
    },
    btmName() {
      return [
        {
          [`${this.className}-smscode-button`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    resetAuto() {
      this.btnText = this.errorTitle;
      this.allTimes = this.times;
      go = true;
      this.$emit('end', false);
      this.end(false);
    },
    auto() {
      setTimeout(() => {
        if (this.start) {
          if (this.allTimes > 1) {
            this.allTimes--;
            this.btnText = `${this.allTimes}秒后重试`;
            timer = setTimeout(this.auto.bind(this), 1000);
          } else {
            clearTimeout(timer);
            this.resetAuto();
          }
        }
      }, 500);
    },
    input(ev) {
      const val = ev.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    clickFn() {
      if (go && !this.newDisabled && !this.start) {
        go = false;
        this.auto();
        this.$emit('click');
      }
      if (this.click) {
        this.click();
      }
    },
    blur() {
      this.$emit('blur');
    },
    change(val) {
      this.$emit('input', val);
    },
  },
  watch: {
    title(val, oldVal) {
      if (val !== oldVal) {
        this.btnText = val;
      }
    },
    value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
    disabled(val, oldVal) {
      if (val !== oldVal) {
        this.newDisabled = val;
      }
    },
    timeStart(val, oldVal) {
      if (val !== oldVal) {
        this.start = val;
      }
    },
  },
};
</script>
