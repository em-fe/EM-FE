<template>
  <div class="emfe-inputmore" :class="inputmoreName">
    <emfe-icon :className="className ? className : 'emfe-inputmore'" v-if="icon" :type="icon"></emfe-icon>
    <input :placeholder="newPlaceholder" :type="type"
    :value="currentValue" class="emfe-inputmore-input" :class="inputName" @input="input" @focus="focus = true" @blur="focus = false">
    <button class="emfe-inputmore-button emfe-inputmore-button-plus"
    :class="addName" @click="plus"></button>
    <button class="emfe-inputmore-button emfe-inputmore-button-reduce" :class="reduceName" @click="reduce"></button>
  </div>
</template>
<script>
export default {
  name: 'EmfeInputmore',
  data() {
    return {
      currentValue: this.value,
      focus: false,
      newPlaceholder: this.placeholder,
      group: this.$parent.isGroup, // 如果是组合
    };
  },
  props: {
    icon: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    value: {
      type: [String, Number],
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
    className: String,
  },
  computed: {
    inputmoreName() {
      return [
        {
          [`${this.className}-inputmore`]: !!this.className,
          'emfe-inputmore-foucs': this.focus,
        },
      ];
    },
    inputName() {
      return [
        {
          [`${this.className}-inputmore-input`]: !!this.className,
          'emfe-inputmore-input-icon': this.icon,
        },
      ];
    },
    addName() {
      let hasMax = false;
      if (this.group) {
        const { loops, max } = this.$parent;
        hasMax = loops.length === max;
      }
      return [
        {
          [`${this.className}-inputmore-button-plus`]: !!this.className,
          'emfe-inputmore-button-plus-disabled': !!hasMax,
        },
      ];
    },
    reduceName() {
      let hasMin = false;
      if (this.group) {
        const { loops, min } = this.$parent;
        hasMin = loops.length === min;
      }
      return [
        {
          [`${this.className}-inputmore-button-reduce`]: !!this.className,
          'emfe-inputmore-button-reduce-disabled': !!hasMin,
        },
      ];
    },
  },
  methods: {
    input(e) {
      const val = e.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    reduce() {
      if (this.group) {
        const { loops, min } = this.$parent;
        const now = loops[this.index];

        if (loops.length > min) {
          loops.splice(this.index, 1);
        }
        this.$emit('reduce', now, this.index, loops);
      } else {
        this.$emit('reduce', this.index);
      }
    },
    plus() {
      if (this.group) {
        const { loops, max, newLoops } = this.$parent;

        if (loops.length < max) {
          loops.splice(this.index + 1, 0, newLoops || {
            num: '',
          });
        }
        this.$emit('plus', loops[this.index], this.index, loops);
      } else {
        this.$emit('plus', this.index);
      }
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.currentValue = val;
      }
    },
    placeholder(val, oldVal) {
      if (val !== oldVal) {
        this.newPlaceholder = val;
      }
    },
  },
};
</script>
