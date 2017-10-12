<template>
  <div class="emfe-time-m" v-emfe-documentclick="close" :class="timeName">
    <button class="emfe-time-m-btn" v-if="!open && !disabled" @click="toggle">
      <span class="emfe-time-m-btn-text" :class="{'emfe-time-m-btn-text-choice': choiced}">{{ time }}</span>
      <!-- 日期 -->
      <emfe-icon type="shijian" className="emfe-time-m" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="shanchu" className="emfe-time-m" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <button class="emfe-time-m-btn emfe-time-m-btn-disabled" v-if="!open && disabled">
      <span class="emfe-time-m-btn-text">{{ time }}</span>
      <!-- 日期 -->
      <emfe-icon type="shijian" className="emfe-time-m" v-show="!choiced"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="shanchu" className="emfe-time-m" v-show="choiced"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-time-m-box" v-show="status" :class="{'emfe-time-m-box-position': !open}">
        <div v-if="confirm" class="emfe-time-m-footer">
          <button class="emfe-time-m-ok" @click.stop="ok">确定</button>
        </div>
        <div class="emfe-time-m-main">
          <emfe-iscroll ref="iscroll1" class="emfe-time-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-time-m-list">
              <li class="emfe-time-m-list-item" v-for="hourLoop in hours" :class="{'emfe-time-m-list-item-on': hourLoop.num === hour, 'emfe-time-m-list-item-disable': hourLoop.undo}" @click.stop="choiceHour(hourLoop)" v-if="!hourLoop.undo" ref="listItem1">{{ hourLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll2" class="emfe-time-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG" v-if="exact === 'minute' || exact === 'second'">
            <ul class="emfe-time-m-list">
              <li class="emfe-time-m-list-item" v-for="minuteLoop in minutes" :class="{'emfe-time-m-list-item-on': minuteLoop.num === minute, 'emfe-time-m-list-item-disable': minuteLoop.undo}" @click.stop="choiceMinute(minuteLoop)" v-if="!minuteLoop.undo" ref="listItem2">{{ minuteLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll3" class="emfe-time-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG" v-if="exact === 'second'">
            <ul class="emfe-time-m-list">
              <li class="emfe-time-m-list-item" v-for="(secondLoop, secondIndex) in seconds" :class="{'emfe-time-m-list-item-on': secondLoop.num === second, 'emfe-time-m-list-item-disable': secondLoop.undo}" @click.stop="choiceSecond(secondLoop)" v-if="!secondLoop.undo" ref="listItem3">{{ secondLoop.num }}</li>
            </ul>
          </emfe-iscroll>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import TimeTool from '../../../tools/time';
import _ from '../../../tools/lodash';
import Contant from '../../../contant';

const hourNum = 24;
const minuteNum = 60;
const secondNum = 60;

export default {
  name: 'EmfeTimeM',
  data() {
    return {
      Contant,
      hours: [],
      minutes: [],
      seconds: [],
      hour: '',
      minute: '',
      second: '',
      choiced: false,
      status: this.open,
    };
  },
  props: {
    // 默认文案
    placeholder: {
      type: String,
      default: '选择时间',
    },
    value: {
      type: String,
      default: '',
    },
    exact: {
      validator(value) {
        return _.has(value, ['hour', 'minute', 'second']);
      },
      default: 'second',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      type: false,
    },
    // 默认显示
    open: {
      type: Boolean,
      default: false,
    },
    // 禁用小时
    disabledHours: {
      type: Array,
      default: () => [],
    },
    // 禁用分钟
    disabledMinutes: {
      type: Array,
      default: () => [],
    },
    // 禁用秒
    disabledSeconds: {
      type: Array,
      default: () => [],
    },
    // 可选时间
    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59',
    },
    className: String,
  },
  computed: {
    timeName() {
      return [
        {
          [`${this.className}-time`]: !!this.className,
        },
      ];
    },
    itemName() {
      return [
        {
          [`${this.className}-item`]: !!this.className,
        },
        [`emfe-time-m-item-${this.exact}`],
      ];
    },
    time() {
      let time = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          time = `${this.hour}`;
        } else if (this.exact === 'minute') {
          time = `${this.hour}:${this.minute}`;
        } else {
          time = `${this.hour}:${this.minute}:${this.second}`;
        }
      }
      return time;
    },
  },
  mounted() {
    for (let i = 0; i < hourNum; i++) {
      this.hours.push(TimeTool.handleConputedTime(i, this.disabledHours));
    }
    for (let i = 0; i < minuteNum; i++) {
      this.minutes.push(TimeTool.handleConputedTime(i, this.disabledMinutes));
    }
    for (let i = 0; i < secondNum; i++) {
      this.seconds.push(TimeTool.handleConputedTime(i, this.disabledSeconds));
    }
    this.initData();
    this.setTimeChoice();
  },
  methods: {
    refreshIscroll() {
      Object.keys(this.$refs).forEach((iscroll) => {
        if (this.$refs[iscroll].refresh) {
          this.$refs[iscroll].refresh();
        }
      });
    },
    setNow() {
      const now = new Date();
      const hourNow = now.getHours();
      const hour = this.hours[hourNow];
      this.hour = hour.undo ? TimeTool.loopChoice(this.hours, hour.num) : hour.num;
      this.setChoice('hour');
      this.scrollEle('hour');
      if (this.exact === 'minute' || this.exact === 'second') {
        this.scrollEle('minute');
      }
      if (this.exact === 'second') {
        this.scrollEle('second');
      }
    },
    // 选择完滚动到当前
    // do hour时，hour滚动
    scrollEle(doScroll) {
      const { listItem1, listItem2, listItem3 } = this.$refs;

      const hours = this.hours.filter(hourData => !hourData.undo);
      const minutes = this.minutes.filter(minuteData => !minuteData.undo);
      const seconds = this.seconds.filter(secondData => !secondData.undo);

      const hourIndex = hours.findIndex(hourData => hourData.num === this.hour) - 2;
      const minuteIndex = minutes.findIndex(minuteData => minuteData.num === this.minute) - 2;
      const secondIndex = seconds.findIndex(secondData => secondData.num === this.second) - 2;

      if (listItem1 && doScroll === 'hour') {
        this.$refs.iscroll1.scrollToElement(listItem1[hourIndex < 0 ? 0 : hourIndex]);
      }

      if (listItem2 && doScroll === 'minute') {
        this.$refs.iscroll2.scrollToElement(listItem2[minuteIndex < 0 ? 0 : minuteIndex]);
      }

      if (listItem3 && doScroll === 'second') {
        this.$refs.iscroll3.scrollToElement(listItem3[secondIndex < 0 ? 0 : secondIndex]);
      }
    },
    initData() {
      if (this.value && this.value !== this.placeholder) {
        const vals = this.value.split(':');
        this.hour = TimeTool.zeroFill(vals[0] - 0);
        this.minute = TimeTool.zeroFill(vals[1] - 0);
        this.second = TimeTool.zeroFill(vals[2] - 0);
        this.choiced = true;
      } else {
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice(noSetTime) {
      if (!this.choiced) {
        if (noSetTime !== 'hour') {
          this.hour = TimeTool.loopChoice(this.hours, this.hour);
        }
        if (noSetTime !== 'minute') {
          this.minute = TimeTool.loopChoice(this.minutes, this.minute);
        }
        if (noSetTime !== 'second') {
          this.second = TimeTool.loopChoice(this.seconds, this.second);
        }
        this.choiced = true;
      }
    },
    // 设置时间可选
    setTimeChoice() {
      const times = this.timeChoices.split('|');
      const startTime = times[0].split(':');
      const endTime = times[1].split(':');
      const hours = [];
      const minutes = [];
      if (this.hours.length > 1) {
        this.hours.forEach((h) => {
          if (h.num < startTime[0] || h.num > endTime[0]) {
            h.undo = true;
          }
        });
        this.hours.forEach((h) => {
          if (!h.undo) {
            hours.push(h.num);
          }
        });
      }
      const hour = this.hour ? this.hour : hours[0];
      const hourIsStart = hour === startTime[0];
      const hourIsEnd = hour === endTime[0];
      if (this.minutes.length > 1) {
        this.minutes.forEach((min) => {
          min.undo = (hourIsStart && min.num < startTime[1]) || (hourIsEnd && min.num > endTime[1]);
        });
        this.minutes.forEach((min) => {
          if (!min.undo) {
            minutes.push(min.num);
          }
        });
      }
      const minute = this.minute ? this.minute : minutes[0];
      const minuteIsStart = minute === startTime[1];
      const minuteIsEnd = minute === endTime[1];
      if (this.seconds.length > 1) {
        this.seconds.forEach((sec) => {
          const before = hourIsStart && minuteIsStart && sec.num < startTime[2];
          const after = hourIsEnd && minuteIsEnd && sec.num > endTime[2];
          sec.undo = before || after;
        });
      }
    },
    choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice', this.time);
        this.$emit('input', this.time);
      }
    },
    toggle() {
      this.status = !this.status;
      this.refreshIscroll();
      this.setNow();
    },
    close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.time);
          this.$emit('input', this.time);
        }
        this.status = false;
      }
    },
    ok() {
      this.close(true);
      this.$emit('ok', this.time);
      this.$emit('input', this.time);
    },
    cancel() {
      this.choiced = false;
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.$emit('cancel', this.time);
      this.$emit('input', this.time);
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
      }
    },
  },
};
</script>
