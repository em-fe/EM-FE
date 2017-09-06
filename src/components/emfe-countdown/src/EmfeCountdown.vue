<template>
  <div class="emfe-countdown" :class="className ? [`${className}-countdown`] : ''">
    <span class="emfe-countdown-time" :class="className ? [`${className}-countdown-time`] : ''" v-for="newHour in hour">{{ newHour }}</span>
    <span class="emfe-countdown-symbol" :class="className ? [`${className}-countdown-symbol`] : ''">:</span>
    <span class="emfe-countdown-time" :class="className ? [`${className}-countdown-time`] : ''" v-for="min in minute">{{ min }}</span>
    <span class="emfe-countdown-symbol" :class="className ? [`${className}-countdown-symbol`] : ''">:</span>
    <span class="emfe-countdown-time" :class="className ? [`${className}-countdown-time`] : ''" v-for="sec in second">{{ sec }}</span>
  </div>
</template>
<script>
import TimeTool from '../../../tools/time';

let timer = null;

export default {
  name: 'emfe-countdown',
  data: () => ({
    newTime: '',
    step: 0,
  }),
  props: {
    time: {
      type: String,
      required: true,
    },
    className: String,
    end: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    hour() {
      const day = Math.floor(this.step / 1000 / 60 / 60 / 24) * 24;
      const hour = TimeTool.zeroFill(Math.floor((this.step / 1000 / 60 / 60) % 24) + day);
      return hour.toString();
    },
    minute() {
      const minute = TimeTool.zeroFill(Math.floor((this.step / 1000 / 60) % 60));
      return minute.toString();
    },
    second() {
      const second = TimeTool.zeroFill(Math.floor((this.step / 1000) % 60));
      return second.toString();
    },
  },
  created() {
    this.handleTime();
    setTimeout(this.handleTime, 1000);
  },
  methods: {
    handleTime() {
      this.newTime = new Date(this.time);
      const now = new Date();
      const newTimeMsec = this.newTime.getTime();
      const nowMsec = now.getTime();
      this.step = newTimeMsec - nowMsec;
      if (!this.step) {
        clearTimeout(timer);
        this.$emit('end');
        this.end();
      } else {
        timer = setTimeout(this.handleTime, 1000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
