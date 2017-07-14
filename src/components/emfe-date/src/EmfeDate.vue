<template>
  <div class="emfe-date" :class="dateName" v-documentclick="close">
    <button class="emfe-date-btn" @click.stop="toggle" v-if="!open">
      <span class="emfe-date-btn-text" :class="{'emfe-date-btn-text-choice': choiced}">{{ date }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" className="emfe-date" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" className="emfe-date" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-date-box" :class="{'emfe-date-box-position': !open}" v-show="status">
        <div class="emfe-date-header">
          <button class="emfe-date-prevyear" @click.stop="prevYear">&lt;&lt;</button>
          <button class="emfe-date-prevmonth" @click.stop="prevMonth" v-show="currentView === 'date'">&lt;</button>
          <span class="emfe-date-text" v-show="currentView === 'date'">
            <i class="emfe-date-text-year" @click.stop="yearHandle">{{year}}</i>
            <em>-</em>
            <i class="emfe-date-text-month" @click.stop="monthHandle">{{month+1}}</i>
          </span>
          <span class="emfe-date-text" v-show="currentView === 'month'">
            <i class="emfe-date-text-year" @click.stop="yearHandle">{{year}}</i>
          </span>
          <span class="emfe-date-text" v-show="currentView === 'year'">
            <i class="emfe-date-text-yearrange" @click.stop="yearHandle">{{startYear}} - {{years[years.length - 1]}}</i>
          </span>
          <button class="emfe-date-nextmonth" @click.stop="nextMonth" v-show="currentView === 'date'">&gt;</button>
          <button class="emfe-date-nextyear" @click.stop="nextYear">&gt;&gt;</button>
        </div>
        <!-- 日期 -->
        <div v-show="currentView === 'date'">
          <div class="emfe-date-week">
            <span class="emfe-date-week-item">日</span>
            <span class="emfe-date-week-item">一</span>
            <span class="emfe-date-week-item">二</span>
            <span class="emfe-date-week-item">三</span>
            <span class="emfe-date-week-item">四</span>
            <span class="emfe-date-week-item">五</span>
            <span class="emfe-date-week-item">六</span>
          </div>
          <div class="emfe-date-day">
            <span class="emfe-date-item emfe-date-item-prev" :class="{'emfe-date-item-disable': day.undo}" v-for="day in lastMonthDays" @click.stop="choicePrevMonthDay(day)">{{ day.num }}</span>
            <span class="emfe-date-item" :class="{'emfe-date-item-disable': day.undo, 'emfe-date-today': day.today, 'emfe-date-choice': day.choice}" v-for="day in days" @click.stop="choiceDay(day)">{{ day.num }}</span>
            <span class="emfe-date-item emfe-date-item-prev" :class="{'emfe-date-item-disable': day.undo}" v-for="day in nextMonthDays" @click.stop="choiceNextMonthDay(day)">{{ day.num }}</span>
          </div>
        </div>
        <!-- 月份 -->
        <div class="emfe-date-month" v-show="currentView === 'month'">
          <span class="emfe-date-month-item" v-for=" month in months" @click.stop="choiceMonth(month)">{{  month }}</span>
        </div>
        <!-- 年 -->
        <div class="emfe-date-year" v-show="currentView === 'year'">
          <span class="emfe-date-year-item" v-for=" year in years" @click.stop="choiceYear(year)">{{  year }}</span>
        </div>
        <div v-if="confirm" class="emfe-date-footer">
          <button class="emfe-date-ok" @click.stop="ok">确定</button>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { getDayCountOfMonth, initTimeDate, clearHours } from '../../../tools/date';
import documentclick from '../../../directives/documentclick';

// 日期里面只有 42 天（上月 | 本月 | 下月）
const allDays = 42;
// 年份里每页只有 10 年
const allYears = 10;

export default {
  name: 'EmfeDate',
  data() {
    return {
      currentView: 'date',
      today: initTimeDate(),
      startYear: null,
      year: null,
      month: null,
      day: null,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      date: this.placeholder,
      status: this.open,
    };
  },
  props: {
    format: {
      type: String,
      default: '/',
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    // 默认显示
    open: {
      type: Boolean,
      default: false,
    },
    // 参数
    disabledDate: {
      type: Function,
      default: () => false,
    },
    className: String,
  },
  computed: {
    dateName() {
      return [
        {
          [`${this.className}-date`]: !!this.className,
        },
      ];
    },
    lastMonthDays() {
      const date = new Date(this.year, this.month, 1);
      const maxDaysNum = date.getDay();
      const handleMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1;
      const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), handleMonth);
      const lastMonth = this.month - 1;
      const days = [];
      for (let i = 0; i < maxDaysNum; i++) {
        days.unshift({
          num: dateCountOfLastMonth - i,
          undo: this.disabledDate(new Date(this.year,
            lastMonth,
            dateCountOfLastMonth - i)),
        });
      }
      return days;
    },
    days() {
      const days = [];
      const len = getDayCountOfMonth(this.year, this.month) + 1;
      const now = clearHours(new Date());
      const choiceNow = clearHours(new Date(this.date));

      for (let i = 1; i < len; i++) {
        const loopNow = new Date(this.year, this.month, i);
        days.push({
          num: i,
          undo: this.disabledDate(loopNow),
          today: clearHours(loopNow) === now,
          choice: clearHours(loopNow) === choiceNow,
        });
      }

      return days;
    },
    nextMonthDays() {
      const days = [];
      let len = allDays - this.lastMonthDays.length - this.days.length;
      const nextMonth = this.month + 1;

      len += 1;

      for (let i = 1; i < len; i++) {
        days.push({
          num: i,
          undo: this.disabledDate(new Date(this.year,
            nextMonth,
            i)),
        });
      }

      return days;
    },
    // 年
    years() {
      this.startYear = Math.floor(this.year / allYears, 10) * allYears;
      const years = [];
      for (let i = this.startYear, len = this.startYear + allYears; i < len; i++) {
        years.push(i);
      }
      return years;
    },
    choiced() {
      return this.date !== this.placeholder;
    },
  },
  mounted() {
    if (this.today && !this.year) {
      this.year = this.today.getFullYear();
      this.month = this.today.getMonth();
    }
  },
  methods: {
    resetDate() {
      this.today = new Date(this.today);
    },
    prevYear() {
      if (this.currentView === 'year') {
        this.year -= allYears;
      } else {
        this.year--;
        this.today.setFullYear(this.year);
        this.resetDate();
      }
    },
    nextYear() {
      if (this.currentView === 'year') {
        this.year += allYears;
      } else {
        this.year++;
        this.today.setFullYear(this.year);
        this.resetDate();
      }
    },
    prevMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
    },
    nextMonth() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
    },
    yearHandle() {
      this.currentView = 'year';
    },
    monthHandle() {
      this.currentView = 'month';
    },
    choiceYear(year) {
      this.monthHandle();
      this.year = year;
    },
    choiceMonth(month) {
      this.currentView = 'date';
      this.month = month - 1;
    },
    choiceDay(day) {
      // 如果可选
      if (!day.undo) {
        this.day = day.num > 9 ? day.num : `0${day.num}`;
        const month = this.month + 1 > 9 ? this.month + 1 : `0${this.month + 1}`;
        this.date = `${this.year}${this.format}${month}${this.format}${this.day}`;
        // 如果有确定按钮
        if (this.confirm) {
          this.$emit('choice', this.date);
        } else {
          this.ok();
        }
      }
    },
    choicePrevMonthDay(day) {
      this.prevMonth();
      this.choiceDay(day);
    },
    choiceNextMonthDay(day) {
      this.nextMonth();
      this.choiceDay(day);
    },
    toggle() {
      this.status = !this.status;
    },
    ok() {
      this.close(true);
      this.$emit('ok', this.date);
    },
    close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.date);
        }
        this.status = false;
      }
    },
    cancel() {
      this.date = this.placeholder;
      this.$emit('cancel', this.date);
    },
  },
  directives: {
    documentclick,
  },
};
</script>
