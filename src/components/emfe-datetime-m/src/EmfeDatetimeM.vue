<template>
  <div class="emfe-datetime-m" v-emfe-documentclick="close">
    <button class="emfe-datetime-m-btn" v-if="!open && !disabled" @click="toggle">
      <span class="emfe-datetime-m-btn-text" :class="{'emfe-datetime-m-btn-text-choice': choiced}">{{ datetime }}</span>
      <!-- 日期 -->
      <emfe-icon type="rili" className="emfe-datetime-m" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="shanchu" className="emfe-datetime-m" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <button class="emfe-datetime-m-btn emfe-datetime-m-btn-disabled" v-if="!open && disabled">
      <span class="emfe-datetime-m-btn-text">{{ date }}</span>
      <!-- 日期 -->
      <emfe-icon type="rili" className="emfe-datetime-m" v-show="!choiced"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="shanchu" className="emfe-datetime-m" v-show="choiced"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-datetime-m-box" v-show="status" :class="{'emfe-datetime-m-box-position': !open}">
        <div v-if="confirm" class="emfe-datetime-m-footer">
          <button class="emfe-datetime-m-ok" @click.stop="ok">确定</button>
        </div>
        <div class="emfe-datetime-m-main">
          <emfe-iscroll ref="iscroll1" class="emfe-datetime-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="yearLoop in years" :class="{'emfe-datetime-m-list-item-on': yearLoop.num === year, 'emfe-datetime-m-list-item-disable': yearLoop.undo}" @click.stop="choiceYear(yearLoop)" v-if="!yearLoop.undo" ref="listItem1">{{ yearLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll2" class="emfe-datetime-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="monthLoop in months" :class="{'emfe-datetime-m-list-item-on': monthLoop.num === month, 'emfe-datetime-m-list-item-disable': monthLoop.undo}" @click.stop="choiceMonth(monthLoop)" v-if="!monthLoop.undo" ref="listItem2">{{ monthLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll3" class="emfe-datetime-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="(dayLoop, dayIndex) in days" :class="{'emfe-datetime-m-list-item-on': dayLoop.num === day, 'emfe-datetime-m-list-item-disable': dayLoop.undo}" @click.stop="choiceDay(dayLoop)" v-if="!dayLoop.undo" ref="listItem3">{{ dayLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll4" class="emfe-datetime-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="hourLoop in hours" :class="{'emfe-datetime-m-list-item-on': hourLoop.num === hour, 'emfe-datetime-m-list-item-disable': hourLoop.undo}" @click.stop="choiceHour(hourLoop)" v-if="!hourLoop.undo" ref="listItem4">{{ hourLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll5" class="emfe-datetime-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG" v-if="exact === 'minute' || exact === 'second'">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="minuteLoop in minutes" :class="{'emfe-datetime-m-list-item-on': minuteLoop.num === minute, 'emfe-datetime-m-list-item-disable': minuteLoop.undo}" @click.stop="choiceMinute(minuteLoop)" v-if="!minuteLoop.undo" ref="listItem5">{{ minuteLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll6" class="emfe-datetime-m-item" :class="itemName" :options="Contant.ISCROLL_CONFIG" v-if="exact === 'second'">
            <ul class="emfe-datetime-m-list">
              <li class="emfe-datetime-m-list-item" v-for="(secondLoop, secondIndex) in seconds" :class="{'emfe-datetime-m-list-item-on': secondLoop.num === second, 'emfe-datetime-m-list-item-disable': secondLoop.undo}" @click.stop="choiceSecond(secondLoop)" v-if="!secondLoop.undo" ref="listItem6">{{ secondLoop.num }}</li>
            </ul>
          </emfe-iscroll>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { getDayCountOfMonth } from '../../../tools/date';
import _ from '../../../tools/lodash';
import TimeTool from '../../../tools/time';
import Contant from '../../../contant';

const hourNum = 24;
const minuteNum = 60;
const secondNum = 60;

export default {
  name: 'EmfeTimeM',
  data() {
    return {
      Contant,
      canSetNow: true, //可以设置当前时间
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
    monthStart: {
      type: Number,
      default: 1,
    },
    monthEnd: {
      type: Number,
      default: 13,
    },
    dayStart: {
      type: Number,
      default: 1,
    },
    dayEnd: {
      type: Number,
      default: 31,
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
    // 一周内哪天可选
    weekChoices: {
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
    this.renderYear();
    this.renderMonth();
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
    this.setTimeChoice();
  },
  methods: {
    renderYear() {
      this.years = [];
      for (let i = this.yearEnd; i > this.yearStart - 1; i--) {
        this.years.push(TimeTool.handleConputedDate(i, this.disabledYears));
      }
    },
    renderMonth() {
      this.months = [];
      for (let i = this.monthStart; i < this.monthEnd; i++) {
        this.months.push(TimeTool.handleConputedDate(i, this.disabledMonths));
      }
    },
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
      const minuteNow = now.getMinutes();
      const secondNow = now.getSeconds();
      const dayNow = now.getDate();
      const monthNow = now.getMonth();
      const yearNow = now.getFullYear();
      const hour = this.hours[hourNow];
      const minute = this.minutes[minuteNow];
      const second = this.seconds[secondNow];
      const month = this.months[monthNow > this.months.length - 1 ? 0 : monthNow];
      const year = this.years.find(iYear => iYear.num - 0 === yearNow);
      const day = this.days[dayNow - 1 > this.days.length - 1 ? 0 : dayNow - 1];
      this.hour = hour.undo ? TimeTool.loopChoice(this.hours, hour.num) : hour.num;
      this.minute = minute.undo ? TimeTool.loopChoice(this.minutes, minute.num) : minute.num;
      this.second = second.undo ? TimeTool.loopChoice(this.seconds, second.num) : second.num;
      this.year = year.num;
      this.month = month.num;
      this.day = day.num;
      this.choiced = true;
    },
    // 选择完滚动到当前
    // do hour时，hour滚动
    scrollEle(doScroll) {
      const { listItem1, listItem2, listItem3, listItem4, listItem5, listItem6 } = this.$refs;

      const years = this.years.filter(yearData => !yearData.undo);
      const months = this.months.filter(monthData => !monthData.undo);
      const days = this.days.filter(dayData => !dayData.undo);

      const hours = this.hours.filter(hourData => !hourData.undo);
      const minutes = this.minutes.filter(minuteData => !minuteData.undo);
      const seconds = this.seconds.filter(secondData => !secondData.undo);

      const yearIndex = years.findIndex(yearData => yearData.num === this.year) - 2;
      const monthIndex = months.findIndex(monthData => monthData.num === this.month) - 2;
      const dayIndex = days.findIndex(dayData => dayData.num === this.day) - 2;

      const hourIndex = hours.findIndex(hourData => hourData.num === this.hour) - 2;
      const minuteIndex = minutes.findIndex(minuteData => minuteData.num === this.minute) - 2;
      const secondIndex = seconds.findIndex(secondData => secondData.num === this.second) - 2;
      if (listItem1 && doScroll === 'year') {
        this.$refs.iscroll1.scrollToElement(listItem1[yearIndex < 0 ? 0 : yearIndex]);
      }
      if (listItem2 && doScroll === 'month') {
        this.$refs.iscroll2.scrollToElement(listItem2[monthIndex < 0 ? 0 : monthIndex]);
      }
      if (listItem3 && doScroll === 'day') {
        this.$refs.iscroll3.scrollToElement(listItem3[dayIndex < 0 ? 0 : dayIndex]);
      }

      if (listItem4 && doScroll === 'hour') {
        this.$refs.iscroll4.scrollToElement(listItem4[hourIndex < 0 ? 0 : hourIndex]);
      }
      if (listItem5 && doScroll === 'minute') {
        this.$refs.iscroll5.scrollToElement(listItem5[minuteIndex < 0 ? 0 : minuteIndex]);
      }
      if (listItem6 && doScroll === 'second') {
        this.$refs.iscroll6.scrollToElement(listItem6[secondIndex < 0 ? 0 : secondIndex]);
      }
    },
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
        this.canSetNow = false;
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
      let dayEnd = this.dayEnd;
      if (dayEnd > dateCountOfLastMonth + 1) {
        dayEnd = dateCountOfLastMonth + 1;
      }
      for (let i = 1; i < dateCountOfLastMonth + 1; i++) {
        if (i > this.dayStart && i < dayEnd) {
          this.days.push(TimeTool.handleConputedDate(i, this.disabledDays));
        }
      }
      if (this.day > dateCountOfLastMonth) {
        this.day = TimeTool.loopChoice(this.days, this.day);
      }
      this.setWeekChoice();
      this.scrollEle('day');
    },
    choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice-date', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice-date', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    // 设置日期可选
    setWeekChoice() {
      let year = null;
      let month = null;
      if (this.years.length > 1) {
        this.years.forEach((y) => {
          if (!y.undo && year === null) {
            year = y.num;
          }
        });
      }
      if (this.months.length > 1) {
        this.months.forEach((m) => {
          if (!m.undo && month === null) {
            month = m.num - 0;
          }
        });
      }
      this.days.forEach((tday) => {
        const nowYear = this.year ? this.year : year;
        const nowMonth = this.month ? this.month : month;
        const nowDate = new Date(`${nowYear}/${nowMonth}/${tday.num}`);
        const nowWeek = nowDate.getDay() + 1;
        tday.undo = !this.weekChoices.every(wc => wc !== nowWeek);
      });
      this.day = TimeTool.loopChoice(this.days, this.day);
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
        this.$emit('choice-time', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceMinute(minute) {
      if (!minute.undo) {
        this.setChoice();
        this.minute = minute.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    choiceSecond(second) {
      if (!second.undo) {
        this.setChoice();
        this.second = second.num;
        this.setTimeChoice();
        this.$emit('choice-time', this.datetime);
        this.$emit('change', this.datetime);
        this.$emit('input', this.datetime);
      }
    },
    toggle() {
      this.status = !this.status;
      this.refreshIscroll();
      if (this.canSetNow) {
        this.setNow();
      }
      // 滚动
      this.scrollEle('year');
      this.scrollEle('month');
      this.scrollEle('day');
      this.scrollEle('hour');
      if (this.exact === 'minute' || this.exact === 'second') {
        this.scrollEle('minute');
      }
      if (this.exact === 'second') {
        this.scrollEle('second');
      }
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
      this.canSetNow = false;
      this.close(true);
      this.$emit('ok', this.datetime);
      this.$emit('input', this.datetime);
    },
    cancel() {
      this.canSetNow = true;
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
    yearStart(val, oldVal) {
      if (val !== oldVal) {
        this.renderYear();
      }
    },
    yearEnd(val, oldVal) {
      if (val !== oldVal) {
        this.renderYear();
      }
    },
    monthStart(val, oldVal) {
      if (val !== oldVal) {
        this.renderMonth();
      }
    },
    monthEnd(val, oldVal) {
      if (val !== oldVal) {
        this.renderMonth();
      }
    },
    dayStart(val, oldVal) {
      if (val !== oldVal) {
        this.resetDays();
      }
    },
    dayEnd(val, oldVal) {
      if (val !== oldVal) {
        this.resetDays();
      }
    },
  },
};
</script>
