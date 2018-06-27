<template>
  <div class="emfe-date-m" v-emfe-documentclick="close" :class="dateName">
    <button class="emfe-date-m-btn" v-if="!open && !disabled" @click="toggle" :class="buttonName">
      <span class="emfe-date-m-btn-text" :class="{'emfe-date-m-btn-text-choice': choiced}">{{ date }}</span>
      <!-- 日期 -->
      <emfe-icon type="rili" className="emfe-date-m" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="shanchu" className="emfe-date-m" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <button class="emfe-date-m-btn emfe-date-m-btn-disabled" v-if="!open && disabled" :class="buttonName">
      <span class="emfe-date-m-btn-text">{{ date }}</span>
      <!-- 日期 -->
      <emfe-icon type="rili" className="emfe-date-m" v-show="!choiced"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="shanchu" className="emfe-date-m" v-show="choiced"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-date-m-box" v-show="status" :class="{'emfe-date-m-box-position': !open, boxName}">
        <div v-if="confirm" class="emfe-date-m-footer">
          <button class="emfe-date-m-ok" @click.stop="ok">确定</button>
        </div>
        <div class="emfe-date-m-main">
          <emfe-iscroll ref="iscroll1" class="emfe-date-m-item" :options="Contant.ISCROLL_CONFIG">
            <ul id="list1" class="emfe-date-m-list">
              <li class="emfe-date-m-list-item" v-for="yearLoop in years" :class="{'emfe-date-m-list-item-on': yearLoop.num === year, 'emfe-date-m-list-item-disable': yearLoop.undo}" @click.stop="choiceYear(yearLoop)" v-if="!yearLoop.undo" ref="listItem1">{{ yearLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll2" class="emfe-date-m-item" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-date-m-list">
              <li class="emfe-date-m-list-item" v-for="monthLoop in months" :class="{'emfe-date-m-list-item-on': monthLoop.num === month, 'emfe-date-m-list-item-disable': monthLoop.undo}" @click.stop="choiceMonth(monthLoop)" v-if="!monthLoop.undo" ref="listItem2">{{ monthLoop.num }}</li>
            </ul>
          </emfe-iscroll>
          <emfe-iscroll ref="iscroll3" class="emfe-date-m-item" :options="Contant.ISCROLL_CONFIG">
            <ul class="emfe-date-m-list">
              <li class="emfe-date-m-list-item" v-for="(dayLoop, dayIndex) in days" :class="{'emfe-date-m-list-item-on': dayLoop.num === day, 'emfe-date-m-list-item-disable': dayLoop.undo}" @click.stop="choiceDay(dayLoop)" v-if="!dayLoop.undo" ref="listItem3">{{ dayLoop.num }}</li>
            </ul>
          </emfe-iscroll>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { getDayCountOfMonth } from '../../../tools/date';
import TimeTool from '../../../tools/time';
import Contant from '../../../contant';

export default {
  name: 'EmfeTimeM',
  data() {
    return {
      Contant,
      canSetNow: true,
      years: [],
      months: [],
      days: [],
      year: '',
      month: '',
      day: '',
      choiced: false,
      status: this.open,
    };
  },
  props: {
    enabledDate: {
      type: Array,
      default: () => [],
    },
    format: {
      type: String,
      default: '/',
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
      default: '选择日期',
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
    // 一周内哪天可选
    weekChoices: {
      type: Array,
      default: () => [],
    },
    className: String,
  },
  computed: {
    date() {
      let date = this.placeholder;
      if (this.choiced) {
        date = `${this.year}${this.format}${this.month}${this.format}${this.day}`;
      }
      return date;
    },
    dateName() {
      return [
        {
          [`${this.className}-date`]: !!this.className,
        },
      ];
    },
    buttonName() {
      return [
        {
          [`${this.className}-date-button`]: !!this.className,
        },
      ];
    },
    boxName() {
      return [
        {
          [`${this.className}-date-box`]: !!this.className,
        },
      ];
    },
  },
  mounted() {
    this.resetDays();
    this.initData();
  },
  methods: {
    refreshIscroll() {
      setTimeout(() => {
        Object.keys(this.$refs).forEach((iscroll) => {
          if (this.$refs[iscroll].refresh) {
            this.$refs[iscroll].refresh();
          }
        });
      }, 0);
    },
    setNow() {
      const now = new Date();
      const dayNow = now.getDate();
      const monthNow = now.getMonth();
      const yearNow = now.getFullYear();
      const month = this.months[monthNow];
      const year = this.years.find(iYear => iYear.num - 0 === yearNow);
      const day = this.days[dayNow - 1];
      this.year = year.num;
      this.month = month.num;
      this.day = day.num;
      // 如果当前时间不可选，就选第一个可选的
      this.year = TimeTool.loopChoice(this.years, this.year);
      this.month = TimeTool.loopChoice(this.months, this.month);
      this.day = TimeTool.loopChoice(this.days, this.day);
      this.choiced = true;
    },
    // 选择完滚动到当前
    // do year时，year滚动
    scrollEle(doScroll) {
      const { listItem1, listItem2, listItem3 } = this.$refs;

      const years = this.years.filter(yearData => !yearData.undo);
      const months = this.months.filter(monthData => !monthData.undo);
      const days = this.days.filter(dayData => !dayData.undo);

      const yearIndex = years.findIndex(yearData => yearData.num === this.year) - 2;
      const monthIndex = months.findIndex(monthData => monthData.num === this.month) - 2;
      const dayIndex = days.findIndex(dayData => dayData.num === this.day) - 2;

      if (listItem1 && doScroll === 'year') {
        setTimeout(() => {
          this.$refs.iscroll1.scrollToElement(listItem1[yearIndex < 0 ? 0 : yearIndex]);
        }, 0);
      }
      if (listItem2 && doScroll === 'month') {
        setTimeout(() => {
          this.$refs.iscroll2.scrollToElement(listItem2[monthIndex < 0 ? 0 : monthIndex]);
        }, 0);
      }
      if (listItem3 && doScroll === 'day') {
        setTimeout(() => {
          this.$refs.iscroll3.scrollToElement(listItem3[dayIndex < 0 ? 0 : dayIndex]);
        }, 0);
      }
    },
    initData() {
      if (this.value && this.value !== this.placeholder) {
        const dates = this.value.split(this.format);
        this.year = TimeTool.zeroFill(dates[0] - 0);
        this.month = TimeTool.zeroFill(dates[1] - 0);
        this.day = TimeTool.zeroFill(dates[2] - 0);
        this.choiced = true;
        this.canSetNow = false;
      } else {
        this.year = '';
        this.month = '';
        this.day = '';
        this.choiced = false;
      }
    },
    setChoice() {
      if (!this.choiced) {
        this.year = TimeTool.loopChoice(this.years, this.year);
        this.month = TimeTool.loopChoice(this.months, this.month);
        this.day = TimeTool.loopChoice(this.days, this.day);
        this.choiced = true;
      }
    },
    splitEnabledDate() {
      if (this.enabledDate.length > 1) {
        const startDate = this.enabledDate[0].split('/');
        const endDate = this.enabledDate[1].split('/');
        return {
          startDate: {
            year: startDate[0] - 0,
            month: startDate[1] - 0,
            day: startDate[2] - 0,
          },
          endDate: {
            year: endDate[0] - 0,
            month: endDate[1] - 0,
            day: endDate[2] - 0,
          },
        };
      }
      return {
        startDate: {
          year: this.yearStart,
          month: 13,
          day: getDayCountOfMonth(),
        },
        endDate: {
          year: this.yearEnd,
          month: 13,
          day: getDayCountOfMonth(),
        },
      };
    },
    resetDays() {
      const enabledDate = this.splitEnabledDate();
      this.years = [];
      for (let i = this.yearEnd; i > this.yearStart - 1; i--) {
        this.years.push(TimeTool.handleConputedDate(i, this.disabledYears, 'year', enabledDate, this, this.enabledDate.length > 1));
      }

      this.months = [];
      for (let i = this.monthStart; i < this.monthEnd; i++) {
        this.months.push(TimeTool.handleConputedDate(i, this.disabledMonths, 'month', enabledDate, this, this.enabledDate.length > 1));
      }

      const dateCountOfLastMonth = getDayCountOfMonth(this.year - 0, this.month - 1);
      this.days = [];
      let dayEnd = this.dayEnd;
      if (dayEnd > dateCountOfLastMonth + 1) {
        dayEnd = dateCountOfLastMonth + 1;
      }
      for (let i = 1; i < dateCountOfLastMonth + 1; i++) {
        if (i > this.dayStart && i < dayEnd) {
          this.days.push(TimeTool.handleConputedDate(i, this.disabledDays, 'day', enabledDate, this, this.enabledDate.length > 1));
        }
      }
      this.setWeekChoice();
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

      const enabledDate = this.splitEnabledDate();
      const startMonth = enabledDate.startDate.month;
      const endMonth = enabledDate.endDate.month;
      const newYear = this.year - 0;
      const newMonth = this.month - 0;
      const startYear = enabledDate.startDate.year;
      const endYear = enabledDate.endDate.year;
      const startDate = enabledDate.startDate.day;
      const endDate = enabledDate.endDate.day;

      this.days.forEach((tday) => {
        const nowYear = this.year ? this.year : year;
        const nowMonth = this.month ? this.month : month;
        const nowDate = new Date(`${nowYear}/${nowMonth}/${tday.num}`);
        const nowWeek = nowDate.getDay() + 1;
        tday.undo = !this.weekChoices.every(wc => wc !== nowWeek);
        if (newYear === startYear && newMonth === startMonth) { // 如果等于开始
          tday.undo = tday.num < startDate;
        } else if (newYear === endYear && newMonth === endMonth) {
          tday.undo = tday.num > endDate;
        }
      });
      this.day = TimeTool.loopChoice(this.days, this.day);
      this.$emit('input', this.date);
    },
    choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays();
        setTimeout(() => {
          this.month = TimeTool.loopChoice(this.months, this.month);
          this.refreshIscroll();
          this.scrollAll();
          this.$emit('choice', this.date);
          this.$emit('change', this.date);
          this.$emit('input', this.date);
        }, 0);
      }
    },
    choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays();
        setTimeout(() => {
          this.refreshIscroll();
          this.scrollAll();
          this.$emit('choice', this.date);
          this.$emit('change', this.date);
          this.$emit('input', this.date);
        }, 0);
      }
    },
    choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice', this.date);
        this.$emit('change', this.date);
        this.$emit('input', this.date);
      }
    },
    toggle() {
      this.status = !this.status;
      if (this.canSetNow) {
        this.setNow();
        this.resetDays();
      }
      setTimeout(() => {
        this.month = TimeTool.loopChoice(this.months, this.month);
        this.day = TimeTool.loopChoice(this.days, this.day);
        this.refreshIscroll();
        this.scrollAll();
      });
    },
    scrollAll() {
      this.scrollEle('year');
      this.scrollEle('month');
      this.scrollEle('day');
    },
    close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.date);
          this.$emit('input', this.date);
        }
        this.status = false;
      }
    },
    ok() {
      this.canSetNow = false;
      this.close(true);
      this.$emit('ok', this.date);
      this.$emit('input', this.date);
    },
    cancel() {
      this.canSetNow = true;
      this.choiced = false;
      this.year = '';
      this.month = '';
      this.day = '';
      this.$emit('cancel', this.date);
      this.$emit('input', this.date);
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.initData();
        this.resetDays();
      }
    },
    yearStart(val, oldVal) {
      if (val !== oldVal) {
        this.resetDays();
      }
    },
    yearEnd(val, oldVal) {
      if (val !== oldVal) {
        this.resetDays();
      }
    },
    monthStart(val, oldVal) {
      if (val !== oldVal) {
        this.resetDays();
      }
    },
    monthEnd(val, oldVal) {
      if (val !== oldVal) {
        this.resetDays();
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
