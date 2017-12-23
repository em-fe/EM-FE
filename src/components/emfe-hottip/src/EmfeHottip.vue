<template>
  <div class="emfe-hottip">
    <a class="emfe-hottip-btn" href="javascript:;">
      <emfe-icon type="tishixinxizhankai" :class="{'emfe-hottip-deg' : showInfo}" @click="change"></emfe-icon>
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
