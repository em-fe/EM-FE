<template>
  <div class="emfe-checkout" :class="checkoutName">
    <div :class="{'emfe-checkout-wrap': tip}">
      <label class="emfe-checkout-box" :class="boxName">
        <i class="emfe-checkout-inner" :class="[innerName, checkedName]"></i>
        <input type="checkbox" class="emfe-checkout-status" :class="{'emfe-checkout-box-forever': checkedForever || disable || disabled, 'emfe-checkout-status-right': this.theme === 'right'}" :checked="checkoutStatus" @click.stop="click" @change="alocked" :name="name" :disabled="disable ||disabled" v-if="stop">
        <input type="checkbox" class="emfe-checkout-status" :class="{'emfe-checkout-box-forever': checkedForever || disable || disabled, 'emfe-checkout-status-right': this.theme === 'right'}" :checked="checkoutStatus" @change="alocked" :name="name" :disabled="disable ||disabled" v-else>
        <span class="emfe-checkout-text" :class="textName">{{ newtitle }}</span>
      </label>
      <emfe-tooltip className="emfe-checkout" theme="light" :placement="placement" v-if="tip">
        <emfe-icon className="emfe-checkout" type="tishi" slot="render"></emfe-icon>
        <div slot="tip" v-html="tip"></div>
      </emfe-tooltip>
    </div>
    <div class="emfe-checkout-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-checkout-slide-wrap" v-show="checkoutStatus" :class="openName">
          <slot name="slide"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';

export default {
  name: 'EmfeCheckout',
  data() {
    return {
      checkoutStatus: this.value,
      newtitle: this.title,
    };
  },
  props: {
    theme: {
      validator(value) {
        return _.has(value, ['left', 'right']);
      },
      default: 'left',
    },
    slideShow: {
      type: Boolean,
      default: false,
    },
    stop: {
      type: Boolean,
      default: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    tip: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    className: String,
    disable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: String,
    inline: String,
    change: {
      type: Function,
      default: () => {},
    },
    index: [Number, String],
    name: String,
    checkedForever: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    innerName() {
      return [
        {
          'emfe-checkout-inner-disable': this.disable || this.disabled, 'emfe-checkout-inner-checked': this.checkoutStatus, 'emfe-checkout-inner-right': this.theme === 'right',
        },
      ];
    },
    checkedName() {
      return [
        {
          'emfe-checkout-inner-checked-disabled': this.checkedForever || this.disable || this.disabled,
        },
      ];
    },
    checkoutName() {
      return [
        {
          [`${this.className}-checkout`]: !!this.className,
          'emfe-checkout-inline': this.inline,
        },
      ];
    },
    boxName() {
      return [
        {
          [`${this.className}-checkout-box`]: !!this.className,
          'emfe-checkout-box-forever': this.checkedForever || this.disable || this.disabled,
        },
      ];
    },
    openName() {
      return [
        {
          [`${this.className}-slide-wrap-open`]: !!this.className,
        },
      ];
    },
    textName() {
      return [
        {
          [`${this.className}-text`]: !!this.className,
          'emfe-checkout-text-notip': !this.tip,
          'emfe-checkout-text-right': this.theme === 'right',
        },
      ];
    },
  },
  methods: {
    alocked(e) {
      const checked = this.checkedForever ||
      this.disable ||
      this.disabled ? false : e.target.checked;
      this.setValue(checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      this.$emit('change', this.checkoutStatus, this.title, this.index);
      this.change(this.checkoutStatus, this.title, this.index);
    },
    setValue(checked = this.value) {
      this.checkoutStatus = checked;
    },
    click() {
      this.$emit('click', this.checkoutStatus);
    },
  },
  watch: {
    title(val, oldVal) {
      if (val !== oldVal) {
        this.newtitle = val;
      }
    },
    value() {
      this.setValue();
    },
  },
};
</script>
