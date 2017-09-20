<template>
  <div class="emfe-imgcode-c" :class="imgcodeName">
    <input type="text" class="emfe-imgcode-c-input" :class="codeName" :value="nowData" :placeholder="placeholder" @input="input">
    <img :src="newSrc" alt="图片验证码" class="emfe-imgcode-c-code" @click="click">
  </div>
</template>
<script>
export default {
  name: 'emfe-imgcode-c',
  data() {
    const nowData = !this.value ? '' : this.value;
    return {
      nowData,
      newSrc: this.src,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入验证码',
    },
    value: {
      type: [Number, String],
    },
    src: {
      type: String,
      required: true,
    },
    className: String,
  },
  computed: {
    imgcodeName() {
      return [
        {
          [`${this.className}-imgcode`]: !!this.className,
        },
      ];
    },
    codeName() {
      return [
        {
          [`${this.className}-imgcode-code`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    input(ev) {
      const val = ev.target.value;
      this.$emit('change', val);
      this.$emit('input', val);
    },
    click() {
      this.$emit('click');
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
    src(val, oldVal) {
      if (val !== oldVal) {
        this.newSrc = val;
      }
    },
  },
};
</script>
