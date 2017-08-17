<template>
  <div class="emfe-datetime-m" v-emfe-documentclick="close">
    <button class="emfe-datetime-m-btn" v-if="!open && !disabled" @click="toggle">
      <span class="emfe-datetime-m-btn-text" :class="{'emfe-datetime-m-btn-text-choice': choiced}">{{ datetime }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" className="emfe-datetime-m" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" className="emfe-datetime-m" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <button class="emfe-datetime-m-btn emfe-datetime-m-btn-disabled" v-if="!open && disabled">
      <span class="emfe-datetime-m-btn-text">{{ date }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" className="emfe-datetime-m" v-show="!choiced"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" className="emfe-datetime-m" v-show="choiced"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-datetime-m-box" v-show="status" :class="{'emfe-datetime-m-box-position': !open}">
        <div v-if="confirm" class="emfe-datetime-m-footer">
          <button class="emfe-datetime-m-ok" @click.stop="ok">确定</button>
        </div>
        <div class="emfe-datetime-m-main">
          <div class="emfe-datetime-m-item" :class="itemName">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="yearLoop in years" :class="{'emfe-datetime-m-list-item-on': yearLoop.num === year, 'emfe-datetime-m-list-item-disable': yearLoop.undo}" @click.stop="choiceYear(yearLoop)">{{ yearLoop.num }}</li>
            </ul>
          </div>
          <div class="emfe-datetime-m-item" :class="itemName">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="monthLoop in months" :class="{'emfe-datetime-m-list-item-on': monthLoop.num === month, 'emfe-datetime-m-list-item-disable': monthLoop.undo}" @click.stop="choiceMonth(monthLoop)">{{ monthLoop.num }}</li>
            </ul>
          </div>
          <div class="emfe-datetime-m-item" :class="itemName">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="(dayLoop, dayIndex) in days" :class="{'emfe-datetime-m-list-item-on': dayLoop.num === day, 'emfe-datetime-m-list-item-disable': dayLoop.undo}" @click.stop="choiceDay(dayLoop)">{{ dayLoop.num }}</li>
            </ul>
          </div>
          <div class="emfe-datetime-m-item" :class="itemName">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="hourLoop in hours" :class="{'emfe-datetime-m-list-item-on': hourLoop.num === hour, 'emfe-datetime-m-list-item-disable': hourLoop.undo}" @click.stop="choiceHour(hourLoop)">{{ hourLoop.num }}</li>
            </ul>
          </div>
          <div class="emfe-datetime-m-item" :class="itemName" v-if="exact === 'minute' || exact === 'second'">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="minuteLoop in minutes" :class="{'emfe-datetime-m-list-item-on': minuteLoop.num === minute, 'emfe-datetime-m-list-item-disable': minuteLoop.undo}" @click.stop="choiceMinute(minuteLoop)">{{ minuteLoop.num }}</li>
            </ul>
          </div>
          <div class="emfe-datetime-m-item" :class="itemName" v-if="exact === 'second'">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="(secondLoop, secondIndex) in seconds" :class="{'emfe-datetime-m-list-item-on': secondLoop.num === second, 'emfe-datetime-m-list-item-disable': secondLoop.undo}" @click.stop="choiceSecond(secondLoop)">{{ secondLoop.num }}</li>
            </ul>
          </div>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { getDayCountOfMonth } from '../../../tools/date';
import _ from '../../../tools/lodash';
import TimeTool from '../../../tools/time';

const hourNum = 24;
const minuteNum = 60;
const secondNum = 60;

export default {
  name: 'EmfeTimeM',
  data() {
    return {
      years: [],
      months: [],
      days: [],
      year: '',
      month: '',
      day: '',
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
    format: {
      type: String,
      default: '/',
    },
    exact: {
      validator(value) {
        return _.has(value, ['hour', 'minute', 'second']);
      },
      default: 'second',
    },
    yearStart: {
      type: Number,
      default: 1920,
    },
    yearEnd: {
      type: Number,
      default: 2020,
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期时间',
    },
    value: {
      type: String,
      default: '',
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
    // 禁用年
    disabledYears: {
      type: Array,
      default: () => [],
    },
    // 禁用月
    disabledMonths: {
      type: Array,
      default: () => [],
    },
    // 禁用日
    disabledDays: {
      type: Array,
      default: () => [],
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
    className: String,
  },
  computed: {
    datetime() {
      let datetime = this.placeholder;
      if (this.choiced) {
        if (this.exact === 'hour') {
          datetime = `${this.year}${this.format}${this.month}${this.format}${this.day} ${this.hour}`;
        } else if (this.exact === 'minute') {
          datetime = `${this.year}${this.format}${this.month}${this.format}${this.day} ${this.hour}:${this.minute}`;
        } else {
          datetime = `${this.year}${this.format}${this.month}${this.format}${this.day} ${this.hour}:${this.minute}:${this.second}`;
        }
      }
      return datetime;
    },
    itemName() {
      return [
        {
          [`${this.className}-item`]: !!this.className,
        },
        [`emfe-datetime-m-item-${this.exact}`],
      ];
    },
  },
  mounted() {
    for (let i = this.yearStart; i < this.yearEnd + 1; i++) {
      this.years.push(TimeTool.handleConputedDate(i, this.disabledYears));
    }
    for (let i = 1; i < 13; i++) {
      this.months.push(TimeTool.handleConputedDate(i, this.disabledMonths));
    }
    this.resetDays();
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
  },
  methods: {
    initData() {
      if (this.value && this.value !== this.placeholder) {
        const vals = this.value.split(' ');
        const dates = vals[0].split(this.format);
        const times = vals[1].split(':');
        this.year = TimeTool.zeroFill(dates[0] - 0);
        this.month = TimeTool.zeroFill(dates[1] - 0);
        this.day = TimeTool.zeroFill(dates[2] - 0);
        this.hour = TimeTool.zeroFill(times[0] - 0);
        this.minute = TimeTool.zeroFill(times[1] - 0);
        this.second = TimeTool.zeroFill(times[2] - 0);
        this.choiced = true;
      } else {
        this.year = '';
        this.month = '';
        this.day = '';
        this.hour = '';
        this.minute = '';
        this.second = '';
        this.choiced = false;
      }
    },
    setChoice() {
      if (!this.choiced) {
        this.year = TimeTool.loopChoice(this.years, this.year);
        this.month = TimeTool.loopChoice(this.months, this.month);
        this.day = TimeTool.loopChoice(this.days, this.day);
        this.hour = TimeTool.loopChoice(this.hours, this.hour);
        this.minute = TimeTool.loopChoice(this.minutes, this.minute);
        this.second = TimeTool.loopChoice(this.seconds, this.second);
        this.choiced = true;
      }
    },
    resetDays(year, month) {
      const dateCountOfLastMonth = getDayCountOfMonth(year - 0, month - 1);
      this.days = [];
      for (let i = 1; i < dateCountOfLastMonth + 1; i++) {
        this.days.push(TimeTool.handleConputedDate(i, this.disabledDays));
      }
      if (this.day > dateCountOfLastMonth) {
        this.day = TimeTool.loopChoice(this.days, this.day);
      }
    },
    choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice-date', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceHour(hour) {
      if (!hour.undo) {
        this.setChoice();
        this.hour = hour.num;
        this.$emit('choice-time', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.$emit('choice-time', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.$emit('choice-time', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    toggle() {
      this.status = !this.status;
    },
    close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.datetime);
          this.$emit('input', this.datetime);
        }
        this.status = false;
      }
    },
    ok() {
      this.close(true);
      this.$emit('ok', this.datetime);
      this.$emit('input', this.datetime);
    },
    cancel() {
      this.choiced = false;
      this.year = '';
      this.month = '';
      this.day = '';
      this.$emit('cancel', this.datetime);
      this.$emit('input', this.datetime);
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
