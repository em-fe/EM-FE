<template>
  <div class="emfe-checkout" :class="{'emfe-checkout-inline': inline}">
    <div class="emfe-checkout-box">
      <input type="checkbox" class="emfe-checkout-box-input" v-model="states" @change="alocked" :disabled="disable">
      <span class="emfe-checkout-box-span" :style="titleColor" :color="color">{{title}}</span>
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
      states: this.state,
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
    color: {
      type: String,
      default: '',
    },
    inline: {
      type: String,
      default: '',
    },
    state: {
      type: [String, Boolean],
      default: false,
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
    titleColor() {
      return this.color ? `color : ${this.color}` : '';
    },
  },
  methods: {
    alocked() {
      this.states = this.states === true;
      this.$emit('checked', this.states, this.title);
    },
  },
};
</script>
