<template>
  <div class="emfe-datapanel">
    <div class="emfe-datapanel-title">
      <span>{{title}}</span>
      <emfe-tooltip placement="right-end">
      <emfe-icon type="hint" slot="render" className="emfe-datapanel-mark"></emfe-icon>
      <div slot="tip">
        <slot name="tipText"></slot>
      </div>
    </emfe-tooltip>
    </div>
    <div class="emfe-datapanel-main">
      {{contentText}}
    </div>
  </div>
</template>
<script>
const prefixCls = 'emfe-datapanel';
export default {
  name: 'EmfeDatapanel',
  props: {
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    contentText: {
      type: String,
      default: '',
    },
  },
  computed: {
    textereaName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
        },
      ];
    },
  },
};
</script>
