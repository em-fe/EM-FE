<template>
  <div class="emfe-datetime" v-emfe-documentclick="close">
    <button class="emfe-datetime-btn" @click.stop="toggle" v-if="!disabled">
      <span class="emfe-datetime-btn-text" :class="{'emfe-datetime-btn-text-choice': choiced}">{{ dateTime }}</span>
      <!-- 日期 -->
      <emfe-icon type="shijian" className="emfe-datetime" v-show="!choiced" @icon-click="toggle"></emfe-icon>
    </button>
    <!-- 取消 -->
    <emfe-icon type="shanchu" className="emfe-datetime" v-show="choiced" @icon-click="cancel"></emfe-icon>
    <button class="emfe-datetime-btn emfe-datetime-btn-disabled" v-if="disabled">
      <span class="emfe-datetime-btn-text">{{ dateTime }}</span>
      <!-- 日期 -->
      <emfe-icon type="shijian" className="emfe-datetime" v-show="!choiced"></emfe-icon>
      <!-- 取消 disabled 的时候不显示 -->
      <!-- <emfe-icon type="shanchu" className="emfe-datetime" v-show="choiced"></emfe-icon> -->
    </button>
    <emfe-transition name="fade">
      <div class="emfe-datetime-main emfe-datetime-main-position" v-show="status" :style="panelstyle">
        <div class="emfe-datetime-type">
          <emfe-date :format="formatDate" :open="true" :confirm="false" @choice="choiceDate" v-model="date" ref="date" v-show="isDate" :disabledDate="disabledDate"></emfe-date>
          <div class="emfe-datetime-time" v-show="!isDate">
            <div class="emfe-datetime-time-header">{{ date }}</div>
            <emfe-time className="emfe-datetime" :invisibleDisable="invisibleDisable" :open="true" :confirm="false" @choice="choiceTime" v-model="time" ref="time" :exact="exact" :timeChoices="timeChoices" :disabledHours="disabledHours" :disabledMinutes="disabledMinutes" :disabledSeconds="disabledSeconds"></emfe-time>
          </div>
        </div>
        <div class="emfe-datetime-footer">
          <button class="emfe-datetime-settype" @click="typeToggle" :class="{'emfe-datetime-settype-disabled': disabledToggle}">{{ typeText }}</button>
          <button class="emfe-datetime-ok" @click.stop="ok">确定</button>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { initTimeDate } from '../../../tools/date';
import _ from '../../../tools/lodash';

const zero = '00';
const timeZero = `${zero}:${zero}:${zero}`;
const timeText = '选择时间';
const dateText = '选择日期';

export default {
  name: 'EmfeDatetime',
  data() {
    return {
      date: '',
      time: timeZero,
      choiced: false,
      isDate: true,
      typeText: timeText,
      status: false,
    };
  },
  props: {
    panelstyle: {
      type: Object,
      default: () => {},
    },
    formatDate: {
      type: String,
      default: '/',
    },
    // 默认文案
    placeholder: {
      type: String,
      default: '选择日期和时间',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    // 参数
    disabledDate: {
      type: Function,
      default: () => false,
    },
    // 禁用小时
    disabledHours: {
      type: Array,
      default: () => [],
    },
    // 可选时间
    timeChoices: {
      type: String,
      default: '00:00:00|23:59:59',
    },
    invisibleDisable: Boolean, // 设置不可选时间是否可见
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
    exact: {
      validator(value) {
        return _.has(value, ['hour', 'minute', 'second']);
      },
      default: 'second',
    },
  },
  computed: {
    dateTime() {
      let newDateTime = this.placeholder;

      if (this.date && this.date !== this.placeholder) {
        if (!this.$refs.date || this.date !== this.$refs.date.placeholder) {
          if (this.time === timeZero) {
            if (this.exact === 'hour') {
              this.time = zero;
            }
            if (this.exact === 'minute') {
              this.time = `${zero}:${zero}`;
            }
          }
          newDateTime = `${this.date} ${this.time}`;
        }
      }

      if (!this.date && this.time !== timeZero) {
        const today = initTimeDate();
        const day = today.getDate();
        this.date = `${today.getFullYear()}/${today.getMonth() + 1}/${day}`;

        this.$refs.date.choiceDay({
          num: day,
          undo: false,
        });
        newDateTime = `${this.date} ${this.time}`;
      }

      this.$emit('input', newDateTime === this.placeholder ? '' : newDateTime);

      return newDateTime;
    },
    disabledToggle() {
      return !this.date && this.time === timeZero;
    },
  },
  mounted() {
    this.initData(this.value);
  },
  methods: {
    initData(dataVal) {
      if (dataVal && dataVal !== this.placeholder) {
        const vals = dataVal.split(' ');
        this.date = dataVal ? vals[0] : '';
        this.time = dataVal ? vals[1] : timeZero;
        this.choiced = !!dataVal;
      }
    },
    choiceDate() {
      this.choiced = true;
      this.$emit('change', this.dateTime);
      this.$emit('choice-date', this.dateTime);
    },
    choiceTime() {
      this.$nextTick(() => {
        this.choiced = true;
        this.$emit('change', this.dateTime);
        this.$emit('choice-time', this.dateTime);
      });
    },
    cancel() {
      this.date = '';
      this.time = timeZero;
      this.choiced = false;
      // 让日期组件恢复初始状态
      // this.$refs.date.cancel();
      // 让日期组件恢复初始状态
      // this.$refs.time.cancel();
      this.isDate = true;
      this.$emit('cancel', '');
      this.$emit('input', '');
    },
    ok() {
      this.close(true);
      this.$emit('ok', this.dateTime === this.placeholder ? '' : this.dateTime);
      this.$emit('input', this.dateTime === this.placeholder ? '' : this.dateTime);
    },
    close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.dateTime === this.placeholder ? '' : this.dateTime);
          this.$emit('input', this.dateTime === this.placeholder ? '' : this.dateTime);
        }
        this.status = false;
      }
    },
    typeToggle() {
      if (!this.disabledToggle) {
        this.typeText = this.isDate ? dateText : timeText;
        this.isDate = !this.isDate;

        const { time } = this.$refs;
        time.refreshIscroll();
        time.scrollEle('hour');
        if (this.exact === 'minute' || this.exact === 'second') {
          time.scrollEle('minute');
        }
        if (this.exact === 'second') {
          time.scrollEle('second');
        }
      }
    },
    toggle() {
      if (!this.disabled) {
        this.status = !this.status;
      }
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.initData(val);
      }
    },
  },
};
</script>
