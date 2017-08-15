<template>
  <div class="emfe-checkout" :class="checkoutName">
    <div class="emfe-checkout-box">
      <i class="emfe-checkout-inner" :class="innerName"></i>
      <input type="checkbox" class="emfe-checkout-status" :checked="status" @click.stop @change="alocked" :disabled="disable" v-if="stop">
      <input type="checkbox" class="emfe-checkout-status" :checked="status" @change="alocked" :disabled="disable" v-else>
      <span class="emfe-checkout-text" :class="textName">{{ newtitle }}</span>
    </div>
    <div class="emfe-checkout-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-checkout-slide-wrap" v-show="status" :class="openName">
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
      status: this.value,
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
  },
  computed: {
    innerName() {
      return [
        {
          'emfe-checkout-inner-disable': this.disable, 'emfe-checkout-inner-checked': this.status,
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
      this.$emit('input', this.status);
      this.$emit('checked', this.status, this.title);
    },
    setValue(checked = this.value) {
      this.status = checked;
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
