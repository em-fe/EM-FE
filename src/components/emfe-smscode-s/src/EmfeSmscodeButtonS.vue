<template>
    <button class="emfe-smscode-s-button"
      :class="btmName" 
      :disabled="newDisabled"
      @click="clickFn"
    >{{ btnText }}</button>
</template>
<script>
let timer = null;
let go = true; // 是否可以继续获取
export default {
  name: 'EmfeSmscodeButton',
  data() {
    return {
      start: '',
      btnText: this.title,
      allTimes: this.times,
      disableds: false,
      start: '',
      newDisabled: this.$parent.newDisabled,
    };
  },
  props: {
    title: {
      type: String,
      default: '获取验证码',
    },
    times: {
      type: [Number, String],
      default: 60,
    },
    timeStart: {
      type: [String, Boolean],
      default: false,
    },
    click: Function,
    end: {
      type: Function,
      default: () => {},
    },
    goauto: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btmName() {
      return [
        {
          [`${this.$parent.className}-smscode-s-button`]: !!this.$parent
            .className,
          [`${this.$parent.className}-smscode-s-button-disableds`]:
            !!this.$parent.className && this.$parent.newDisabled,
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