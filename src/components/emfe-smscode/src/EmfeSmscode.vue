<template>
  <div class="emfe-smscode" :class="[smscodeName, {'emfe-smscode-input-error': errOk}]">
    <emfe-icon v-if="icon" className="emfe-smscode" :type="icon"></emfe-icon>
    <input :type="type" :maxlength="maxlength" class="emfe-smscode-input" :class="codeName" :value="nowData" :placeholder="placeholder" @input="input" :disabled="newDisabled" @blur="blur" @focus="focus">
    <button class="emfe-smscode-button" :class="btmName" :disabled="newDisabled" @click="clickFn">{{ btnText }}</button>
    <div v-if="errOk" class="emfe-smscode-error">
      <slot name="error"></slot>
    </div>
  </div>
</template>
<script>
let timer = null;
let go = true; // 是否可以继续获取

export default {
  name: 'EmfeSmscode',
  data() {
    const nowData = !this.value ? '' : this.value;
    return {
      nowData,
      btnText: this.title,
      allTimes: this.times,
      newDisabled: this.disabled,
      start: '',
      disableds: false,
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
    icon: String,
    disabled: Boolean,
    errorTitle: {
      type: String,
      default: '重试',
    },
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
    change: {
      type: Function,
      default: () => {},
    },
    end: {
      type: Function,
      default: () => {},
    },
    errOk: {
      type: Boolean,
      default: false,
    },
    goauto: {
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
          [`${this.className}-smscode-button-disableds`]: !!this.className && this.disableds,
        },
      ];
    },
  },
  mounted() {
    this.start = this.timeStart;
  },
  methods: {
    resetAuto() {
      this.resetCode();
      this.$emit('end', false);
      this.end(false);
    },
    auto() {
      setTimeout(() => {
        if (this.start) {
          if (this.allTimes > 1) {
            this.allTimes--;
            this.btnText = `${this.allTimes}秒后重试`;
            this.disableds = true;
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
      this.change(val);
      this.$emit('input', val);
    },
    clickFn() {
      if (go && !this.newDisabled && !this.start) {
        go = false;
        this.auto();
        this.$emit('click');
        if (this.click) {
          this.click();
        }
      } else { // 过于频繁之后恢复可点
        go = true;
      }
    },
    blur() {
      this.$emit('blur');
    },
    focus() {
      this.$emit('focus');
    },
    resetCode() {
      this.disableds = false;
      this.btnText = this.title;
      this.allTimes = this.times;
      go = true;
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
        this.resetCode();
        // 有时候不好用，根儿手机点击完了不换倒计时
        if (this.goauto) {
          this.auto();
        }
      }
    },
  },
};
</script>