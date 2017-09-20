<template>
  <div class="emfe-tel-c" :class="telName" v-emfe-documentclick="close">
    <div class="emfe-tel-c-prefix" :class="prefixName" @click.stop="toggle">
      <span v-if="nowData.type === 1" class="emfe-tel-c-prefix-text" :class="prefixTextName">+{{ nowData.prefix }}</span>
      <span v-if="nowData.type === 2" class="emfe-tel-c-prefix-text" :class="prefixTextName">{{ nowData.text }}</span>
      <ul class="emfe-tel-c-prefix-flag" v-show="flagStatus">
        <li v-if="telDatas" class="emfe-tel-c-prefix-label" v-for="data in telDatas" @click.stop="choice(data)">
          <span class="emfe-tel-c-prefix-icon-tel">+{{ data.prefix }}</span>
        </li>
        <li v-if="idDatas" class="emfe-tel-c-prefix-label" v-for="data in idDatas" @click.stop="choice(data)">
          <span class="emfe-tel-c-prefix-icon-tel">{{ data.text }}</span>
        </li>
      </ul>
    </div>
    <input :type="type" class="emfe-tel-c-input" :class="inputName" :placeholder="placeholder" :value="nowData.tel" @input="telChange" @blur="telBlur">
  </div>
</template>
<script>
import O from '../../../tools/o';

export default {
  name: 'EmfeTelC',
  data() {
    const nowData = !this.value || O.empty(this.value) ? {
      tel: '请选择',
      name: '',
      prefix: '',
    } : this.value;
    return {
      flagStatus: false,
      nowData,
    };
  },
  props: {
    telDatas: {
      type: Array,
    },
    idDatas: {
      type: Array,
    },
    value: {
      type: Object,
      default: () => {},
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    type: {
      type: String,
      default: 'number',
    },
    className: String,
  },
  computed: {
    telName() {
      return [
        {
          [`${this.className}-tel`]: !!this.className,
        },
      ];
    },
    prefixName() {
      return [
        {
          [`${this.className}-tel-prefix`]: !!this.className,
        },
      ];
    },
    prefixTextName() {
      return [
        {
          [`${this.className}-tel-prefix-text`]: !!this.className,
        },
      ];
    },
    inputName() {
      return [
        {
          [`${this.className}-tel-input`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    toggle() {
      this.flagStatus = true;
    },
    choice(item) {
      this.nowData = item;
      this.flagStatus = false;
      this.$emit('choice', this.nowData);
      this.$emit('input', this.nowData);
    },
    telChange(ev) {
      console.log(this.nowData);
      if (this.nowData.type === 1) {
        this.nowData.tel = ev.target.value;
      } else {
        this.nowData.card = ev.target.value;
      }
      this.$emit('input', this.nowData);
    },
    close() {
      this.flagStatus = false;
    },
    telBlur() {
      this.$emit('blur');
    },
  },
  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.nowData = val;
      }
    },
  },
};
</script>
