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

let timer0 = null;
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
    timer0 = setTimeout(this.handleTime, 1000);
  },
  methods: {
    handleTime() {
      const times = this.time.split(' ');
      const oneDay = times[0];
      const oneTime = times[1];
      const aDay2 = oneDay.split('-');
      const aTime2 = oneTime.split(':');
      this.newTime = new Date(aDay2[0], aDay2[1] - 1, aDay2[2], aTime2[0], aTime2[1], aTime2[2]);
      const now = new Date();
      const newTimeMsec = this.newTime.getTime();
      const nowMsec = now.getTime();
      this.step = newTimeMsec - nowMsec;
      if (this.step <= 0) {
        clearTimeout(timer);
        clearTimeout(timer0);
        this.step = 0;
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
