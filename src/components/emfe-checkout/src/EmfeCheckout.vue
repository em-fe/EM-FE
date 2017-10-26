<template>
  <div class="emfe-checkout" :class="checkoutName">
    <label class="emfe-checkout-box">
      <i class="emfe-checkout-inner" :class="innerName"></i>
      <input type="checkbox" class="emfe-checkout-status" :checked="checkoutStatus" @click.stop="click" @change="alocked" :name="name" :disabled="disable" v-if="stop">
      <input type="checkbox" class="emfe-checkout-status" :checked="checkoutStatus" @change="alocked" :name="name" :disabled="disable" v-else>
      <span class="emfe-checkout-text" :class="textName">{{ newtitle }}</span>
      <emfe-tooltip theme="light" placement="bottom" v-if="tip">
        <emfe-icon type="tishi" slot="render"></emfe-icon>
        <div slot="tip" v-html="tip"></div>
      </emfe-tooltip>
    </label>
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
export default {
  name: 'EmfeCheckout',
  data() {
    return {
      checkoutStatus: this.value,
      newtitle: this.title,
    };
  },
  props: {
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
    className: String,
    disable: {
      type: Boolean,
      default: false,
    },
    title: String,
    inline: String,
    change: Function,
    index: [Number, String],
    name: String,
  },
  computed: {
    innerName() {
      return [
        {
          'emfe-checkout-inner-disable': this.disable, 'emfe-checkout-inner-checked': this.checkoutStatus,
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
        },
      ];
    },
  },
  methods: {
    alocked(e) {
      this.setValue(e.target.checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      if (this.change) {
        this.change(this.checkoutStatus, this.title, this.index);
      }
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
