<template>
  <div class="emfe-hottip">
    <template v-if="open">
      <a class="emfe-hottip-btn" href="javascript:;">
        <emfe-icon type="tishixinxizhankai" :class="{'emfe-hottip-deg' : showInfo}" @click="change"></emfe-icon>
      </a>
      <div v-show="showInfo">
        <slot name="no1" ></slot>
      </div>
      <div v-show="!showInfo">
        <slot name="no2" ></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
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
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change() {
      this.showInfo = !this.showInfo;
      this.$emit('change', this.showInfo);
    },
  },
};
</script>
