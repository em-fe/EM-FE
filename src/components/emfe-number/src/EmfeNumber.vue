<template>
  <div class="emfe-number" :class="numberName">
    <button class="emfe-number-reduce" :class="{'emfe-number-reduce-disable': reducedisable}" @click="reduce"></button>
    <div class="emfe-number-num">
      <input type="tel" class="emfe-number-val" :class="{'emfe-number-val-nounit': !unit}" :maxlength="max.length" :disabled="disabled" v-model="num" @input="input" @focus="focus">
      <i class="emfe-number-unit" v-if="unit">{{ unit }}</i>
    </div>
    <button class="emfe-number-plus" :class="{'emfe-number-plus-disable': plusdisable}" @click="plus"></button>
  </div>
</template>
<script>
export default {
  name: 'EmfeNumber',
  data() {
    return {
      num: this.value,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    step: {
      type: Number,
      default: 5,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    className: String,
  },
  computed: {
    numberName() {
      return [
        {
          [`${this.className}-number`]: !!this.className,
        },
      ];
    },
    plusdisable() {
      return this.max - this.num < this.step;
    },
    reducedisable() {
      return this.num - this.min < this.step;
    },
  },
  methods: {
    toFix() {
      const step = this.step.toString();
      const stepList = step.split('.');
      let fixNum = 0;
      if (stepList.length > 1) {
        fixNum = stepList[1].length;
      }
      return fixNum;
    },
    plus() {
      const fixNum = this.toFix();
      if (!this.plusdisable) {
        this.num = this.num - 0;
        const oldNum = this.num;
        this.num += this.step;
        this.num = this.num.toFixed(fixNum) - 0;
        this.$emit('change', this.num, oldNum);
        this.$emit('input', this.num);
      }
    },
    reduce() {
      const fixNum = this.toFix();
      if (!this.reducedisable) {
        this.num = this.num - 0;
        const oldNum = this.num;
        this.num -= this.step;
        this.num = this.num.toFixed(fixNum) - 0;
        this.$emit('change', this.num, oldNum);
        this.$emit('input', this.num);
      }
    },
    input(ev) {
      const { value } = ev.target;
      if (value > this.max) {
        this.num = this.max;
      }
      if (value < this.min) {
        this.num = this.min;
      }
      this.$emit('input', this.num - 0);
    },
    focus(ev) {
      ev.target.select();
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.num = val;
      }
    },
  },
};
</script>
