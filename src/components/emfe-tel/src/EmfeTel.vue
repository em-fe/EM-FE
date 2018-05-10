<template>
  <div class="emfe-tel" :class="[telName, {'emfe-tel-input-error': errOk}]" v-emfe-documentclick="close">
    <div class="emfe-tel-prefix" :class="[prefixName, {'emfe-tel-input-error-right': errOk, 'emfe-tel-input-disabled': disabled}]" @click.stop="toggle">
      <img class="emfe-tel-prefix-piece" :src="nowData.url" :alt="nowData.name" v-show="nowData.url">
      <span class="emfe-tel-prefix-text" :class="prefixTextName">+{{ nowData.prefix }}</span>
      <ul class="emfe-tel-prefix-flag" :class="prefixFlagName" v-show="flagStatus" >
        <li class="emfe-tel-prefix-label" v-for="data in datas" @click.stop="choice(data)">
          <img :src="data.url" :alt="data.name" class="emfe-tel-prefix-icon" v-show="data.url">
          <span class="emfe-tel-prefix-icon-piece" :class="{'emfe-tel-prefix-icon-piece-padding': !data.url}">{{ data.name }}</span>
          <span class="emfe-tel-prefix-icon-tel">+{{ data.prefix }}</span>
        </li>
      </ul>
    </div>
    <input :type="type" class="emfe-tel-input" :class="[inputName, {'emfe-tel-input-disabled': disabled}]" :placeholder="placeholder" :value="nowData.tel" :disabled="disabled" @input="telChange" @blur="telBlur" @focus="telFocus">
    <div class="emfe-tel-error" :class="addErrorText" v-if="errOk"><slot name="error"></slot></div>
  </div>
</template>
<script>
import O from '../../../tools/o';

export default {
  name: 'EmfeTel',
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
    datas: {
      type: Array,
      required: true,
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
    errOk: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    // console.log(this.disabled, 'disabled');
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
    addErrorText() {
      return [
        {
          [`${this.className}-tel-error`]: !!this.className,
        },
      ];
    },
    prefixFlagName() {
      return [
        {
          [`${this.className}-tel-prefix-flag`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.flagStatus = true;
      }
    },
    choice(item) {
      this.nowData = item;
      this.flagStatus = false;
      this.$emit('choice', this.nowData);
      this.$emit('change', this.nowData);
      this.$emit('input', this.nowData);
    },
    telChange(ev) {
      this.nowData.tel = ev.target.value;
      this.$emit('input', this.nowData);
    },
    close() {
      this.flagStatus = false;
    },
    telBlur() {
      this.$emit('blur');
    },
    telFocus() {
      this.$emit('focus');
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
