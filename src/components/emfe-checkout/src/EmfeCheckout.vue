<template>
  <div class="emfe-checkout">
    <div class="emfe-checkout-box">
      <input type="checkbox" class="emfe-checkout-box-input" v-model="state" @change="alocked">
      <slot name="text" class="emfe-checkout-box-span"></slot>
    </div>
    <div class="emfe-checkout-slide" v-if="slideShow">
      <transition name="fade">
        <slot name="slide" v-if="state"></slot>
      </transition>
    </div>
  </div>
</template>
<script>
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
  },
  methods: {
    alocked() {
      this.state = this.state === true;
    },
  },
};
</script>