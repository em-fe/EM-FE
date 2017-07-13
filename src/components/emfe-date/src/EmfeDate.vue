<template>
  <div class="emfe-date">
    <div>
      <button @click="prevYear">&lt;&lt;</button>
      <button @click="prevMonth" v-show="currentView === 'date'">&lt;</button>
      <span v-show="currentView === 'date'"><i @click="yearHandle">{{year}}</i> - <i @click="monthHandle">{{month+1}}</i></span>
      <span v-show="currentView === 'month'"><i @click="yearHandle">{{year}}</i></span>
      <span v-show="currentView === 'year'"><i @click="yearHandle">{{startYear}} - {{years[years.length - 1]}}</i></span>
      <button @click="nextMonth" v-show="currentView === 'date'">&gt;</button>
      <button @click="nextYear">&gt;&gt;</button>
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
        <span v-for="day in lastMonthDays" style="float:left;width: 20px;color:red;" @click="prevMonth">{{ day }}</span>
        <span v-for="day in days" style="float:left;width: 20px;" @click="choiceDay(day)">{{ day }}</span>
        <span v-for="day in nextMonthDays" style="float:left;width: 20px;color:green;" @click="nextMonth">{{ day }}</span>
      </div>
    </div>
    <div v-show="currentView === 'month'">
      <div style="width: 140px;">
        <span v-for=" month in months" style="float:left;width: 40px;" @click="choiceMonth(month)">{{  month }}</span>
      </div>
    </div>
    <div v-show="currentView === 'year'">
      <div style="width: 140px;">
        <span v-for=" year in years" style="float:left;width: 40px;" @click="choiceYear(year)">{{  year }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getDayCountOfMonth, initTimeDate } from '../../../tools/date';

// 日期里面只有 42 天（上月 | 本月 | 下月）
const allDays = 42;
// 年份里每页只有 10 年
const allYears = 10;

export default {
  name: 'EmfeDate',
  data() {
    return {
      currentView: 'date',
      date: initTimeDate(),
      startYear: null,
      year: null,
      month: null,
      day: null,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  computed: {
    lastMonthDays() {
      const date = new Date(this.year, this.month, 1);
      const maxDaysNum = date.getDay();
      const handleMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1;
      const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), handleMonth);
      const days = [];
      for (let i = 0; i < maxDaysNum; i++) {
        days.unshift(dateCountOfLastMonth - i);
      }
      return days;
    },
    days() {
      return getDayCountOfMonth(this.year, this.month);
    },
    nextMonthDays() {
      const nextNum = allDays - this.lastMonthDays.length - this.days;
      return nextNum;
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
  },
  mounted() {
    if (this.selectionMode === 'month') {
      this.currentView = 'month';
    }

    if (this.date && !this.year) {
      this.year = this.date.getFullYear();
      this.month = this.date.getMonth();
    }
    // console.log(this.days, this.year, this.month, 90);
  },
  methods: {
    resetDate() {
      this.date = new Date(this.date);
    },
    prevYear() {
      if (this.currentView === 'year') {
        this.year -= allYears;
      } else {
        this.year--;
        this.date.setFullYear(this.year);
        this.resetDate();
      }
    },
    nextYear() {
      if (this.currentView === 'year') {
        this.year += allYears;
      } else {
        this.year++;
        this.date.setFullYear(this.year);
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
      this.day = day;
    },
  },
};
</script>
