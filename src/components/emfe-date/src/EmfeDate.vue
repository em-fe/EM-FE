<template>
  <div class="emfe-date" v-documentclick="close">
    <button class="emfe-data-btn" @click.stop="toggle" v-if="!open">
      <span>{{ date }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-date-box" v-show="status">
        <div>
          <button @click.stop="prevYear">&lt;&lt;</button>
          <button @click.stop="prevMonth" v-show="currentView === 'date'">&lt;</button>
          <span v-show="currentView === 'date'"><i @click.stop="yearHandle">{{year}}</i> - <i @click.stop="monthHandle">{{month+1}}</i></span>
          <span v-show="currentView === 'month'"><i @click.stop="yearHandle">{{year}}</i></span>
          <span v-show="currentView === 'year'"><i @click.stop="yearHandle">{{startYear}} - {{years[years.length - 1]}}</i></span>
          <button @click.stop="nextMonth" v-show="currentView === 'date'">&gt;</button>
          <button @click.stop="nextYear">&gt;&gt;</button>
        </div>
        <div v-show="currentView === 'date'">
          <div style="width: 140px;">
            <span style="float:left;width: 20px;">日</span>
            <span style="float:left;width: 20px;">一</span>
            <span style="float:left;width: 20px;">二</span>
            <span style="float:left;width: 20px;">三</span>
            <span style="float:left;width: 20px;">四</span>
            <span style="float:left;width: 20px;">五</span>
            <span style="float:left;width: 20px;">六</span>
          </div>
          <div style="width: 140px;">
            <span class="red" :class="{'gray': day.undo}" v-for="day in lastMonthDays" style="float:left;width: 20px;" @click.stop="choicePrevMonthDay(day)">{{ day.num }}</span>
            <span :class="{'gray': day.undo, 'today': day.today, 'choice': day.choice}" v-for="day in days" style="float:left;width: 20px;" @click.stop="choiceDay(day)">{{ day.num }}</span>
            <span class="green" :class="{'gray': day.undo}" v-for="day in nextMonthDays" style="float:left;width: 20px;" @click.stop="choiceNextMonthDay(day)">{{ day.num }}</span>
          </div>
        </div>
        <div v-show="currentView === 'month'">
          <div style="width: 140px;">
            <span v-for=" month in months" style="float:left;width: 40px;" @click.stop="choiceMonth(month)">{{  month }}</span>
          </div>
        </div>
        <div v-show="currentView === 'year'">
          <div style="width: 140px;">
            <span v-for=" year in years" style="float:left;width: 40px;" @click.stop="choiceYear(year)">{{  year }}</span>
          </div>
        </div>
        <div v-if="confirm">
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
  },
  computed: {
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
        this.status = false;
        if (!noClose) {
          this.$emit('close', this.date);
        }
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
