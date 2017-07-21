<template>
  <div class="emfe-hottip">
  <!-- <div v-bind:class="[isActive ? activeClass : '', errorClass]"> -->
    <a class="emfe-hottip-btn" href="javascript:;" @click="change">
      <i class="emfe-icon-financial icon-page-icon" :class="{'emfe-hottip-deg' : showInfo}"></i>
    </a>
    <div v-show="showInfo">
      <slot name="no1" ></slot>
    </div>
    <div v-show="!showInfo">
      <slot name="no2" ></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hottip',
  data() {
    return {
      showInfo: false,
    };
  },
  methods: {
    change() {
      this.showInfo = !this.showInfo;
      this.$emit('change', this.showInfo);
    },
  },
};
</script>
