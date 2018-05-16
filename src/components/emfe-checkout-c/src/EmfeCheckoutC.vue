<template>
  <div class="emfe-checkout-c" :class="checkoutName">
    <label class="emfe-checkout-c-box">
      <i class="emfe-checkout-c-inner" :class="innerName"></i>
      <input type="checkbox" class="emfe-checkout-c-status" :checked="checkoutStatus" @click.stop @change="alocked" :name="name" :disabled="disable" v-if="stop">
      <input type="checkbox" class="emfe-checkout-c-status" :checked="checkoutStatus" @change="alocked" :name="name" :disabled="disable" v-else>
      <span class="emfe-checkout-c-text" :class="textName">{{ newtitle }}</span>
    </label>
    <div class="emfe-checkout-c-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-checkout-c-slide-wrap" v-show="checkoutStatus" :class="openName">
          <slot name="slide"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeCheckoutC',
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
  },
  computed: {
    innerName() {
      return [
        {
          'emfe-checkout-c-inner-disable': this.disable, 'emfe-checkout-c-inner-checked': this.checkoutStatus,
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
        },
      ];
    },
  },
  methods: {
    alocked(e) {
      this.setValue(e.target.checked);
      this.$emit('input', this.checkoutStatus);
      this.$emit('checked', this.checkoutStatus, this.title, this.index);
      this.$emit('change', this.checkoutStatus, this.title, this.index);
      this.change(this.checkoutStatus, this.title, this.index);
    },
    setValue(checked = this.value) {
      this.checkoutStatus = checked;
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
