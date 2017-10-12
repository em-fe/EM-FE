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
    for (let i = this.yearEnd; i > this.yearStart - 1; i--) {
      this.years.push(TimeTool.handleConputedDate(i, this.disabledYears));
    }
    for (let i = 1; i < 13; i++) {
      this.months.push(TimeTool.handleConputedDate(i, this.disabledMonths));
    }
    this.resetDays();

    this.initData();
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
      const dayNow = now.getDate();
      const monthNow = now.getMonth();
      const yearNow = now.getFullYear();
      const month = this.months[monthNow];
      const year = this.years.find(iYear => iYear.num - 0 === yearNow);
      const day = this.days[dayNow - 1];
      this.year = year.num;
      this.month = month.num;
      this.day = day.num;
      this.choiced = true;
      this.scrollEle('year');
      this.scrollEle('month');
      this.scrollEle('day');
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
        this.$refs.iscroll1.scrollToElement(listItem1[yearIndex < 0 ? 0 : yearIndex]);
      }
      if (listItem2 && doScroll === 'month') {
        this.$refs.iscroll2.scrollToElement(listItem2[monthIndex < 0 ? 0 : monthIndex]);
      }
      if (listItem3 && doScroll === 'day') {
        this.$refs.iscroll3.scrollToElement(listItem3[dayIndex < 0 ? 0 : dayIndex]);
      }
    },
    initData() {
      if (this.value && this.value !== this.placeholder) {
        const dates = this.value.split(this.format);
        this.year = TimeTool.zeroFill(dates[0] - 0);
        this.month = TimeTool.zeroFill(dates[1] - 0);
        this.day = TimeTool.zeroFill(dates[2] - 0);
        this.choiced = true;
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
    resetDays(year, month) {
      const dateCountOfLastMonth = getDayCountOfMonth(year - 0, month - 1);
      this.days = [];
      for (let i = 1; i < dateCountOfLastMonth + 1; i++) {
        this.days.push(TimeTool.handleConputedDate(i, this.disabledDays));
      }
      this.setWeekChoice();
      this.scrollEle('day');
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
    choiceYear(year) {
      if (!year.undo) {
        this.setChoice();
        this.year = year.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice', this.date);
        this.$emit('input', this.date);
      }
    },
    choiceMonth(month) {
      if (!month.undo) {
        this.setChoice();
        this.month = month.num;
        this.resetDays(this.year, this.month);
        this.$emit('choice', this.date);
        this.$emit('input', this.date);
      }
    },
    choiceDay(day) {
      if (!day.undo) {
        this.setChoice();
        this.day = day.num;
        this.$emit('choice', this.date);
        this.$emit('input', this.date);
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
          this.$emit('close', this.date);
          this.$emit('input', this.date);
        }
        this.status = false;
      }
    },
    ok() {
      this.close(true);
      this.$emit('ok', this.date);
      this.$emit('input', this.date);
    },
    cancel() {
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
      }
    },
  },
};
</script>
