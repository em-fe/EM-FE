<template>
  <div class="emfe-datetime" v-emfe-documentclick="close">
    <button class="emfe-datetime-btn" @click.stop="toggle" v-if="!disabled">
      <span class="emfe-datetime-btn-text" :class="{'emfe-datetime-btn-text-choice': choiced}">{{ dateTime }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" className="emfe-datetime" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" className="emfe-datetime" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <button class="emfe-datetime-btn emfe-datetime-btn-disabled" v-if="disabled">
      <span class="emfe-datetime-btn-text">{{ dateTime }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" className="emfe-datetime" v-show="!choiced"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" className="emfe-datetime" v-show="choiced"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-datetime-main emfe-datetime-main-position" v-show="status">
        <div class="emfe-datetime-type">
          <emfe-date :format="formatDate" :open="true" :confirm="false" @choice="choiceDate" v-model="date" ref="date" v-show="isDate" :disabledDate="disabledDate"></emfe-date>
          <div class="emfe-datetime-time" v-show="!isDate">
            <div class="emfe-datetime-time-header">{{ date }}</div>
            <emfe-time className="emfe-datetime" :open="true" :confirm="false" @choice="choiceTime" v-model="time" ref="time" :disabledHours="disabledHours" :disabledMinutes="disabledMinutes" :disabledSeconds="disabledSeconds"></emfe-time>
          </div>
        </div>
        <div class="emfe-datetime-footer">
          <button class="emfe-datetime-settype" @click="typeToggle">{{ typeText }}</button>
          <button class="emfe-datetime-ok" @click.stop="ok">确定</button>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { initTimeDate } from '../../../tools/date';

const zero = '00';
const timeZero = `${zero}:${zero}:${zero}`;
const timeText = '选择时间';
const dateText = '选择日期';

export default {
  name: 'EmfeDatetime',
  data() {
    const vals = this.value.split(' ');
    return {
      date: this.value ? vals[0] : '',
      time: this.value ? vals[1] : timeZero,
      choiced: false,
      isDate: true,
      typeText: timeText,
      status: false,
    };
  },
  props: {
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
    disabled: {
      type: Boolean,
      type: false,
    },
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
  },
  computed: {
    dateTime() {
      let newDateTime = this.placeholder;

      if (this.date) {
        newDateTime = `${this.date} ${this.time}`;
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
  },
  methods: {
    choiceDate() {
      this.choiced = true;
      this.$emit('choice-date', this.dateTime);
    },
    choiceTime() {
      this.choiced = true;
      this.$emit('choice-time', this.dateTime);
    },
    cancel() {
      this.date = '';
      this.time = timeZero;
      this.choiced = false;
      // 让日期组件恢复初始状态
      this.$refs.date.cancel();
      // 让日期组件恢复初始状态
      this.$refs.time.cancel();
      this.$emit('cancel', this.dateTime);
      this.$emit('input', this.dateTime);
    },
    ok() {
      this.close(true);
      this.$emit('ok', this.dateTime);
      this.$emit('input', this.dateTime);
    },
    close(e, noClose) {
      if (!this.open) {
        if (!noClose && this.status) {
          this.$emit('close', this.dateTime);
          this.$emit('input', this.dateTime);
        }
        this.status = false;
      }
    },
    typeToggle() {
      this.typeText = this.isDate ? dateText : timeText;
      this.isDate = !this.isDate;
      if (!this.date && this.time === timeZero) {
        const today = initTimeDate();
        const day = today.getDate();
        this.date = `${today.getFullYear()}/${today.getMonth() + 1}/${day}`;
      }
    },
    toggle() {
      if (!this.disabled) {
        this.status = !this.status;
      }
    },
  },
};
</script>
