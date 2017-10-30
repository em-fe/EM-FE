<template>
  <div class="emfe-title" :class="titleName">
    <div class="emfe-title-panel">
      <slot></slot>
      <emfe-tooltip className="emfe-title" theme="light" :placement="placement" v-if="tip">
        <emfe-icon type="tishi" slot="render"></emfe-icon>
        <div slot="tip" v-html="tip"></div>
      </emfe-tooltip>
    </div>
  </div>
</template>
<script>
const prefixCls = 'title';

export default {
  name: 'EmfeTitle',
  props: {
    className: {
      type: String,
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
  },
  computed: {
    titleName() {
      return [
        {
          [`${this.className}-${prefixCls}`]: !!this.className,
        },
      ];
    },
  },
};
</script>
