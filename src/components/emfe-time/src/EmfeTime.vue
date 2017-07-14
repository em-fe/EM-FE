<template>
  <div class="emfe-time" v-emfe-documentclick="close">
    <button class="emfe-time-btn" @click="toggle">
      <span class="emfe-time-btn-text">{{ time }}</span>
      <!-- 日期 -->
      <emfe-icon type="hint" className="emfe-time" v-show="!choiced" @icon-click="toggle"></emfe-icon>
      <!-- 取消 -->
      <emfe-icon type="qr" className="emfe-time" v-show="choiced" @icon-click="cancel"></emfe-icon>
    </button>
    <emfe-transition name="fade">
      <div class="emfe-time-box" v-show="status">
        <div class="emfe-time-main">
          <div class="emfe-time-item">
            <ul class="emfe-time-list">
              <li class="emfe-time-list-item" v-for="hour in hours" @click.stop="choiceHour(hour)">{{ hour }}</li>
            </ul>
          </div>
          <div class="emfe-time-item">
            <ul class="emfe-time-list">
              <li class="emfe-time-list-item" v-for="minute in minutes" @click.stop="choiceMinute(minute)">{{ minute }}</li>
            </ul>
          </div>
          <div class="emfe-time-item">
            <ul class="emfe-time-list">
              <li class="emfe-time-list-item" v-for="second in seconds" @click.stop="choiceSecond(second)">{{ second }}</li>
            </ul>
          </div>
        </div>
        <div>
          <button @click="ok">确定</button>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
const hourNum = 24;
const minuteNum = 60;
const secondNum = 60;
const text = '选择时间';
const zero = '00';

export default {
  name: 'EmfeTime',
  data() {
    return {
      hours: [],
      minutes: [],
      seconds: [],
      hour: zero,
      minute: zero,
      second: zero,
      choiced: false,
      status: false,
    };
  },
  computed: {
    time() {
      let time = text;
      if (this.choiced) {
        time = `${this.hour}:${this.minute}:${this.second}`;
      }
      return time;
    },
  },
  mounted() {
    for (let i = 0; i < hourNum; i++) {
      this.hours.push(i < 10 ? `0${i}` : i);
    }
    for (let i = 0; i < minuteNum; i++) {
      this.minutes.push(i < 10 ? `0${i}` : i);
    }
    for (let i = 0; i < secondNum; i++) {
      this.seconds.push(i < 10 ? `0${i}` : i);
    }
  },
  methods: {
    setChoice() {
      if (!this.choiced) {
        this.choiced = true;
      }
    },
    choiceHour(hour) {
      this.hour = hour;
      this.setChoice();
    },
    choiceMinute(minute) {
      this.minute = minute;
      this.setChoice();
    },
    choiceSecond(second) {
      this.second = second;
      this.setChoice();
    },
    toggle() {
      this.status = !this.status;
    },
    close() {
      this.status = false;
    },
    ok() {
      this.close();
    },
    cancel() {
      this.choiced = false;
      this.hour = zero;
      this.minute = zero;
      this.second = zero;
    },
  },
};
</script>
