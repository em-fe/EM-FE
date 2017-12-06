<template>
  <div class="emfe-checkout" :class="checkoutName">
    <label class="emfe-checkout-box" :class="{'emfe-checkout-box-forever': checkedForever}">
      <i class="emfe-checkout-inner" :class="[innerName, checkedName]"></i>
      <input type="checkbox" class="emfe-checkout-status" :class="{'emfe-checkout-box-forever': checkedForever}" :checked="checkoutStatus" @click.stop="click" @change="alocked" :name="name" :disabled="disable" v-if="stop">
      <input type="checkbox" class="emfe-checkout-status" :class="{'emfe-checkout-box-forever': checkedForever}" :checked="checkoutStatus" @change="alocked" :name="name" :disabled="disable" v-else>
      <span class="emfe-checkout-text" :class="textName">{{ newtitle }}</span>
      <emfe-tooltip className="emfe-checkout" theme="light" :placement="placement" v-if="tip">
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
    placement: {
      type: String,
      default: 'bottom',
    },
    className: String,
    disable: {
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
          'emfe-checkout-inner-disable': this.disable, 'emfe-checkout-inner-checked': this.checkoutStatus,
        },
      ];
    },
    checkedName() {
      return [
        {
          'emfe-checkout-inner-checked-disabled': this.checkedForever,
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
      const checked = this.checkedForever ? false : e.target.checked;
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
