<template>
  <div class="emfe-checkout" :class="{'emfe-checkout-inline': inline}">
    <div class="emfe-checkout-box">
      <input type="checkbox" class="emfe-checkout-box-input" v-model="state" @change="alocked" :disabled="disable">
      <span class="emfe-checkout-box-span">{{title}}</span>
    </div>
    <div class="emfe-checkout-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-checkout-slide-wrap" v-if="state">
          <div class="emfe-checkout-slide-wrap-open">
            <slot name="slide" :class="slideName"></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
const prefixCls = 'emfe-checkout';
export default {
  name: 'EmfeCheckout',
  data() {
    return {
      state: false,
    };
  },
  props: {
    slideShow: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    inline: {
      type: String,
      default: '',
    },
  },
  computed: {
    slideName() {
      return [
        {
          [`${prefixCls}-slide-${this.className}`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    alocked() {
      this.state = this.state === true;
    },
  },
};
</script>
